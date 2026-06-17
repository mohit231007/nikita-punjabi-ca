import Link from "next/link";

export function Navbar() {
  return (
    <>
      <style>{`.site-header{position:relative!important;top:auto!important;padding-top:1.25rem!important;padding-bottom:1.25rem!important}.hero{min-height:auto!important;padding:5rem 0 4rem!important}.hero h1{font-size:clamp(2.8rem,5.8vw,5.4rem)!important;max-width:980px!important}.proof-strip{margin-top:0!important}.proof-card strong,.proof-card span{display:block!important}.proof-card span{margin-top:.35rem!important}.scroll-cue{display:none!important}.page-shell--inner{padding-top:5rem!important}@media(max-width:900px){.hero{padding:3.5rem 0 3rem!important}.hero h1{font-size:clamp(2.6rem,11vw,4.5rem)!important}.nav{border-radius:28px!important}}`}</style>
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
    </>
  );
}
