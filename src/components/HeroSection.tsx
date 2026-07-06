import Link from "next/link";
import { HeroData } from "@/sanity/fallbackData";

interface HeroSectionProps {
  data: HeroData;
}

export default function HeroSection({ data }: HeroSectionProps) {
  const {
    title,
    subtitle,
    bio,
    profileImageUrl,
    ctaPrimaryText,
    ctaPrimaryUrl,
    ctaSecondaryText,
    ctaSecondaryUrl,
  } = data;

  return (
    <section className="hero-section section" id="about">
      <div className="container">
        <div className="hero-grid">

          {/* Text Column */}
          <div className="hero-text">
            <span className="hero-tag">Welcome</span>

            <h1 className="hero-title">{title}</h1>

            {subtitle && (
              <p className="hero-subtitle">{subtitle}</p>
            )}

            <p className="hero-bio">{bio}</p>

            <div className="hero-ctas">
              {ctaPrimaryText && ctaPrimaryUrl && (
                <Link href={ctaPrimaryUrl} className="btn btn-primary">
                  {ctaPrimaryText}
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </Link>
              )}
              {ctaSecondaryText && ctaSecondaryUrl && (
                <Link href={ctaSecondaryUrl} className="btn btn-secondary">
                  {ctaSecondaryText}
                </Link>
              )}
            </div>

            {/* Credential Badges */}
            <div className="hero-badges">
              {[
                "Professor · London Business School",
                "HSM Advisory Founder",
                "Future of Work Expert",
                "Bestselling Author",
              ].map((badge) => (
                <span key={badge} className="hero-badge">
                  <span className="hero-badge-dot" />
                  {badge}
                </span>
              ))}
            </div>
          </div>

          {/* Portrait Column */}
          <div className="hero-image-wrapper">
            <div className="hero-image-frame">
              {profileImageUrl ? (
                <img
                  src={profileImageUrl}
                  alt={`Portrait of ${title}`}
                  loading="eager"
                />
              ) : (
                <div className="hero-image-placeholder">
                  <span>LG</span>
                </div>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
