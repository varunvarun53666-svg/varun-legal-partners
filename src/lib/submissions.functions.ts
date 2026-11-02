import { createServerFn } from "@tanstack/react-start";
import { appointmentRequestSchema, contactSchema, careerSchema, SAVE_ERROR, trapSchema, validateCv } from "@/lib/form-schemas";

export const submitAppointment = createServerFn({ method: "POST" })
  .inputValidator((input: unknown) => input)
  .handler(async ({ data }) => {
    const parsed = appointmentRequestSchema.safeParse(data);
    if (!parsed.success) return { ok: false, error: SAVE_ERROR };
    const { name, mobile, email, address, type, method, preferred_date, preferred_time, notes } = parsed.data;
    try {
      const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
      const { error } = await supabaseAdmin.from("appointment_requests").insert({ name, mobile: `+91${mobile}`, email: email || null, address: address || null, consultation_type: type, consultation_method: method, preferred_date, preferred_time, notes: notes || null });
      if (error) return { ok: false, error: SAVE_ERROR };
      return { ok: true };
    } catch { return { ok: false, error: SAVE_ERROR }; }
  });

export const submitContact = createServerFn({ method: "POST" })
  .inputValidator((input: unknown) => input)
  .handler(async ({ data }) => {
    const parsed = contactSchema.extend({ trap: trapSchema }).safeParse(data);
    if (!parsed.success) return { ok: false, error: SAVE_ERROR };
    const { trap: _trap, ...record } = parsed.data;
    try {
      const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
      const { error } = await supabaseAdmin.from("contact_messages").insert(record);
      if (error) return { ok: false, error: SAVE_ERROR };
      return { ok: true };
    } catch { return { ok: false, error: SAVE_ERROR }; }
  });

export const submitCareer = createServerFn({ method: "POST" })
  .inputValidator((input: unknown) => input)
  .handler(async ({ data }) => {
    if (!(data instanceof FormData)) return { ok: false, error: SAVE_ERROR };
    const parsed = careerSchema.extend({ trap: trapSchema }).safeParse(Object.fromEntries(data.entries()));
    if (!parsed.success) return { ok: false, error: SAVE_ERROR };
    const cv = data.get("cv");
    if (!(cv instanceof File)) return { ok: false, error: "Please attach your CV" };
    const cvError = validateCv(cv);
    if (cvError) return { ok: false, error: cvError };
    try {
      const bytes = new Uint8Array(await cv.arrayBuffer());
      const ext = cv.name.split(".").pop()?.toLowerCase();
      const isPdf = new TextDecoder().decode(bytes.slice(0, 5)) === "%PDF-";
      const isDoc = [0xd0, 0xcf, 0x11, 0xe0, 0xa1, 0xb1, 0x1a, 0xe1].every((value, i) => bytes[i] === value);
      const isDocx = bytes[0] === 0x50 && bytes[1] === 0x4b && bytes[2] === 3 && bytes[3] === 4 && new TextDecoder().decode(bytes).includes("word/document.xml");
      if (!(ext === "pdf" && isPdf || ext === "doc" && isDoc || ext === "docx" && isDocx)) return { ok: false, error: "Please upload a valid PDF, DOC or DOCX file" };
      const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
      const path = `${crypto.randomUUID()}/cv.${ext}`;
      const contentType = ext === "pdf" ? "application/pdf" : ext === "doc" ? "application/msword" : "application/vnd.openxmlformats-officedocument.wordprocessingml.document";
      const { error: uploadError } = await supabaseAdmin.storage.from("career-cvs").upload(path, bytes, { contentType, upsert: false });
      if (uploadError) return { ok: false, error: SAVE_ERROR };
      const { name, email, phone, role } = parsed.data;
      try {
        const { error } = await supabaseAdmin.from("career_applications").insert({ name, email, phone, position: role, message: "", cv_file_path: path });
        if (!error) return { ok: true };
      } catch { /* Remove the orphaned private file when the record cannot be saved. */ }
      await supabaseAdmin.storage.from("career-cvs").remove([path]);
      return { ok: false, error: SAVE_ERROR };
    } catch { return { ok: false, error: SAVE_ERROR }; }
  });