"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

interface CompetitionItem {
    id: string;
    title: string;
    position: string;
    positionBadgeClass: string;
    event: string;
    date: string;
    subtitle: string;
    description: string;
    highlights: string[];
    tags: string[];
    image: string;
    imageAlt: string;
    link?: {
        url: string;
        label: string;
    };
    secondaryLink?: {
        url: string;
        label: string;
    };
    recognitionBadge?: string;
}

const competitionsData: CompetitionItem[] = [
    {
        id: "reverse-coding-2026",
        title: "Reverse Coding Competition",
        position: "🥈 2nd Position",
        positionBadgeClass: "bg-amber-500/10 text-amber-400 border-amber-500/30 shadow-[0_0_15px_rgba(245,158,11,0.15)]",
        event: "Avalon Techfest 2026 • Terna Engineering College",
        date: "2026",
        subtitle: "Outstanding Analytical Thinking, Logical Reasoning & Advanced Problem-Solving",
        description:
            "Awarded Second Position in the high-intensity Reverse Coding Competition at Avalon Techfest 2026, organized by Terna Engineering College (recognized by MoE's Innovation Cell & Institution's Innovation Council). Recognized for exceptional algorithmic reverse engineering — deciphering executable black-box binaries, uncovering complex hidden logic and edge cases from dynamic input-output observations, and reconstructing the optimal source code under strict competition time constraints.",
        highlights: [
            "Deciphered black-box program logic and data transformations without source code",
            "Demonstrated superior analytical deduction, edge-case analysis, and algorithmic reasoning",
            "Re-engineered and implemented optimal solutions rapidly under competitive pressure"
        ],
        tags: ["Reverse Coding", "Problem Solving", "Algorithm Deduction", "C / C++", "Python", "Logic & Reasoning"],
        image: "/competitions/reverse-coding-avalon.jpg",
        imageAlt: "Reverse Coding Competition 2nd Position Certificate of Appreciation - Prajwal Zolage, Avalon Techfest 2026",
        recognitionBadge: "MoE's Innovation Cell & IIC Recognized"
    },
    {
        id: "kaggle-ai-agents-2025",
        title: "Kaggle – Agents Intensive Capstone Project",
        position: "🤖 Capstone Submission",
        positionBadgeClass: "bg-blue-500/10 text-blue-400 border-blue-500/30 shadow-[0_0_15px_rgba(59,130,246,0.15)]",
        event: "Google & Kaggle AI Agents Intensive",
        date: "December 2025",
        subtitle: "DataLens-AI: Intelligent Data Analytics Agent",
        description:
            "Architected and deployed DataLens-AI as a featured competition capstone project for the 5-Day AI Agents Intensive Course with Google on Kaggle. Engineered an end-to-end intelligent agent utilizing Gemini API to automate exploratory data analysis (EDA), generate structured statistical insights, and create dynamic visualizations through autonomous multi-agent workflows.",
        highlights: [
            "Autonomous multi-step analytical reasoning powered by Gemini API",
            "Automated exploratory data analysis, dataset profiling, and chart generation",
            "Published in-depth technical competition writeup on Kaggle"
        ],
        tags: ["AI Agents", "Gemini API", "Kaggle", "Data Analytics", "Python", "Pandas", "Flask"],
        image: "/competitions/kaggle.png",
        imageAlt: "Kaggle AI Agents Intensive Capstone Submission Certificate",
        link: {
            url: "https://www.kaggle.com/competitions/agents-intensive-capstone-project/writeups/datalens-ai-intelligent-data-analytics-agent",
            label: "Read Kaggle Writeup"
        },
        secondaryLink: {
            url: "https://datalens-v2-tu98.onrender.com/",
            label: "Live Demo"
        }
    }
];

