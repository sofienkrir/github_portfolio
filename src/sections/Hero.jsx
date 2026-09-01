import { Download, ArrowDown, Linkedin, Mail } from "lucide-react";
import { profile } from "../data/profile";

export default function Hero() {
  return (
    <section id="hero" className="hero dot-grid">
      <div className="hero-glow" />
      <div className="hero-glow-2" />

      <div className="container">
        <div style={{
          display: "flex", alignItems: "center",
          justifyContent: "space-between", gap: "48px", flexWrap: "wrap",
        }}>

          {/* Contenu gauche */}
          <div className="hero-content" style={{ flex: "1 1 480px", maxWidth: 680 }}>
            <div className="hero-badge">Disponible · Tunis, Tunisie</div>
            <h1 className="hero-name"><span className="grad-text">{profile.name}</span></h1>
            <p className="hero-title">{profile.title}</p>
            <p className="hero-desc">{profile.tagline}</p>
            <div className="hero-actions">
              <a href="#projects" className="btn btn-primary">View Projects</a>
              <a href={profile.cvFile} download className="btn btn-outline">
                <Download size={16} />Download CV
              </a>
            </div>
            <div className="hero-links">
              <a href={`mailto:${profile.email}`} className="hero-link">
                <Mail size={15} />{profile.email}
              </a>
              <a href={profile.linkedin} target="_blank" rel="noreferrer" className="hero-link">
                <Linkedin size={15} />LinkedIn
              </a>
            </div>
          </div>

          {/* Photo droite */}
          <div style={{ flex: "0 0 auto", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <div style={{ position: "relative", width: 260, height: 260 }}>
              <div style={{ position: "absolute", inset: -18, borderRadius: "50%", border: "1px solid rgba(59,130,246,0.2)", animation: "spin-slow 12s linear infinite" }} />
              <div style={{ position: "absolute", inset: -8, borderRadius: "50%", border: "1px solid rgba(139,92,246,0.15)" }} />
              <div style={{ position: "absolute", top: -14, left: "50%", transform: "translateX(-50%)", width: 10, height: 10, borderRadius: "50%", background: "var(--blue)", boxShadow: "0 0 12px var(--blue)" }} />
              <img src="/photo.png" alt="Sofien Krir" style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "50%", border: "3px solid rgba(59,130,246,0.4)", display: "block" }} />
            </div>
          </div>
        </div>
      </div>

      <div className="hero-scroll"><ArrowDown size={16} /></div>
      <style>{`@keyframes spin-slow { from { transform: rotate(0deg); } to { transform: rotate(360deg); } } @media (max-width: 768px) { .hero .container > div { flex-direction: column-reverse !important; } }`}</style>
    </section>
  );
}