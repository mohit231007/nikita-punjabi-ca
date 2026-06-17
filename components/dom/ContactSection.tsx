import { MagneticButton } from "@/components/animation/MagneticButton";
import { contact } from "@/lib/contact";

export function ContactSection({ standalone = false }: { standalone?: boolean }) {
  return (
    <section className={standalone ? "section contact-section" : "page-shell section contact-section"}>
      <div className="contact-card">
        <div>
          <p className="eyebrow">Contact</p>
          <h2>Ready to bring structure to your finance operations?</h2>
          <p>Start with a focused conversation about your books, systems, reporting needs and compliance pressure points.</p>
          <div className="contact-actions">
            <MagneticButton href={contact.whatsapp}>WhatsApp</MagneticButton>
            <MagneticButton href={`mailto:${contact.email}`} variant="secondary">Email</MagneticButton>
          </div>
        </div>
        <div className="glass-panel detail-panel">
          <h3>Connect</h3>
          <p>Email: {contact.email}</p>
          <p><a className="text-link" href={contact.linkedin}>LinkedIn</a></p>
          <p><a className="text-link" href={contact.youtube}>YouTube</a></p>
        </div>
      </div>
    </section>
  );
}
