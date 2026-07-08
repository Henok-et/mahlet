"use client";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { VoluntaryItem } from "@/sanity/fallbackData";

interface VoluntarySectionProps {
  data: VoluntaryItem[];
}

export default function VoluntarySection({ data }: VoluntarySectionProps) {
  const ref = useScrollReveal();
  
  if (!data || data.length === 0) return null;

  return (
    <section className="section bg-light" id="voluntary" ref={ref as React.RefObject<HTMLElement>}>
      <div className="container">
        <div className="section-header reveal">
          <h2 className="section-title">Voluntary Duties</h2>
          <p className="section-subtitle">Community engagement and advisory roles.</p>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
          {data.map((item, i) => (
            <div 
              key={item._id} 
              className={`reveal reveal-delay-${Math.min(i + 1, 4)}`}
              style={{ 
                padding: "1.5rem", 
                background: "var(--bg-primary)", 
                borderRadius: "0.5rem", 
                borderLeft: "4px solid var(--gold)", 
                boxShadow: "var(--shadow-sm)" 
              }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: "1rem" }}>
                <div>
                  <h3 style={{ margin: "0 0 0.25rem 0", fontSize: "1.25rem" }}>
                    {item.link ? (
                      <a href={item.link} target="_blank" rel="noopener noreferrer" style={{ color: "var(--text-primary)", textDecoration: "none" }} className="hover-primary">
                        {item.organization} ↗
                      </a>
                    ) : (
                      item.organization
                    )}
                  </h3>
                  <p style={{ margin: 0, fontWeight: 500, color: "var(--text-secondary)" }}>{item.role}</p>
                </div>
                <div style={{ color: "var(--text-muted)", fontSize: "0.9rem", fontFamily: "var(--font-mono)" }}>
                  {item.dateRange}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
