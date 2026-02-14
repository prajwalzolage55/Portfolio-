"use client";

import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";

export default function Experience() {
    return (
        <section className="py-24 px-4 md:px-12 bg-[#121212] relative z-20 border-t border-white/5">
            <div className="max-w-7xl mx-auto">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-4xl md:text-6xl font-bold text-white mb-16 text-center"
                >
                    Community & Leadership
                </motion.h2>

                <TiltCard delay={0.2}>
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
                        <div>
                            <h3 className="text-3xl font-bold text-white mb-2">Syntax Syndicate</h3>
                            <p className="text-xl text-gray-400">Core Member</p>
                        </div>
                        <div className="mt-4 md:mt-0">
                            <span className="px-4 py-2 bg-blue-500/10 text-blue-400 border border-blue-500/20 rounded-full text-sm font-medium shadow-[0_0_15px_rgba(59,130,246,0.3)]">
                                Student-Driven Tech Community
                            </span>
                        </div>
                    </div>


                    <p className="text-gray-300 leading-relaxed text-lg mb-8">
                        Active core member of a student-driven technology community focused on collaboration, innovation, and peer learning.
                        Dedicated to bridging the gap between academic theory and practical software development.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                        <div>
                            <h4 className="text-lg font-semibold text-white mb-4">Key Responsibilities</h4>
                            <ul className="space-y-3 text-gray-400">
                                <li className="flex items-start">
                                    <span className="mr-3 text-blue-500">•</span>
                                    Organizing technical events and workshops.
                                </li>
                                <li className="flex items-start">
                                    <span className="mr-3 text-blue-500">•</span>
                                    Collaborating on open-source development projects.
                                </li>
                                <li className="flex items-start">
                                    <span className="mr-3 text-blue-500">•</span>
                                    Creating engineering study materials and notes.
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="text-lg font-semibold text-white mb-4">Focus Areas</h4>
                            <div className="flex flex-wrap gap-2">
                                {["AI & ML", "Web Development", "Peer Learning", "Open Source"].map((tag, i) => (
                                    <span key={i} className="px-3 py-1 bg-white/5 rounded-lg text-sm text-gray-400 border border-white/5">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-wrap gap-4 pt-6 border-t border-white/10">
                        <a
                            href="https://syntaxsyndicate.co.in/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center text-white/70 hover:text-white transition-colors"
                        >
                            <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                            </svg>
                            syntaxsyndicate.co.in
                        </a>
                        <a
                            href="https://github.com/Syntax-Syndicate-Ltd"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center text-white/70 hover:text-white transition-colors"
                        >
                            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                            </svg>
                            GitHub
                        </a>
                    </div>
                </TiltCard>

                <TiltCard delay={0.4} className="mt-8">
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
                        <div>
                            <h3 className="text-3xl font-bold text-white mb-2">Avalon</h3>
                            <p className="text-xl text-gray-400">Event Execution Member</p>
                        </div>
                        <div className="mt-4 md:mt-0">
                            <span className="px-4 py-2 bg-purple-500/10 text-purple-400 border border-purple-500/20 rounded-full text-sm font-medium shadow-[0_0_15px_rgba(168,85,247,0.3)]">
                                Tech Committee
                            </span>
                        </div>
                    </div>

                    <p className="text-gray-300 leading-relaxed text-lg mb-8">
                        Active member of Avalon, the official tech committee of Terna Engineering College, contributing to the planning and execution of technical events and initiatives.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                        <div>
                            <h4 className="text-lg font-semibold text-white mb-4">Key Responsibilities</h4>
                            <ul className="space-y-3 text-gray-400">
                                <li className="flex items-start">
                                    <span className="mr-3 text-purple-500">•</span>
                                    Collaborating with team members for smooth event coordination.
                                </li>
                                <li className="flex items-start">
                                    <span className="mr-3 text-purple-500">•</span>
                                    Managing participant engagement and technical operations.
                                </li>
                                <li className="flex items-start">
                                    <span className="mr-3 text-purple-500">•</span>
                                    Planning and executing technical events.
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="text-lg font-semibold text-white mb-4">Focus Areas</h4>
                            <div className="flex flex-wrap gap-2">
                                {["Event Management", "Technical Operations", "Team Collaboration"].map((tag, i) => (
                                    <span key={i} className="px-3 py-1 bg-white/5 rounded-lg text-sm text-gray-400 border border-white/5 hover:bg-white/10 transition-colors">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-wrap gap-4 pt-6 border-t border-white/10">
                        <a
                            href="https://www.avalontechfest.in/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center text-white/70 hover:text-white transition-colors group/link"
                        >
                            <svg className="w-5 h-5 mr-2 transform group-hover/link:scale-110 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                            </svg>
                            avalontechfest.in
                        </a>
                    </div>
                </TiltCard>
            </div>
        </section>
    );
}

function TiltCard({ children, delay = 0, className = "" }: { children: React.ReactNode, delay?: number, className?: string }) {
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseX = useSpring(x, { stiffness: 500, damping: 100 });
    const mouseY = useSpring(y, { stiffness: 500, damping: 100 });

    function onMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
        const { left, top, width, height } = currentTarget.getBoundingClientRect();
        x.set(clientX - left - width / 2);
        y.set(clientY - top - height / 2);
    }

    function onMouseLeave() {
        x.set(0);
        y.set(0);
    }

    const rotateX = useTransform(mouseY, [-0.5, 0.5], ["17.5deg", "-17.5deg"]);
    const rotateY = useTransform(mouseX, [-0.5, 0.5], ["-17.5deg", "17.5deg"]);

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay }}
            onMouseMove={onMouseMove}
            onMouseLeave={onMouseLeave}
            style={{
                perspective: 1000,
            }}
            className={`relative ${className}`}
        >
            <motion.div
                style={{
                    rotateX: useTransform(mouseY, [-400, 400], [5, -5]),
                    rotateY: useTransform(mouseX, [-400, 400], [-5, 5]),
                }}
                className="relative p-8 md:p-12 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm transition-colors overflow-hidden"
            >
                {/* Glow Effect */}
                <motion.div
                    style={{
                        background: useTransform(
                            mouseX,
                            [-400, 400],
                            [
                                "radial-gradient(600px circle at 0px 0px, rgba(255,255,255,0.06), transparent 40%)",
                                "radial-gradient(600px circle at 800px 0px, rgba(255,255,255,0.06), transparent 40%)"
                            ]
                        ),
                    }}
                    className="absolute inset-0 z-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                />
                {/* Moving spotlight/gradient */}
                <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{
                        background: "radial-gradient(600px at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(255, 255, 255, 0.06), transparent 40%)"
                    }}
                />

                <div className="relative z-10">
                    {children}
                </div>
            </motion.div>
        </motion.div>
    );
}

