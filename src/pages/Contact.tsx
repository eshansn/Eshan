import React from 'react';
import { GridScan } from '../components/GridScan.tsx';
import ESNLogo from "@/components/ESNlLogo.tsx";
import { Instagram, Linkedin, Mail } from 'lucide-react';


const BehanceIcon = ({ size = 24, className = "" }) => (
    <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="currentColor"
        className={className}
    >
        <path d="M8.22 8.52h-2.1v2.54h2.15c.67 0 1.15-.12 1.45-.37.31-.25.46-.62.46-1.1s-.14-.77-.42-1-.74-.07-1.54-.07zM8.34 13.11h-2.2v2.85h2.32c.73 0 1.25-.13 1.58-.38.32-.25.48-.68.48-1.28 0-.6-.16-1.02-.48-1.27-.33-.26-.85-.38-1.58-.38zM22 13.92c0-1.58-.45-2.77-1.34-3.57-.89-.8-2.07-1.2-3.52-1.2-1.5 0-2.69.45-3.57 1.34-.88.89-1.32 2.1-1.32 3.63 0 1.57.43 2.8 1.29 3.69.86.89 2 1.34 3.42 1.34 1.13 0 2.12-.29 2.97-.88.85-.59 1.41-1.42 1.68-2.49h-2.3c-.16.34-.41.61-.74.8-.33.19-.74.29-1.22.29-.68 0-1.21-.2-1.59-.61-.38-.41-.6-1.01-.65-1.8h7.82c.04-.15.06-.46.06-.94zm-5.46-2.58c.55 0 1.01.17 1.35.51.34.34.54.85.59 1.52h-3.83c.07-.67.3-1.18.68-1.52.38-.34.86-.51 1.41-.51zM11.97 12.19c.47-.41.71-1.01.71-1.8 0-.74-.25-1.33-.76-1.78-.51-.45-1.27-.68-2.28-.68h-5.02v10.51h5.18c1.17 0 2.03-.26 2.59-.78.56-.52.84-1.27.84-2.24 0-.85-.29-1.48-.86-1.89-.35-.24-.76-.42-1.24-.52.61-.13 1.08-.34 1.42-.64zM16.14 8.44h4.15v1.44h-4.15v-1.44z" />
    </svg>
);

const ContactPage = () => {
    return (
        <div id="contact" className="relative min-h-screen w-full bg-[#050505] font-sans overflow-hidden flex items-center justify-center p-4">

            {/* 1. BACKGROUND LAYER */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <GridScan
                    sensitivity={0.55}
                    lineThickness={1}
                    linesColor="#392e4e"
                    gridScale={0.1}
                    scanColor="#FF9FFC"
                    scanOpacity={0.4}
                    enablePost
                    bloomIntensity={0.6}
                    chromaticAberration={0.002}
                    noiseIntensity={0.01}
                />
            </div>

            {/* 2. MAIN CONTAINER (Reduced size here) */}
            <div className="relative z-10 w-full max-w-4xl mx-auto bg-black border border-white/10 rounded-2xl shadow-2xl overflow-hidden flex flex-col md:flex-row">

                {/* LEFT SIDE: Contact Form (Adjusted padding) */}
                <div className="w-full md:w-1/2 p-8 md:p-10 flex flex-col justify-center border-b md:border-b-0 md:border-r border-white/10">
                    <h2 className="text-3xl font-bold text-white mb-2 tracking-tight">
                        Get in touch
                    </h2>
                    <p className="text-gray-400 text-sm mb-6">
                        Have a project in mind or just want to say hi? Drop a message below.
                    </p>

                    <form className="flex flex-col space-y-4" onSubmit={(e) => e.preventDefault()}>
                        <div className="flex flex-col space-y-1">
                            <label htmlFor="name" className="text-xs text-gray-400 uppercase tracking-wider font-semibold">Name</label>
                            <input
                                type="text"
                                id="name"
                                placeholder="How should i call you?"
                                className="bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-white placeholder-gray-600 focus:outline-none focus:border-[#001F3F] focus:ring-1 focus:ring-[#001F3F] transition-colors text-sm"
                            />
                        </div>

                        <div className="flex flex-col space-y-1">
                            <label htmlFor="email" className="text-xs text-gray-400 uppercase tracking-wider font-semibold">Email</label>
                            <input
                                type="email"
                                id="email"
                                placeholder="me@example.com"
                                className="bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-white placeholder-gray-600 focus:outline-none focus:border-[#001F3F] focus:ring-1 focus:ring-[#001F3F] transition-colors text-sm"
                            />
                        </div>

                        <div className="flex flex-col space-y-1">
                            <label htmlFor="message" className="text-xs text-gray-400 uppercase tracking-wider font-semibold">Message</label>
                            <textarea
                                id="message"
                                rows={4}
                                placeholder="wanna go grab some coffee?"
                                className="bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-white placeholder-gray-600 focus:outline-none focus:border-[#001F3F] focus:ring-1 focus:ring-[#001F3F] transition-colors resize-none text-sm"
                            ></textarea>
                        </div>

                        <button
                            type="submit"
                            className="mt-2 bg-white text-black font-semibold py-2.5 px-6 rounded-lg hover:bg-gray-200 transition-colors duration-300 text-sm"
                        >
                            Send Message
                        </button>
                    </form>
                </div>

                {/* RIGHT SIDE: 3D Logo & Socials (Adjusted padding) */}
                <div className="w-full md:w-1/2 p-8 flex flex-col items-center justify-between relative bg-black/50">

                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 w-48 h-48 bg-blue-600/10 blur-[80px] rounded-full" />

                    {/* 3D Logo Container */}
                    <div className="w-full flex-grow flex items-center justify-center -mt-4">
                        <ESNLogo />
                    </div>

                    {/* Social Icons */}
                    <div className="w-full flex justify-center space-x-5 pt-6 border-t border-white/10">
                        <a href="https://www.linkedin.com/in/eshan-nethmina-322b45300/" className="text-gray-400 hover:text-white transition-colors p-2">
                            <Linkedin size={20} strokeWidth={1.5} />
                        </a>
                        <a href="https://www.behance.net/eshannethmina" className="text-gray-400 hover:text-white transition-colors p-2">
                            <BehanceIcon size={22} />
                        </a>
                        <a href="https://www.instagram.com/prodby.sandev/" className="text-gray-400 hover:text-white transition-colors p-2">
                            <Instagram size={20} strokeWidth={1.5} />
                        </a>
                        <a href="mailto:eshannethmina51@gmail.com" className="text-gray-400 hover:text-white transition-colors p-2">
                            <Mail size={20} strokeWidth={1.5} />
                        </a>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default ContactPage;