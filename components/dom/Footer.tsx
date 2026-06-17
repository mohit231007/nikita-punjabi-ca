import Link from "next/link";

export function Footer() {
  return (
    <footer className="footer">
      <div className="page-shell footer-grid">
        <p>CA Nikita Punjabi · Finance systems, accounting and compliance.</p>
        <div className="footer-links"><Link href="/services">Services</Link><Link href="/contact">Contact</Link></div>
      </div>
    </footer>
  );
}
