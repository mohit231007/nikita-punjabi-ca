import { contact } from "@/lib/contact";

export const professionalServiceSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "CA Nikita Punjabi",
  description: "Virtual CFO, Zoho Finance, accounting and compliance services.",
  email: contact.email,
  url: "https://nikitapunjabi.com",
  areaServed: "India",
  sameAs: [contact.linkedin, contact.youtube]
};

export function faqSchema(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer }
    }))
  };
}
