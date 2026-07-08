import Link from "next/link";
import { HeroData } from "@/sanity/fallbackData";

interface HeroSectionProps {
  data: HeroData;
}

export default function HeroSection({ data }: HeroSectionProps) {
  const {
    name,
    nationality,
    bio,
    profileImageUrl,
    ctaPrimaryText,
    ctaPrimaryUrl,
    ctaSecondaryText,
    ctaSecondaryUrl,
  } = data;

  return (
    <section className="hero-section section" id="about" style={{ position: "relative", overflow: "hidden" }}>
      {/* Dynamic Glowing Background */}
      <div className="hero-glow-bg">
        <div className="glow-blob blob-1"></div>
        <div className="glow-blob blob-2"></div>
        <div className="glow-blob blob-3"></div>
      </div>

      <div className="container" style={{ position: "relative", zIndex: 2 }}>
        <div className="hero-grid">

          {/* Text Column */}
          <div className="hero-text">
            <span className="hero-tag">Welcome</span>

            <h1 className="hero-title">{name}</h1>

            {nationality && (
              <p className="hero-subtitle">{nationality} National</p>
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
            
          </div>

          {/* Portrait Column */}
          <div className="hero-image-wrapper">
            <div className="hero-image-frame">
              {profileImageUrl ? (
                <img
                  src={profileImageUrl}
                  alt={`Portrait of ${name}`}
                  loading="eager"
                />
              ) : (
                <div className="hero-image-placeholder">
                  <span>MT</span>
                </div>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
