"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const projects = [
    {
        title: "DataLens-AI",
        category: "AI Analytics Agent",
        description: "An AI-powered data analytics agent that transforms raw datasets into actionable insights through intelligent analysis and visualization. Features automated data analysis, intelligent visualization, and Gemini API integration.",
        link: "https://huggingface.co/spaces/adinathjagtap/ai-data-analysis-agent",
        github: "https://github.com/prajwalzolage55/DataLens-AI-Intelligent-Data-Analytics-Agent",
        tech: ["Python", "Pandas", "Gemini API", "Streamlit"],
        image: "/projects/datalens.png"
    },
    {
        title: "NanoPDF",
        category: "Web Utility",
        description: "A lightweight web-based PDF compression tool that reduces file size while maintaining document quality. Built with Flask and Vanilla JS for a fast, secure, and drag-and-drop experience.",
        link: "https://nanopdf-3.onrender.com/",
        github: "https://github.com/prajwalzolage55/NanoPDF",
        tech: ["Python", "Flask", "JavaScript", "Bootstrap"],
        image: "/projects/NanoPDF.png"
    },
];

export default function Projects() {
    return (
        <section className="min-h-screen bg-[#121212] py-24 px-4 md:px-12 relative z-20">
            <div className="max-w-7xl mx-auto">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-4xl md:text-6xl font-bold text-white mb-16 text-center"
                >
                    Selected Works
                </motion.h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            whileHover={{ y: -10, transition: { duration: 0.3 } }}
                            className="group relative p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-lg hover:bg-white/10 transition-colors duration-300"
                        >
                            <div className="h-64 mb-6 rounded-lg bg-gradient-to-br from-gray-800 to-black overflow-hidden relative group-hover:shadow-2xl transition-all duration-500">
                                {project.image ? (
                                    <Image
                                        src={project.image}
                                        alt={project.title}
                                        fill
                                        className="object-cover transform group-hover:scale-105 transition-transform duration-500"
                                    />
                                ) : (
                                    <div className="absolute inset-0 flex items-center justify-center text-gray-600 font-mono">
                                        [Project {index + 1} Preview]
                                    </div>
                                )}
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                            <p className="text-gray-400 text-sm uppercase tracking-wide mb-4">{project.category}</p>
                            <p className="text-gray-300 leading-relaxed mb-6">{project.description}</p>

                            <div className="flex flex-wrap gap-2 mb-6">
                                {project.tech.map((tech, i) => (
                                    <span
                                        key={i}
                                        className="px-3 py-1 bg-white/5 rounded-full text-xs font-mono text-blue-400 border border-blue-500/20 hover:bg-blue-500/10 hover:shadow-[0_0_10px_rgba(59,130,246,0.3)] transition-all cursor-default"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>

                            <div className="flex gap-4">
                                {project.link && (
                                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="flex items-center text-white/60 hover:text-white transition-colors">
                                        <span className="text-sm font-medium mr-2">Live Demo</span>
                                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                        </svg>
                                    </a>
                                )}
                                {project.github && (
                                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center text-white/60 hover:text-white transition-colors">
                                        <span className="text-sm font-medium mr-2">GitHub</span>
                                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                            <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                                        </svg>
                                    </a>
                                )}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
