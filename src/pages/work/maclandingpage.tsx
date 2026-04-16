import React, { useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import {  FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import BorderGlow from '../../components/BorderGlow';
import SplitText from '../../components/SplitText';
import SpotlightCard from '../../components/SpotlightCard';

import macHero from '../../assets/Projects/covers/maclandingpagecover.png';

const MacBookLandingUI: React.FC = () => {
    const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const features = [
        {
            title: "GSAP Smooth Scroll",
            desc: "Immersive fluid scrolling interactions that bring the product to life, carefully choreographed to guide the user's focus through the hardware's internal architecture."
        },
        {
            title: "Interactive 3D Models",
            desc: "Powered by Three.js and React Three Fiber, allowing users to experience real-time color and size customization with high-fidelity textures."
        },
        {
            title: "Optimized Performance",
            desc: "Responsive design across all devices with intelligent animation throttling on mobile to maintain clarity, battery efficiency, and speed."
        },
        {
            title: "Apple-Inspired Minimal UI",
            desc: "A premium, distraction-free interface focusing on negative space, crisp typography, and high-performance web engineering."
        }
    ];

    const neonPurple = "128 50 255";
    const neonPurpleII = "128, 50, 255";
    const neonColors = ['#a855f7', '#d8b4fe', '#818cf8'];

    return (
        <div className="min-h-screen bg-black text-white pt-12 pb-24 px-6 sm:px-12 md:px-24">

            <div className="max-w-7xl mx-auto mb-12 flex justify-between items-center">
                <button
                    onClick={() => navigate(-1)}
                    className="group flex items-center gap-2 text-gray-400 hover:text-white transition-colors cursor-pointer relative z-50"
                >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="transition-transform group-hover:-translate-x-1">
                        <line x1="19" y1="12" x2="5" y2="12" />
                        <polyline points="12 19 5 12 12 5" />
                    </svg>
                    <span className="font-medium">Go Back</span>
                </button>
                <span className="text-gray-500 font-mono text-sm uppercase tracking-widest">Web Dev / 2025</span>
            </div>

            <div className="max-w-7xl mx-auto mb-16">
                <SplitText
                    text="MacPro.view"
                    className="text-5xl sm:text-8xl md:text-9xl font-bold text-left text-white mb-6 pb-6 leading-[1.1]"
                />
                <p className="text-xl md:text-2xl text-gray-400 max-w-3xl leading-relaxed">
                    Premium, high-performance web experience featuring immersive Three.js elements.
                </p>
            </div>

            <div className="max-w-7xl mx-auto mb-24">
                <BorderGlow
                    edgeSensitivity={30}
                    glowColor={neonPurple}
                    backgroundColor="#060010"
                    borderRadius={32}
                    glowRadius={50}
                    glowIntensity={0.8}
                    animated={true}
                    colors={neonColors}
                >
                    <div className="w-full aspect-video overflow-hidden rounded-[28px] relative z-50">
                        <img
                            src={macHero}
                            alt="Apple Styled Landing Page Showcase"
                            className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                        />
                    </div>
                </BorderGlow>
            </div>

            <div className="max-w-7xl mx-auto mb-32">
                <h2 className="text-4xl font-bold mb-12">Project Highlights</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {features.map((f, i) => (
                        <SpotlightCard
                            key={i}
                            className="p-10 border border-white/10 bg-white/5 rounded-[32px]"
                            spotlightColor={`rgba(${neonPurpleII}, 0.15)`}
                        >
                            <h3 className="text-2xl md:text-3xl font-semibold mb-4 text-white">{f.title}</h3>
                            <p className="text-gray-400 text-lg leading-relaxed">{f.desc}</p>
                        </SpotlightCard>
                    ))}
                </div>
            </div>

            <div className="max-w-7xl mx-auto mb-16 flex flex-col lg:flex-row gap-12 items-center justify-between py-20 border-y border-white/10">
                <div className="max-w-md text-center lg:text-left">
                    <h3 className="text-3xl font-bold mb-4">Experience Live</h3>
                    <p className="text-gray-400 text-lg leading-relaxed">
                        Explore the interactive 3D site or browse the source code to see how the animations are built.
                    </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-6 md:gap-8 items-center justify-center">
                    <BorderGlow borderRadius={20} glowColor={neonPurple} colors={neonColors} glowIntensity={0.5}>
                        <a href="https://apple-styled-landingpage.vercel.app/" target="_blank" rel="noopener noreferrer" className="group relative z-50 flex items-center justify-center gap-4 bg-black px-10 py-5 rounded-[18px] border border-white/10 hover:bg-neutral-900 transition-all min-w-[240px] h-[72px]">
                            <FaExternalLinkAlt className="text-2xl text-white transition-transform group-hover:scale-110" />
                            <span className="text-white text-lg font-bold uppercase tracking-widest">Live Site</span>
                        </a>
                    </BorderGlow>

                    <BorderGlow borderRadius={20} glowColor={neonPurple} colors={neonColors} glowIntensity={0.5}>
                        <a href="https://github.com/eshansn/apple-styled-landingpage" target="_blank" rel="noopener noreferrer" className="group relative z-50 flex items-center justify-center gap-4 bg-black px-10 py-5 rounded-[18px] border border-white/10 hover:bg-neutral-900 transition-all min-w-[240px] h-[72px]">
                            <FaGithub className="text-4xl text-white transition-transform group-hover:scale-110" />
                            <span className="text-white text-lg font-bold uppercase tracking-widest">GitHub</span>
                        </a>
                    </BorderGlow>
                </div>
            </div>

            <div className="max-w-7xl mx-auto mt-16 pt-12 border-t border-white/10 flex justify-center">
                <button
                    onClick={() => navigate('/work')}
                    className="text-gray-400 hover:text-white transition-all text-xl font-medium flex items-center gap-4 group"
                >
                    View All Projects
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="transition-transform group-hover:translate-x-2">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                    </svg>
                </button>
            </div>
        </div>
    );
};

export default MacBookLandingUI;