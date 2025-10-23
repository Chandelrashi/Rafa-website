import CaseLayout from "@/components/CaseLayout";
export const metadata = { title: "NovaTech Consulting: Enterprise Website Transformation
export default function Page() {
  return (
    <CaseLayout
      title="NovaTech Consulting: Enterprise Website Transformationation"
      category="Digital Experience & Lead Generation Platform"
      challenge={[
        "Legacy site lacked scalability and had poor SEO, causing high bounce rates and low qualified leads.",
      ]}
      solution={[
        "Next.js marketing platform with a componentized design system and schema-optimized SEO.",
        "AI-assisted content delivery; measurable conversion funnels with dynamic pricing modules.",
        "Automated lead capture integrated with CRM systems.",
      ]}
      deliverables={[
        "Figma design system → Tailwind components",
        "SEO architecture (OpenGraph, JSON-LD, keyword clustering)",
        "Real-time analytics for session flow & CTA engagement",
        "HubSpot + GTM event tracking",
      ]}
      impact={[
        "3.5× increase in inbound conversions in 60 days",
        "Global load time under 1.2s (Lighthouse 98+)",
        "42% lower maintenance via modular code",
      ]}
      tech={["Next.js", "TailwindCSS", "TypeScript", "HubSpot API", "Google Analytics 4"]}
      demoPath="/demos/novatech-demo.html"
    />
  );
}
