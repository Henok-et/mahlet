import Link from "next/link";
import { SiteSettingsData } from "@/sanity/fallbackData";

const quickLinks = [
  { href: "#about", label: "About Mahlet" },
  { href: "#experience", label: "Work Experience" },
  { href: "#education", label: "Education & Trainings" },
  { href: "#publications", label: "Publications" },
  { href: "#contact", label: "Get In Touch" },
];

const externalLinks = [
  { href: "https://au.int/", label: "African Union Commission" },
  { href: "https://melcaethiopia.org/", label: "MELCA Ethiopia" },
];

interface FooterProps {
  settings: SiteSettingsData;
}

export default function Footer({ settings }: FooterProps) {
  const year = new Date().getFullYear();

  const nameParts = (settings.headerName || "Mahlet Teshome").split(" ");
  const firstName = nameParts[0];
  const lastName = nameParts.slice(1).join(" ");

  const socials = [];
  if (settings.linkedinUrl) {
    socials.push({
      href: settings.linkedinUrl,
      label: "LinkedIn",
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
          <rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" />
        </svg>
      ),
    });
  }

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          {/* Brand Column */}
          <div>
            <Link href="/" className="footer-logo">
              {firstName} {lastName && <span>{lastName}</span>}
            </Link>
            <p className="footer-desc">
              {settings.siteDescription || "Science Policy and Sustainable Development Leader"}
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
            <h4 className="footer-col-title">Organizations</h4>
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
            <h4 className="footer-col-title">Get In Touch</h4>
            <p className="footer-newsletter-text">
              Reach out for policy advisory and partnerships.
            </p>
            <Link href="#contact" className="btn btn-ghost footer-newsletter-btn">
              Contact Me
            </Link>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="footer-bottom">
          <p>&copy; {year} {settings.headerName || "Mahlet Teshome"}. All rights reserved.</p>
          <div className="footer-legal">
            <a 
              href="https://wa.me/251967670690" 
              target="_blank" 
              rel="noopener noreferrer"
              style={{
                fontSize: "0.9rem",
                fontWeight: "700",
                letterSpacing: "0.5px",
                textDecoration: "none"
              }}
            >
              <span style={{ color: "#666" }}>Website by </span>
              <span style={{ color: "var(--gold)" }}>Henok D</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
