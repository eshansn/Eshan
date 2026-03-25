import React, { useEffect, useRef, useMemo, ReactNode, RefObject } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface ScrollRevealProps {
    children: ReactNode;
    scrollContainerRef?: RefObject<HTMLElement>;
    enableBlur?: boolean;
    baseOpacity?: number;
    baseRotation?: number;
    blurStrength?: number;
    containerClassName?: string;
    textClassName?: string;
    rotationEnd?: string;
    wordAnimationEnd?: string;
}

const ScrollReveal: React.FC<ScrollRevealProps> = ({
                                                       children,
                                                       scrollContainerRef,
                                                       enableBlur = true,
                                                       baseOpacity = 0.1,
                                                       baseRotation = 3,
                                                       blurStrength = 4,
                                                       containerClassName = '',
                                                       textClassName = '',
                                                       // 1. Extended these end points to make the animation last longer as you scroll
                                                       rotationEnd = 'top 0%',
                                                       wordAnimationEnd = 'top 10%'
                                                   }) => {
    const containerRef = useRef<HTMLHeadingElement>(null);

    const splitText = useMemo(() => {
        const text = typeof children === 'string' ? children : '';
        return text.split(/(\s+)/).map((word, index) => {
            if (word.match(/^\s+$/)) return word;
            return (
                <span className="inline-block word" key={index}>
          {word}
        </span>
            );
        });
    }, [children]);

    useEffect(() => {
        const el = containerRef.current;
        if (!el) return;

        const scroller = scrollContainerRef && scrollContainerRef.current ? scrollContainerRef.current : window;

        // Rotation: Starts at 70% and slowly levels out by the top (0%)
        gsap.fromTo(
            el,
            { transformOrigin: '0% 50%', rotate: baseRotation },
            {
                ease: 'none',
                rotate: 0,
                scrollTrigger: {
                    trigger: el,
                    scroller,
                    start: 'top 70%',
                    end: rotationEnd,
                    scrub: true
                }
            }
        );

        const wordElements = el.querySelectorAll<HTMLElement>('.word');

        // Opacity: Starts at center (50%) and finishes slowly at 10% from the top
        gsap.fromTo(
            wordElements,
            { opacity: baseOpacity, willChange: 'opacity' },
            {
                ease: 'none',
                opacity: 1,
                stagger: 0.05,
                scrollTrigger: {
                    trigger: el,
                    scroller,
                    start: 'top 50%',
                    end: wordAnimationEnd,
                    scrub: 1.5 // Added a slight "catch-up" delay to make it feel even smoother
                }
            }
        );

        // Blur: Follows the same slow timing
        if (enableBlur) {
            gsap.fromTo(
                wordElements,
                { filter: `blur(${blurStrength}px)` },
                {
                    ease: 'none',
                    filter: 'blur(0px)',
                    stagger: 0.05,
                    scrollTrigger: {
                        trigger: el,
                        scroller,
                        start: 'top 50%',
                        end: wordAnimationEnd,
                        scrub: 1.5 // Matches the opacity for a synced "fog lifting" effect
                    }
                }
            );
        }

        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    }, [scrollContainerRef, enableBlur, baseRotation, baseOpacity, rotationEnd, wordAnimationEnd, blurStrength]);

    return (
        <h2 ref={containerRef} className={`my-5 ${containerClassName}`}>
            <p className={`text-2xl leading-relaxed font-normal ${textClassName}`}>{splitText}</p>
        </h2>
    );
};

export default ScrollReveal;