import { ExperienceItem } from "@/sanity/fallbackData";

interface ExperienceSectionProps {
  data: ExperienceItem[];
}

export default function ExperienceSection({ data }: ExperienceSectionProps) {
  if (!data || data.length === 0) return null;

  return (
    <section className="section bg-light" id="experience">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Work Experience</h2>
          <p className="section-subtitle">Over 20 years of experience designing and implementing equity-driven policies.</p>
        </div>

        <div className="experience-list" style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
          {data.map((item) => (
            <div key={item._id} className="experience-card" style={{ background: "var(--color-bg)", padding: "2rem", borderRadius: "1rem", boxShadow: "0 4px 12px rgba(0,0,0,0.05)" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", marginBottom: "1rem", gap: "1rem" }}>
                <div>
                  <h3 style={{ margin: "0 0 0.25rem 0", fontSize: "1.5rem", color: "var(--color-text)" }}>{item.title}</h3>
                  <p style={{ margin: 0, fontWeight: 500, color: "var(--color-primary)" }}>{item.organization}</p>
                </div>
                <div style={{ background: "var(--color-light)", padding: "0.5rem 1rem", borderRadius: "2rem", fontSize: "0.875rem", fontWeight: 600 }}>
                  {item.dateRange}
                </div>
              </div>
              
              {item.responsibilities && item.responsibilities.length > 0 && (
                <ul style={{ margin: 0, paddingLeft: "1.25rem", color: "var(--color-text-muted)" }}>
                  {item.responsibilities.map((resp, i) => (
                    <li key={i} style={{ marginBottom: "0.5rem" }}>{resp}</li>
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
