import React from 'react';
import { NavLink, useNavigate } from "react-router-dom"; // Added useNavigate
import BorderGlow from '../components/BorderGlow';
import SplitText from '../components/SplitText';

import project1Img from '../assets/Projects/covers/agrisensecover.png';
import project2Img from '../assets/Projects/covers/stayseekcover.png';
import project3Img from '../assets/Projects/covers/medreachcover.png';
import project4Img from '../assets/Projects/covers/medreachuiuxcover.png';
import project5Img from '../assets/Projects/covers/oceaniqcover.png';
import project6Img from '../assets/Projects/covers/maclandingpagecover.png';

interface Project {
    title: string;
    description: string;
    image: string;
    link: string;
}

const WorkInProgress: React.FC = () => {
    const navigate = useNavigate(); // Initialize navigation

    const workInProgress: Project[] = [
        {
            title: 'AgriSense UI/UX',
            description: 'A mobile app for paddy farmers featuring an AI chatbot and AI-driven weather insights to support smarter seeding, harvesting, and crop management decisions.',
            image: project1Img,
            link: '/work/agrisense'
        },
        {
            title: 'StaySeek UI/UX',
            description: 'A dual-portal boarding app that connects owners and seekers through intuitive navigation, clear amenity listings, and a streamlined booking flow.',
            image: project2Img,
            link: '/work'
        },
        {
            title: 'Medreach',
            description: 'A healthcare platform designed to bridge the gap between patients and specialized medical services.',
            image: project3Img,
            link: '/work'
        },
        {
            title: 'Medreach UI/UX',
            description: 'User-centric interface design for healthcare management and appointment scheduling.',
            image: project4Img,
            link: '/work'
        },
        {
            title: 'OceanIQ UI/UX',
            description: 'A quiz app that explores marine ecosystems and environmental health.',
            image: project5Img,
            link: '/work/oceaniq'
        },
        {
            title: 'IOS inspired Landing Page',
            description: 'A sleek, high-fidelity landing page following Apple design principles and animations.',
            image: project6Img,
            link: '/work'
        }
    ];

    return (
        <div className="min-h-screen bg-black text-white pt-12 pb-24 px-6 sm:px-12 md:px-24">

            {/* Go Back Button */}
            <div className="max-w-6xl mx-auto mb-12">
                <button
                    onClick={() => navigate(-1)}
                    className="group flex items-center gap-2 text-gray-400 hover:text-white transition-colors cursor-pointer relative z-50"
                >
                    <svg
                        width="20" height="20" viewBox="0 0 24 24" fill="none"
                        stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
                        className="transition-transform group-hover:-translate-x-1"
                    >
                        <line x1="19" y1="12" x2="5" y2="12" />
                        <polyline points="12 19 5 12 12 5" />
                    </svg>
                    <span className="font-medium">Go Back</span>
                </button>
            </div>

            <div className="max-w-6xl mx-auto mb-16">
                <SplitText
                    text="My Projects"
                    className="text-5xl sm:text-7xl font-bold text-left text-white"
                />
            </div>

            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-12 w-full">
                {workInProgress.map((project, index) => (
                    <div key={index} className="flex flex-col group">
                        <BorderGlow
                            edgeSensitivity={30}
                            glowColor="40 80 80"
                            backgroundColor="#060010"
                            borderRadius={28}
                            glowRadius={40}
                            glowIntensity={1}
                            coneSpread={25}
                            animated={false}
                            colors={['#c084fc', '#f472b6', '#38bdf8']}
                        >
                            <NavLink
                                to={project.link}
                                className="w-full aspect-video overflow-hidden rounded-[24px] relative z-50 cursor-pointer block"
                            >
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                            </NavLink>
                        </BorderGlow>

                        <div className="mt-6 px-2">
                            <h3 className="text-3xl leading-none font-semibold text-white mb-3">
                                {project.title}
                            </h3>
                            <p className="text-gray-400 text-base sm:text-lg leading-relaxed max-w-lg">
                                {project.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default WorkInProgress;