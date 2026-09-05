import { useEffect } from "react";
import { X } from "lucide-react";

function SqlBlock({ code }) {
  return (
    <pre style={{
      background: "rgba(0,0,0,0.4)",
      border: "1px solid rgba(59,130,246,0.15)",
      borderRadius: 8,
      padding: "14px 16px",
      fontFamily: "monospace",
      fontSize: 12.5,
      lineHeight: 1.75,
      color: "#93C5FD",
      overflowX: "auto",
      whiteSpace: "pre",
      margin: 0,
    }}>
      <code>{code}</code>
    </pre>
  );
}

function PizzaContent({ project }) {
  return (
    <>
      {project.dataset && (
        <div className="modal-section">
          <h3>Dataset</h3>
          <p style={{ color: "var(--text-2)", fontSize: 14, marginBottom: 12 }}>
            Table <code style={{ 
              fontFamily: "monospace", 
              color: "#60A5FA", 
              background: "rgba(59,130,246,0.1)", 
              padding: "1px 7px", 
              borderRadius: 4 
            }}>pizza_sales</code> — toutes les lignes de commande de la période analysée.
          </p>
          <div style={{ 
            display: "grid", 
            gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", 
            gap: 8 
          }}>
            {project.dataset.columns.map((col) => (
              <div key={col.name} style={{ 
                background: "rgba(59,130,246,0.05)", 
                border: "1px solid rgba(59,130,246,0.12)", 
                borderRadius: 8, 
                padding: "10px 12px" 
              }}>
                <p style={{ 
                  fontFamily: "monospace", 
                  fontSize: 12, 
                  color: "#60A5FA", 
                  marginBottom: 3 
                }}>{col.name}</p>
                <p style={{ fontSize: 12, color: "var(--text-3)" }}>{col.desc}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {project.sqlQueries && (
        <div className="modal-section">
          <h3>Analyses SQL</h3>
          <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
            {project.sqlQueries.map((q, i) => (
              <div key={i} style={{ 
                background: "rgba(255,255,255,0.02)", 
                border: "1px solid rgba(255,255,255,0.07)", 
                borderRadius: 10, 
                padding: "16px" 
              }}>
                <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 8 }}>
                  <span style={{ 
                    fontFamily: "monospace", 
                    fontSize: 11, 
                    background: "rgba(59,130,246,0.12)", 
                    color: "#60A5FA", 
                    padding: "2px 8px", 
                    borderRadius: 5 
                  }}>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <strong style={{ fontSize: 14, color: "var(--text-1)" }}>{q.label}</strong>
                </div>
                <p style={{ 
                  fontSize: 13, 
                  color: "var(--text-3)", 
                  marginBottom: 10, 
                  fontStyle: "italic" 
                }}>{q.business}</p>
                <SqlBlock code={q.sql} />
                <p style={{ 
                  fontSize: 13, 
                  color: "var(--text-2)", 
                  marginTop: 10, 
                  paddingLeft: 12, 
                  borderLeft: "2px solid rgba(59,130,246,0.4)", 
                  lineHeight: 1.6 
                }}>
                  💡 {q.insight}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}

      {project.powerBI && (
        <div className="modal-section">
          <h3>Dashboard Power BI</h3>
          <p style={{ color: "var(--text-2)", fontSize: 14, marginBottom: 14 }}>
            {project.powerBI.description}
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
            <div>
              <p style={{ 
                fontSize: 11, 
                color: "var(--text-3)", 
                marginBottom: 10, 
                textTransform: "uppercase", 
                letterSpacing: "0.05em" 
              }}>KPIs</p>
              {project.powerBI.kpis.map((k, i) => (
                <div key={i} style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 7 }}>
                  <span style={{ 
                    width: 6, 
                    height: 6, 
                    borderRadius: "50%", 
                    background: "#3B82F6", 
                    flexShrink: 0 
                  }} />
                  <span style={{ fontSize: 13, color: "var(--text-2)" }}>{k}</span>
                </div>
              ))}
            </div>
            <div>
              <p style={{ 
                fontSize: 11, 
                color: "var(--text-3)", 
                marginBottom: 10, 
                textTransform: "uppercase", 
                letterSpacing: "0.05em" 
              }}>Visualisations</p>
              {project.powerBI.visuals.map((v, i) => (
                <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: 8, marginBottom: 7 }}>
                  <span style={{ 
                    width: 6, 
                    height: 6, 
                    borderRadius: "50%", 
                    background: "#8B5CF6", 
                    flexShrink: 0, 
                    marginTop: 5 
                  }} />
                  <span style={{ fontSize: 12.5, color: "var(--text-2)", lineHeight: 1.5 }}>{v}</span>
                </div>
              ))}
            </div>
          </div>
          {project.powerBI.filters && (
            <div style={{ marginTop: 14, display: "flex", alignItems: "center", gap: 8, flexWrap: "wrap" }}>
              <span style={{ fontSize: 12, color: "var(--text-3)" }}>Slicers :</span>
              {project.powerBI.filters.map((f, i) => (
                <span key={i} className="tag">{f}</span>
              ))}
            </div>
          )}
        </div>
      )}

      {project.keyInsights && (
        <div className="modal-section">
          <h3>Key Business Insights</h3>
          <ul className="modal-list">
            {project.keyInsights.map((ins, i) => <li key={i}>{ins}</li>)}
          </ul>
        </div>
      )}
    </>
  );
}

export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    const onKey = (e) => { 
      if (e.key === "Escape") onClose(); 
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  const isPizza = project.id === "pizza-sales";

  return (
    <div className="modal-overlay" onClick={(e) => e.target === e.currentTarget && onClose()}>
      <div className="modal" style={{ maxWidth: isPizza ? 860 : 780 }}>
        <button className="modal-close" onClick={onClose} aria-label="Fermer">
          <X size={16} />
        </button>

        <p className="modal-type">{project.type}</p>
        <h2 className="modal-title">{project.title}</h2>
        <p className="modal-subtitle">{project.subtitle} · {project.period}</p>

        <div className="modal-section">
          <h3>Vue d&apos;ensemble</h3>
          <p>{project.problem || project.description}</p>
        </div>

        {!isPizza && project.solution && (
          <div className="modal-section">
            <h3>Solution</h3>
            <p>{project.solution}</p>
          </div>
        )}

        {!isPizza && project.architecture && (
          <div className="modal-section">
            <h3>Architecture technique</h3>
            <div className="arch-grid">
              {project.architecture.map((row, i) => (
                <div key={i} className="arch-row">
                  <span className="arch-layer">{row.layer}</span>
                  <span className="arch-tech">{row.tech}</span>
                  <span className="arch-desc">{row.desc}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {!isPizza && project.highlights && (
          <div className="modal-section">
            <h3>Points clés</h3>
            <ul className="modal-list">
              {project.highlights.map((h, i) => <li key={i}>{h}</li>)}
            </ul>
          </div>
        )}

        {isPizza && <PizzaContent project={project} />}

        <div className="modal-section">
          <h3>Stack technologique</h3>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
            {project.tech.map((t) => (
              <span key={t} className="tag">{t}</span>
            ))}
          </div>
        </div>

        {isPizza && project.highlights && (
          <div className="modal-section">
            <h3>Compétences démontrées</h3>
            <ul className="modal-list">
              {project.highlights.map((h, i) => <li key={i}>{h}</li>)}
            </ul>
          </div>
        )}

        {(project.github || project.demo) && (
          <div style={{ display: "flex", gap: 12, marginTop: 8 }}>
            {project.github && (
              <a href={project.github} target="_blank" rel="noreferrer" className="btn btn-outline" style={{ fontSize: 14 }}>
                GitHub
              </a>
            )}
            {project.demo && (
              <a href={project.demo} target="_blank" rel="noreferrer" className="btn btn-primary" style={{ fontSize: 14 }}>
                Live Demo
              </a>
            )}
          </div>
        )}
      </div>
    </div>
  );
}