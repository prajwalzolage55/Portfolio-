"use client";

import { motion } from "framer-motion";

interface Skill {
    name: string;
    iconUrl: string;
    glowColor: string; // Brand color for glow effect
}

interface SkillCategory {
    label: string;
    skills: Skill[];
}

// Using devicon CDN for broad coverage of dev tool icons
const di = (name: string, variant = "original") =>
    `https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${name}/${name}-${variant}.svg`;

const si = (slug: string, color: string) =>
    `https://cdn.simpleicons.org/${slug}/${color}`;

const skillCategories: SkillCategory[] = [
    {
        label: "Frontend",
        skills: [
            { name: "HTML5", iconUrl: di("html5"), glowColor: "#E34F26" },
            { name: "CSS3", iconUrl: di("css3"), glowColor: "#1572B6" },
            { name: "JavaScript", iconUrl: di("javascript"), glowColor: "#F7DF1E" },
        ],
    },
    {
        label: "Backend",
        skills: [
            { name: "Flask", iconUrl: si("flask", "ffffff"), glowColor: "#ffffff" },
            { name: "FastAPI", iconUrl: di("fastapi"), glowColor: "#009688" },
        ],
    },
    {
        label: "Data Analytics",
        skills: [
            { name: "NumPy", iconUrl: di("numpy", "original"), glowColor: "#4DABCF" },
            { name: "Pandas", iconUrl: di("pandas"), glowColor: "#E70488" },
            { name: "Matplotlib", iconUrl: di("matplotlib", "original"), glowColor: "#11557C" },
            { name: "Seaborn", iconUrl: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Ccircle cx='50' cy='50' r='45' fill='%23444876'/%3E%3Cpath d='M25 70 Q35 30 50 50 Q65 70 75 35' stroke='white' stroke-width='4' fill='none' stroke-linecap='round'/%3E%3Ccircle cx='30' cy='60' r='3' fill='white' opacity='0.7'/%3E%3Ccircle cx='45' cy='45' r='3' fill='white' opacity='0.7'/%3E%3Ccircle cx='55' cy='55' r='3' fill='white' opacity='0.7'/%3E%3Ccircle cx='70' cy='40' r='3' fill='white' opacity='0.7'/%3E%3C/svg%3E", glowColor: "#7B68EE" },
        ],
    },
    {
        label: "Machine Learning",
        skills: [
            { name: "Scikit-learn", iconUrl: di("scikitlearn", "original"), glowColor: "#F7931E" },
        ],
    },
    {
        label: "Programming Languages",
        skills: [
            { name: "Python", iconUrl: di("python", "original"), glowColor: "#3776AB" },
            { name: "C", iconUrl: di("c", "original"), glowColor: "#A8B9CC" },
        ],
    },
    {
        label: "Databases",
        skills: [
            { name: "MongoDB", iconUrl: di("mongodb", "original"), glowColor: "#47A248" },
            { name: "SQL", iconUrl: di("mysql", "original"), glowColor: "#4479A1" },
            { name: "Firebase", iconUrl: di("firebase"), glowColor: "#FFCA28" },
        ],
    },
    {
        label: "Deployment",
        skills: [
            { name: "Render", iconUrl: si("render", "46E3B7"), glowColor: "#46E3B7" },
            { name: "Vercel", iconUrl: si("vercel", "ffffff"), glowColor: "#ffffff" },
            { name: "Railway", iconUrl: si("railway", "ffffff"), glowColor: "#C049FF" },
            { name: "Netlify", iconUrl: si("netlify", "00C7B7"), glowColor: "#00C7B7" },
            { name: "GitHub Pages", iconUrl: si("githubpages", "ffffff"), glowColor: "#8B5CF6" },
        ],
    },
    {
        label: "Tools & Open Source",
        skills: [
            { name: "Git", iconUrl: di("git", "original"), glowColor: "#F05032" },
            { name: "GitHub", iconUrl: si("github", "ffffff"), glowColor: "#ffffff" },
            { name: "Kaggle", iconUrl: di("kaggle", "original"), glowColor: "#20BEFF" },
        ],
    },
];

// Flatten all skills into a single array for the marquee
const allSkills = skillCategories.flatMap((cat) => cat.skills);

// Duplicate to fill the marquee seamlessly
const marqueeSkills = [...allSkills, ...allSkills, ...allSkills];

function SkillIcon({ skill }: { skill: Skill }) {
    return (
        <div className="group relative flex-shrink-0 mx-4 md:mx-5">
            <div
                className="w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-white/[0.07] border border-white/[0.12] flex items-center justify-center backdrop-blur-sm transition-all duration-300 group-hover:scale-110"
                style={{
                    transition: "all 0.3s ease",
                }}
                onMouseEnter={(e) => {
                    const el = e.currentTarget as HTMLDivElement;
                    el.style.boxShadow = `0 0 20px ${skill.glowColor}40, 0 0 40px ${skill.glowColor}20, inset 0 0 20px ${skill.glowColor}10`;
                    el.style.borderColor = `${skill.glowColor}60`;
                    el.style.background = `rgba(255,255,255,0.12)`;
                }}
                onMouseLeave={(e) => {
                    const el = e.currentTarget as HTMLDivElement;
                    el.style.boxShadow = "none";
                    el.style.borderColor = "rgba(255,255,255,0.12)";
                    el.style.background = "rgba(255,255,255,0.07)";
                }}
            >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                    src={skill.iconUrl}
                    alt={skill.name}
                    width={40}
                    height={40}
                    className="w-9 h-9 md:w-11 md:h-11 transition-all duration-300 group-hover:scale-105"
                    loading="lazy"
                    style={{
                        filter: "brightness(1.3) contrast(1.05) drop-shadow(0 0 6px rgba(255,255,255,0.15))",
                    }}
                />
            </div>
            {/* Tooltip — shows on hover */}
            <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 px-3 py-1.5 bg-black/60 backdrop-blur-xl rounded-lg text-[11px] font-mono text-white whitespace-nowrap opacity-0 group-hover:opacity-100 transition-all duration-200 pointer-events-none border border-white/15 shadow-xl z-20">
                {skill.name}
            </div>
        </div>
    );
}

export default function TechSkills() {
    return (
        <section id="skills" aria-label="Technical Skills" className="bg-[#121212] py-24 px-4 relative z-20 overflow-hidden">
            {/* Section heading */}
            <div className="max-w-7xl mx-auto mb-16">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-4xl md:text-6xl font-bold text-white text-center"
                >
                    Technical Arsenal
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.15 }}
                    className="text-gray-500 text-center mt-4 font-mono text-sm tracking-widest uppercase"
                >
                    Technologies I work with
                </motion.p>
            </div>

            {/* Marquee Row 1 — scrolls left */}
            <div className="relative mb-8">
                {/* Edge fades */}
                <div className="absolute left-0 top-0 bottom-0 w-24 md:w-48 bg-gradient-to-r from-[#121212] to-transparent z-10 pointer-events-none" />
                <div className="absolute right-0 top-0 bottom-0 w-24 md:w-48 bg-gradient-to-l from-[#121212] to-transparent z-10 pointer-events-none" />

                <div className="flex" style={{ animation: 'marquee-left 30s linear infinite', willChange: 'transform' }}>
                    {marqueeSkills.map((skill, i) => (
                        <SkillIcon key={`row1-${i}`} skill={skill} />
                    ))}
                </div>
            </div>

            {/* Marquee Row 2 — scrolls right (reversed order) */}
            <div className="relative">
                {/* Edge fades */}
                <div className="absolute left-0 top-0 bottom-0 w-24 md:w-48 bg-gradient-to-r from-[#121212] to-transparent z-10 pointer-events-none" />
                <div className="absolute right-0 top-0 bottom-0 w-24 md:w-48 bg-gradient-to-l from-[#121212] to-transparent z-10 pointer-events-none" />

                <div className="flex" style={{ animation: 'marquee-right 35s linear infinite', willChange: 'transform' }}>
                    {[...marqueeSkills].reverse().map((skill, i) => (
                        <SkillIcon key={`row2-${i}`} skill={skill} />
                    ))}
                </div>
            </div>
        </section>
    );
}
