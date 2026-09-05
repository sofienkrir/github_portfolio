import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { projects } from "../data/projects";
import ProjectModal from "../components/ProjectModal";

const colorMap = {
  blue:    { border: "rgba(59,130,246,0.3)",   accent: "#3B82F6" },
  violet:  { border: "rgba(139,92,246,0.3)",   accent: "#8B5CF6" },
  emerald: { border: "rgba(16,185,129,0.3)",   accent: "#10B981" },
  amber:   { border: "rgba(245,158,11,0.3)",   accent: "#F59E0B" },
  rose:    { border: "rgba(244,63,94,0.3)",    accent: "#F43F5E" },
  slate:   { border: "rgba(148,163,184,0.25)", accent: "#94A3B8" },
};

function ProjectCard({ project, featured, onClick }) {
  const c = colorMap[project.color] || colorMap.blue;
  
  return (
    <div
      className={featured ? "project-card featured" : "project-card-sm project-card"}
      onClick={onClick}
      style={{ "--card-accent": c.accent }}
    >
      <p className="project-type" style={{ color: c.accent }}>
        {project.type}
      </p>
      <h3 className="project-title">{project.title}</h3>
      <p className="project-subtitle">{project.subtitle}</p>
      <p className="project-desc">{project.description}</p>

      <div className="project-techs">
        {project.tech.slice(0, featured ? 8 : 5).map((t) => (
          <span 
            key={t} 
            className="tag" 
            style={{
              background: `${c.accent}15`,
              color: c.accent,
              borderColor: `${c.accent}30`,
            }}
          >
            {t}
          </span>
        ))}
        {project.tech.length > (featured ? 8 : 5) && (
          <span 
            className="tag" 
            style={{ 
              color: "var(--text-3)", 
              background: "transparent" 
            }}
          >
            +{project.tech.length - (featured ? 8 : 5)}
          </span>
        )}
      </div>

      <div className="project-footer">
        <span style={{ 
          fontSize: 12, 
          color: "var(--text-3)", 
          fontFamily: "var(--font-mono)" 
        }}>
          {project.period}
        </span>
        <span className="project-more" style={{ color: c.accent }}>
          Voir le détail <ArrowRight size={13} />
        </span>
      </div>
    </div>
  );
}

export default function Projects() {
  const [active, setActive] = useState(null);
  
  const featured = projects.filter((p) => p.featured === true);
  const secondary = projects.filter((p) => p.featured !== true);

  const openModal = (project) => {
    setActive(project);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setActive(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <section id="projects" className="section">
      <div className="container">
        <p className="section-label">// projects</p>
        <h2 className="section-title" style={{ marginBottom: 8 }}>
          Projets réalisés
        </h2>
        <p className="section-sub" style={{ marginBottom: 48 }}>
          Projets professionnels et académiques — cliquez pour voir le détail.
        </p>

        {/* Featured Projects */}
        <div className="projects-featured">
          {featured.map((p) => (
            <ProjectCard 
              key={p.id} 
              project={p} 
              featured 
              onClick={() => openModal(p)} 
            />
          ))}
        </div>

        {/* Secondary Projects */}
        <div style={{ marginBottom: 16 }}>
          <p style={{ 
            fontSize: 13, 
            color: "var(--text-3)", 
            fontFamily: "var(--font-mono)", 
            marginBottom: 16 
          }}>
            — autres projets
          </p>
        </div>
        
        <div className="projects-grid">
          {secondary.map((p) => (
            <ProjectCard 
              key={p.id} 
              project={p} 
              onClick={() => openModal(p)} 
            />
          ))}
        </div>
      </div>

      {active && (
        <ProjectModal 
          project={active} 
          onClose={closeModal} 
        />
      )}
    </section>
  );
}