import { createFileRoute } from "@tanstack/react-router";
import { PostGrid } from "@/components/site/Posts";
import { FIRM_NAME, BLOG } from "@/lib/site";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/blog/")({
  head: () => seo("Legal Blog", `Plain-language legal articles from ${FIRM_NAME}, on property, employment, IP, cyber law and more.`),
  component: () => <PostGrid title="Blog" posts={BLOG} base="/blog" />,
});
