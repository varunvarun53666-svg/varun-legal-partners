import { FIRM_NAME } from "@/lib/site";
import { createFileRoute } from "@tanstack/react-router";
import { Briefcase, MapPin } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { useServerFn } from "@tanstack/react-start";
import { Button } from "@/components/ui/button";
import { SpamTrap } from "@/components/site/SpamTrap";
import { careerSchema as schema, JOBS, SAVE_ERROR, validateCv } from "@/lib/form-schemas";
import { submitCareer } from "@/lib/submissions.functions";
import { PageHero } from "@/components/site/FadeIn";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/careers")({
  head: () => seo("Careers", `Join ${FIRM_NAME} in Bangalore. View current openings for associates, interns and support staff and apply online.`),
  component: Careers,
});

function Careers() {
  const save = useServerFn(submitCareer);
  const [trap, setTrap] = useState("");
  const [saving, setSaving] = useState(false);
  const [saveError, setSaveError] = useState("");
  const empty = { name: "", email: "", phone: "", role: "" };
  const [f, setF] = useState(empty);
  const [cv, setCv] = useState<File | null>(null);
  const [err, setErr] = useState<Record<string, string>>({});
  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (saving) return;
    const form = e.currentTarget as HTMLFormElement;
    const r = schema.safeParse(f);
    const errs: Record<string, string> = r.success ? {} : Object.fromEntries(r.error.issues.map((i) => [i.path[0], i.message]));
    const cvError = validateCv(cv);
    if (cvError) errs["cv"] = cvError;
    setErr(errs);
    if (Object.keys(errs).length) return;
    if (!r.success || !cv) return;
    setSaving(true); setSaveError("");
    const data = new FormData();
    Object.entries(r.data).forEach(([key, value]) => data.set(key, value));
    data.set("trap", trap); data.set("cv", cv);
    try {
      const result = await save({ data });
      if (!result.ok) { setSaveError(result.error || SAVE_ERROR); return; }
      setF(empty); setCv(null); setTrap(""); form.reset();
      toast.success("Application submitted. Thank you!");
    } catch { setSaveError(SAVE_ERROR); }
    finally { setSaving(false); }
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
                <button className="mt-3 text-sm font-semibold text-primary hover:underline" onClick={() => { setF({ ...f, role: t }); document.getElementById("apply")?.scrollIntoView({ behavior: "smooth" }); }}>Apply now →</button>
              </div>
            ))}
          </div>
        </div>
        <form id="apply" onSubmit={submit} noValidate className="card-soft h-fit space-y-4 p-6 md:p-8">
          <h2 className="text-2xl">Apply</h2>
          <SpamTrap value={trap} onChange={setTrap} />
          <div><label className={lbl} htmlFor="cname">Name *</label><input id="cname" maxLength={100} className="field" value={f.name} onChange={(e) => setF({ ...f, name: e.target.value })} />{err["name"] && <p className="mt-1 text-xs text-destructive">{err["name"]}</p>}</div>
          <div><label className={lbl} htmlFor="cemail">Email *</label><input id="cemail" maxLength={255} type="email" className="field" value={f.email} onChange={(e) => setF({ ...f, email: e.target.value })} />{err["email"] && <p className="mt-1 text-xs text-destructive">{err["email"]}</p>}</div>
          <div><label className={lbl} htmlFor="cphone">Phone *</label><input id="cphone" className="field" value={f.phone} onChange={(e) => setF({ ...f, phone: e.target.value.replace(/\D/g, "").slice(0, 10) })} />{err["phone"] && <p className="mt-1 text-xs text-destructive">{err["phone"]}</p>}</div>
          <div><label className={lbl} htmlFor="crole">Position *</label><select id="crole" className="field" value={f.role} onChange={(e) => setF({ ...f, role: e.target.value })}><option value="">Select…</option>{JOBS.map(([t]) => <option key={t}>{t}</option>)}</select>{err["role"] && <p className="mt-1 text-xs text-destructive">{err["role"]}</p>}</div>
          <div><label className={lbl} htmlFor="cv">Upload CV (PDF/DOC, max 5 MB) *</label><input id="cv" type="file" accept=".pdf,.doc,.docx" className="field file:mr-3 file:rounded file:border-0 file:bg-accent file:px-3 file:py-1 file:text-navy" onChange={(e) => setCv(e.target.files?.[0] ?? null)} />{err["cv"] && <p className="mt-1 text-xs text-destructive">{err["cv"]}</p>}</div>
          {saveError && <p role="alert" className="text-sm text-destructive">{saveError}</p>}
          <Button className="btn-primary w-full" disabled={saving} aria-busy={saving}>Submit application</Button>
        </form>
      </section>
    </>
  );
}
