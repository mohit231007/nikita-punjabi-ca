import Link from "next/link";
import { services } from "@/content/services";
import { AnimatedSection } from "@/components/animation/AnimatedSection";

export function ServicesGrid() {
  return (
    <AnimatedSection className="page-shell">
      <div className="section-header">
        <p className="eyebrow">Services</p>
        <h2>Financial operations translated into a premium digital operating system.</h2>
        <p>From Virtual CFO rhythm to Zoho implementation and proactive compliance, each service is designed around clarity and repeatability.</p>
      </div>
      <div className="services-grid">
        {services.map((service) => (
          <Link className="service-card" href={`/services/${service.slug}`} key={service.slug}>
            <span className="service-card__code">{service.code}</span>
            <h3>{service.title}</h3>
            <p>{service.summary}</p>
            <small>View detail</small>
          </Link>
        ))}
      </div>
    </AnimatedSection>
  );
}
