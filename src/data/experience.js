export const experiences = [
  {
    id: "pfe",
    role: "AI Engineer – Stage PFE",
    company: "Attijari Bank",
    department: "Digital Center Siège",
    location: "Tunis, Tunisie",
    period: "2025 – 2026",
    type: "Stage PFE",
    description:
      "Conception et développement d'une plateforme conversationnelle bancaire multilingue (FR/Derja) basée sur une architecture RAG complète avec LLMs, fine-tuning d'embeddings et évaluation IA.",
    achievements: [
      "Pipeline RAG : ingestion, retrieval, génération via Llama-3.3 (Groq)",
      "Fine-tuning MiniLM-L12-v2 sur 8 000 paires bancaires annotées",
      "Framework d'évaluation IA : recall, précision, BLEU, ROUGE",
      "Architecture microservices : FastAPI, MongoDB, ChromaDB, React",
      "Corpus Derja-Français annoté pour le domaine bancaire",
    ],
    tech: ["Python", "FastAPI", "LangChain", "ChromaDB", "MongoDB", "React", "Llama-3.3", "Hugging Face"],
  },
  {
    id: "bi",
    role: "Data Analyst – Stage",
    company: "Attijari Bank",
    department: "Digital Center Siège",
    location: "Tunis, Tunisie",
    period: "Été 2025",
    type: "Stage",
    description:
      "Analyse transactionnelle de 170 agences bancaires et conception de dashboards Power BI pour la direction, dans le cadre de l'impact de la loi chèques.",
    achievements: [
      "Analyse transactionnelle de 170 agences (calcul ETP, segmentation)",
      "Identification des agences sous/sur-dimensionnées",
      "Dashboard Power BI interactif (DAX, Power Query)",
      "Recommandations RH présentées à la direction du Digital Center",
    ],
    tech: ["Power BI", "DAX", "Power Query", "Python", "Excel"],
  },
  {
    id: "certif",
    role: "Stagiaire – Certifications PCAP & OCA",
    company: "Université TEK-UP",
    department: null,
    location: "Tunis, Tunisie",
    period: "Été 2024",
    type: "Stage",
    description: "Préparation et obtention des certifications Python PCAP (Python Institute) et Java OCA.",
    achievements: [
      "Certification Python PCAP – Python Institute",
      "Certification Java OCA",
      "Projets avancés en POO",
    ],
    tech: ["Python", "Java"],
  },
];

export const education = [
  {
    degree: "Diplôme d'Ingénieur",
    field: "Data Science & Intelligence Artificielle",
    school: "Université TEK-UP",
    location: "Tunis, Tunisie",
    period: "2023 – 2026",
    icon: "GraduationCap",
  },
  {
    degree: "Licence",
    field: "Électronique, Électrotechnique & Automatique",
    school: "ISSIG – Université de Gabès",
    location: "Gabès, Tunisie",
    period: "2020 – 2023",
    icon: "BookOpen",
  },
];

export const certifications = [
  { name: "Python PCAP", issuer: "Python Institute", period: "2024" },
  { name: "Java OCA", issuer: "Oracle", period: "2024" },
  { name: "Premiers Secours", issuer: "Croissant Rouge Tunisien", period: null },
];
