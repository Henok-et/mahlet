"use client";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { EducationItem } from "@/sanity/fallbackData";

interface EducationSectionProps {
  data: EducationItem[];
}

export default function EducationSection({ data }: EducationSectionProps) {
  const ref = useScrollReveal();
  if (!data || data.length === 0) return null;

  const degrees = data.filter(d => !d.isTraining);
  const trainings = data.filter(d => d.isTraining);

  return (
    <section className="section" id="education" ref={ref as React.RefObject<HTMLElement>}>
      <div className="container">
        <div className="section-header reveal">
          <h2 className="section-title">Education & Trainings</h2>
          <p className="section-subtitle">Academic background and continuous professional development.</p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "3rem" }}>
          
          {/* Degrees */}
          <div className="reveal reveal-delay-1">
            <h3 style={{ marginBottom: "1.5rem", borderBottom: "2px solid var(--color-light)", paddingBottom: "0.5rem" }}>Academic Degrees</h3>
            <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
              {degrees.map(item => (
                <div key={item._id}>
                  <h4 style={{ margin: "0 0 0.25rem 0", color: "var(--color-primary)", fontSize: "1.1rem" }}>{item.title}</h4>
                  <p style={{ margin: 0, fontWeight: 500 }}>{item.institution}</p>
                  <p style={{ margin: 0, color: "var(--color-text-muted)", fontSize: "0.9rem" }}>{item.date}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Trainings */}
          <div className="reveal reveal-delay-2">
            <h3 style={{ marginBottom: "1.5rem", borderBottom: "2px solid var(--color-light)", paddingBottom: "0.5rem" }}>Professional Trainings</h3>
            <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
              {trainings.map(item => (
                <div key={item._id}>
                  <h4 style={{ margin: "0 0 0.25rem 0", color: "var(--color-text)", fontSize: "1.1rem" }}>
                    {item.link ? (
                      <a href={item.link} target="_blank" rel="noopener noreferrer" style={{ color: "inherit", textDecoration: "none" }} className="hover-primary">{item.title} ↗</a>
                    ) : (
                      item.title
                    )}
                  </h4>
                  <p style={{ margin: 0, fontWeight: 500 }}>{item.institution}</p>
                  <p style={{ margin: 0, color: "var(--color-text-muted)", fontSize: "0.9rem" }}>{item.date}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
