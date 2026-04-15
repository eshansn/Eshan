import React, { useLayoutEffect, useRef } from "react";
import { Routes, Route, useLocation } from "react-router-dom"; // Added useLocation
import gsap from "gsap";

import heroVideo from "@/assets/hero-video.mp4";
import Navbar from "@/components/navbar.tsx";
import Skills from "@/components/Skills.tsx";

import About from './pages/About.tsx';
import Gallery from './pages/Gallery.tsx';
import Projects from './pages/Projects.tsx';
import WorkInProgress from './pages/work.tsx';
import ContactPage from './pages/Contact.tsx'
import AgriSenseUI from './pages/work/agrisenseui';
import OceanIqUI from './pages/work/oceaniq';

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
    const location = useLocation(); // Hook to get current path

    // Logic: Hide Navbar if we are on the /work page
    const showNavbar = !location.pathname.startsWith('/work');

    return (
        <div className="min-h-screen w-full bg-black text-white overflow-x-hidden relative">
            {/* Render Navbar only if showNavbar is true */}
            {showNavbar && <Navbar />}

            <Routes>
                <Route path="/" element={<HomeContent />} />
                <Route path="/work" element={<WorkInProgress />} />
                <Route path="/work/agrisense" element={<AgriSenseUI />} />
                <Route path="/work/oceaniq" element={<OceanIqUI />} />
                <Route path="*" element={<div className="pt-40 text-center">404 - Page Not Found</div>} />
            </Routes>
        </div>
    );
}