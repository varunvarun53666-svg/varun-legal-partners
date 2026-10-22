export const seo = (title: string, description: string, type = "website") => ({
  meta: [
    { title: `${title} | Varun Advocates, Bangalore` },
    { name: "description", content: description },
    { property: "og:title", content: `${title} | Varun Advocates, Bangalore` },
    { property: "og:description", content: description },
    { property: "og:type", content: type },
    { name: "twitter:card", content: "summary_large_image" },
  ],
});

/** Stores form submissions locally until a database is connected. */
export function saveSubmission(kind: string, data: unknown) {
  const key = `varun_${kind}`;
  const list = JSON.parse(localStorage.getItem(key) || "[]");
  list.push({ ...(data as object), created_at: new Date().toISOString() });
  localStorage.setItem(key, JSON.stringify(list));
}
