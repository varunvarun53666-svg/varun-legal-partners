import { describe, expect, it } from "vitest";
import { appointmentRequestSchema, contactSchema, trapSchema, validateCv } from "@/lib/form-schemas";

describe("Private form validation", () => {
  it("rejects filled spam traps", () => {
    expect(trapSchema.safeParse("robot").success).toBe(false);
    expect(trapSchema.safeParse("").success).toBe(true);
  });
  it("trims contact input and rejects messages over 1000 characters", () => {
    const input = { name: "  Test Visitor  ", email: " test@example.com ", phone: "9876543210", message: "  A legal enquiry  " };
    expect(contactSchema.parse(input).name).toBe("Test Visitor");
    expect(contactSchema.safeParse({ ...input, message: "x".repeat(1001) }).success).toBe(false);
  });
  it("rejects unavailable preferred starts and Sundays", () => {
    const input = { name: "Test Visitor", mobile: "9876543210", email: "", address: "", type: "Civil Law", method: "In person at our office", notes: "", trap: "", preferred_date: "2099-11-02", preferred_time: "6:00 PM" };
    expect(appointmentRequestSchema.safeParse(input).success).toBe(false);
    expect(appointmentRequestSchema.safeParse({ ...input, preferred_date: "2099-11-01", preferred_time: "10:00 AM" }).success).toBe(false);
  });
  it("allows only PDF, DOC, and DOCX CVs", () => {
    expect(validateCv({ name: "cv.exe", type: "application/octet-stream", size: 100 })).toBe("Please upload a PDF, DOC or DOCX file only");
    for (const [name, type] of [["cv.pdf", "application/pdf"], ["cv.doc", "application/msword"], ["cv.docx", "application/vnd.openxmlformats-officedocument.wordprocessingml.document"]]) {
      expect(validateCv({ name: name || "", type: type || "", size: 100 })).toBeUndefined();
    }
  });
  it("rejects CVs larger than 5 MB", () => {
    expect(validateCv({ name: "cv.pdf", type: "application/pdf", size: 5 * 1024 * 1024 + 1 })).toBe("CV must be under 5 MB");
    expect(validateCv({ name: "cv.pdf", type: "application/pdf", size: 5 * 1024 * 1024 })).toBeUndefined();
  });
});