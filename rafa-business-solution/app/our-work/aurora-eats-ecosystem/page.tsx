import CaseLayout from "@/components/CaseLayout";
export const metadata = { title: "Aurora Eats: Full-Stack Cross-Platform Ecosystem" };
export default function Page() {
  return (
    <CaseLayout
      title="Aurora Eats: Full-Stack Cross-Platform Ecosystem"
      category="Web & Mobile Application Development"
      challenge={[
        "Needed a unified web/mobile platform to boost acquisition and streamline order fulfilment."
      ]}
      solution={[
        "Cross-platform delivery ecosystem with real-time geo-tracking and personalised notifications.",
        "Next.js SSR web layer; React-Native-style PWA for smooth offline performance."
      ]}
      deliverables={[
        "Unified design system for consistent UX", 
        "Firebase auth, Firestore DB, Live order tracking", 
        "Stripe payments with webhook reconciliation", 
        "CI/CD via Vercel + GitHub Actions",
      ]}
      impact={[
        "37% improvement in delivery time",
        "5% faster onboarding of partner restaurants", 
        "99.8% crash-free sessions with real-time monitoring"
      ]}
      tech={["Next.js", "React Native (PWA)", "Firebase", "Stripe API", "GraphQL CI/CD"]}
      demoPath="/demos/aurora-eats-demo.html"
    />
  );
}
