import { createFileRoute } from "@tanstack/react-router";
import { PostGrid } from "@/components/site/Posts";
import { BLOG } from "@/lib/site";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/blog/")({
  head: () => seo("Legal Blog", "Plain-language legal articles from Vidya Charan Advocates, Bangalore, on property, employment, IP, cyber law and more."),
  component: () => <PostGrid title="Blog" posts={BLOG} base="/blog" />,
});
