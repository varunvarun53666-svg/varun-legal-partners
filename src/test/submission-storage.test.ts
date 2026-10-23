import { beforeEach, describe, expect, it } from "vitest";
import { saveSubmission } from "@/lib/seo";

describe("Submission storage namespace", () => {
  beforeEach(() => localStorage.clear());

  it.each(["messages", "bookings", "applications"])("saves %s under the firm's renamed key", (kind) => {
    saveSubmission(kind, { name: "Test visitor" });

    const saved = JSON.parse(localStorage.getItem(`vidyacharan_${kind}`) || "[]");
    expect(saved).toHaveLength(1);
    expect(saved[0].name).toBe("Test visitor");
    expect(localStorage.length).toBe(1);
  });
});