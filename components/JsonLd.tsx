const SITE_URL = "https://prajwalzolage.syntaxsyndicate.co.in";

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Prajwal Zolage",
  url: SITE_URL,
  image: `${SITE_URL}/profile.jpg`,
  jobTitle: "Software Developer & AI/ML Enthusiast",
  description:
    "AI and Data Science enthusiast focused on building intelligent, scalable systems. Interested in Machine Learning and Deep Learning applications that solve real-world problems.",
  email: "mailto:prajwalzolage55@gmail.com",
  telephone: "+91-8208519403",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Roha, Raigad",
    addressRegion: "Maharashtra",
    addressCountry: "IN",
  },
  alumniOf: {
    "@type": "EducationalOrganization",
    name: "Terna Engineering College, Nerul",
  },
  award: [
    "Second Position – Reverse Coding Competition at Avalon Techfest 2026, Terna Engineering College",
    "Google AI Agents Intensive Capstone Submitter (DataLens-AI) – Kaggle 2025"
  ],
  knowsAbout: [
    "Python",
    "C",
    "HTML",
    "CSS",
    "JavaScript",
    "Flask",
    "FastAPI",
    "Next.js",
    "React",
    "NumPy",
    "Pandas",
    "Matplotlib",
    "Seaborn",
    "Scikit-learn",
    "Machine Learning",
    "Data Analytics",
    "MongoDB",
    "SQL",
    "Firebase",
    "Git",
    "GitHub",
  ],
  sameAs: [
    "https://github.com/prajwalzolage55",
    "https://www.linkedin.com/in/prajwal-zolage-82ab10347",
    "https://www.kaggle.com/prajwalzolage05",
    "https://www.instagram.com/prajwal__0506",
  ],
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Prajwal Zolage — Portfolio",
  url: SITE_URL,
  description:
    "Portfolio of Prajwal Zolage — Software Developer and AI/ML Enthusiast",
  author: {
    "@type": "Person",
    name: "Prajwal Zolage",
  },
};

const profilePageSchema = {
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  name: "Prajwal Zolage — Portfolio",
  url: SITE_URL,
  mainEntity: {
    "@type": "Person",
    name: "Prajwal Zolage",
    url: SITE_URL,
  },
};

const projectsSchema = [
  {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: "DataLens-AI",
    description:
      "An AI-powered data analytics agent that transforms raw datasets into actionable insights through intelligent analysis and visualization.",
    url: "https://datalens-v2-tu98.onrender.com/",
    author: { "@type": "Person", name: "Prajwal Zolage" },
    programmingLanguage: ["Python"],
    keywords: ["AI", "Data Analytics", "Pandas", "Gemini API", "Flask"],
  },
  {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: "NanoPDF",
    description:
      "A lightweight web-based PDF compression tool that reduces file size while maintaining document quality.",
    url: "https://nanopdf-3.onrender.com/",
    author: { "@type": "Person", name: "Prajwal Zolage" },
    programmingLanguage: ["Python", "JavaScript"],
    keywords: ["PDF Compression", "Flask", "Web Utility"],
  },
  {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: "SchemeSaathi",
    description:
      "A web application that helps Indian citizens find government schemes they are eligible for based on their personal details.",
    url: "https://scheme-finder-urxl.onrender.com",
    author: { "@type": "Person", name: "Prajwal Zolage" },
    programmingLanguage: ["Python", "JavaScript"],
    keywords: ["Government Schemes", "AI Matching", "Flask"],
  },
  {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: "Rakhndar",
    description:
      "An AI-powered assistant designed for developers and AI enthusiasts to explore concepts like Agentic AI, RAG systems, and Machine Learning.",
    url: "https://ai-chat-1-iv0u.onrender.com",
    author: { "@type": "Person", name: "Prajwal Zolage" },
    programmingLanguage: ["Python", "JavaScript"],
    keywords: ["AI Chat", "LLM", "Agentic AI", "RAG"],
  },
];

export default function JsonLd() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(profilePageSchema) }}
      />
      {projectsSchema.map((project, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(project) }}
        />
      ))}
    </>
  );
}
