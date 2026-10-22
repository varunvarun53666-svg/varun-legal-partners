import { Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { FadeIn, PageHero } from "./FadeIn";
import { ImageSlot } from "./ImageSlot";
import type { Post } from "@/lib/site";

export function PostGrid({ title, posts, base }: { title: string; posts: Post[]; base: "/blog" | "/news" }) {
  return (
    <>
      <PageHero title={title} />
      <section className="mx-auto grid max-w-7xl gap-6 px-4 py-16 sm:grid-cols-2 lg:grid-cols-3">
        {posts.map((p, k) => (
          <FadeIn key={p.slug} delay={k * 60}>
            <Link to={`${base}/$slug`} params={{ slug: p.slug }} className="card-soft group block h-full overflow-hidden hover:-translate-y-1">
              <ImageSlot label={`${p.title} image`} className="aspect-video" />
              <div className="p-5"><p className="text-xs font-semibold text-amber">{p.date}</p><h2 className="mt-1 text-xl group-hover:text-primary">{p.title}</h2><p className="mt-2 text-sm text-muted-foreground">{p.excerpt}</p><span className="mt-3 inline-block text-sm font-semibold text-primary">Read more →</span></div>
            </Link>
          </FadeIn>
        ))}
      </section>
    </>
  );
}

export function PostDetail({ post, base, label }: { post: Post; base: "/blog" | "/news"; label: string }) {
  return (
    <article className="mx-auto max-w-3xl px-4 py-14">
      <Link to={base} className="flex items-center gap-1 text-sm font-semibold text-primary"><ArrowLeft className="h-4 w-4" />Back to {label}</Link>
      <p className="mt-6 text-sm font-semibold text-amber">{post.date}</p>
      <h1 className="mt-2 text-3xl md:text-5xl">{post.title}</h1>
      <ImageSlot label={`${post.title} cover image`} className="mt-8 aspect-video rounded-xl" />
      <div className="prose-legal mt-8">{post.body.map((b) => <p key={b}>{b}</p>)}</div>
    </article>
  );
}
