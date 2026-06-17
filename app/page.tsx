import { Hero } from "@/components/dom/Hero";
import { ServicesGrid } from "@/components/dom/ServicesGrid";
import { ProofStrip } from "@/components/dom/ProofStrip";
import { ProcessTimeline } from "@/components/dom/ProcessTimeline";
import { AboutBlock } from "@/components/dom/AboutBlock";
import { FAQSection } from "@/components/dom/FAQSection";
import { ContactSection } from "@/components/dom/ContactSection";
import { JsonLd } from "@/components/dom/JsonLd";
import { professionalServiceSchema, faqSchema } from "@/lib/seo";
import { faqs } from "@/content/faqs";

export default function HomePage() {
  return (
    <>
      <JsonLd data={professionalServiceSchema} />
      <JsonLd data={faqSchema(faqs)} />
      <Hero />
      <ProofStrip />
      <ServicesGrid />
      <ProcessTimeline />
      <AboutBlock />
      <FAQSection />
      <ContactSection />
    </>
  );
}
