import { Brain, TrendingUp, BarChart3, Code2, Server, Monitor, Database, Settings } from "lucide-react";
import { skillGroups } from "../data/skills";

const iconMap = { Brain, TrendingUp, BarChart3, Code2, Server, Monitor, Database, Settings };

export default function Skills() {
  return (
    <section id="skills" className="section" style={{ background: "rgba(13,20,36,0.5)" }}>
      <div className="container">
        <p className="section-label">// skills</p>
        <h2 className="section-title" style={{ marginBottom: 8 }}>Technical Skills</h2>
        <p className="section-sub" style={{ marginBottom: 48 }}>
          Technologies et outils utilisés en formation et en stage professionnel.
        </p>

        <div className="skills-grid">
          {skillGroups.map((group) => {
            const Icon = iconMap[group.icon] || Code2;
            return (
              <div key={group.category} className="skill-card">
                <div className="skill-card-header">
                  <div className="skill-icon">
                    <Icon size={17} />
                  </div>
                  <span className="skill-cat">{group.category}</span>
                </div>
                <div className="skill-tags">
                  {group.skills.map((s) => (
                    <span key={s} className="tag">{s}</span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
