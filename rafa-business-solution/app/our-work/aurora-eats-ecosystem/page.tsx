
import CaseLayout from "@/components/CaseLayout";
export const metadata = { title: "Aurora Eats — Full‑Stack Cross‑Platform Ecosystem" };
export default function Page(){
  return (<CaseLayout
    title="Aurora Eats — Full‑Stack Cross‑Platform Ecosystem"
    category="Web & Mobile Application Development"
    challenge=["Needed a unified web/mobile platform to boost acquisition and streamline order fulfilment."]
    solution=["Cross-platform delivery ecosystem with real-time tracking and automated notifications.", "Next.js SSR web layer; React\u2011Native\u2011style PWA for smooth offline performance."]
    deliverables=["Unified design system for consistent UX", "Firebase auth, Firestore DB, live order tracking", "Stripe payments with webhook reconciliation", "CI/CD via Vercel + GitHub Actions"]
    impact=["37% improvement in delivery time", "5\u00d7 faster onboarding of partner restaurants", "99.8% crash\u2011free sessions with real-time monitoring"]
    tech=["Next.js", "React Native (PWA)", "Firebase", "Stripe API", "Vercel CI/CD"]
    demoPath="/demos/aurora-eats-demo.html"
  />);
}
