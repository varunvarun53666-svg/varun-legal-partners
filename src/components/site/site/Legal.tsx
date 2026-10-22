import { PageHero } from "./FadeIn";

export type LegalSection = { h: string; p: string; items?: string[] };

export function LegalPage({ title, updated, sections }: { title: string; updated: string; sections: LegalSection[] }) {
  return (
    <>
      <PageHero title={title} />
      <article className="prose-legal mx-auto max-w-3xl px-4 py-14">
        <p className="text-sm">Last updated: {updated}</p>
        {sections.map((s, k) => (
          <section key={s.h}>
            <h2>{k + 1}. {s.h}</h2>
            <p>{s.p}</p>
            {s.items && <ul>{s.items.map((i) => <li key={i}>{i}</li>)}</ul>}
          </section>
        ))}
      </article>
    </>
  );
}
