"use client";

import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import Image from "next/image";

export default function Ventures() {
    return (
        <section className="py-24 px-4 md:px-12 bg-[#121212] relative z-20 border-t border-white/5">
            <div className="max-w-7xl mx-auto">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-4xl md:text-6xl font-bold text-white mb-16 text-center"
                >
                    Entrepreneurship
                </motion.h2>

                <TiltCard delay={0.2} className="bg-[#1a1a1a]">
                    <div className="absolute top-0 right-0 p-4 opacity-10 md:opacity-20 pointer-events-none">
                        {/* Decorative background logo if needed */}
                    </div>

                    <div className="flex flex-col md:flex-row gap-12 items-center">

                        {/* Visual Side */}
                        <div className="w-full md:w-1/2 relative">
                            <div className="relative h-64 md:h-80 w-full rounded-xl overflow-hidden border border-white/10 shadow-2xl group-hover:shadow-orange-500/10 transition-shadow duration-500">
                                {/* Website Screenshot */}
                                <Image
                                    src="/ventures/chavmayechi-site.png"
                                    alt="Chav Mayechi Foods Website"
                                    fill
                                    className="object-cover object-top hover:scale-105 transition-transform duration-700"
                                />
                            </div>
                            {/* Logo Overlay */}
                            <div className="absolute -bottom-6 -right-6 w-24 h-24 md:w-32 md:h-32 bg-white rounded-full p-2 shadow-xl border-4 border-[#1a1a1a]">
                                <div className="relative w-full h-full rounded-full overflow-hidden">
                                    <Image
                                        src="/ventures/chavmayechi-logo.png"
                                        alt="Chav Mayechi Logo"
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Content Side */}
                        <div className="w-full md:w-1/2">
                            <div className="flex items-center space-x-3 mb-4">
                                <span className="px-3 py-1 bg-orange-500/10 text-orange-500 border border-orange-500/20 rounded-full text-xs font-bold uppercase tracking-wider">
                                    Founder
                                </span>
                                <span className="text-gray-500 text-sm">Est. 2025</span>
                            </div>

                            <h3 className="text-3xl md:text-4xl font-bold text-white mb-2">
                                Chav Mayechi Foods
                            </h3>
                            <p className="text-gray-400 text-lg mb-6">Homemade Maharashtrian Food Brand</p>

                            <p className="text-gray-300 leading-relaxed mb-6">
                                Dedicated to preserving authentic traditional recipes and delivering natural, preservative-free products.
                                Built and managed the brand’s digital presence, product strategy, and online customer engagement while maintaining traditional quality standards.
                            </p>

                            <div className="flex flex-wrap gap-4 mt-8">
                                <a
                                    href="https://chavmayechi.netlify.app/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="px-6 py-3 bg-orange-600 hover:bg-orange-700 text-white rounded-lg font-medium transition-colors flex items-center"
                                >
                                    Visit Website
                                    <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                    </svg>
                                </a>
                                <a
                                    href="https://www.instagram.com/chavmaychi_foods"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="px-6 py-3 bg-white/5 hover:bg-white/10 text-white border border-white/10 rounded-lg font-medium transition-colors flex items-center"
                                >
                                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                                    </svg>
                                    Instagram
                                </a>
                            </div>
                        </div>
                    </div>
                </TiltCard>

                <TiltCard delay={0.4} className="mt-16 bg-[#1a1a1a]">
                    <div className="absolute top-0 right-0 p-4 opacity-10 md:opacity-20 pointer-events-none">
                        {/* Decorative background logo if needed */}
                    </div>

                    <div className="flex flex-col md:flex-row-reverse gap-12 items-center">

                        {/* Visual Side */}
                        <div className="w-full md:w-1/2 relative">
                            <div className="relative h-96 md:h-[500px] w-full rounded-xl overflow-hidden border border-white/10 shadow-2xl group-hover:shadow-pink-500/10 transition-shadow duration-500 bg-[#2a2a2a]">
                                {/* Website/Product Screenshot - Blurred Background */}
                                <Image
                                    src="/ventures/craft-creation-site.png"
                                    alt="Background"
                                    fill
                                    className="object-cover blur-md opacity-50 scale-110"
                                />
                                {/* Website/Product Screenshot - Main Image */}
                                <Image
                                    src="/ventures/craft-creation-site.png"
                                    alt="Craft With Creation Products"
                                    fill
                                    className="object-contain hover:scale-105 transition-transform duration-700 z-10"
                                />
                            </div>
                            {/* Logo Overlay */}
                            <div className="absolute -bottom-6 -left-6 w-24 h-24 md:w-32 md:h-32 bg-white rounded-full p-2 shadow-xl border-4 border-[#1a1a1a]">
                                <div className="relative w-full h-full rounded-full overflow-hidden">
                                    <Image
                                        src="/ventures/craft-creation-logo.png"
                                        alt="Craft With Creation Logo"
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Content Side */}
                        <div className="w-full md:w-1/2">
                            <div className="flex items-center space-x-3 mb-4">
                                <span className="px-3 py-1 bg-pink-500/10 text-pink-500 border border-pink-500/20 rounded-full text-xs font-bold uppercase tracking-wider">
                                    Co-Founder
                                </span>
                                <span className="text-gray-500 text-sm">Creative & Customized Gifts</span>
                            </div>

                            <h3 className="text-3xl md:text-4xl font-bold text-white mb-2">
                                Craft With Creation
                            </h3>
                            <p className="text-gray-400 text-lg mb-6">Handmade & Personalized Gifting Brand</p>

                            <p className="text-gray-300 leading-relaxed mb-6">
                                Co-Founder of a creative brand specializing in customized handmade products like explosion boxes, photo frames, and event hampers.
                                Actively involved in product design, brand strategy, customer engagement, and digital marketing.
                            </p>

                            <div className="flex flex-wrap gap-2 mb-8">
                                {["Custom Gift Boxes", "Explosion Boxes", "Event Hampers", "DIY Products"].map((tag, i) => (
                                    <span key={i} className="px-3 py-1 bg-white/5 rounded-lg text-sm text-gray-400 border border-white/5">
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            <div className="flex flex-wrap gap-4">
                                <a
                                    href="https://www.instagram.com/craft_with_creation"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="px-6 py-3 bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white rounded-lg font-medium transition-all flex items-center shadow-lg shadow-pink-500/20"
                                >
                                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                                    </svg>
                                    Visit Instagram
                                </a>
                            </div>
                        </div>
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
                className="group relative p-8 md:p-12 rounded-2xl bg-[#1a1a1a] border border-white/10 backdrop-blur-sm transition-colors overflow-hidden"
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
