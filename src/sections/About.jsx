import { profile } from "../data/profile";

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <div className="about-grid">
          {/* Text */}
          <div className="about-text">
            <p className="section-label">// about</p>
            <h2 className="section-title">Data Science &amp;<br />AI Engineering</h2>
            {profile.about.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>

          {/* Stats */}
          <div>
            <div className="about-stats">
              {profile.stats.map((s) => (
                <div key={s.label} className="stat-card">
                  <div className="val">{s.value}</div>
                  <div className="lbl">{s.label}</div>
                </div>
              ))}
            </div>

            {/* Tech highlights */}
            <div style={{ marginTop: 20, padding: "20px", background: "var(--bg-card)", border: "1px solid var(--border-2)", borderRadius: 12 }}>
              <p style={{ fontFamily: "var(--font-mono)", fontSize: 12, color: "var(--text-3)", marginBottom: 12 }}>
                Stack principale
              </p>
              {["Python", "LangChain", "FastAPI", "React", "Power BI", "ChromaDB", "MongoDB", "Docker"].map((t) => (
                <span key={t} className="tag" style={{ margin: "3px" }}>{t}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
