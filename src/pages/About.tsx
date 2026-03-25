import React from 'react';
// Make sure these paths point to where you actually saved the components!
import ScrollReveal from '../components/ScrollReveal';
import SplitText from '../components/SplitText';

const About = () => {
    const handleAnimationComplete = () => {
        console.log('All letters have animated!');
    };

    return (
        /* 1. Removed horizontal padding (px-6) here so children can span 100% of the screen */
        <div className="min-h-screen bg-[#000000] text-white pt-28 pb-16 flex flex-col items-center overflow-x-hidden">


            <div className="w-full px-6 sm:px-12 mb-12 text-center">
                <SplitText
                    text="A Bit About Myself"
                    className="text-3xl sm:text-6xl font-bold text-center text-[#ffffff]"
                    delay={50}
                    duration={1.25}
                    ease="power3.out"
                    splitType="chars"
                    from={{ opacity: 0, y: 40 }}
                    to={{ opacity: 1, y: 0 }}
                    threshold={0.1}
                    rootMargin="-100px"
                    textAlign="center"
                    onLetterAnimationComplete={handleAnimationComplete}
                    showCallback
                />
            </div>


            <div className="w-full px-6 sm:px-12 max-w-3xl text-center text-s sm:text-xl leading-relaxed mb-20 text-[#ffffff]">

                <ScrollReveal
                    baseOpacity={0.1}
                    enableBlur
                    baseRotation={0}
                    blurStrength={4}
                >
                    I thrive at the exact intersection of logic and creativity.
                    As an Information and Communication Technology student, I approach web development as a two-part process
                    engineering and empathy.
                    On the development side, I focus on building robust, highly performant systems from the ground up.
                    On the design side, I focus on crafting interfaces that are intuitive, visually engaging, and highly accessible.
                    For me, a successful project doesn't just work flawlessly under the hood it feels completely natural to the user.
                </ScrollReveal>

            </div>
        </div>
    );
};

export default About;