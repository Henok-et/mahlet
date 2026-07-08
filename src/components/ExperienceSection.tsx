"use client";
import { useState } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { ExperienceItem } from "@/sanity/fallbackData";

interface ExperienceSectionProps {
  data: ExperienceItem[];
}

export default function ExperienceSection({ data }: ExperienceSectionProps) {
  const ref = useScrollReveal();
  const [activeIndex, setActiveIndex] = useState(0);

  if (!data || data.length === 0) return null;

  return (
    <section className="section bg-light" id="experience" ref={ref as React.RefObject<HTMLElement>}>
      <div className="container">
        <div className="section-header reveal">
          <h2 className="section-title">Work Experience</h2>
          <p className="section-subtitle" style={{ marginTop: "1.5rem" }}>Over 20 years of experience designing and implementing equity-driven policies.</p>
        </div>

        <div className="experience-layout reveal reveal-delay-1" style={{ marginTop: "3rem" }}>
          
          {/* Sidebar Tabs */}
          <div className="exp-sidebar">
            {data.map((item, i) => (
              <button
                key={item._id}
                className={`exp-tab-btn ${i === activeIndex ? "active" : ""}`}
                onClick={() => setActiveIndex(i)}
              >
                {item.organization}
              </button>
            ))}
          </div>

          {/* Content Area */}
          <div className="exp-content-area">
            {data.map((item, i) => (
              <div
                key={item._id}
                className={`exp-panel ${i === activeIndex ? "active" : ""}`}
              >
                <div className="exp-header">
                  <h3>{item.title}</h3>
                  <div className="exp-company">@ {item.organization}</div>
                  <div className="exp-date">{item.dateRange}</div>
                </div>

                {item.responsibilities && item.responsibilities.length > 0 && (
                  <ul className="exp-responsibilities">
                    {item.responsibilities.map((resp, j) => (
                      <li key={j}>{resp}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
