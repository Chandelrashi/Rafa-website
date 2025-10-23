// Insights & SEO posts index page
// This page lists thought leadership pieces and SEO articles.

import Link from "next/link";

export const metadata = {
  title: "Insights & SEO Posts – RAFA Business Solution",
};

const posts = [
  {
    slug: "gdpr-by-design",
    title: "GDPR by Design: What It Really Means for Your Website",
    excerpt:
      "A practical checklist for implementing privacy by design in modern stacks.",
  },
  {
    slug: "automating-ops-with-ai",
    title: "Automating Ops with AI: Quick Wins to 10x Your Team",
    excerpt:
      "Tactical automations that cut manual work and improve SLAs.",
  },
];

export default function Page() {
  return (
    <main className="mx-auto max-w-4xl px-4 py-16">
      <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">
        Insights & SEO Posts
      </h1>
      <p className="mt-3 text-zinc-600 dark:text-zinc-300 max-w-2xl">
        Short, practical articles for founders and operators.
      </p>
      <div className="mt-8 grid gap-4">
        {posts.map((p) => (
          <Link
            key={p.slug}
            href={`/insights/${p.slug}`}
            className="card p-5 hover:shadow-md transition-shadow block"
          >
            <h3 className="font-semibold">{p.title}</h3>
            <p className="text-sm text-zinc-600 dark:text-zinc-300 mt-1">
              {p.excerpt}
            </p>
          </Link>
        ))}
      </div>
    </main>
  );
}