import { createFileRoute } from "@tanstack/react-router";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { useServerFn } from "@tanstack/react-start";
import { Button } from "@/components/ui/button";
import { SpamTrap } from "@/components/site/SpamTrap";
import { contactSchema as schema, SAVE_ERROR } from "@/lib/form-schemas";
import { submitContact } from "@/lib/submissions.functions";
import { PageHero } from "@/components/site/FadeIn";
import { FIRM_NAME, EMAIL, HEAD_OFFICE, OFFICE_LANDMARK, MAP_LINK, OFFICE_HOURS, PHONE_1, PHONE_2, TEL, TEL_2 } from "@/lib/site";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/contact")({
  head: () => seo("Contact Us", `Contact ${FIRM_NAME} in Bangalore. Find our office address, hours and send us a message.`),
  component: Contact,
});

function Contact() {
  const save = useServerFn(submitContact);
  const [trap, setTrap] = useState("");
  const [saving, setSaving] = useState(false);
  const [saveError, setSaveError] = useState("");
  const empty = { name: "", email: "", phone: "", message: "" };
  const [f, setF] = useState(empty);
  const [err, setErr] = useState<Record<string, string>>({});
  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (saving) return;
    const r = schema.safeParse(f);
    if (!r.success) { setErr(Object.fromEntries(r.error.issues.map((i) => [i.path[0], i.message]))); return; }
    setSaving(true); setSaveError(""); setErr({});
    try {
      const result = await save({ data: { ...r.data, trap } });
      if (!result.ok) { setSaveError(result.error || SAVE_ERROR); return; }
      setF(empty); setTrap("");
      toast.success("Message sent. We'll get back to you soon.");
    } catch { setSaveError(SAVE_ERROR); }
    finally { setSaving(false); }
  };
  const fld = (k: keyof typeof f, label: string, type = "text") => (
    <div><label htmlFor={k} className="mb-1 block text-sm font-medium text-navy">{label} *</label>
      {k === "message" ? <textarea id={k} rows={5} className="field" value={f[k]} onChange={(e) => setF({ ...f, [k]: e.target.value })} maxLength={1000} />
        : <input maxLength={k === "name" ? 100 : k === "email" ? 255 : 10} id={k} type={type} className="field" value={f[k]} onChange={(e) => setF({ ...f, [k]: k === "phone" ? e.target.value.replace(/\D/g, "").slice(0, 10) : e.target.value })} />}
      {err[k] && <p className="mt-1 text-xs text-destructive">{err[k]}</p>}</div>
  );
  return (
    <>
      <PageHero title="Contact us" subtitle="We're here to listen. Reach out by phone, email or the form below." />
      <section className="mx-auto grid max-w-6xl gap-10 px-4 py-16 lg:grid-cols-2">
        <div className="space-y-6">
          <p className="section-title">Get in touch</p>
          <h2 className="text-3xl">Visit or call our office</h2>
          <div className="card-soft flex gap-4 p-5"><MapPin className="h-6 w-6 shrink-0 text-primary" /><div><h3 className="text-lg">Office</h3><p className="text-sm text-muted-foreground">{HEAD_OFFICE}</p><p className="mt-1 text-xs text-muted-foreground">{OFFICE_LANDMARK}</p><a href={MAP_LINK} target="_blank" rel="noreferrer" className="text-sm font-semibold text-amber hover:underline">View on Map</a></div></div>
          <div className="card-soft flex gap-4 p-5"><Clock className="h-6 w-6 shrink-0 text-primary" /><div><h3 className="text-lg">Office hours</h3><p className="text-sm text-muted-foreground">{OFFICE_HOURS}<br />Sunday: Closed</p></div></div>
          <div className="card-soft flex gap-4 p-5"><Phone className="h-6 w-6 shrink-0 text-primary" /><div className="text-sm"><a href={TEL} className="block hover:text-primary">{PHONE_1}</a><a href={TEL_2} className="block hover:text-primary">{PHONE_2}</a><a href={`mailto:${EMAIL}`} className="mt-1 flex items-center gap-1 break-all hover:text-primary"><Mail className="h-4 w-4" />{EMAIL}</a></div></div>
        </div>
        <form onSubmit={submit} noValidate className="card-soft space-y-5 p-6 md:p-8">
          <h2 className="text-2xl">Send us a message</h2>
          <SpamTrap value={trap} onChange={setTrap} />
          {fld("name", "Name")}{fld("email", "Email", "email")}{fld("phone", "Phone (10 digits)", "tel")}{fld("message", "Message")}
          {saveError && <p role="alert" className="text-sm text-destructive">{saveError}</p>}
          <Button className="btn-primary w-full" disabled={saving} aria-busy={saving}>Send Message</Button>
        </form>
      </section>
    </>
  );
}
