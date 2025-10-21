import CaseLayout from "@/components/CaseLayout";

export const metadata = { title: "Power BI — HR Workforce Intelligence" };

export default function Page() {
  return (
    <CaseLayout
      title="Power BI — HR Workforce Intelligence"
      category="Data Analytics & Visualization Engineering"
      challenge={[
        "Leaders needed accurate, self-updating HR KPI reporting across multiple systems.",
      ]}
      solution={[
        "Power BI–inspired analytics with custom JS canvas and Power BI-ready models for embedding.",
        "Centralized HRMS, payroll & attendance data with dynamic visualizations and drill-through.",
      ]}
      deliverables={[
        "Custom KPI cards, gauges, stacked bars, donut charts",
        "DAX for YoY/MoM comparisons",
        "Slicers for region, department, time",
        "Secure embedded BI with RLS and auto-refresh",
      ]}
      impact={[
        "Reporting time reduced from 3 hours to 15 minutes",
        "Real-time visibility into dependency & headcount variance",
        "95% data accuracy via API sync",
      ]}
      tech={["Power BI", "DAX", "SQL Server", "JavaScript Canvas API", "Microsoft Fabric"]}
      demoPath="/demos/powerbi-dashboard-demo.html"
    />
  );
}