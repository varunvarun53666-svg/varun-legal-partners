import { z } from "zod";
import { CONSULTATION_METHODS, PRACTICE_AREAS } from "@/lib/site";

export const SAVE_ERROR = "Sorry, something went wrong. Please call us on +91 86182 79621 or try again.";
export const JOBS = [
  ["Associate Advocate – Civil Litigation", "2–4 years", "Full-time"],
  ["Associate – Property & Real Estate", "1–3 years", "Full-time"],
  ["Legal Intern", "Law students (3rd year+)", "Internship"],
  ["Legal Assistant / Clerk", "1+ year", "Full-time"],
] as const;
export const CONSULTATION_TYPES = [...PRACTICE_AREAS.map((p) => p.name), "Other"];
const name = z.string().trim().min(2, "Please enter your name").max(100);
const email = z.string().trim().email("Enter a valid email").max(255);
const phone = z.string().trim().regex(/^[6-9]\d{9}$/, "Enter a valid 10-digit mobile number");
export const trapSchema = z.string().max(0);
export const appointmentSchema = z.object({
  name, mobile: phone, email: email.or(z.literal("")), address: z.string().trim().max(300),
  type: z.string().trim().min(1, "Choose a consultation type").max(100).refine((v) => CONSULTATION_TYPES.includes(v), "Choose a consultation type"),
  method: z.enum([...CONSULTATION_METHODS], { message: "Choose a consultation method" }),
  notes: z.string().trim().max(1000),
});
export function makeSlots() {
  const out: string[] = [];
  for (let m = 10 * 60; m + 40 <= 18 * 60; m += 40) {
    const h = Math.floor(m / 60), mm = m % 60;
    out.push(`${((h + 11) % 12) + 1}:${String(mm).padStart(2, "0")} ${h < 12 ? "AM" : "PM"}`);
  }
  return out;
}
export const appointmentRequestSchema = appointmentSchema.extend({
  trap: trapSchema,
  preferred_date: z.string().regex(/^\d{4}-\d{2}-\d{2}$/).refine((value) => {
    const d = new Date(`${value}T00:00:00Z`);
    const today = new Intl.DateTimeFormat("en-CA", { timeZone: "Asia/Kolkata", year: "numeric", month: "2-digit", day: "2-digit" }).format(new Date());
    return !Number.isNaN(d.getTime()) && d.toISOString().slice(0, 10) === value && d.getUTCDay() !== 0 && value >= today;
  }, "Choose a current or future date, Monday to Saturday"),
  preferred_time: z.string().refine((v) => makeSlots().includes(v), "Choose a preferred start time"),
});
export const contactSchema = z.object({ name, email, phone, message: z.string().trim().min(5, "Please write a short message").max(1000) });
export const careerSchema = z.object({
  name: name.min(2, "Enter your name"), email, phone,
  role: z.string().trim().min(1, "Choose a position").max(100).refine((v) => JOBS.some(([title]) => title === v), "Choose a position"),
});
export const CV_MAX_BYTES = 5 * 1024 * 1024;
export function validateCv(file: { name: string; size: number; type: string } | null): string | undefined {
  if (!file || file.size === 0) return "Please attach your CV";
  if (file.size > CV_MAX_BYTES) return "CV must be under 5 MB";
  const ext = file.name.split(".").pop()?.toLowerCase();
  const types: Record<string, string[]> = {
    pdf: ["application/pdf"], doc: ["application/msword"],
    docx: ["application/vnd.openxmlformats-officedocument.wordprocessingml.document"],
  };
  if (!ext || !types[ext] || (file.type && !types[ext]?.includes(file.type))) return "Please upload a PDF, DOC or DOCX file only";
}