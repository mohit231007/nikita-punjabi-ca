import { AnimatedSection } from "@/components/animation/AnimatedSection";

const steps = [
  ["01", "Diagnose", "Map current accounting, compliance and reporting gaps."],
  ["02", "Design", "Create clean workflows, controls and reporting structures."],
  ["03", "Implement", "Set up systems, SOPs, migration and review rituals."],
  ["04", "Operate", "Run reporting, compliance and improvement cadence."]
];

export function ProcessTimeline() {
  return (
    <AnimatedSection className="page-shell process-section">
      <div className="section-header"><p className="eyebrow">Method</p><h2>A calm, controlled operating rhythm.</h2></div>
      <div className="timeline">{steps.map(([n, title, text]) => <article className="timeline-item" key={n}><span>{n}</span><h3>{title}</h3><p>{text}</p></article>)}</div>
    </AnimatedSection>
  );
}
