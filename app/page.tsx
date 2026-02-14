"use client";

import ScrollyCanvas from "@/components/ScrollyCanvas";
import Overlay from "@/components/Overlay";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Ventures from "@/components/Ventures";
import Competitions from "@/components/Competitions";
import About from "@/components/About";

export default function Home() {
  return (
    <main className="bg-[#121212] min-h-screen text-white">
      <div className="relative">
        <ScrollyCanvas />
        <Overlay />
      </div>
      <Projects />
      <Experience />
      <Ventures />
      <Competitions />
      <About />
      <footer className="py-12 text-center text-gray-600 bg-[#0a0a0a] border-t border-white/5">
        <p className="font-mono text-sm tracking-widest uppercase">
          © {new Date().getFullYear()} Prajwal. Built with Next.js & Canvas.
        </p>
      </footer>
    </main>
  );
}
