import Link from "next/link";

export function Navbar() {
  return (
    <header className="site-header">
      <nav className="nav" aria-label="Main navigation">
        <Link href="/" className="brand" aria-label="CA Nikita Punjabi home">
          <span className="brand-mark">NP</span>
          <span><strong>CA Nikita Punjabi</strong><small>Zoho Finance Expert</small></span>
        </Link>
        <div className="nav-links">
          <Link href="/services">Services</Link>
          <Link href="/#about">About</Link>
          <Link href="/#faq">FAQ</Link>
          <Link href="/contact">Contact</Link>
        </div>
      </nav>
    </header>
  );
}
