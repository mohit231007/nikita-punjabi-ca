import { faqs } from "@/content/faqs";
import { AnimatedSection } from "@/components/animation/AnimatedSection";

export function FAQSection() {
  return (
    <AnimatedSection className="page-shell">
      <div id="faq" className="section-header"><p className="eyebrow">FAQ</p><h2>Common questions before starting.</h2></div>
      <div className="faq-grid">{faqs.map((faq) => <article className="faq-item" key={faq.question}><h3>{faq.question}</h3><p>{faq.answer}</p></article>)}</div>
    </AnimatedSection>
  );
}
