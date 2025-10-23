// Our Work index page listing RAFA case studies

export const metadata = {
  title: "Our Work – RAFA Business Solution",
};

export default function Page() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-16">
      <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">
        Our Work
      </h1>
      <p className="mt-3 text-zinc-600 dark:text-zinc-300 max-w-2xl">
        A selection of projects across web, automation, analytics and product.
        Explore the write‑ups and try the interactive demos.
      </p>
      <div className="mt-8 grid md:grid-cols-2 gap-5">
        <a
          href="/our-work/novatech-consulting"
          className="card p-5 hover:shadow-md transition-shadow block"
        >
          <h3 className="font-semibold">
            NovaTech Consulting — Enterprise Website Transformation
          </h3>
          <p className="text-sm text-zinc-500 mt-1">
            Digital Experience & Lead Generation Platform
          </p>
          <p className="text-sm text-zinc-600 dark:text-zinc-300 mt-2">
            View project →
          </p>
        </a>
        <a
          href="/our-work/urban-realty-automation-suite"
          className="card p-5 hover:shadow-md transition-shadow block"
        >
          <h3 className="font-semibold">
            Urban Realty — Automation Suite (Sales Intelligence CRM)
          </h3>
          <p className="text-sm text-zinc-500 mt-1">
            Business Process Automation & Workflow Intelligence
          </p>
          <p className="text-sm text-zinc-600 dark:text-zinc-300 mt-2">
            View project →
          </p>
        </a>
        <a
          href="/our-work/elite-fitness-ai-dashboard"
          className="card p-5 hover:shadow-md transition-shadow block"
        >
          <h3 className="font-semibold">Elite Fitness — AI Analytics Dashboard</h3>
          <p className="text-sm text-zinc-500 mt-1">
            AI‑Driven Analytics & Business Intelligence
          </p>
          <p className="text-sm text-zinc-600 dark:text-zinc-300 mt-2">
            View project →
          </p>
        </a>
        <a
          href="/our-work/powerbi-hr-dashboard"
          className="card p-5 hover:shadow-md transition-shadow block"
        >
          <h3 className="font-semibold">Power BI — HR Workforce Intelligence</h3>
          <p className="text-sm text-zinc-500 mt-1">
            Data Analytics & Visualization Engineering
          </p>
          <p className="text-sm text-zinc-600 dark:text-zinc-300 mt-2">
            View project →
          </p>
        </a>
        <a
          href="/our-work/aurora-eats-ecosystem"
          className="card p-5 hover:shadow-md transition-shadow block"
        >
          <h3 className="font-semibold">
            Aurora Eats — Full‑Stack Cross‑Platform Ecosystem
          </h3>
          <p className="text-sm text-zinc-500 mt-1">
            Web & Mobile Application Development
          </p>
          <p className="text-sm text-zinc-600 dark:text-zinc-300 mt-2">
            View project →
          </p>
        </a>
      </div>
    </main>
  );
}