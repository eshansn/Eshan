import React from 'react';
import { NavLink } from 'react-router-dom';
import SplitText from '../components/SplitText';
import WorkInProgress from '../pages/work.tsx';

import project1Img from '../assets/Projects/covers/agrisensecover.png';
import project2Img from '../assets/Projects/covers/stayseekcover.png';


interface Project {
    title: string;
    description: string;
    image: string;
    link: string;
}

const Projects: React.FC = () => {
    // 2. Apply the interface to your array
    const projects: Project[] = [
        {
            title: 'AgriSense UI/UX',
            description: 'a mobile app for paddy farmers featuring an AI chatbot and AI-driven weather insights to support smarter seeding, harvesting, and crop management decisions.',
            image: project1Img,
            link: '/work' // Navigates to Work page
        },
        {
            title: 'StaySeek UI/UX',
            description: 'A dual-portal boarding app that connects owners and seekers through intuitive navigation, clear amenity listings, and a streamlined booking flow.',
            image: project2Img,
            link: '/work' // Navigates to Work page
        }
    ];

    return (
        <div className="relative z-999 min-h-screen bg-[#000000] text-white pt-28 pb-24 px-6 sm:px-12 md:px-24 overflow-x-hidden">

            {/* Title Section */}
            <div className="mb-16">
                <SplitText
                    text="My Work"
                    className="text-5xl sm:text-7xl font-bold text-left text-white"
                />
            </div>

            {/* Sub-header with "View All" */}
            <div className="flex justify-between items-end border-b border-white/10 pb-4 mb-12">
                <h2 className="text-xl font-medium text-gray-300 italic">Latest projects</h2>
                {/* Link 1: View All */}
                <NavLink
                    to="/work"
                    className="relative z-50 flex items-center gap-2 text-gray-400 hover:text-white transition-colors group"
                >
                    View all
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1">
                        <line x1="7" y1="17" x2="17" y2="7" />
                        <polyline points="7 7 17 7 17 17" />
                    </svg>
                </NavLink>
            </div>

            {/* Projects Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-12 w-full">
                {projects.map((project, index) => (
                    <div key={index} className="flex flex-col gap-6 w-full min-w-0 group">

                        {/* Image - Wrapped in NavLink so clicking the image goes to /work */}
                        <NavLink to={project.link} className="w-full aspect-video overflow-hidden rounded-[24px] bg-[#111] relative z-50 cursor-pointer block">
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" // Added a nice hover zoom effect!
                            />
                        </NavLink>

                        {/* Text and Link Section */}
                        <div className="flex flex-col gap-3 px-1">

                            {/* Conditionally render <a> or <NavLink> for the title */}
                            {project.link.startsWith('http') ? (
                                <a
                                    href={project.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="relative z-50 flex items-center gap-3 w-fit cursor-pointer group/link"
                                >
                                    <h3 className="text-3xl leading-none font-semibold text-white">
                                        {project.title}
                                    </h3>
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="h-8 w-8 text-white transition-transform duration-300 group-hover/link:translate-x-1 group-hover/link:-translate-y-1">
                                        <line x1="7" y1="17" x2="17" y2="7" />
                                        <polyline points="7 7 17 7 17 17" />
                                    </svg>
                                </a>
                            ) : (
                                <NavLink
                                    to={project.link}
                                    className="relative z-50 flex items-center gap-3 w-fit cursor-pointer group/link"
                                >
                                    <h3 className="text-3xl leading-none font-semibold text-white">
                                        {project.title}
                                    </h3>
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="h-8 w-8 text-white transition-transform duration-300 group-hover/link:translate-x-1 group-hover/link:-translate-y-1">
                                        <line x1="7" y1="17" x2="17" y2="7" />
                                        <polyline points="7 7 17 7 17 17" />
                                    </svg>
                                </NavLink>
                            )}

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

export default Projects;