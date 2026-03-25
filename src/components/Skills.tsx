import React from 'react';
import LogoLoop from './LogoLoop.tsx';


import {
    SiReact,
    SiNextdotjs,
    SiTypescript,
    SiTailwindcss,
    SiJavascript,
    SiFramer,
    SiPostcss,
    SiVite,
    SiGreensock,
    SiPython,
    SiCplusplus,
    SiFigma,

} from 'react-icons/si';

const techLogos = [
    { node: <SiReact className="text-[#ffffff]" />, title: "React", href: "https://react.dev" },
    { node: <SiNextdotjs className="text-white" />, title: "Next.js", href: "https://nextjs.org" },
    { node: <SiTypescript className="text-[#ffffff]" />, title: "TypeScript", href: "https://www.typescriptlang.org" },
    { node: <SiTailwindcss className="text-[#ffffff]" />, title: "Tailwind CSS", href: "https://tailwindcss.com" },
    { node: <SiJavascript className="text-[#ffffff]" />, title: "JavaScript", href: "https://developer.mozilla.org" },
    { node: <SiFramer className="text-white" />, title: "Framer Motion", href: "https://www.framer.com/motion/" },
    { node: <SiGreensock className="text-[#ffffff]" />, title: "GSAP", href: "https://gsap.com" },
    { node: <SiVite className="text-[#ffffff]" />, title: "Vite", href: "https://vitejs.dev" },
    { node: <SiFigma className="text-[#ffffff]" />, title: "PostCSS", href: "https://postcss.org" },
    { node: <SiPostcss className="text-[#ffffff]" />, title: "PostCSS", href: "https://postcss.org" },
    { node: <SiCplusplus className="text-[#ffffff]" />, title: "PostCSS", href: "https://postcss.org" },
    { node: <SiPython className="text-[#ffffff]" />, title: "PostCSS", href: "https://postcss.org" },

];

const Skills = () => {
    return (
        <div style={{ height: '200px', position: 'relative', overflow: 'hidden'}}>
            {/* Basic horizontal loop */}
            <LogoLoop
                logos={techLogos}
                speed={100}
                direction="left"
                logoHeight={60}
                gap={60}
                hoverSpeed={0}
                scaleOnHover
                fadeOut
                fadeOutColor="#000000"
                ariaLabel="Technology partners"
            />
        </div>
    );
};

export default Skills;