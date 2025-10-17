
export const metadata = { title: "Our Work — RAFA Business Solution" };
const cards=[
  { href:"/our-work/novatech-consulting", title:"NovaTech Consulting — Enterprise Website Transformation", tag:"Digital Experience & Lead Generation Platform" },
  { href:"/our-work/urban-realty-automation-suite", title:"Urban Realty — Automation Suite (Sales Intelligence CRM)", tag:"Business Process Automation & Workflow Intelligence" },
  { href:"/our-work/elite-fitness-ai-dashboard", title:"Elite Fitness — AI Analytics Dashboard", tag:"AI‑Driven Analytics & Business Intelligence" },
  { href:"/our-work/powerbi-hr-dashboard", title:"Power BI — HR Workforce Intelligence", tag:"Data Analytics & Visualization Engineering" },
  { href:"/our-work/aurora-eats-ecosystem", title:"Aurora Eats — Full‑Stack Cross‑Platform Ecosystem", tag:"Web & Mobile Application Development" }
];
export default function Page(){
  return (<main className="mx-auto max-w-7xl px-4 py-16">
    <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">Our Work</h1>
    <p className="mt-3 text-zinc-600 dark:text-zinc-300 max-w-2xl">A selection of projects across web, automation, analytics and product. Explore the write-ups and try the interactive demos.</p>
    <div className="mt-8 grid md:grid-cols-2 gap-5">
      {cards.map(c => (<a key={c.href} href={c.href} className="card p-5 hover:shadow-md transition-shadow block"><h3 className="font-semibold">{c.title}</h3><p className="text-sm text-zinc-500 mt-1">{c.tag}</p><p className="text-sm text-zinc-600 dark:text-zinc-300 mt-2">View project →</p></a>))}
    </div>
  </main>);
}
