import { AnimatedSection } from "@/components/animation/AnimatedSection";

export function AboutBlock() {
  return (
    <AnimatedSection className="page-shell">
      <div id="about" className="about-card">
        <p className="eyebrow">About</p>
        <h2>Finance support built around clarity, discipline and trust.</h2>
        <p>CA Nikita Punjabi helps growing businesses improve accounting systems, reporting routines, Zoho workflows and compliance discipline.</p>
        <div className="pill-row"><span>Clean SOPs</span><span>Founder reporting</span><span>Zoho systems</span><span>Compliance rhythm</span></div>
      </div>
    </AnimatedSection>
  );
}
