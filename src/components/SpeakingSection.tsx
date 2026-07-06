import { SpeakingData } from "@/sanity/fallbackData";
import Link from "next/link";

interface SpeakingSectionProps {
  data: SpeakingData;
}

const stats = [
  { value: "40+", label: "Years Research" },
  { value: "100+", label: "Corporations" },
  { value: "50+", label: "Countries" },
];

export default function SpeakingSection({ data }: SpeakingSectionProps) {
  const { title, intro, topics } = data;

  return (
    <section className="section section-alt" id="speaking">
      <div className="container">
        {/* Section Header */}
        <div className="section-intro">
          <span className="section-tag">Keynotes &amp; Advisory</span>
          <h2 className="section-title">{title}</h2>
        </div>

        <div className="speaking-grid">
          {/* Left: Intro + Stats */}
          <div>
            {/* Mic Icon */}
            <div className="speaking-icon-box">
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z" />
                <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
                <line x1="12" y1="19" x2="12" y2="23" />
                <line x1="8" y1="23" x2="16" y2="23" />
              </svg>
            </div>

            <p className="speaking-intro-text">{intro}</p>

            {/* Stats */}
            <div className="speaking-stats">
              {stats.map((s) => (
                <div className="stat-box" key={s.label}>
                  <span className="stat-value">{s.value}</span>
                  <span className="stat-label">{s.label}</span>
                </div>
              ))}
            </div>

            <div className="speaking-details">
              <p>
                <strong>HSM Advisory</strong> — Working closely with corporate clients to
                transform people processes and model hybrid frameworks.
              </p>
              <p>
                <strong>Future of Work Research Consortium</strong> — Studying workplace
                shifts with a global cohort of 100+ corporate members.
              </p>
            </div>

            <Link href="#contact" className="btn btn-primary speaking-cta">
              Book Speaking Engagement
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
          </div>

          {/* Right: Keynote Topics */}
          <div className="speaking-topics">
            <h3 className="speaking-topics-label">Featured Keynote Topics</h3>
            {topics &&
              topics.map((topic, index) => (
                <div className="topic-item" key={index}>
                  <h4>{topic.title}</h4>
                  <p>{topic.description}</p>
                </div>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
}
