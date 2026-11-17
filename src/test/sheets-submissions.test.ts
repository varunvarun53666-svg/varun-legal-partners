// @vitest-environment node
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";

const { insert, upload, remove } = vi.hoisted(() => ({ insert: vi.fn(), upload: vi.fn(), remove: vi.fn() }));
vi.mock("@tanstack/react-start", () => ({
  createServerFn: () => ({ inputValidator: () => ({ handler: (handler: unknown) => handler }) }),
}));
vi.mock("@/integrations/supabase/client.server", () => ({
  supabaseAdmin: { from: () => ({ insert }), storage: { from: () => ({ upload, remove }) } },
}));

import { submitAppointment, submitContact, submitCareer } from "@/lib/submissions.functions";

// The mocked builder exposes the real handler without the RPC transport.
type Handler = (input: { data: unknown }) => Promise<{ ok: boolean; error?: string }>;
const appointment = submitAppointment as unknown as Handler;
const contact = submitContact as unknown as Handler;
const career = submitCareer as unknown as Handler;
const common = { name: "Test Visitor", email: "test@example.com", phone: "9876543210" };
const appointmentInput = { name: common.name, mobile: common.phone, email: common.email, address: "Test office", type: "Civil Law", method: "In person at our office", preferred_date: "2099-11-02", preferred_time: "10:00 AM", notes: "Consultation enquiry", trap: "" };
function careerInput() {
  const data = new FormData();
  Object.entries({ ...common, role: "Legal Intern", trap: "" }).forEach(([key, value]) => data.set(key, value));
  data.set("cv", new File(["%PDF-1.4 test"], "cv.pdf", { type: "application/pdf" }));
  return data;
}

describe("Best-effort Sheets copies after database saving", () => {
  const fetchMock = vi.fn();
  beforeEach(() => {
    vi.clearAllMocks();
    vi.stubEnv("SHEETS_WEBHOOK_URL", "https://example.invalid/webhook");
    vi.stubEnv("SHEETS_WEBHOOK_SECRET", "test-only-credential");
    vi.stubGlobal("fetch", fetchMock);
    fetchMock.mockResolvedValue(new Response("ok"));
    insert.mockResolvedValue({ error: null });
    upload.mockResolvedValue({ error: null });
    vi.spyOn(console, "error").mockImplementation(() => {});
  });
  afterEach(() => { vi.useRealTimers(); vi.unstubAllEnvs(); vi.unstubAllGlobals(); vi.restoreAllMocks(); });

  it("posts the exact appointment payload after the insert", async () => {
    expect(await appointment({ data: appointmentInput })).toEqual({ ok: true });
    const [url, options] = fetchMock.mock.calls[0] ?? [];
    expect(url).toBe("https://example.invalid/webhook");
    expect(options).toMatchObject({ method: "POST", redirect: "follow", headers: { "Content-Type": "application/json" } });
    expect(options.signal).toBeInstanceOf(AbortSignal);
    expect(JSON.parse(options.body)).toEqual({ secret: "test-only-credential", type: "appointment", data: { ...common, phone: "+919876543210", practice_area: "Civil Law", method: appointmentInput.method, preferred_date: "2099-11-02", preferred_time: "10:00 AM", notes: "Consultation enquiry", status: "pending" } });
    expect(insert.mock.invocationCallOrder[0]).toBeLessThan(fetchMock.mock.invocationCallOrder[0] ?? 0);
  });
  it("posts the exact contact payload", async () => {
    expect(await contact({ data: { ...common, message: "A legal enquiry", trap: "" } })).toEqual({ ok: true });
    expect(JSON.parse(fetchMock.mock.calls[0]?.[1].body)).toEqual({ secret: "test-only-credential", type: "contact", data: { ...common, message: "A legal enquiry", status: "new" } });
  });
  it("posts a career path only, never the CV file", async () => {
    expect(await career({ data: careerInput() })).toEqual({ ok: true });
    expect(JSON.parse(fetchMock.mock.calls[0]?.[1].body)).toEqual({ secret: "test-only-credential", type: "career", data: { ...common, position: "Legal Intern", cv_file_path: upload.mock.calls[0]?.[0], status: "new" } });
  });
  it("keeps every submission successful on fetch failure and preserves its CV", async () => {
    fetchMock.mockRejectedValue(new Error("request failed"));
    expect(await appointment({ data: appointmentInput })).toEqual({ ok: true });
    expect(await contact({ data: { ...common, message: "A legal enquiry", trap: "" } })).toEqual({ ok: true });
    expect(await career({ data: careerInput() })).toEqual({ ok: true });
    expect(remove).not.toHaveBeenCalled();
    expect(console.error).toHaveBeenCalledTimes(3);
  });
  it("aborts at four seconds without changing submission success", async () => {
    vi.useFakeTimers();
    fetchMock.mockImplementation((_url, options) => new Promise((_resolve, reject) => {
      options.signal.addEventListener("abort", () => reject(new Error("aborted")));
    }));
    const result = contact({ data: { ...common, message: "A legal enquiry", trap: "" } });
    await vi.advanceTimersByTimeAsync(3999);
    expect(fetchMock.mock.calls[0]?.[1].signal.aborted).toBe(false);
    await vi.advanceTimersByTimeAsync(1);
    expect(await result).toEqual({ ok: true });
    expect(fetchMock.mock.calls[0]?.[1].signal.aborted).toBe(true);
  });
  it.each(["SHEETS_WEBHOOK_URL", "SHEETS_WEBHOOK_SECRET"])("silently skips when %s is missing", async (key) => {
    vi.stubEnv(key, "");
    expect(await contact({ data: { ...common, message: "A legal enquiry", trap: "" } })).toEqual({ ok: true });
    expect(fetchMock).not.toHaveBeenCalled();
    expect(console.error).not.toHaveBeenCalled();
  });
  it("never copies a failed database save", async () => {
    insert.mockResolvedValue({ error: { message: "save failed" } });
    expect((await contact({ data: { ...common, message: "A legal enquiry", trap: "" } })).ok).toBe(false);
    expect(fetchMock).not.toHaveBeenCalled();
  });
  it("keeps submission success for non-OK webhook responses", async () => {
    fetchMock.mockResolvedValue(new Response("failed", { status: 500 }));
    expect(await contact({ data: { ...common, message: "A legal enquiry", trap: "" } })).toEqual({ ok: true });
    expect(console.error).toHaveBeenCalled();
  });
});