import { FIRM_NAME } from "@/lib/site";
export const seo = (title: string, description: string, type = "website") => ({
  meta: [
    { title: `${title} | ${FIRM_NAME}` },
    { name: "description", content: description },
    { property: "og:title", content: `${title} | ${FIRM_NAME}` },
    { property: "og:description", content: description },
    { property: "og:type", content: type },
    { name: "twitter:card", content: "summary_large_image" },
  ],
});

