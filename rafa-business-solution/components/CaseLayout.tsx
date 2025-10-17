
import Link from "next/link";
export default function CaseLayout({
  title, category, challenge, solution, deliverables, impact, tech, demoPath
}: {
  title: string; category: string;
  challenge: string[]; solution: string[];
  deliverables: string[]; impact: string[];
  tech: string[]; demoPath?: string;
}) {
  return (
    <main className="mx-auto max-w-4xl px-4 py-12">
      <Link href="/our-work" className="text-sm text-zinc-500 hover:underline">&larr; Our Work</Link>
      <h1 className="mt-3 text-3xl md:text-4xl font-semibold tracking-tight">{title}</h1>
      <p className="mt-1 text-zinc-500">{category}</p>
      <section className="mt-8 grid gap-6">
        <div className="card p-5"><h2 className="font-semibold">Challenge</h2><ul className="list-disc ml-5 mt-2 text-zinc-600 dark:text-zinc-300">{challenge.map(c => <li key={c}>{c}</li>)}</ul></div>
        <div className="card p-5"><h2 className="font-semibold">Solution Delivered</h2><ul className="list-disc ml-5 mt-2 text-zinc-600 dark:text-zinc-300">{solution.map(s => <li key={s}>{s}</li>)}</ul></div>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="card p-5"><h3 className="font-semibold">Key Deliverables</h3><ul className="list-disc ml-5 mt-2 text-zinc-600 dark:text-zinc-300">{deliverables.map(d => <li key={d}>{d}</li>)}</ul></div>
          <div className="card p-5"><h3 className="font-semibold">Impact</h3><ul className="list-disc ml-5 mt-2 text-zinc-600 dark:text-zinc-300">{impact.map(i => <li key={i}>{i}</li>)}</ul></div>
        </div>
        <div className="card p-5"><h3 className="font-semibold">Technology Stack</h3><p className="text-zinc-600 dark:text-zinc-300">{tech.join(", ")}</p></div>
        {demoPath && (<div className="card p-5"><h3 className="font-semibold mb-3">Interactive demo</h3><iframe src={demoPath} className="w-full h-[600px] rounded-xl border border-zinc-200 dark:border-white/10" /><div className="mt-3"><a href={demoPath} target="_blank" rel="noopener" className="underline">Open full-screen demo</a></div></div>)}
      </section>
    </main>
  );
}
