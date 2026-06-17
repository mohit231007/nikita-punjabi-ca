import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { services } from "@/content/services";
import { AnimatedSection } from "@/components/animation/AnimatedSection";

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);
  return service ? { title: service.title, description: service.summary } : { title: "Service not found" };
}

export default async function ServiceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);
  if (!service) notFound();

  return (
    <div className="page-shell page-shell--inner">
      <AnimatedSection className="section-header service-hero-detail">
        <Link className="text-link" href="/services">Back to all services</Link>
        <p className="eyebrow">{service.code}</p>
        <h1>{service.title}</h1>
        <p>{service.summary}</p>
      </AnimatedSection>
      <AnimatedSection className="detail-grid">
        <article className="glass-panel detail-panel">
          <h2>What this includes</h2>
          <ul className="tick-list">{service.deliverables.map((item) => <li key={item}>{item}</li>)}</ul>
        </article>
        <article className="glass-panel detail-panel">
          <h2>Best fit for</h2>
          <ul className="tick-list">{service.bestFor.map((item) => <li key={item}>{item}</li>)}</ul>
        </article>
      </AnimatedSection>
      <AnimatedSection className="cta-banner">
        <p className="eyebrow">Next step</p>
        <h2>Convert this into a working finance operating rhythm.</h2>
        <Link className="button button--primary" href="/contact">Book a consultation</Link>
      </AnimatedSection>
    </div>
  );
}
