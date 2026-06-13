"use client";

import ScrollyCanvas from "@/components/ScrollyCanvas";
import Overlay from "@/components/Overlay";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Ventures from "@/components/Ventures";
import Competitions from "@/components/Competitions";
import About from "@/components/About";
import TechSkills from "@/components/TechSkills";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="bg-[#121212] min-h-screen text-white">
      <div className="relative">
        <ScrollyCanvas />
        <Overlay />
      </div>
      <About />
      <Projects />
      <TechSkills />
      <Experience />
      <Ventures />
      <Competitions />
      <Contact />
      <footer className="py-12 text-center text-gray-600 bg-[#0a0a0a] border-t border-white/5">
        <p className="font-mono text-sm tracking-widest uppercase">
          © {new Date().getFullYear()} Prajwal Zolage. Built with Next.js &amp; Canvas.
        </p>
      </footer>
      <noscript>
        <div style={{ padding: "2rem", textAlign: "center", color: "#fff", backgroundColor: "#121212" }}>
          <h1>Prajwal Zolage — Software Developer &amp; AI/ML Enthusiast</h1>
          <p>This portfolio requires JavaScript for the best experience. Please enable JavaScript to view animations and interactive features.</p>
        </div>
      </noscript>
    </main>
  );
}
