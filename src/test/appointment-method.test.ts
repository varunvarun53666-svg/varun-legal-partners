import { describe, expect, it } from "vitest";
import { appointmentSchema } from "@/routes/appointment";
import { saveSubmission } from "@/lib/seo";

const request = { name: "Test Visitor", mobile: "9876543210", email: "", address: "", type: "Civil Law", notes: "" };

describe("Consultation method", () => {
  it("requires a consultation method", () => {
    expect(appointmentSchema.safeParse({ ...request, method: "" }).success).toBe(false);
  });

  it.each(["In person at our office", "Video call (Google Meet or other)"])("accepts and saves %s", (method) => {
    const result = appointmentSchema.safeParse({ ...request, method });
    expect(result.success).toBe(true);
    if (!result.success) throw new Error("Valid method rejected");
    localStorage.clear();
    saveSubmission("bookings", result.data);
    expect(JSON.parse(localStorage.getItem("vidyacharan_bookings") || "[]")[0].method).toBe(method);
  });

  it("rejects methods outside the two offered options", () => {
    expect(appointmentSchema.safeParse({ ...request, method: "Phone" }).success).toBe(false);
  });
});