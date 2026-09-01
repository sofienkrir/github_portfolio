import { GraduationCap, BookOpen, Award } from "lucide-react";
import { education, certifications } from "../data/experience";

const iconMap = { GraduationCap, BookOpen };

export default function Education() {
  return (
    <section id="education" className="section">
      <div className="container">
        <p className="section-label">// education</p>
        <h2 className="section-title" style={{ marginBottom: 48 }}>Formation &amp; Certifications</h2>

        <div className="edu-grid">
          {education.map((e, i) => {
            const Icon = iconMap[e.icon] || GraduationCap;
            return (
              <div key={i} className="edu-card">
                <div className="edu-icon"><Icon size={22} /></div>
                <p className="edu-degree">{e.degree}</p>
                <p className="edu-field">{e.field}</p>
                <p className="edu-school">{e.school}</p>
                <p className="edu-school" style={{ fontSize: 13, color: "var(--text-3)", marginTop: 2 }}>{e.location}</p>
                <p className="edu-meta">{e.period}</p>
              </div>
            );
          })}
        </div>

        {/* Certifications */}
        <div style={{ marginTop: 40 }}>
          <p style={{
            fontFamily: "var(--font-mono)", fontSize: 12,
            color: "var(--text-3)", marginBottom: 16,
            display: "flex", alignItems: "center", gap: 8
          }}>
            <Award size={14} style={{ color: "var(--blue)" }} />
            certifications &amp; autres
          </p>
          <div className="certif-grid">
            {certifications.map((c, i) => (
              <div key={i} className="certif-card">
                <p className="certif-name">{c.name}</p>
                <p className="certif-issuer">
                  {c.issuer}{c.period ? ` · ${c.period}` : ""}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
