import { createFileRoute, notFound } from "@tanstack/react-router";
import { PostDetail } from "@/components/site/Posts";
import { NEWS } from "@/lib/site";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/news/$slug")({
  loader: ({ params }) => { const p = NEWS.find((b) => b.slug === params.slug); if (!p) throw notFound(); return p; },
  head: ({ loaderData }) => loaderData ? seo(loaderData.title, loaderData.excerpt, "article") : { meta: [{ title: "News not found" }, { name: "robots", content: "noindex" }] },
  component: () => <PostDetail post={Route.useLoaderData()} base="/news" label="News" />,
});