export default function Competitions() {
    const [selectedImage, setSelectedImage] = useState<{ src: string; alt: string; title: string } | null>(null);

    // Close modal on Escape key press
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Escape") {
                setSelectedImage(null);
            }
        };
        if (selectedImage) {
            window.addEventListener("keydown", handleKeyDown);
            document.body.style.overflow = "hidden";
        }
        return () => {
            window.removeEventListener("keydown", handleKeyDown);
            document.body.style.overflow = "unset";
        };
    }, [selectedImage]);

    return (
        <section id="competitions" aria-label="Competitions and Achievements" className="py-24 px-4 md:px-12 bg-[#121212] relative z-20 border-t border-white/5">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-mono uppercase tracking-widest mb-4"
                    >
                        <span>🏆 Recognition & Hackathons</span>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-4xl md:text-6xl font-bold text-white tracking-tight"
                    >
                        Competitions & Achievements
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="mt-4 text-gray-400 max-w-2xl mx-auto text-base md:text-lg"
                    >
                        Demonstrated problem solving, algorithmic reverse engineering, and practical AI system development in competitive arenas.
                    </motion.p>
                </div>

                <div className="space-y-12">
                    {competitionsData.map((item, index) => (
                        <motion.div
                            key={item.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.15 }}
                            viewport={{ once: true }}
                            className="group relative rounded-2xl bg-white/[0.03] border border-white/10 hover:border-white/20 backdrop-blur-md p-6 sm:p-8 md:p-12 transition-all duration-300 hover:bg-white/[0.05]"
                        >
                            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                                {/* Left Content Column */}
                                <div className="lg:col-span-7 order-2 lg:order-1 flex flex-col justify-between">
                                    <div>
                                        {/* Badges & Meta */}
                                        <div className="flex flex-wrap items-center gap-3 mb-4">
                                            <span className={`px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider border ${item.positionBadgeClass}`}>
                                                {item.position}
                                            </span>
                                            {item.recognitionBadge && (
                                                <span className="px-3 py-1 rounded-full text-xs font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                                                    {item.recognitionBadge}
                                                </span>
                                            )}
                                            <span className="text-gray-400 text-xs font-mono ml-auto">
                                                {item.date}
                                            </span>
                                        </div>

                                        {/* Title & Event */}
                                        <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2 tracking-tight group-hover:text-amber-300/90 transition-colors">
                                            {item.title}
                                        </h3>
                                        <p className="text-amber-400/90 font-medium text-sm sm:text-base mb-1">
                                            {item.event}
                                        </p>
                                        <p className="text-gray-400 text-sm italic mb-5">
                                            {item.subtitle}
                                        </p>

                                        {/* Description */}
                                        <p className="text-gray-300 leading-relaxed text-sm sm:text-base mb-6">
                                            {item.description}
                                        </p>

                                        {/* Key Highlights */}
                                        <div className="mb-6 space-y-2">
                                            <h4 className="text-xs uppercase tracking-wider text-gray-400 font-mono font-semibold">
                                                Key Highlights
                                            </h4>
                                            <ul className="space-y-1.5 text-sm text-gray-300">
                                                {item.highlights.map((highlight, hIdx) => (
                                                    <li key={hIdx} className="flex items-start">
                                                        <span className="text-amber-400 mr-2.5 mt-0.5 text-xs">▹</span>
                                                        <span>{highlight}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>

                                        {/* Tech Tags */}
                                        <div className="flex flex-wrap gap-2 mb-8">
                                            {item.tags.map((tag, tIdx) => (
                                                <span
                                                    key={tIdx}
                                                    className="px-2.5 py-1 bg-white/5 rounded-md text-xs font-mono text-gray-300 border border-white/5 hover:border-amber-400/30 transition-colors"
                                                >
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Action Links & Certificate Button */}
                                    <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-white/5">
                                        <button
                                            type="button"
                                            onClick={() => setSelectedImage({ src: item.image, alt: item.imageAlt, title: item.title })}
                                            className="px-4 py-2.5 rounded-lg bg-white/10 hover:bg-white/20 text-white font-medium text-sm flex items-center transition-all border border-white/10 hover:border-white/25 active:scale-95"
                                        >
                                            <svg className="w-4 h-4 mr-2 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                            </svg>
                                            View Full Certificate
                                        </button>

                                        {item.link && (
                                            <a
                                                href={item.link.url}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="px-4 py-2.5 rounded-lg bg-amber-500/10 hover:bg-amber-500/20 text-amber-300 font-medium text-sm flex items-center border border-amber-500/30 transition-all hover:shadow-[0_0_15px_rgba(245,158,11,0.2)]"
                                            >
                                                {item.link.label}
                                                <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                                </svg>
                                            </a>
                                        )}

                                        {item.secondaryLink && (
                                            <a
                                                href={item.secondaryLink.url}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="px-4 py-2.5 rounded-lg bg-white/5 hover:bg-white/10 text-gray-300 hover:text-white font-medium text-sm flex items-center border border-white/10 transition-colors"
                                            >
                                                {item.secondaryLink.label}
                                                <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                                </svg>
                                            </a>
                                        )}
                                    </div>
                                </div>

                                {/* Right Visual Column (Certificate Card) */}
                                <div className="lg:col-span-5 order-1 lg:order-2">
                                    <div
                                        onClick={() => setSelectedImage({ src: item.image, alt: item.imageAlt, title: item.title })}
                                        className="relative group/cert cursor-pointer rounded-xl overflow-hidden border border-white/15 bg-[#0a0a0a] shadow-2xl transition-all duration-300 hover:border-amber-400/40 hover:shadow-[0_0_30px_rgba(245,158,11,0.15)]"
                                    >
                                        <div className="relative h-64 sm:h-72 md:h-80 w-full p-2">
                                            <Image
                                                src={item.image}
                                                alt={item.imageAlt}
                                                fill
                                                className="object-contain p-2 group-hover/cert:scale-[1.03] transition-transform duration-500"
                                            />
                                        </div>

                                        {/* Hover Overlay with Inspect Hint */}
                                        <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px] opacity-0 group-hover/cert:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-4 text-center">
                                            <div className="w-12 h-12 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/40 flex items-center justify-center mb-3 transform -translate-y-2 group-hover/cert:translate-y-0 transition-transform duration-300">
                                                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                                                </svg>
                                            </div>
                                            <p className="text-white font-medium text-sm">Click to expand certificate</p>
                                            <p className="text-gray-400 text-xs mt-1">High-resolution verification preview</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* High-Resolution Certificate Lightbox Modal */}
            <AnimatePresence>
                {selectedImage && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedImage(null)}
                        className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 md:p-10 cursor-zoom-out"
                    >
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            transition={{ type: "spring", damping: 25, stiffness: 300 }}
                            onClick={(e) => e.stopPropagation()}
                            className="relative max-w-5xl w-full bg-[#161616] border border-white/20 rounded-2xl overflow-hidden shadow-2xl cursor-default"
                        >
                            {/* Modal Header */}
                            <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-[#121212]">
                                <div>
                                    <h3 className="text-lg font-bold text-white">{selectedImage.title}</h3>
                                    <p className="text-xs text-gray-400">Official Certificate & Verification Document</p>
                                </div>
                                <button
                                    type="button"
                                    onClick={() => setSelectedImage(null)}
                                    className="p-2 rounded-lg text-gray-400 hover:text-white hover:bg-white/10 transition-colors"
                                    aria-label="Close certificate modal"
                                >
                                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </button>
                            </div>

                            {/* Modal Image Body */}
                            <div className="relative w-full h-[60vh] sm:h-[70vh] md:h-[75vh] bg-[#0a0a0a] p-4 sm:p-6 flex items-center justify-center">
                                <Image
                                    src={selectedImage.src}
                                    alt={selectedImage.alt}
                                    fill
                                    className="object-contain p-2"
                                    priority
                                />
                            </div>

                            {/* Modal Footer */}
                            <div className="flex flex-wrap items-center justify-between px-6 py-3 border-t border-white/10 bg-[#121212] text-xs text-gray-400">
                                <span>Press <kbd className="px-1.5 py-0.5 rounded bg-white/10 text-gray-300 font-mono">ESC</kbd> or click outside to dismiss</span>
                                <a
                                    href={selectedImage.src}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-amber-400 hover:text-amber-300 font-medium flex items-center"
                                >
                                    Open original image in new tab
                                    <svg className="w-3.5 h-3.5 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                    </svg>
                                </a>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}
