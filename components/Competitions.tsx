"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Competitions() {
    return (
        <section className="py-24 px-4 md:px-12 bg-[#121212] relative z-20 border-t border-white/5">
            <div className="max-w-7xl mx-auto">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-4xl md:text-6xl font-bold text-white mb-16 text-center"
                >
                    Competitions & Achievements
                </motion.h2>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    whileHover={{ scale: 1.02 }}
                    className="bg-white/5 border border-white/10 rounded-2xl p-8 md:p-12 backdrop-blur-sm hover:bg-white/10 transition-colors"
                >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        <div className="order-2 md:order-1">
                            <div className="flex items-center space-x-4 mb-6">
                                <span className="px-3 py-1 bg-yellow-500/10 text-yellow-500 border border-yellow-500/20 rounded-full text-xs font-bold uppercase tracking-wider">
                                    Participate
                                </span>
                                <span className="text-gray-500 text-sm">December 2025</span>
                            </div>

                            <h3 className="text-3xl font-bold text-white mb-4">
                                Kaggle – Agents Intensive Capstone Project
                            </h3>

                            <p className="text-gray-300 leading-relaxed mb-6">
                                Developed <strong>DataLens-AI</strong> as a competition submission for the 5-Day AI Agents Intensive Course with Google.
                                Implemented AI-driven analytics and insight generation using Gemini API, demonstrating advanced agentic workflows.
                            </p>

                            <a
                                href="https://www.kaggle.com/competitions/agents-intensive-capstone-project/writeups/datalens-ai-intelligent-data-analytics-agent"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center text-white font-medium hover:text-yellow-400 transition-colors"
                            >
                                Read Kaggle Writeup
                                <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </a>
                        </div>

                        <div className="order-1 md:order-2 relative h-64 md:h-80 w-full rounded-xl overflow-hidden border border-white/10 group">
                            {/* User needs to save image as 'kaggle-certificate.png' in public/competitions */}
                            <Image
                                src="/competitions/kaggle.png"
                                alt="Kaggle AI Agents Certificate"
                                fill
                                className="object-contain bg-[#0a0a0a] group-hover:scale-105 transition-transform duration-500"
                            />
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
