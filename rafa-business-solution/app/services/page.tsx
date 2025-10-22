// Services page for RAFA Business Solution
// This page introduces the services & packages offered by RAFA.
// You can customize the content further to reflect your full service offerings.

import Link from "next/link";

export const metadata = {
  title: "Services & Packages – RAFA Business Solution",
};

export default function Page() {
  const sections = [
    {
      title: "Website & Portal Development",
      bullets: [
        "Next.js corporate sites & portals",
        "Design systems & accessibility",
        "Headless CMS (Sanity, Strapi)",
      ],
    },
    {
      title: "HR & Payroll Automation Systems",
      bullets: [
        "Self‑service portals",
        "Attendance, leave & payroll flows",
        "Audit trails & approvals",
      ],
    },
    {
      title: "Data Analytics & Power BI Dashboards",
      bullets: [
        "Executive KPI suites",
        "Self‑service drilldowns",
        "DAX & RLS best practices",
      ],
    },
    {
      title: "Marketing & CRM Automation",
      bullets: [
        "Lead capture & scoring",
        "Email/SMS sequences",
        "Funnel analytics & attribution",
      ],
    },
    {
      title: "IT Consulting & System Integration",
      bullets: [
        "Solution architecture",
        "API integrations",
        "Security & compliance reviews",
      ],
    },
    {
      title: "Ongoing Maintenance & Support",
      bullets: [
        "SLA‑based support",
        "Performance tuning",
        "Feature iterations",
      ],
    },
    {
      title: "Training & Documentation",
      bullets: [
        "Playbooks & SOPs",
        "Admin & user training",
        "Handover docs",
      ],
    },
  ];

  return (
    <main className="mx-auto max-w-5xl px-4 py-16">
      <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">
        Services & Packages
      </h1>
      <p className="mt-3 text-zinc-600 dark:text-zinc-300 max-w-2xl">
        Transparent deliverables with pricing available on request.
      </p>
      <div className="mt-8 grid gap-5">
        {sections.map((s) => (
          <div key={s.title} className="card p-5">
            <h2 className="font-semibold">{s.title}</h2>
            <ul className="list-disc ml-5 mt-2 text-sm text-zinc-600 dark:text-zinc-300">
              {s.bullets.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="mt-8 flex gap-3">
        <Link href="/contact" className="underline">
          Request proposal
        </Link>
        <a
          href="/docs/RAFA_Services_Packages.pdf"
          target="_blank"
          rel="noopener"
          className="underline"
        >
          View detailed PDF
        </a>
      </div>
    </main>
  );
}