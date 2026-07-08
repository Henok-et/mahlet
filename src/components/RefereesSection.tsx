"use client";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { RefereeItem } from "@/sanity/fallbackData";

interface RefereesSectionProps {
  data: RefereeItem[];
}

export default function RefereesSection({ data }: RefereesSectionProps) {
  const ref = useScrollReveal();
  
  if (!data || data.length === 0) return null;

  return (
    <section className="section" id="referees" ref={ref as React.RefObject<HTMLElement>}>
      <div className="container">
        <div className="section-header reveal">
          <h2 className="section-title">Referees</h2>
          <p className="section-subtitle">Professional references available upon request.</p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "2rem" }}>
          {data.map((refItem, i) => (
            <div 
              key={refItem._id} 
              className={`reveal reveal-delay-${Math.min(i + 1, 4)}`}
              style={{
                background: "var(--bg-secondary)",
                padding: "2rem",
                borderRadius: "1rem",
                boxShadow: "var(--shadow-card)",
                border: "1px solid var(--border)",
              }}
            >
              <h3 style={{ fontSize: "1.25rem", color: "var(--text-primary)", marginBottom: "0.25rem" }}>
                {refItem.name}
              </h3>
              <p style={{ color: "var(--gold)", fontWeight: 600, fontSize: "0.9rem", marginBottom: "0.25rem" }}>
                {refItem.title}
              </p>
              <p style={{ color: "var(--text-secondary)", fontSize: "0.95rem", marginBottom: "1rem" }}>
                {refItem.organization}
              </p>
              {refItem.email && (
                <a 
                  href={`mailto:${refItem.email}`} 
                  style={{ 
                    display: "inline-flex", 
                    alignItems: "center", 
                    gap: "0.5rem", 
                    color: "var(--text-primary)", 
                    fontSize: "0.9rem",
                    textDecoration: "none",
                    fontWeight: 500
                  }}
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="4" width="20" height="16" rx="2" />
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                  </svg>
                  {refItem.email}
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
