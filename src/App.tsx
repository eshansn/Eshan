import React, { useLayoutEffect, useRef } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { Helmet } from "react-helmet-async"; // 1. Import Helmet
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
import StaySeekUI from './pages/work/stayseek';

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
            {/* 2. Add Helmet tags for the Home Page */}
            <Helmet>
                <title>Eshan Nethmina</title>

                <meta name="description" content="Portfolio of Eshan Nethmina. Explore my latest projects balancing engineering performance with user-centered design, including web and mobile applications." />

                {/* Open Graph for Socials (LinkedIn, WhatsApp, etc.) */}
                <meta property="og:title" content="Eshan Nethmina | Portfolio" />
                <meta property="og:description" content="Portfolio of Eshan Nethmina. Explore my latest projects balancing engineering performance with user-centered design." />
                <meta property="og:type" content="website" />

                {/* Twitter / X */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Eshan Nethmina | Portfolio" />
                <meta name="twitter:description" content="Portfolio of Eshan Nethmina. Explore my latest projects balancing engineering performance with user-centered design." />
            </Helmet>

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
    const location = useLocation();

    // Logic: Hide Navbar if we are on the /work page
    const showNavbar = !location.pathname.startsWith('/work');

    return (
        <div className="min-h-screen w-full bg-black text-white overflow-x-hidden relative">
            {showNavbar && <Navbar />}

            <Routes>
                <Route path="/" element={<HomeContent />} />
                <Route path="/work" element={<WorkInProgress />} />
                <Route path="/work/agrisense" element={<AgriSenseUI />} />
                <Route path="/work/oceaniq" element={<OceanIqUI />} />
                <Route path="/work/stayseek" element={<StaySeekUI />} />
                <Route path="*" element={<div className="pt-40 text-center">404 - Page Not Found</div>} />
            </Routes>
        </div>
    );
}