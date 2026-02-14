"use client";

import { motion, useScroll, useTransform } from "framer-motion";

export default function Overlay() {
    const { scrollYProgress } = useScroll();

    const opacity1 = useTransform(scrollYProgress, [0, 0.2, 0.3], [1, 1, 0]);
    const y1 = useTransform(scrollYProgress, [0, 0.3], [0, -50]);

    const opacity2 = useTransform(scrollYProgress, [0.2, 0.35, 0.5, 0.6], [0, 1, 1, 0]);
    const y2 = useTransform(scrollYProgress, [0.2, 0.6], [50, -50]);

    const opacity3 = useTransform(scrollYProgress, [0.5, 0.65, 0.8, 0.9], [0, 1, 1, 0]);
    const y3 = useTransform(scrollYProgress, [0.5, 0.9], [50, -50]);

    return (
        <div className="absolute inset-0 pointer-events-none z-10 h-[500vh]">
            {/* Section 1 */}
            <motion.div
                style={{ opacity: opacity1, y: y1 }}
                className="sticky top-0 h-screen flex items-center justify-center text-center"
            >
                <div>
                    <h1 className="text-6xl md:text-8xl font-bold tracking-tighter text-white mb-4">
                        Hello, I'm <span className="text-gray-400">Prajwal</span>.
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-500 font-light">AI & Data Science Student.</p>
                </div>
            </motion.div>

            {/* Section 2 */}
            <motion.div
                style={{ opacity: opacity2, y: y2 }}
                className="sticky top-0 h-screen flex items-center justify-start pl-10 md:pl-32"
            >
                <div>
                    <h2 className="text-5xl md:text-7xl font-bold text-white leading-tight">
                        Building <br /> intelligent <br /> systems.
                    </h2>
                </div>
            </motion.div>

            {/* Section 3 */}
            <motion.div
                style={{ opacity: opacity3, y: y3 }}
                className="sticky top-0 h-screen flex items-center justify-end pr-10 md:pr-32 text-right"
            >
                <div>
                    <h2 className="text-5xl md:text-7xl font-bold text-white leading-tight">
                        Solving <br /> real-world <br /> problems.
                    </h2>
                </div>
            </motion.div>
        </div>
    );
}
