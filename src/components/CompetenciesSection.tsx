"use client";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { CompetencyItem, LanguageItem } from "@/sanity/fallbackData";

interface CompetenciesSectionProps {
  competencies: CompetencyItem[];
  languages: LanguageItem[];
}

export default function CompetenciesSection({ competencies, languages }: CompetenciesSectionProps) {
  const ref = useScrollReveal();
  
  if (!competencies || competencies.length === 0) return null;

  return (
    <section className="section" id="competencies" ref={ref as React.RefObject<HTMLElement>}>
      <div className="container">
        <div className="section-header reveal">
          <h2 className="section-title">Core Competencies & Languages</h2>
          <p className="section-subtitle">Key skills developed over decades of professional experience.</p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "2rem", marginBottom: "3rem" }}>
          {competencies.map((comp, i) => (
            <div 
              key={comp._id} 
              className={`reveal reveal-delay-${Math.min(i + 1, 4)}`}
              style={{
                background: "var(--bg-secondary)",
                padding: "2rem",
                borderRadius: "1rem",
                boxShadow: "var(--shadow-card)",
                border: "1px solid var(--border)",
              }}
            >
              <h3 style={{ fontSize: "1.25rem", color: "var(--text-primary)", marginBottom: "0.75rem" }}>
                {comp.category}
              </h3>
              <p style={{ color: "var(--text-secondary)", lineHeight: 1.7, margin: 0 }}>
                {comp.description}
              </p>
            </div>
          ))}
        </div>

        {languages && languages.length > 0 && (
          <div className="reveal reveal-delay-4" style={{ 
            background: "var(--gold-glow)", 
            padding: "2rem", 
            borderRadius: "1rem", 
            border: "1px solid rgba(154,124,54,0.2)",
            textAlign: "center"
          }}>
            <h3 style={{ fontSize: "1.25rem", color: "var(--gold-dark)", marginBottom: "1rem" }}>Languages</h3>
            <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "1rem" }}>
              {languages.map((lang) => (
                <span key={lang._id} style={{
                  background: "var(--bg-primary)",
                  padding: "0.5rem 1.5rem",
                  borderRadius: "2rem",
                  fontWeight: 600,
                  color: "var(--text-primary)",
                  border: "1px solid var(--border)"
                }}>
                  {lang.name} {lang.proficiency ? `(${lang.proficiency})` : ""}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
