import { createFileRoute } from "@tanstack/react-router";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { z } from "zod";
import { PageHero } from "@/components/site/FadeIn";
import { BRANCH, EMAIL, HEAD_OFFICE, PHONE_1, PHONE_2, mapLink } from "@/lib/site";
import { saveSubmission, seo } from "@/lib/seo";

export const Route = createFileRoute("/contact")({
  head: () => seo("Contact Us", "Contact Vidyacharan Advocates in Bangalore. Find our office address, hours and send us a message."),
  component: Contact,
});

const schema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(100),
  email: z.string().trim().email("Enter a valid email").max(255),
  phone: z.string().regex(/^[6-9]\d{9}$/, "Enter a valid 10-digit mobile number"),
  message: z.string().trim().min(5, "Please write a short message").max(1000),
});

function Contact() {
  const empty = { name: "", email: "", phone: "", message: "" };
  const [f, setF] = useState(empty);
  const [err, setErr] = useState<Record<string, string>>({});
  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const r = schema.safeParse(f);
    if (!r.success) { setErr(Object.fromEntries(r.error.issues.map((i) => [i.path[0], i.message]))); return; }
    saveSubmission("messages", r.data); setErr({}); setF(empty);
    toast.success("Message sent. We'll get back to you soon.");
  };
  const fld = (k: keyof typeof f, label: string, type = "text") => (
    <div><label htmlFor={k} className="mb-1 block text-sm font-medium text-navy">{label} *</label>
      {k === "message" ? <textarea id={k} rows={5} className="field" value={f[k]} onChange={(e) => setF({ ...f, [k]: e.target.value })} maxLength={1000} />
        : <input id={k} type={type} className="field" value={f[k]} onChange={(e) => setF({ ...f, [k]: k === "phone" ? e.target.value.replace(/\D/g, "").slice(0, 10) : e.target.value })} />}
      {err[k] && <p className="mt-1 text-xs text-destructive">{err[k]}</p>}</div>
  );
  return (
    <>
      <PageHero title="Contact us" subtitle="We're here to listen. Reach out by phone, email or the form below." />
      <section className="mx-auto grid max-w-6xl gap-10 px-4 py-16 lg:grid-cols-2">
        <div className="space-y-6">
          <p className="section-title">Get in touch</p>
          <h2 className="text-3xl">Visit or call our office</h2>
          {[["Head Office", HEAD_OFFICE], ["Branch", BRANCH]].map(([t, a]) => (
            <div key={t} className="card-soft flex gap-4 p-5"><MapPin className="h-6 w-6 shrink-0 text-primary" /><div><h3 className="text-lg">{t}</h3><p className="text-sm text-muted-foreground">{a}</p><a href={mapLink(a!)} target="_blank" rel="noreferrer" className="text-sm font-semibold text-amber hover:underline">View on Map</a></div></div>
          ))}
          <div className="card-soft flex gap-4 p-5"><Clock className="h-6 w-6 shrink-0 text-primary" /><div><h3 className="text-lg">Office hours</h3><p className="text-sm text-muted-foreground">Monday – Saturday: 9:00 AM – 9:00 PM<br />Sunday: Closed</p></div></div>
          <div className="card-soft flex gap-4 p-5"><Phone className="h-6 w-6 shrink-0 text-primary" /><div className="text-sm"><a href="tel:+919845000000" className="block hover:text-primary">{PHONE_1}</a><a href="tel:+918040000000" className="block hover:text-primary">{PHONE_2}</a><a href={`mailto:${EMAIL}`} className="mt-1 flex items-center gap-1 hover:text-primary"><Mail className="h-4 w-4" />{EMAIL}</a></div></div>
        </div>
        <form onSubmit={submit} noValidate className="card-soft space-y-5 p-6 md:p-8">
          <h2 className="text-2xl">Send us a message</h2>
          {fld("name", "Name")}{fld("email", "Email", "email")}{fld("phone", "Phone (10 digits)", "tel")}{fld("message", "Message")}
          <button className="btn-primary w-full">Send Message</button>
        </form>
      </section>
    </>
  );
}
