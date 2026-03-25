import React from 'react';
import CircularGallery from '../components/CircularGallery';

const Gallery = () => {
    return (
        <div className="min-h-screen bg-[#000000] text-white pt-28 pb-16 flex flex-col items-center overflow-x-hidden">


            <div className="w-full h-[600px] relative">
                <CircularGallery
                    textColor="#ffffff"
                    bend={3}
                    borderRadius={0.05}
                    scrollSpeed={2}
                    scrollEase={0.05}

                />
            </div>

        </div>
    );
};

export default Gallery;