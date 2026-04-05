import React from 'react';
import { NavLink } from "react-router-dom";
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

    const workInProgress: Project[] = [
        {
            title: 'AgriSense UI/UX',
            description: 'A mobile app for paddy farmers featuring an AI chatbot and AI-driven weather insights to support smarter seeding, harvesting, and crop management decisions.',
            image: project1Img,
            link: '/work'
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
            description: 'Data-driven dashboard for monitoring marine ecosystems and environmental health.',
            image: project5Img,
            link: '/work'
        },
        {
            title: 'IOS inspired Landing Page',
            description: 'A sleek, high-fidelity landing page following Apple design principles and animations.',
            image: project6Img,
            link: '/work'
        }
    ];

    return (
        <div className="min-h-screen  text-white py-16 px-4">
            <div className="max-w-6xl mx-auto mb-16">
                <SplitText
                    text="My Projects"
                    className="text-5xl sm:text-7xl font-bold text-left text-white"
                />
            </div>

            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
                {workInProgress.map((project, index) => (
                    <div key={index} className="flex flex-col">
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
                                className="w-full aspect-video overflow-hidden rounded-[24px]  relative z-50 cursor-pointer block group"
                            >
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                            </NavLink>
                        </BorderGlow>

                        <div className="mt-6 px-2">
                            <h3 className="text-2xl font-bold text-white mb-2">
                                {project.title}
                            </h3>
                            <p className="text-gray-400 text-base leading-relaxed">
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