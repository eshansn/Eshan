import React, { useEffect } from 'react';
import { useNavigate } from "react-router-dom";

// --- Icons ---
import { FaFigma, FaBehance } from "react-icons/fa";

// --- Components ---
import BorderGlow from '../../components/BorderGlow';
import SplitText from '../../components/SplitText';
import SpotlightCard from '../../components/SpotlightCard';

// --- Assets ---
import stayseekHero from '../../assets/Projects/covers/stayseekcover.png';

const StaySeekUI: React.FC = () => {
    const navigate = useNavigate();

    // Ensure page starts at top on entry
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const features = [
        {
            title: "All-in-One Verified Platform",
            desc: "StaySeek centralizes boarding and rental listings with verified owners, real photos, and accurate details in one app."
        },
        {
            title: "Secure Communication & Payments",
            desc: "In-app chat, transparent pricing, and secure fee payments build trust between renters and owners."
        },
        {
            title: "Smart Search & Instant Discovery",
            desc: "Advanced filters help users find the right stay quickly, reducing search time drastically."
        },
        {
            title: "Dual Portal Experience for Renters & Owners",
            desc: "StaySeek features two dedicated portals—one for renters to find and compare stays, and one for property owners to list and manage rentals."
        }
    ];

    return (
        <div className="min-h-screen bg-black text-white pt-12 pb-24 px-6 sm:px-12 md:px-24">

            {/* Navigation Header */}
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
                <span className="text-gray-500 font-mono text-sm uppercase tracking-widest">UI/UX / 2026</span>
            </div>

            {/* Hero Section */}
            <div className="max-w-7xl mx-auto mb-16">
                <SplitText
                    text="StaySeek UI/UX"
                    className="text-5xl sm:text-8xl md:text-9xl font-bold text-left text-white mb-6 pb-6 leading-[1.1]"
                />
                <p className="text-xl md:text-2xl text-gray-400 max-w-3xl leading-relaxed">
                    Boardings made Simple.
                </p>
            </div>

            {/* Featured Image with Border Glow */}
            <div className="max-w-7xl mx-auto mb-24">
                <BorderGlow
                    edgeSensitivity={30}
                    glowColor="34 197 94"
                    backgroundColor="#060010"
                    borderRadius={32}
                    glowRadius={50}
                    glowIntensity={0.8}
                    animated={true}
                    colors={['#22c55e', '#10b981', '#3b82f6']}
                >
                    <div className="w-full aspect-video overflow-hidden rounded-[28px] relative z-50">
                        <img
                            src={stayseekHero}
                            alt="StaySeek App Showcase"
                            className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                        />
                    </div>
                </BorderGlow>
            </div>

            {/* Project Details Grid */}
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 mb-32 border-t border-white/10 pt-12">
                <div>
                    <h4 className="text-gray-500 uppercase text-sm tracking-widest mb-4 font-mono">Role</h4>
                    <p className="text-xl md:text-2xl">UI/UX Designer & Researcher</p>
                </div>
                <div>
                    <h4 className="text-gray-500 uppercase text-sm tracking-widest mb-4 font-mono">Challenge</h4>
                    <p className="text-gray-400 text-lg">Boarding and rental options are spread across social media and agents, making it hard to find verified, up-to-date information.</p>
                </div>
                <div>
                    <h4 className="text-gray-500 uppercase text-sm tracking-widest mb-4 font-mono">Outcome</h4>
                    <p className="text-gray-400 text-lg">StaySeek simplifies renting by bringing verified listings, trusted communication, and smart search into one seamless, all-in-one platform.</p>
                </div>
            </div>

            {/* Features Section */}
            <div className="max-w-7xl mx-auto mb-32">
                <h2 className="text-4xl font-bold mb-12">Core Features</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {features.map((f, i) => (
                        <SpotlightCard
                            key={i}
                            className="p-10 border border-white/10 bg-white/5 rounded-[32px]"
                            spotlightColor="rgba(59, 130, 246, 0.25)"
                        >
                            <h3 className="text-2xl md:text-3xl font-semibold mb-4 text-white">{f.title}</h3>
                            <p className="text-gray-400 text-lg leading-relaxed">{f.desc}</p>
                        </SpotlightCard>
                    ))}
                </div>
            </div>

            {/* Prototype Action Buttons */}
            <div className="max-w-7xl mx-auto mb-16 flex flex-col lg:flex-row gap-12 items-center justify-between py-20 border-y border-white/10">
                <div className="max-w-md text-center lg:text-left">
                    <h3 className="text-3xl font-bold mb-4">Deep Dive into the Design</h3>
                    <p className="text-gray-400 text-lg leading-relaxed">
                        Access the full Figma working files or view the complete case study presentation on Behance.
                    </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-6 md:gap-8 items-center justify-center">
                    {/* FIGMA BUTTON */}
                    <BorderGlow borderRadius={20} glowColor="34 197 94" colors={['#22c55e', '#10b981', '#3b82f6']} glowIntensity={0.5}>
                        <a
                            href="https://www.figma.com/community/file/1623615719592793679/stayseek"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group relative z-50 flex items-center justify-center gap-4 bg-black px-10 py-5 rounded-[18px] border border-white/10 hover:bg-neutral-900 transition-all duration-300 min-w-[240px] h-[72px]"
                        >
                            <FaFigma className="text-3xl text-white transition-transform group-hover:scale-110" />
                            <span className="text-white text-lg font-bold uppercase tracking-widest">Figma</span>
                        </a>
                    </BorderGlow>

                    {/* BEHANCE BUTTON */}
                    <BorderGlow borderRadius={20} glowColor="34 197 94" colors={['#22c55e', '#10b981', '#3b82f6']} glowIntensity={0.5}>
                        <a
                            href="https://www.behance.net/gallery/242447555/StaySeek-UIUX"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group relative z-50 flex items-center justify-center gap-4 bg-black px-10 py-5 rounded-[18px] border border-white/10 hover:bg-neutral-900 transition-all duration-300 min-w-[240px] h-[72px]"
                        >
                            <FaBehance className="text-4xl text-white transition-transform group-hover:scale-110" />
                            <span className="text-white text-lg font-bold uppercase tracking-widest">Behance</span>
                        </a>
                    </BorderGlow>
                </div>
            </div>

            {/* Prototype Section */}
            <div className="max-w-7xl mx-auto mb-32">
                <h2 className="text-4xl font-bold mb-12">Interactive Prototype</h2>
                <div className="w-full aspect-video bg-white/5 rounded-[40px] border border-white/10 overflow-hidden shadow-2xl">
                    <iframe
                        style={{ border: "none" }}
                        width="100%"
                        height="100%"
                        src="https://embed.figma.com/proto/JfnNs6CfGjw9W6zHNL6mfi/StaySeek?node-id=1-17&viewport=136%2C217%2C0.2&scaling=scale-down&content-scaling=fixed&starting-point-node-id=49%3A1038&page-id=0%3A1&embed-host=share"
                        allowFullScreen
                        loading="lazy"
                    />
                </div>
            </div>

            {/* Bottom Navigation */}
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

export default StaySeekUI;