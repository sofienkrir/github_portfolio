import { Mail, Linkedin } from "lucide-react";
import { profile } from "../data/profile";

export default function Contact() {
  return (
    <section id="contact" className="section" style={{ background: "rgba(13,20,36,0.5)" }}>
      <div className="container">
        <div className="contact-box">
          <p className="section-label" style={{ textAlign: "center" }}>// contact</p>
          <h2 className="contact-title">
            Let's build something{" "}
            <span className="grad-text">intelligent.</span>
          </h2>
          <p className="contact-sub">
            Disponible pour des opportunités en Data Science, AI Engineering,
            Data Analytics et NLP. N'hésitez pas à me contacter.
          </p>

          <div className="contact-links">
            <a href={`mailto:${profile.email}`} className="contact-link">
              <Mail size={18} />
              {profile.email}
            </a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer" className="contact-link">
              <Linkedin size={18} />
              LinkedIn
            </a>
          </div>

          <p style={{ marginTop: 32, fontSize: 13, color: "var(--text-3)" }}>
            {profile.phone} · {profile.location}
          </p>
        </div>
      </div>
    </section>
  );
}
