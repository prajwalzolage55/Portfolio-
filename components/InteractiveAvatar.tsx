"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { motion, useMotionValue, useSpring, useTransform, AnimatePresence } from "framer-motion";
import Image from "next/image";

interface InteractiveAvatarProps {
    className?: string;
}

const greetings = [
    "Hey there! I'm Prajwal 👋",
    "Welcome to my portfolio! 🚀",
    "Excited to connect with you! 💡",
    "Building intelligent AI systems! 🧠",
    "Thanks for stopping by! ✨",
];

export default function InteractiveAvatar({ className = "" }: InteractiveAvatarProps) {
    const cardRef = useRef<HTMLDivElement>(null);
    const [isWaving, setIsWaving] = useState(false);
    const [speechIndex, setSpeechIndex] = useState(0);

    // 3D Motion values for smooth cursor tracking in 3D space
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseX = useSpring(x, { stiffness: 300, damping: 25 });
    const mouseY = useSpring(y, { stiffness: 300, damping: 25 });

    // 3D Perspective Rotations
    const rotateX = useTransform(mouseY, [-250, 250], [9, -9]);
    const rotateY = useTransform(mouseX, [-250, 250], [-11, 11]);

    // Dynamic light reflection coordinates
    const glareX = useTransform(mouseX, [-250, 250], ["0%", "100%"]);
    const glareY = useTransform(mouseY, [-250, 250], ["0%", "100%"]);

    // Parallax depth offset for floating speech bubble
    const badgeX = useTransform(mouseX, [-250, 250], [-6, 6]);
    const badgeY = useTransform(mouseY, [-250, 250], [-6, 6]);

    // Preload images for instant smooth transitions
    useEffect(() => {
        const frameImages = [
            "/avatar/avatar-idle.jpg",
            "/avatar/avatar-wave-1.jpg",
        ];
        frameImages.forEach((src) => {
            const img = new window.Image();
            img.src = src;
        });
    }, []);

    // Smooth Wave Trigger
    const triggerWave = useCallback(() => {
        setIsWaving(true);
        setSpeechIndex((prev) => (prev + 1) % greetings.length);

        // Stay waving for 3.2 seconds then smoothly ease back into coding
        const timer = setTimeout(() => {
            setIsWaving(false);
        }, 3200);

        return () => clearTimeout(timer);
    }, []);

    // Automatic Hand Wave Every 10 Seconds
    useEffect(() => {
        // Initial friendly greeting after 1.5s
        const initialTimer = setTimeout(() => {
            triggerWave();
        }, 1500);

        // Recurring smooth wave every 10 seconds
        const recurringWave = setInterval(() => {
            triggerWave();
        }, 10000);

        return () => {
            clearTimeout(initialTimer);
            clearInterval(recurringWave);
        };
    }, [triggerWave]);

    // Handle Mouse Move for 3D Space Parallax
    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!cardRef.current) return;
        const rect = cardRef.current.getBoundingClientRect();
        const clientX = e.clientX - rect.left - rect.width / 2;
        const clientY = e.clientY - rect.top - rect.height / 2;
        x.set(clientX);
        y.set(clientY);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <div
            className={`relative flex items-center justify-center w-full select-none ${className}`}
            style={{ perspective: 1200 }}
        >
            {/* Ambient Room Lighting Glow */}
            <div className="absolute inset-0 max-w-md mx-auto rounded-3xl bg-gradient-to-tr from-purple-600/25 via-amber-500/15 to-blue-600/20 blur-3xl -z-10 opacity-70" />

            {/* 3D Motion Container with Gentle Organic Breathing */}
            <motion.div
                ref={cardRef}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                onClick={triggerWave}
                style={{
                    rotateX,
                    rotateY,
                    transformStyle: "preserve-3d",
                }}
                animate={{
                    y: [0, -5, 0],
                }}
                transition={{
                    y: {
                        duration: 4.5,
                        repeat: Infinity,
                        ease: "easeInOut",
                    },
                }}
                whileHover={{ scale: 1.02 }}
                className="relative w-full max-w-md aspect-square rounded-3xl overflow-hidden cursor-pointer border border-white/15 bg-[#121217] shadow-2xl group hover:border-amber-400/40 transition-colors duration-300"
            >
                {/* BASE LAYER: FOCUSED CODING POSE */}
                <div className="absolute inset-0">
                    <Image
                        src="/avatar/avatar-idle.jpg"
                        alt="Prajwal Zolage - AI Developer Coding at Desk"
                        fill
                        priority
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                </div>

                {/* OVERLAY LAYER: FRIENDLY WAVING POSE (SMOOTH 750ms DISSOLVE) */}
                <motion.div
                    className="absolute inset-0 pointer-events-none"
                    initial={{ opacity: 0 }}
                    animate={{
                        opacity: isWaving ? 1 : 0,
                    }}
                    transition={{
                        duration: 0.75,
                        ease: [0.4, 0, 0.2, 1], // Custom smooth cubic-bezier
                    }}
                >
                    <Image
                        src="/avatar/avatar-wave-1.jpg"
                        alt="Prajwal Zolage Waving Hand to Say Hi"
                        fill
                        priority
                        className="object-cover"
                    />
                </motion.div>

                {/* Dynamic Specular Sheen (Moves organically with cursor across 3D space) */}
                <motion.div
                    className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500 mix-blend-overlay"
                    style={{
                        background: useTransform(
                            [glareX, glareY],
                            ([gx, gy]) =>
                                `radial-gradient(circle 350px at ${gx} ${gy}, rgba(255, 255, 255, 0.22), transparent 70%)`
                        ),
                    }}
                />

                {/* Dynamic Floating Speech Bubble */}
                <AnimatePresence>
                    {isWaving && (
                        <motion.div
                            initial={{ opacity: 0, y: -12, scale: 0.9 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: -8, scale: 0.95 }}
                            transition={{ type: "spring", damping: 22, stiffness: 320 }}
                            style={{
                                x: badgeX,
                                y: badgeY,
                                transformStyle: "preserve-3d",
                                transform: "translateZ(45px)",
                            }}
                            className="absolute top-4 left-4 right-4 z-30 flex justify-center pointer-events-none"
                        >
                            <div className="relative px-4 py-2 rounded-2xl bg-black/85 backdrop-blur-md border border-amber-400/40 text-amber-300 shadow-[0_0_25px_rgba(245,158,11,0.35)] text-xs sm:text-sm font-semibold flex items-center space-x-2">
                                <span className="text-base animate-bounce">👋</span>
                                <span>{greetings[speechIndex]}</span>
                                {/* Speech pointer */}
                                <div className="absolute -bottom-1.5 left-1/2 transform -translate-x-1/2 w-3 h-3 bg-black/85 border-r border-b border-amber-400/40 rotate-45" />
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* Bottom Interactive Control Bar */}
                <div
                    style={{
                        transform: "translateZ(35px)",
                    }}
                    className="absolute bottom-4 left-4 right-4 z-20 flex items-center justify-between"
                >
                    {/* Interactive Wave Button */}
                    <button
                        type="button"
                        onClick={(e) => {
                            e.stopPropagation();
                            triggerWave();
                        }}
                        className={`px-4 py-2 rounded-full text-xs font-mono font-bold tracking-wide flex items-center space-x-2 transition-all duration-300 ${
                            isWaving
                                ? "bg-amber-400 text-black shadow-[0_0_20px_rgba(245,158,11,0.6)] scale-105"
                                : "bg-black/70 hover:bg-black/90 text-white border border-white/20 backdrop-blur-md hover:border-amber-400/50"
                        }`}
                        aria-label="Make Prajwal wave his hand"
                    >
                        <span className={`text-sm ${isWaving ? "animate-bounce" : ""}`}>👋</span>
                        <span>{isWaving ? "Waving back!" : "Say Hi to Me!"}</span>
                    </button>

                    {/* Status Badge */}
                    <div className="px-3 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-[11px] font-mono text-gray-300 hidden sm:flex items-center space-x-2">
                        <span className={`w-2 h-2 rounded-full transition-colors duration-300 ${isWaving ? "bg-amber-400 animate-ping" : "bg-emerald-400"}`} />
                        <span>{isWaving ? "Saying Hi!" : "Coding with AI"}</span>
                    </div>
                </div>

                {/* Subtle Click Hint on Hover */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                    <span className="px-3 py-1 rounded-full bg-black/60 backdrop-blur-sm text-[11px] font-mono text-amber-200 border border-amber-400/20">
                        ✨ Click to wave!
                    </span>
                </div>
            </motion.div>
        </div>
    );
}
