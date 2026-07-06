import Link from "next/link";

const quickLinks = [
  { href: "#about", label: "About Lynda" },
  { href: "#books", label: "Publications" },
  { href: "#thinking", label: "Insights & Thinking" },
  { href: "#speaking", label: "Keynotes & Speaking" },
  { href: "#contact", label: "Get In Touch" },
];

const externalLinks = [
  { href: "https://hsm-advisory.com", label: "HSM Advisory" },
  { href: "https://hsm-advisory.com/future-of-work-consortium", label: "Future of Work Consortium" },
  { href: "https://www.london.edu", label: "London Business School" },
];

const socials = [
  {
    href: "https://www.linkedin.com/in/lyndagratton",
    label: "LinkedIn",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
  {
    href: "https://twitter.com/lyndagratton",
    label: "Twitter / X",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
      </svg>
    ),
  },
  {
    href: "https://www.youtube.com/user/lyndagratton",
    label: "YouTube",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />
        <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" fill="currentColor" />
      </svg>
    ),
  },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          {/* Brand Column */}
          <div>
            <Link href="/" className="footer-logo">
              Lynda <span>Gratton</span>
            </Link>
            <p className="footer-desc">
              Professor of Management Practice at London Business School and
              founder of the global research advisory practice, HSM Advisory.
              Author of multiple bestselling books on work and leadership.
            </p>
            {/* Social icons */}
            <div className="footer-socials">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-social-btn"
                  aria-label={s.label}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="footer-col-title">Quick Links</h4>
            <ul className="footer-links">
              {quickLinks.map((l) => (
                <li key={l.href}>
                  <Link href={l.href}>{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* External Links */}
          <div>
            <h4 className="footer-col-title">Advisory &amp; Research</h4>
            <ul className="footer-links">
              {externalLinks.map((l) => (
                <li key={l.href}>
                  <a href={l.href} target="_blank" rel="noopener noreferrer">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter Teaser */}
          <div>
            <h4 className="footer-col-title">Stay Informed</h4>
            <p className="footer-newsletter-text">
              Get the latest insights on the future of work, longevity, and leadership.
            </p>
            <Link href="#contact" className="btn btn-ghost footer-newsletter-btn">
              Subscribe
            </Link>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="footer-bottom">
          <p>&copy; {year} Lynda Gratton. All rights reserved.</p>
          <div className="footer-legal">
            <a 
              href="https://wa.me/251967670690" 
              target="_blank" 
              rel="noopener noreferrer"
              style={{
                fontSize: "1.1rem",
                fontWeight: "700",
                color: "var(--gold)",
                textTransform: "uppercase",
                letterSpacing: "1px",
                textDecoration: "none"
              }}
            >
              Website by Henok D
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
