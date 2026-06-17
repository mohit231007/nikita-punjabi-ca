import type { Metadata } from "next";
import Link from "next/link";
import { services } from "@/content/services";
import { AnimatedSection } from "@/components/animation/AnimatedSection";

export const metadata: Metadata = {
  title: "Services",
  description: "Explore Virtual CFO, Zoho implementation, accounting, migration and compliance services."
};

export default function ServicesPage() {
  return (
    <div className="page-shell page-shell--inner">
      <AnimatedSection className="section-header">
        <p className="eyebrow">Services</p>
        <h1>Finance operations designed for clarity, control and scale.</h1>
        <p>Every service is structured to help founders and teams make better financial decisions with cleaner systems and stronger compliance discipline.</p>
      </AnimatedSection>
      <section className="service-list" aria-label="All services">
        {services.map((service) => (
          <article className="service-row" key={service.slug}>
            <span className="service-index">{service.code}</span>
            <div>
              <h2>{service.title}</h2>
              <p>{service.summary}</p>
            </div>
            <Link className="text-link" href={`/services/${service.slug}`}>View detail</Link>
          </article>
        ))}
      </section>
    </div>
  );
}
