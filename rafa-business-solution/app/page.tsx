
'use client';
import Script from "next/script";
import { ArrowRight, CheckCircle2, Mail, PhoneCall, MapPin } from "lucide-react";

export default function Page() {
  return (
    <>
      <Script id="ld-org" type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "RAFA Business Solution",
          "url": "https://rafabusinesssolution.com",
          "logo": "https://rafabusinesssolution.com/logo.png",
          "contactPoint": [{ "@type": "ContactPoint", "contactType": "customer support", "email": "hello@rafasolutions.com", "areaServed": "GB" }]
        })}}
      />
      <Script id="ld-website" type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebSite",
          "name": "RAFA Business Solution",
          "url": "https://rafabusinesssolution.com"
        })}}
      />

      <section id="home" className="relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 py-20 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <div className="inline-flex gap-2 mb-6">
              <span className="inline-flex items-center gap-1 rounded-full border px-3 py-1 text-xs font-medium border-zinc-200 text-zinc-700 dark:text-zinc-200 dark:border-white/15">Advanced Ops & AI</span>
              <span className="inline-flex items-center gap-1 rounded-full border px-3 py-1 text-xs font-medium border-zinc-200 text-zinc-700 dark:text-zinc-200 dark:border-white/15">Enterprise Craft</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-semibold tracking-tight leading-tight">
              <span className="bg-gradient-to-r from-[#2563EB] to-[#14B8A6] bg-clip-text text-transparent">Build. Automate. Scale.</span>
            </h1>
            <p className="mt-5 text-lg text-zinc-600 dark:text-zinc-300 max-w-xl">
              We design modern systems and experiences that make companies look world-class and run even better—combining strategy, design, and AI automation.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#contact" className="inline-flex items-center gap-2 rounded-2xl px-5 py-3 text-sm font-medium text-white shadow-sm ring-1 ring-zinc-900/5 dark:ring-white/10" style={{backgroundImage:"linear-gradient(90deg,#2563EB,#14B8A6)"}}>Start a project <ArrowRight className="w-4 h-4"/></a>
              <a href="/our-work" className="btn-ghost">See Our Work</a>
            </div>
            <div className="mt-6 flex items-center gap-4 text-sm text-zinc-500 dark:text-zinc-400">
              <div className="flex items-center gap-1"><CheckCircle2 className="w-4 h-4"/>Fast, modern stack</div>
              <div className="flex items-center gap-1"><CheckCircle2 className="w-4 h-4"/>SEO & accessibility</div>
              <div className="flex items-center gap-1"><CheckCircle2 className="w-4 h-4"/>Enterprise-ready</div>
            </div>
          </div>
          <div className="card">
            <div className="aspect-[16/10] rounded-2xl grid place-items-center bg-gradient-to-br from-zinc-50 to-zinc-100 dark:from-white/5 dark:to-white/10">
              <div className="text-center px-6">
                <div className="inline-flex items-center gap-2 text-sm font-medium mb-3 text-zinc-700 dark:text-zinc-200">Demonstration</div>
                <p className="text-lg md:text-xl text-zinc-700 dark:text-zinc-200">Lightning-fast Next.js UI • Smooth micro-interactions • Clean IA</p>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-2 mt-3 text-xs text-zinc-600 dark:text-zinc-300">
              <div className="rounded-xl border p-3 border-zinc-200 dark:border-white/10">Core Web Vitals<br/><span className="font-semibold text-zinc-900 dark:text-white">A+</span></div>
              <div className="rounded-xl border p-3 border-zinc-200 dark:border-white/10">SEO Score<br/><span className="font-semibold text-zinc-900 dark:text-white">95+</span></div>
              <div className="rounded-xl border p-3 border-zinc-200 dark:border-white/10">Accessibility<br/><span className="font-semibold text-zinc-900 dark:text-white">WCAG 2.2</span></div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="mx-auto max-w-7xl px-4 py-16">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">About RAFA</h2>
            <p className="mt-5 text-zinc-600 dark:text-zinc-300">We’re a compact, senior team that ships fast. No bureaucracy—just clear strategy, tight execution and measurable impact.</p>
          </div>
          <div className="card"><div className="aspect-[4/3] rounded-2xl grid place-items-center text-center px-8 bg-gradient-to-br from-zinc-50 to-zinc-100 dark:from-white/5 dark:to-white/10"><p className="text-zinc-700 dark:text-zinc-200">“RAFA modernised our stack and customer experience—sales cycle is shorter and ops are leaner.” — <span className="font-medium">Client testimonial</span></p></div></div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-8">
        <div className="rounded-3xl border bg-white/90 backdrop-blur p-6 border-zinc-200 dark:bg-white/5 dark:border-white/10">
          <h3 className="text-2xl font-semibold">Compliance & Certifications</h3>
          <p className="mt-2 text-zinc-600 dark:text-zinc-300">We operate with data protection by design and enterprise security standards.</p>
          <ul className="mt-4 grid sm:grid-cols-2 md:grid-cols-4 gap-3 text-sm">
            <li className="rounded-xl border p-3 border-zinc-200 dark:border-white/10">ISO readiness</li>
            <li className="rounded-xl border p-3 border-zinc-200 dark:border-white/10">GDPR compliant</li>
            <li className="rounded-xl border p-3 border-zinc-200 dark:border-white/10">Microsoft Partner / Power BI</li>
            <li className="rounded-xl border p-3 border-zinc-200 dark:border-white/10">Stripe Verified Partner</li>
          </ul>
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-7xl px-4 py-16">
        <div className="rounded-3xl border bg-white/90 backdrop-blur p-6 md:p-8 border-zinc-200 dark:bg-white/5 dark:border-white/10">
          <div className="grid md:grid-cols-2 gap-8 items-start">
            <div>
              <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">Let’s build something advanced</h2>
              <p className="mt-4 text-zinc-600 dark:text-zinc-300 max-w-prose">Tell us about your goals. We’ll come back with a crisp plan.</p>
              <div className="mt-6 space-y-3 text-sm text-zinc-700 dark:text-zinc-300">
                <div className="flex items-center gap-2"><Mail className="w-4 h-4"/> hello@rafasolutions.com</div>
                <div className="flex items-center gap-2"><PhoneCall className="w-4 h-4"/> +44 (0)20 0000 0000</div>
                <div className="flex items-center gap-2"><MapPin className="w-4 h-4"/> London, United Kingdom</div>
              </div>
            </div>
            <form className="grid gap-4" onSubmit={(e)=>e.preventDefault()}>
              <div className="grid gap-2"><label className="text-sm">Name</label><input className="rounded-xl px-3 py-2 border border-zinc-200 dark:border-white/15 bg-white dark:bg-white/5"/></div>
              <div className="grid gap-2"><label className="text-sm">Email</label><input type="email" className="rounded-xl px-3 py-2 border border-zinc-200 dark:border-white/15 bg-white dark:bg-white/5"/></div>
              <div className="grid gap-2"><label className="text-sm">Project details</label><textarea rows={4} className="rounded-xl px-3 py-2 border border-zinc-200 dark:border-white/15 bg-white dark:bg-white/5"/></div>
              <button className="inline-flex items-center gap-2 rounded-2xl px-5 py-3 text-sm font-medium text-white shadow-sm ring-1 ring-zinc-900/5 dark:ring-white/10" style={{backgroundImage:"linear-gradient(90deg,#2563EB,#14B8A6)"}}>Request proposal</button>
            </form>
          </div>
        </div>
      </section>

      <section className='mx-auto max-w-7xl px-4 py-10'>
        <div className='card p-6'>
          <h2 className='text-2xl font-semibold'>Frequently Asked Questions</h2>
          <details className='mt-3'><summary className='cursor-pointer font-medium'>How long does a typical project take?</summary><p className='mt-2 text-zinc-600 dark:text-zinc-300'>Most sites launch in 2–6 weeks depending on scope.</p></details>
          <details className='mt-3'><summary className='cursor-pointer font-medium'>Do you provide SEO and analytics?</summary><p className='mt-2 text-zinc-600 dark:text-zinc-300'>Yes — technical SEO, schema, and analytics are included.</p></details>
          <details className='mt-3'><summary className='cursor-pointer font-medium'>Can you integrate with our CRM?</summary><p className='mt-2 text-zinc-600 dark:text-zinc-300'>We integrate HubSpot, Salesforce, and custom CRMs.</p></details>
        </div>
      </section>

      <Script id="ld-faq" type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context":"https://schema.org",
          "@type":"FAQPage",
          "mainEntity":[
            {"@type":"Question","name":"How long does a typical project take?","acceptedAnswer":{"@type":"Answer","text":"Most sites launch in 2–6 weeks depending on scope."}},
            {"@type":"Question","name":"Do you provide SEO and analytics?","acceptedAnswer":{"@type":"Answer","text":"Yes — technical SEO, schema, and analytics are included."}},
            {"@type":"Question","name":"Can you integrate with our CRM?","acceptedAnswer":{"@type":"Answer","text":"We integrate HubSpot, Salesforce, and custom CRMs."}}
          ]
        })}}
      />

      <footer className="border-t border-zinc-200 dark:border-white/10">
        <div className="mx-auto max-w-7xl px-4 py-8 text-sm text-zinc-600 dark:text-zinc-400 flex flex-col md:flex-row items-center justify-between gap-3">
          <div>© 2025 RAFA Business Solution</div>
          <div className="flex items-center gap-4">
            <a href="/legal/privacy-policy" className="hover:underline">Privacy</a>
            <a href="/legal/cookies-policy" className="hover:underline">Cookies</a>
            <a href="/legal/terms-of-service" className="hover:underline">Terms</a>
            <a className="hover:underline" href="https://www.linkedin.com/company/rafabusiness" target="_blank" rel="noopener">LinkedIn (coming soon)</a>
            <button onClick={() => (document.dispatchEvent(new Event("open-cookies-prefs")))} className="hover:underline">Manage cookies</button>
          </div>
        </div>
      </footer>
    </>
  );
}
