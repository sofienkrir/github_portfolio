import { experiences } from "../data/experience";

export default function Experience() {
  return (
    <section id="experience" className="section" style={{ background: "rgba(13,20,36,0.5)" }}>
      <div className="container">
        <p className="section-label">// experience</p>
        <h2 className="section-title" style={{ marginBottom: 48 }}>Expérience Professionnelle</h2>

        <div className="timeline">
          {experiences.map((exp) => (
            <div key={exp.id} className="timeline-item">
              {/* Date / badge */}
              <div className="timeline-date">
                <span className="period">{exp.period}</span>
                <span className="type-badge">{exp.type}</span>
              </div>

              {/* Body */}
              <div className="timeline-body">
                <div className="timeline-dot" />
                <h3 className="timeline-role">{exp.role}</h3>
                <p className="timeline-company">
                  {exp.company}
                  {exp.department && ` · ${exp.department}`}
                </p>
                <p className="timeline-loc">{exp.location}</p>
                <p className="timeline-desc">{exp.description}</p>

                <ul className="timeline-achievements">
                  {exp.achievements.map((a, i) => (
                    <li key={i}>{a}</li>
                  ))}
                </ul>

                <div className="timeline-techs">
                  {exp.tech.map((t) => (
                    <span key={t} className="tag">{t}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
