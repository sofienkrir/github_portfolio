import { useEffect } from "react";
import { X } from "lucide-react";

export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    const onKey = (e) => { if (e.key === "Escape") onClose(); };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <div className="modal-overlay" onClick={(e) => e.target === e.currentTarget && onClose()}>
      <div className="modal">
        <button className="modal-close" onClick={onClose} aria-label="Fermer">
          <X size={16} />
        </button>

        <p className="modal-type">{project.type}</p>
        <h2 className="modal-title">{project.title}</h2>
        <p className="modal-subtitle">{project.subtitle} · {project.period}</p>

        {/* Overview */}
        <div className="modal-section">
          <h3>Contexte</h3>
          <p>{project.problem}</p>
        </div>

        {/* Solution */}
        {project.solution && (
          <div className="modal-section">
            <h3>Solution</h3>
            <p>{project.solution}</p>
          </div>
        )}

        {/* Architecture */}
        {project.architecture && (
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

        {/* Highlights */}
        {project.highlights && (
          <div className="modal-section">
            <h3>Points clés</h3>
            <ul className="modal-list">
              {project.highlights.map((h, i) => (
                <li key={i}>{h}</li>
              ))}
            </ul>
          </div>
        )}

        {/* Stack */}
        <div className="modal-section">
          <h3>Stack technologique</h3>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
            {project.tech.map((t) => (
              <span key={t} className="tag">{t}</span>
            ))}
          </div>
        </div>

        {/* Links */}
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
