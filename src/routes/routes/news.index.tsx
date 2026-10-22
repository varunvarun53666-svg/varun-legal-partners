import { createFileRoute } from "@tanstack/react-router";
import { PostGrid } from "@/components/site/Posts";
import { NEWS } from "@/lib/site";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/news/")({
  head: () => seo("News", "Latest news and updates from Vidya Charan Advocates & Legal Consultants, Bangalore."),
  component: () => <PostGrid title="News" posts={NEWS} base="/news" />,
});
