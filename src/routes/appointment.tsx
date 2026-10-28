import { createFileRoute, Link } from "@tanstack/react-router";
import { format } from "date-fns";
import { Check, CheckCircle2 } from "lucide-react";
import { useState } from "react";
import { z } from "zod";
import { Calendar } from "@/components/ui/calendar";
import { PageHero } from "@/components/site/FadeIn";
import { PRACTICE_AREAS } from "@/lib/site";
import { saveSubmission, seo } from "@/lib/seo";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/appointment")({
  head: () => seo("Book an Appointment", "Book a legal consultation with Vidyacharan Advocates in Bangalore. Choose your consultation type, date and a 40-minute time slot."),
  component: Appointment,
});

const TYPES = [...PRACTICE_AREAS.map((p) => p.name), "Other"];

const schema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(100),
  mobile: z.string().regex(/^[6-9]\d{9}$/, "Enter a valid 10-digit mobile number"),
  email: z.string().trim().email("Enter a valid email").max(255).or(z.literal("")),
  address: z.string().max(300),
  type: z.string().min(1, "Choose a consultation type"),
  notes: z.string().max(1000),
});
type Form = z.infer<typeof schema>;

/** 40-minute slots from 9:00 AM; last slot starts before 9:00 PM. */
export function makeSlots() {
  const out: string[] = [];
  for (let m = 9 * 60; m + 40 <= 21 * 60; m += 40) {
    const h = Math.floor(m / 60), mm = m % 60;
    out.push(`${((h + 11) % 12) + 1}:${String(mm).padStart(2, "0")} ${h < 12 ? "AM" : "PM"}`);
  }
  return out;
}
const SLOTS = makeSlots();

