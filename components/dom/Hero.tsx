import { MagneticButton } from "@/components/animation/MagneticButton";

export function Hero() {
  return (
    <section className="hero" aria-label="Hero">
      <div className="hero-visual" aria-hidden="true"><span /><span /><span /></div>
      <div className="hero-overlay" />
      <div className="page-shell hero-content">
        <p className="eyebrow">Chartered Accountant · Zoho Finance Expert · Virtual CFO</p>
        <h1>Finance systems that feel clear, controlled and ready for scale.</h1>
        <p className="hero-copy">A premium finance operations partner for founders and growing businesses that need cleaner accounting, stronger compliance and decision-ready financial reporting.</p>
        <div className="hero-actions">
          <MagneticButton href="/contact">Book a consultation</MagneticButton>
          <MagneticButton href="/services" variant="secondary">Explore services</MagneticButton>
        </div>
      </div>
      <p className="scroll-cue">Scroll</p>
    </section>
  );
}
