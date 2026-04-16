import React, { useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { FaFigma, FaBehance, FaLinkedin, FaGithub } from "react-icons/fa";
import BorderGlow from '../../components/BorderGlow';
import SplitText from '../../components/SplitText';
import SpotlightCard from '../../components/SpotlightCard';

import medreachHero from '../../assets/Projects/covers/medreachcover.png';
import contrib1 from '../../assets/Contributors/thuhina.jpg';
import contrib2 from '../../assets/Contributors/chamathka.jpg';

const MedReachUI: React.FC = () => {
    const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const features = [
        {
            title: "Telemedicine Hub",
            desc: "Seamless video consultations with specialized doctors, breaking geographical barriers for patients in remote areas."
        },
        {
            title: "Smart Health Records",
            desc: "A centralized, encrypted dashboard for patients to manage prescriptions, lab results, and medical history with one-tap sharing."
        },
        {
            title: "AI Symptom Checker",
            desc: "Advanced diagnostic tool that provides preliminary health insights and directs users to the appropriate medical professional."
        },
        {
            title: "Emergency Response",
            desc: "Integrated rapid-alert system that connects users to the nearest medical facilities and emergency services instantly."
        }
    ];

    const contributors = [
        {
            name: "Thuhina Nimnadira",
            role: "Developer ( React Native )",
            img: contrib1,
            linkedIn: "https://linkedin.com/in/thuhina-nimnadira-394b102a9/",
            secondaryLink: "https://github.com/ThuhinaNimnadira",
            secondaryIcon: <FaGithub size={22} />
        },
        {
            name: "Chamathka Pramodi",
            role: "UX Researcher / Designer",
            img: contrib2,
            linkedIn: "https://www.linkedin.com/in/chamathka-rubasinghe-367236378/",
            secondaryLink: "https://www.behance.net/chamathpramodi",
            secondaryIcon: <FaBehance size={22} />
        }
    ];

    const neonPurple = "128 50 255";
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
                <span className="text-gray-500 font-mono text-sm uppercase tracking-widest">HealthTech / 2026</span>
            </div>

            <div className="max-w-7xl mx-auto mb-16">
                <SplitText
                    text="MedReach UI/UX"
                    className="text-5xl sm:text-8xl md:text-9xl font-bold text-left text-white mb-6 pb-6 leading-[1.1]"
                />
                <p className="text-xl md:text-2xl text-gray-400 max-w-3xl leading-relaxed">
                    Your Health, Just a Tap Away.
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
                            src={medreachHero}
                            alt="MedReach Showcase"
                            className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                        />
                    </div>
                </BorderGlow>
            </div>

            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 mb-32 border-t border-white/10 pt-12">
                <div>
                    <h4 className="text-gray-500 uppercase text-sm tracking-widest mb-4 font-mono">Role</h4>
                    <p className="text-xl md:text-2xl">Lead Designer/Developer</p>
                </div>
                <div>
                    <h4 className="text-gray-500 uppercase text-sm tracking-widest mb-4 font-mono">Challenge</h4>
                    <p className="text-gray-400 text-lg">Patients and healthcare staff face delays and inefficiencies in booking, record management, and access to prescriptions due to fragmented and manual hospital systems. This highlights the need for a secure, unified digital solution that streamlines communication, improves accessibility, and reduces administrative workload for both patients and medical staff.</p>
                </div>
                <div>
                    <h4 className="text-gray-500 uppercase text-sm tracking-widest mb-4 font-mono">Outcome</h4>
                    <p className="text-gray-400 text-lg">A unified healthcare platform built with a React Native mobile app and React web portal powered by Firebase that connects patients and hospital staff. Patients can book appointments, view prescriptions, and track health updates, while doctors and hospital staff manage appointments, records, and prescriptions through a centralized system.</p>
                </div>
            </div>

            <div className="max-w-7xl mx-auto mb-32">
                <h2 className="text-4xl font-bold mb-12">System Highlights</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {features.map((f, i) => (
                        <SpotlightCard
                            key={i}
                            className="p-10 border border-white/10 bg-white/5 rounded-[32px]"
                            spotlightColor={`rgba(${neonPurple}, 0.1)`}
                        >
                            <h3 className="text-2xl md:text-3xl font-semibold mb-4 text-white">{f.title}</h3>
                            <p className="text-gray-400 text-lg leading-relaxed">{f.desc}</p>
                        </SpotlightCard>
                    ))}
                </div>
            </div>

            <div className="max-w-7xl mx-auto mb-32">
                <h2 className="text-4xl font-bold mb-12">Our Team</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    {contributors.map((person, index) => (
                        <div key={index} className="relative flex flex-col sm:flex-row items-center gap-8 p-10 rounded-[32px] border border-white/10 bg-white/5 transition-colors group">

                            <div className="w-24 h-24 rounded-full overflow-hidden flex-shrink-0 relative">
                                <BorderGlow borderRadius={999} glowColor={neonPurple} colors={neonColors} glowIntensity={0.5}>
                                    <img src={person.img} alt={person.name} className="w-full h-full object-cover relative z-50 rounded-full" />
                                </BorderGlow>
                            </div>

                            <div className="text-center sm:text-left flex-grow">
                                <h4 className="text-2xl font-bold text-white mb-1 group-hover:text-purple-400 transition-colors">{person.name}</h4>
                                <p className="text-gray-400 text-lg mb-6 leading-tight">{person.role}</p>
                                <div className="flex gap-4 justify-center sm:justify-start">
                                    <a href={person.linkedIn} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-white transition-colors">
                                        <FaLinkedin size={22} />
                                    </a>
                                    <a href={person.secondaryLink} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-white transition-colors">
                                        {person.secondaryIcon}
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="max-w-7xl mx-auto mb-16 flex flex-col lg:flex-row gap-12 items-center justify-between py-20 border-y border-white/10">
                <div className="max-w-md text-center lg:text-left">
                    <h3 className="text-3xl font-bold mb-4">Deep Dive</h3>
                    <p className="text-gray-400 text-lg leading-relaxed">
                        Access the full Figma working files or explore the codebase on GitHub.
                    </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-6 md:gap-8 items-center justify-center">
                    <BorderGlow borderRadius={20} glowColor={neonPurple} colors={neonColors} glowIntensity={0.5}>
                        <a href="https://www.figma.com/community/file/1623613960249197110/medreach-your-all-in-one-health-partner" target="_blank" rel="noopener noreferrer" className="group relative z-50 flex items-center justify-center gap-4 bg-black px-10 py-5 rounded-[18px] border border-white/10 hover:bg-neutral-900 transition-all min-w-[240px] h-[72px]">
                            <FaFigma className="text-3xl text-white transition-transform group-hover:scale-110" />
                            <span className="text-white text-lg font-bold uppercase tracking-widest">Figma</span>
                        </a>
                    </BorderGlow>

                    <BorderGlow borderRadius={20} glowColor={neonPurple} colors={neonColors} glowIntensity={0.5}>
                        <a href="https://github.com/ThuhinaNimnadira/medreach" target="_blank" rel="noopener noreferrer" className="group relative z-50 flex items-center justify-center gap-4 bg-black px-10 py-5 rounded-[18px] border border-white/10 hover:bg-neutral-900 transition-all min-w-[240px] h-[72px]">
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

export default MedReachUI;