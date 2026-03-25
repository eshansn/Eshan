import React, { useLayoutEffect, useRef } from "react";
import { Routes, Route } from "react-router-dom"; // REMOVED BrowserRouter from here
import gsap from "gsap";

import heroVideo from "@/assets/hero-video.mp4";
import Navbar from "@/components/navbar.tsx";
import Skills from "@/components/Skills.tsx";

import About from './pages/About.tsx';
import Gallery from './pages/Gallery.tsx';
import Projects from './pages/Projects.tsx';
import WorkInProgress from './pages/work.tsx';
import ContactPage from './pages/Contact.tsx'

// Separate the Landing Page sections
const HomeContent = () => {
    const videoRef = useRef<HTMLVideoElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo(videoRef.current,
                { opacity: 0, scale: 0.95 },
                { opacity: 1, scale: 1, duration: 1.5, ease: "power3.out", delay: 0.5 }
            );
        }, containerRef);
        return () => ctx.revert();
    }, []);

    return (
        <>
            <section id="home" ref={containerRef} className="relative h-screen flex items-center justify-center px-6">
                <div className="w-full flex justify-center items-center">
                    <video
                        ref={videoRef}
                        src={heroVideo}
                        autoPlay
                        muted
                        playsInline
                        className="w-full md:w-1/2 h-auto object-contain shadow-2xl opacity-0"
                    />
                </div>
            </section>
            <div id="about"><About /></div>
            <div id="gallery"><Gallery /></div>
            <div id="projects"><Projects /></div>
            <Skills />
            <ContactPage showBackground={false} />
        </>
    );
};

export default function App() {
    return (
        <div className="min-h-screen w-full bg-black text-white overflow-x-hidden relative">
            <Navbar />

            <Routes>
                {/* 1. Main Landing Page */}
                <Route path="/" element={<HomeContent />} />

                {/* 2. Separate Work Page */}
                <Route path="/work" element={<WorkInProgress />} />

                {/* 3. Safety Net (Optional) */}
                <Route path="*" element={<div className="pt-40 text-center">404 - Page Not Found</div>} />
            </Routes>
        </div>
    );
}