function Appointment() {
  const [step, setStep] = useState(1);
  const [f, setF] = useState<Form>({ name: "", mobile: "", email: "", address: "", type: "", notes: "" });
  const [err, setErr] = useState<Record<string, string>>({});
  const [date, setDate] = useState<Date>();
  const [slot, setSlot] = useState<string>();
  const [confirmView, setConfirmView] = useState(false);
  const [done, setDone] = useState(false);
  const today = new Date(); today.setHours(0, 0, 0, 0);

  const set = (k: keyof Form) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => setF({ ...f, [k]: e.target.value });

  const submit1 = (e: React.FormEvent) => {
    e.preventDefault();
    const r = schema.safeParse(f);
    if (!r.success) { setErr(Object.fromEntries(r.error.issues.map((i) => [i.path[0], i.message]))); return; }
    setErr({}); setStep(2); window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const confirm = () => {
    // TODO: connect a backend here to email the lawyer, add the booking to a calendar and send reminders.
    saveSubmission("bookings", { ...f, mobile: `+91${f.mobile}`, date: date && format(date, "yyyy-MM-dd"), slot });
    setDone(true);
  };

  if (done) return (
    <section className="mx-auto max-w-lg px-4 py-24 text-center animate-in fade-in">
      <CheckCircle2 className="mx-auto h-16 w-16 text-chat" />
      <h1 className="mt-4 text-3xl">Booking received</h1>
      <p className="mt-3 text-muted-foreground">Thank you, {f.name}. Your {f.type} consultation is requested for {date && format(date, "EEEE, d MMMM yyyy")} at {slot}. Our team will call you on +91 {f.mobile} to confirm.</p>
      <Link to="/" className="btn-primary mt-8">Back to home</Link>
    </section>
  );

  const label = "mb-1 block text-sm font-medium text-navy";
  return (
    <>
      <PageHero title="Book an Appointment" subtitle="Two quick steps to schedule your consultation." />
      <section className="mx-auto max-w-3xl px-4 py-12">
        <ol className="mb-10 flex items-center justify-between" aria-label="Progress">
          {["Your details", "Date & time", "Payment"].map((s, k) => (
            <li key={s} className="flex flex-1 items-center">
              <div className="flex flex-col items-center gap-1">
                <span className={cn("flex h-10 w-10 items-center justify-center rounded-full border-2 font-semibold", step > k + 1 ? "border-primary bg-primary text-primary-foreground" : step === k + 1 ? "border-primary text-primary" : "border-border text-muted-foreground")}>
                  {step > k + 1 ? <Check className="h-5 w-5" /> : k + 1}
                </span>
                <span className="text-xs">{s}</span>
              </div>
              {k < 2 && <div className={cn("mx-2 mb-5 h-0.5 flex-1", step > k + 1 ? "bg-primary" : "bg-border")} />}
            </li>
          ))}
        </ol>

        {step === 1 && (
          <form onSubmit={submit1} className="card-soft grid gap-5 p-6 md:grid-cols-2 md:p-8" noValidate>
            <div className="md:col-span-2"><label className={label} htmlFor="name">Full name *</label><input id="name" className="field" value={f.name} onChange={set("name")} maxLength={100} />{err["name"] && <p className="mt-1 text-xs text-destructive">{err["name"]}</p>}</div>
            <div><label className={label} htmlFor="mobile">Mobile *</label>
              <div className="flex"><span className="flex items-center rounded-l-md border border-r-0 border-input bg-muted px-3 text-sm">+91</span>
                <input id="mobile" inputMode="numeric" className="field rounded-l-none" value={f.mobile} onChange={(e) => setF({ ...f, mobile: e.target.value.replace(/\D/g, "").slice(0, 10) })} /></div>
              {err["mobile"] && <p className="mt-1 text-xs text-destructive">{err["mobile"]}</p>}</div>
            <div><label className={label} htmlFor="email">Email</label><input id="email" type="email" className="field" value={f.email} onChange={set("email")} />{err["email"] && <p className="mt-1 text-xs text-destructive">{err["email"]}</p>}</div>
            <div className="md:col-span-2"><label className={label} htmlFor="address">Address</label><input id="address" className="field" value={f.address} onChange={set("address")} maxLength={300} /></div>
            <div className="md:col-span-2"><label className={label} htmlFor="type">Consultation type *</label>
              <select id="type" className="field" value={f.type} onChange={set("type")}><option value="">Select…</option>{TYPES.map((t) => <option key={t}>{t}</option>)}</select>
              {err["type"] && <p className="mt-1 text-xs text-destructive">{err["type"]}</p>}</div>
            <div className="md:col-span-2"><label className={label} htmlFor="notes">Notes</label><textarea id="notes" rows={4} className="field" value={f.notes} onChange={set("notes")} maxLength={1000} /></div>
            <button className="btn-primary md:col-span-2">Proceed to Select Date &amp; Time</button>
          </form>
        )}

        {step === 2 && !confirmView && (
          <div className="card-soft p-6 md:p-8">
            <div className="grid gap-8 md:grid-cols-[auto_1fr]">
              <div className="flex justify-center">
                <Calendar mode="single" selected={date} onSelect={(d) => { setDate(d); setSlot(undefined); }} disabled={[{ before: today }, { dayOfWeek: [0] }]} className="pointer-events-auto rounded-lg border p-3" />
              </div>
              <div>
                <h3 className="text-lg">{date ? format(date, "EEEE, d MMM") : "Pick a date first"}</h3>
                <p className="text-xs text-muted-foreground">40-minute slots · Sundays closed</p>
                <div className="mt-4 grid grid-cols-3 gap-2 sm:grid-cols-4">
                  {SLOTS.map((s) => (
                    <button key={s} disabled={!date} onClick={() => setSlot(s)}
                      className={cn("rounded-md border px-2 py-2 text-xs font-medium transition-colors disabled:opacity-40", slot === s ? "border-primary bg-primary text-primary-foreground" : "hover:border-amber hover:bg-accent")}>{s}</button>
                  ))}
                </div>
              </div>
            </div>
            <div className="mt-8 flex flex-wrap justify-between gap-3">
              <button className="btn-outline" onClick={() => setStep(1)}>Back</button>
              <button className="btn-primary" disabled={!date || !slot} onClick={() => setConfirmView(true)}>Proceed</button>
            </div>
          </div>
        )}

        {step === 2 && confirmView && (
          <div className="card-soft p-6 md:p-8 animate-in fade-in">
            <h3 className="text-2xl">Confirm your slot</h3>
            <dl className="mt-5 divide-y rounded-lg border bg-accent/50">
              {[["Consultation type", f.type], ["Date", date && format(date, "EEEE, d MMMM yyyy")], ["Time", slot]].map(([k, v]) => (
                <div key={k} className="flex justify-between px-4 py-3 text-sm"><dt className="text-muted-foreground">{k}</dt><dd className="font-semibold text-navy">{v}</dd></div>
              ))}
            </dl>
            <div className="mt-8 flex flex-wrap justify-between gap-3">
              <button className="btn-outline" onClick={() => setConfirmView(false)}>Back</button>
              <button className="btn-primary" onClick={() => setStep(3)}>Proceed to Payment</button>
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="card-soft p-6 md:p-8 animate-in fade-in">
            <h3 className="text-2xl">Payment summary</h3>
            <dl className="mt-5 divide-y rounded-lg border">
              {[["Name", f.name], ["Consultation", f.type], ["Date & time", `${date && format(date, "d MMM yyyy")}, ${slot}`], ["Consultation fee", `₹${FEE.toLocaleString("en-IN")}`]].map(([k, v]) => (
                <div key={k} className="flex justify-between gap-4 px-4 py-3 text-sm"><dt className="text-muted-foreground">{k}</dt><dd className="text-right font-semibold text-navy">{v}</dd></div>
              ))}
            </dl>
            <div className="mt-6 flex items-center gap-3 rounded-lg border-2 border-dashed border-amber bg-accent p-5 text-sm text-muted-foreground">
              <CreditCard className="h-6 w-6 shrink-0 text-amber" />Payment gateway placeholder — online payment will be connected here.
            </div>
            <div className="mt-8 flex flex-wrap justify-between gap-3">
              <button className="btn-outline" onClick={() => setStep(2)}>Back</button>
              <button className="btn-primary" onClick={confirm}>Confirm booking</button>
            </div>
          </div>
        )}
      </section>
    </>
  );
}
