import { useRef, useEffect, useState } from "react";
import { useScroll, useMotionValueEvent, useTransform } from "framer-motion";
import { frames } from "@/components/frames";

export default function ScrollyCanvas() {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [images, setImages] = useState<HTMLImageElement[]>([]);
    const [isLoaded, setIsLoaded] = useState(false);

    const { scrollYProgress } = useScroll();

    // Create a transformed motion value that maps scroll progress to frame index
    const frameIndex = useTransform(scrollYProgress, [0, 1], [0, frames.length - 1]);

    useEffect(() => {
        let loadedCount = 0;
        const imgs: HTMLImageElement[] = [];

        frames.forEach((src) => {
            const img = new Image();
            img.src = src;
            img.onload = () => {
                loadedCount++;
                if (loadedCount === frames.length) {
                    setIsLoaded(true);
                }
            };
            imgs.push(img);
        });

        setImages(imgs);
    }, []);

    const renderFrame = (index: number) => {
        const canvas = canvasRef.current;
        if (!canvas || !images[index]) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        const img = images[index];

        // Canvas dimensions
        const cw = canvas.width;
        const ch = canvas.height;

        // Image dimensions
        const iw = img.width;
        const ih = img.height;

        // Calculate aspect ratios
        const targetRatio = cw / ch;
        const imageRatio = iw / ih;

        let sx = 0, sy = 0, sw = iw, sh = ih;

        // Object-fit: cover logic
        if (imageRatio > targetRatio) {
            // Image is wider than canvas
            sw = ih * targetRatio;
            sx = (iw - sw) / 2;
        } else {
            // Image is taller than canvas
            sh = iw / targetRatio;
            sy = (ih - sh) / 2;
        }

        ctx.clearRect(0, 0, cw, ch);
        ctx.drawImage(img, sx, sy, sw, sh, 0, 0, cw, ch);
    };

    useMotionValueEvent(frameIndex, "change", (latest) => {
        if (!isLoaded) return;
        const index = Math.round(latest);
        requestAnimationFrame(() => renderFrame(index));
    });

    // Handle resize and initial render
    useEffect(() => {
        const handleResize = () => {
            if (canvasRef.current) {
                canvasRef.current.width = window.innerWidth;
                canvasRef.current.height = window.innerHeight;
                // Re-render current frame
                if (isLoaded) {
                    const currentProgress = frameIndex.get(); // Might be undefined or 0
                    renderFrame(Math.round(currentProgress || 0));
                }
            }
        };

        window.addEventListener("resize", handleResize);
        handleResize(); // Initial size

        return () => window.removeEventListener("resize", handleResize);
    }, [isLoaded]); // Re-run when loaded to ensure initial frame is drawn

    // Draw first frame when loaded
    useEffect(() => {
        if (isLoaded) {
            renderFrame(0);
        }
    }, [isLoaded]);

    return (
        <div className="h-[500vh] relative">
            <div className="sticky top-0 h-screen w-full overflow-hidden bg-[#121212]">
                <canvas
                    ref={canvasRef}
                    className="block w-full h-full object-cover"
                />
                {/* Loading Indicator */}
                {!isLoaded && (
                    <div className="absolute inset-0 flex items-center justify-center text-white bg-black z-50">
                        <div className="text-2xl font-light animate-pulse">Loading Experience...</div>
                    </div>
                )}
            </div>
        </div>
    );
}
