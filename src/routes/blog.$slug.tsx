import { createFileRoute, notFound } from "@tanstack/react-router";
import { PostDetail } from "@/components/site/Posts";
import { BLOG } from "@/lib/site";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/blog/$slug")({
  loader: ({ params }) => { const p = BLOG.find((b) => b.slug === params.slug); if (!p) throw notFound(); return p; },
  head: ({ loaderData }) => loaderData ? seo(loaderData.title, loaderData.excerpt, "article") : { meta: [{ title: "Article not found" }, { name: "robots", content: "noindex" }] },
  component: () => <PostDetail post={Route.useLoaderData()} base="/blog" label="Blog" />,
});
