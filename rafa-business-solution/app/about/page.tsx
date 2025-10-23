// About page for RAFA Business Solution

export const metadata = {
  title: "About – RAFA Business Solution",
};

export default function Page() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-16">
      <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">About Us</h1>
      <p className="mt-3 text-zinc-600 dark:text-zinc-300">
        RAFA Business Solution empowers growth through automation. We build modern
        systems and experiences that make companies look world‑class and run even
        better—combining strategy, design, and AI automation. Our mission is to
        help you build, automate, and scale your operations with cutting‑edge
        technology.
      </p>
      <h2 className="mt-8 text-2xl font-semibold">Compliance & Certifications</h2>
      <p className="mt-2 text-zinc-600 dark:text-zinc-300">
        We operate with data protection by design and enterprise security
        standards.
      </p>
      <ul className="mt-4 grid sm:grid-cols-2 md:grid-cols-4 gap-3 text-sm">
        <li className="rounded-xl border p-3 border-zinc-200 dark:border-white/10">
          ISO readiness
        </li>
        <li className="rounded-xl border p-3 border-zinc-200 dark:border-white/10">
          GDPR compliant
        </li>
        <li className="rounded-xl border p-3 border-zinc-200 dark:border-white/10">
          Microsoft Partner / Power BI
        </li>
        <li className="rounded-xl border p-3 border-zinc-200 dark:border-white/10">
          Stripe Verified Partner
        </li>
      </ul>
    </main>
  );
}