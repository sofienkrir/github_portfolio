import { useState, useEffect } from "react";
import { Download } from "lucide-react";
import { profile } from "../data/profile";

const links = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const close = () => setOpen(false);

  return (
    <>
      <nav className="nav" style={{ background: scrolled ? "rgba(7,11,20,0.95)" : "rgba(7,11,20,0.7)" }}>
        {/* Logo */}
        <a href="#hero" className="nav-logo">
          <span style={{ fontFamily: "var(--font-mono)", fontSize: 18 }}>{"{"}</span>
          SK
          <span style={{ fontFamily: "var(--font-mono)", fontSize: 18 }}>{"}"}</span>
        </a>

        {/* Desktop links */}
        <ul className="nav-links">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href}>{l.label}</a>
            </li>
          ))}
        </ul>

        {/* Actions */}
        <div className="nav-actions">
          <a href={profile.cvFile} download className="btn btn-outline" style={{ fontSize: 13, padding: "7px 14px" }}>
            <Download size={14} /> CV
          </a>
          <button className="hamburger" onClick={() => setOpen(!open)} aria-label="menu">
            <span style={{ transform: open ? "rotate(45deg) translate(5px,5px)" : "none" }} />
            <span style={{ opacity: open ? 0 : 1 }} />
            <span style={{ transform: open ? "rotate(-45deg) translate(5px,-5px)" : "none" }} />
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div className={`mobile-menu${open ? " open" : ""}`}>
        {links.map((l) => (
          <a key={l.href} href={l.href} onClick={close}>{l.label}</a>
        ))}
        <a href={profile.cvFile} download onClick={close}
          style={{ color: "var(--blue)", display: "flex", alignItems: "center", gap: 8 }}>
          <Download size={14} /> Télécharger le CV
        </a>
      </div>
    </>
  );
}
