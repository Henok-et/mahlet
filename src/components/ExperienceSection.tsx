"use client";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { ExperienceItem } from "@/sanity/fallbackData";

interface ExperienceSectionProps {
  data: ExperienceItem[];
}

export default function ExperienceSection({ data }: ExperienceSectionProps) {
  const ref = useScrollReveal();

  if (!data || data.length === 0) return null;

  return (
    <section className="section bg-light" id="experience" ref={ref as React.RefObject<HTMLElement>}>
      <div className="container">
        <div className="section-header reveal">
          <h2 className="section-title">Work Experience</h2>
          <p className="section-subtitle" style={{ marginTop: "1.5rem" }}>Over 20 years of experience designing and implementing equity-driven policies.</p>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "2rem", marginTop: "3rem" }}>
          {data.map((item, i) => (
            <div
              key={item._id}
              className={`reveal reveal-delay-${Math.min(i + 1, 4)}`}
              style={{
                background: "var(--bg-secondary)",
                padding: "2rem",
                borderRadius: "1rem",
                boxShadow: "var(--shadow-card)",
                border: "1px solid var(--border)",
                transition: "transform 0.3s var(--ease), box-shadow 0.3s var(--ease)",
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.transform = "translateY(-4px)";
                (e.currentTarget as HTMLElement).style.boxShadow = "var(--shadow-md)";
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                (e.currentTarget as HTMLElement).style.boxShadow = "var(--shadow-card)";
              }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", marginBottom: "1rem", gap: "1rem" }}>
                <div>
                  <h3 style={{ margin: "0 0 0.25rem 0", fontSize: "1.4rem", color: "var(--text-primary)" }}>{item.title}</h3>
                  <p style={{ margin: 0, fontWeight: 600, color: "var(--gold)" }}>{item.organization}</p>
                </div>
                <div style={{ background: "var(--gold-glow)", padding: "0.4rem 1rem", borderRadius: "2rem", fontSize: "0.8rem", fontWeight: 700, color: "var(--gold-dark)", whiteSpace: "nowrap", border: "1px solid rgba(154,124,54,0.2)" }}>
                  {item.dateRange}
                </div>
              </div>

              {item.responsibilities && item.responsibilities.length > 0 && (
                <ul style={{ margin: 0, paddingLeft: "1.25rem", color: "var(--text-secondary)" }}>
                  {item.responsibilities.map((resp, j) => (
                    <li key={j} style={{ marginBottom: "0.5rem", lineHeight: 1.7 }}>{resp}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
