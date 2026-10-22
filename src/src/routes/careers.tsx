import { createFileRoute } from "@tanstack/react-router";
import { Briefcase, MapPin } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { z } from "zod";
import { PageHero } from "@/components/site/FadeIn";
import { saveSubmission, seo } from "@/lib/seo";

export const Route = createFileRoute("/careers")({
  head: () => seo("Careers", "Join Vidya Charan Advocates in Bangalore. View current openings for associates, interns and support staff and apply online."),
  component: Careers,
});

const JOBS = [
  ["Associate Advocate – Civil Litigation", "2–4 years", "Full-time"],
  ["Associate – Property & Real Estate", "1–3 years", "Full-time"],
  ["Legal Intern", "Law students (3rd year+)", "Internship"],
  ["Legal Assistant / Clerk", "1+ year", "Full-time"],
];

const schema = z.object({
  name: z.string().trim().min(2, "Enter your name").max(100),
  email: z.string().trim().email("Enter a valid email").max(255),
  phone: z.string().regex(/^[6-9]\d{9}$/, "Enter a valid 10-digit mobile number"),
  role: z.string().min(1, "Choose a position"),
});

function Careers() {
  const empty = { name: "", email: "", phone: "", role: "" };
  const [f, setF] = useState(empty);
  const [cv, setCv] = useState<File | null>(null);
  const [err, setErr] = useState<Record<string, string>>({});
  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const r = schema.safeParse(f);
    const errs: Record<string, string> = r.success ? {} : Object.fromEntries(r.error.issues.map((i) => [i.path[0], i.message]));
    if (!cv) errs["cv"] = "Please attach your CV";
    else if (cv.size > 5 * 1024 * 1024) errs["cv"] = "CV must be under 5 MB";
    setErr(errs);
    if (Object.keys(errs).length) return;
    saveSubmission("applications", { ...f, cv: cv!.name });
    setF(empty); setCv(null); (e.target as HTMLFormElement).reset();
    toast.success("Application submitted. Thank you!");
  };
  const lbl = "mb-1 block text-sm font-medium text-navy";
  return (
    <>
      <PageHero title="Careers" subtitle="Grow your legal career with a team that values learning." />
      <section className="mx-auto grid max-w-6xl gap-10 px-4 py-16 lg:grid-cols-2">
        <div>
          <p className="section-title">Openings</p><h2 className="mt-2 text-3xl">Current positions</h2>
          <div className="mt-6 space-y-4">
            {JOBS.map(([t, exp, type]) => (
              <div key={t} className="card-soft p-5 hover:-translate-y-0.5">
                <h3 className="text-lg">{t}</h3>
                <div className="mt-2 flex flex-wrap gap-4 text-sm text-muted-foreground"><span className="flex items-center gap-1"><Briefcase className="h-4 w-4 text-amber" />{exp}</span><span className="flex items-center gap-1"><MapPin className="h-4 w-4 text-amber" />Bengaluru · {type}</span></div>
                <button className="mt-3 text-sm font-semibold text-primary hover:underline" onClick={() => { setF({ ...f, role: t! }); document.getElementById("apply")?.scrollIntoView({ behavior: "smooth" }); }}>Apply now →</button>
              </div>
            ))}
          </div>
        </div>
        <form id="apply" onSubmit={submit} noValidate className="card-soft h-fit space-y-4 p-6 md:p-8">
          <h2 className="text-2xl">Apply</h2>
          <div><label className={lbl} htmlFor="cname">Name *</label><input id="cname" className="field" value={f.name} onChange={(e) => setF({ ...f, name: e.target.value })} />{err["name"] && <p className="mt-1 text-xs text-destructive">{err["name"]}</p>}</div>
          <div><label className={lbl} htmlFor="cemail">Email *</label><input id="cemail" type="email" className="field" value={f.email} onChange={(e) => setF({ ...f, email: e.target.value })} />{err["email"] && <p className="mt-1 text-xs text-destructive">{err["email"]}</p>}</div>
          <div><label className={lbl} htmlFor="cphone">Phone *</label><input id="cphone" className="field" value={f.phone} onChange={(e) => setF({ ...f, phone: e.target.value.replace(/\D/g, "").slice(0, 10) })} />{err["phone"] && <p className="mt-1 text-xs text-destructive">{err["phone"]}</p>}</div>
          <div><label className={lbl} htmlFor="crole">Position *</label><select id="crole" className="field" value={f.role} onChange={(e) => setF({ ...f, role: e.target.value })}><option value="">Select…</option>{JOBS.map(([t]) => <option key={t!}>{t}</option>)}</select>{err["role"] && <p className="mt-1 text-xs text-destructive">{err["role"]}</p>}</div>
          <div><label className={lbl} htmlFor="cv">Upload CV (PDF/DOC, max 5 MB) *</label><input id="cv" type="file" accept=".pdf,.doc,.docx" className="field file:mr-3 file:rounded file:border-0 file:bg-accent file:px-3 file:py-1 file:text-navy" onChange={(e) => setCv(e.target.files?.[0] ?? null)} />{err["cv"] && <p className="mt-1 text-xs text-destructive">{err["cv"]}</p>}</div>
          <button className="btn-primary w-full">Submit application</button>
        </form>
      </section>
    </>
  );
}
