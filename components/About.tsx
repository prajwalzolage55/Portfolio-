"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function About() {
    return (
        <section id="about" aria-label="About Me" className="min-h-screen bg-[#121212] py-24 px-4 md:px-12 relative z-20 border-t border-white/5">
            <div className="max-w-7xl mx-auto">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-4xl md:text-6xl font-bold text-white mb-16 text-center"
                >
                    About Me
                </motion.h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                    {/* Bio & Education */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <div className="mb-12">
                            <h3 className="text-2xl font-bold text-white mb-6">Bio</h3>
                            <p className="text-gray-300 leading-relaxed text-lg">
                                AI and Data Science enthusiast focused on building intelligent, scalable systems.
                                Interested in Machine Learning and Deep Learning applications that solve real-world problems.
                                Passionate about turning complex data into meaningful solutions through smart engineering.
                            </p>
                            <p className="text-gray-400 mt-4 italic">
                                Based in Roha, Raigad, Maharashtra, India.
                            </p>
                        </div>

                        <div>
                            <h3 className="text-2xl font-bold text-white mb-6">Education</h3>
                            <div className="bg-white/5 p-6 rounded-xl border border-white/10 backdrop-blur-sm">
                                <h4 className="text-xl font-semibold text-white">BE in AI & Data Science</h4>
                                <p className="text-gray-400">Terna Engineering College, Nerul</p>
                                <div className="flex justify-between items-center mt-2 text-sm text-gray-500">
                                    <span>3rd Year Student</span>
                                    <span>CGPA: 8.94 (1st Year)</span>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Profile Image */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="flex justify-center items-center"
                    >
                        <div className="w-72 h-72 md:w-96 md:h-96 rounded-3xl bg-white/5 border border-white/10 flex items-center justify-center overflow-hidden relative shadow-2xl group hover:border-white/20 transition-all duration-300">
                            <Image
                                src="/profile.jpg"
                                alt="Prajwal Zolage"
                                fill
                                className="object-cover group-hover:scale-105 transition-transform duration-500"
                                priority
                            />
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
