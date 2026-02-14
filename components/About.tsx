"use client";

import { motion } from "framer-motion";

export default function About() {
    const skills = [
        "Python", "C", "HTML/CSS", "JavaScript",
        "Flask", "Next.js", "React",
        "NumPy", "Pandas", "Matplotlib", "MySQL"
    ];

    return (
        <section className="min-h-screen bg-[#121212] py-24 px-4 md:px-12 relative z-20 border-t border-white/5">
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
                                    <span>2nd Year Student</span>
                                    <span>CGPA: 9.4 (1st Year)</span>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Skills & Contact */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                    >
                        <div className="mb-12">
                            <h3 className="text-2xl font-bold text-white mb-6">Technical Skills</h3>
                            <div className="flex flex-wrap gap-3">
                                {skills.map((skill, index) => (
                                    <motion.span
                                        key={index}
                                        whileHover={{ scale: 1.1, textShadow: "0 0 8px rgb(255, 255, 255)" }}
                                        className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-gray-300 text-sm hover:bg-white/10 hover:text-white hover:border-white/30 transition-all cursor-default"
                                    >
                                        {skill}
                                    </motion.span>
                                ))}
                            </div>
                        </div>

                        <div>
                            <h3 className="text-2xl font-bold text-white mb-6">Connect</h3>
                            <div className="space-y-4">
                                <a href="mailto:prajwalzolage55@gmail.com" className="relative group overflow-hidden flex items-center text-gray-300 hover:text-white transition-colors p-4 bg-white/5 rounded-xl border border-white/10">
                                    <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                                    <svg className="w-5 h-5 mr-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                    prajwalzolage55@gmail.com
                                </a>
                                <a href="https://www.linkedin.com/in/prajwal-zolage-82ab10347" target="_blank" rel="noopener noreferrer" className="relative group overflow-hidden flex items-center text-gray-300 hover:text-white transition-colors p-4 bg-white/5 rounded-xl border border-white/10">
                                    <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                                    <svg className="w-5 h-5 mr-4" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                                    </svg>
                                    LinkedIn Profile
                                </a>
                                <a href="https://github.com/prajwalzolage55" target="_blank" rel="noopener noreferrer" className="relative group overflow-hidden flex items-center text-gray-300 hover:text-white transition-colors p-4 bg-white/5 rounded-xl border border-white/10">
                                    <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                                    <svg className="w-5 h-5 mr-4" fill="currentColor" viewBox="0 0 24 24">
                                        <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                                    </svg>
                                    GitHub Profile
                                </a>
                                <a href="https://www.instagram.com/prajwal__0506?igsh=aHo4eWUzejd6dmhj" target="_blank" rel="noopener noreferrer" className="relative group overflow-hidden flex items-center text-gray-300 hover:text-white transition-colors p-4 bg-white/5 rounded-xl border border-white/10">
                                    <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                                    <svg className="w-5 h-5 mr-4" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                                    </svg>
                                    Instagram Profile
                                </a>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
