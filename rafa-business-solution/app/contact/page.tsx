"use client";
// Contact page for RAFA Business Solution

export default function Page() {
  return (
    <main className="mx-auto max-w-4xl px-4 py-16">
      <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">Contact Us</h1>
      <p className="mt-3 text-zinc-600 dark:text-zinc-300 max-w-2xl">
        Have a project in mind or want to discuss how we can help you automate and
        scale? Get in touch using the form below.
      </p>
      <form
        className="grid gap-4 mt-8"
        onSubmit={(e) => e.preventDefault()}
      >
        <div className="grid gap-2">
          <label className="text-sm">Name</label>
          <input
            name="name"
            className="rounded-xl px-3 py-2 border border-zinc-200 dark:border-white/15 bg-white dark:bg-white/5"
            placeholder="Your full name"
            required
          />
        </div>
        <div className="grid gap-2">
          <label className="text-sm">Email</label>
          <input
            type="email"
            name="email"
            className="rounded-xl px-3 py-2 border border-zinc-200 dark:border-white/15 bg-white dark:bg-white/5"
            placeholder="name@company.com"
            required
          />
        </div>
        <div className="grid gap-2">
          <label className="text-sm">Project details</label>
          <textarea
            name="message"
            rows={4}
            className="rounded-xl px-3 py-2 border border-zinc-200 dark:border-white/15 bg-white dark:bg-white/5"
            placeholder="What are you trying to build or improve?"
            required
          />
        </div>
        <button
          type="submit"
          className="inline-flex items-center gap-2 rounded-2xl px-5 py-3 text-sm font-medium text-white shadow-sm ring-1 ring-zinc-900/5 dark:ring-white/10"
          style={{ backgroundImage: "linear-gradient(90deg,#2563EB,#14B8A6)" }}
        >
          Send message
        </button>
      </form>
    </main>
  );
}