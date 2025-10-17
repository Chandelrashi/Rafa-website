
import CaseLayout from "@/components/CaseLayout";
export const metadata = { title: "Elite Fitness — AI Analytics Dashboard" };
export default function Page(){
  return (<CaseLayout
    title="Elite Fitness — AI Analytics Dashboard"
    category="AI‑Driven Analytics & Business Intelligence"
    challenge=["Needed unified visualization of revenue, retention, churn and engagement without static spreadsheets."]
    solution=["Real-time AI analytics dashboard consolidating financial, operational and member data.", "Canvas rendering + lightweight AI insights that summarize trends for management."]
    deliverables=["Interactive KPI dashboard with light/dark modes", "AI insight generation with trend detection", "Class/utilization analysis via predictive modeling", "High-frequency refresh with offline caching"]
    impact=["85% faster reporting", "Improved retention via AI churn prediction", "Single executive view for better decisions"]
    tech=["Custom JS Canvas", "Python AI models", "REST APIs", "LocalStorage"]
    demoPath="/demos/ai-dashboard-demo.html"
  />);
}
