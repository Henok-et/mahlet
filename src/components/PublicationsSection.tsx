"use client";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { PublicationItem } from "@/sanity/fallbackData";

interface PublicationsSectionProps {
  data: PublicationItem[];
}

export default function PublicationsSection({ data }: PublicationsSectionProps) {
  const ref = useScrollReveal();
  if (!data || data.length === 0) return null;

  return (
    <section className="section bg-light" id="publications" ref={ref as React.RefObject<HTMLElement>}>
      <div className="container">
        <div className="section-header reveal">
          <h2 className="section-title">Research Works & Publications</h2>
          <p className="section-subtitle">Academic research, books, and articles on Science Policy and Biodiversity.</p>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          {data.map((pub, i) => (
            <div key={pub._id} className={`reveal reveal-delay-${Math.min(i + 1, 4)}`} style={{ padding: "1.5rem", background: "var(--color-bg)", borderRadius: "0.5rem", borderLeft: "4px solid var(--color-primary)", boxShadow: "0 2px 8px rgba(0,0,0,0.05)" }}>
              <h3 style={{ margin: "0 0 0.5rem 0", fontSize: "1.25rem" }}>
                {pub.link ? (
                  <a href={pub.link} target="_blank" rel="noopener noreferrer" style={{ color: "var(--color-text)", textDecoration: "none" }} className="hover-primary">
                    {pub.title} ↗
                  </a>
                ) : (
                  pub.title
                )}
              </h3>
              <p style={{ margin: 0, color: "var(--color-text-muted)" }}>
                {pub.authors} {pub.year && `· ${pub.year}`}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
