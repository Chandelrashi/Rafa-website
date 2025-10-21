import CaseLayout from "@/components/CaseLayout";
export const metadata = { title: "Urban Realty — Automation Suite (Sales Intelligence CRM)" };
export default function Page() {
  return (
    <CaseLayout
      title="Urban Realty — Automation Suite (Sales Intelligence CRM)"
      category="Business Process Automation & Workflow Intelligence"
      challenge={[
        "Manual lead tracking caused data loss, delayed responses, and inefficient follow-ups.",
      ]}
      solution={[
        "Unified CRM dashboard for sales, operations and automation layers.",
        "Event-driven micro-automations (Zapier + Firebase) with Kanban pipeline.",
      ]}
      deliverables={[
        "Real-time stage automation & lead enrichment via APIs",
        "Task orchestration with SLA tracking & escalations",
        "Notifications via Microsoft Teams & Gmail",
        "Embedded analytics for performance & forecasting",
      ]}
      impact={[
        "60% reduction in admin overhead",
        "2.4× faster average response time",
        "100% lead visibility through unified tracking",
      ]}
      tech={["React", "Firebase", "Zapier", "REST APIs", "WebSockets", "Node.js"]}
      demoPath="/demos/automation-suite-demo.html"
    />
  );
}