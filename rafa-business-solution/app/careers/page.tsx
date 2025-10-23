// Careers page indicating no open positions

export const metadata = {
  title: "Careers – RAFA Business Solution",
};

export default function Page() {
  return (
    <main className="mx-auto max-w-4xl px-4 py-16">
      <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">Careers</h1>
      <p className="mt-3 text-zinc-600 dark:text-zinc-300">
        Currently no open positions — please check back soon.
      </p>
      <div className="mt-6 card p-5">
        <h2 className="font-semibold">Introduce yourself</h2>
        <p className="text-sm text-zinc-600 dark:text-zinc-300 mt-2">
          Email your CV and a short note to
          <a
            className="underline"
            href="mailto:hello@rafasolutions.com"
          >
            hello@rafasolutions.com
          </a>
          .
        </p>
      </div>
    </main>
  );
}