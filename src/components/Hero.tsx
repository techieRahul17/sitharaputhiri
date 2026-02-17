import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Hero: React.FC = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const titleRef = useRef<HTMLHeadingElement>(null);
    const taglineRef = useRef<HTMLParagraphElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {

            // 🌟 Entrance Animation (Clear & Smooth)
            const intro = gsap.timeline();

            intro
                .fromTo(
                    titleRef.current,
                    { y: 60, opacity: 0 },
                    {
                        y: 0,
                        opacity: 1,
                        duration: 1.3,
                        ease: "power4.out",
                    }
                )
                .fromTo(
                    taglineRef.current,
                    { y: 30, opacity: 0 },
                    {
                        y: 0,
                        opacity: 1,
                        duration: 1.1,
                        ease: "power3.out",
                    },
                    "-=0.6"
                );

            // 🎬 Scroll Animation (Zoom Out + Blur ONLY)
            gsap.to(titleRef.current, {
                scale: 0.7,              // Zoom out
                filter: "blur(20px)",    // Blur gradually
                transformOrigin: "center center",
                ease: "none",
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top top",
                    end: "+=120%",
                    scrub: true,          // makes it perfectly reversible
                    pin: true,
                },
            });

            gsap.to(taglineRef.current, {
                scale: 0.85,
                filter: "blur(12px)",
                transformOrigin: "center center",
                ease: "none",
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top top",
                    end: "+=120%",
                    scrub: true,
                },
            });

        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <section
            ref={containerRef}
            className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-gradient-to-b from-pink-50 via-rose-50 to-white text-center px-4"
        >
            <div className="relative z-10">
                <h1
                    ref={titleRef}
                    className="text-6xl md:text-8xl lg:text-9xl font-playfair font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-pink-500 to-rose-600 drop-shadow-xl mb-8 tracking-tight"
                    style={{ willChange: "transform, filter" }}
                >
                    Sitharaputhiri
                </h1>

                <p
                    ref={taglineRef}
                    className="text-xl md:text-3xl font-dancing text-gray-700 tracking-wide"
                    style={{ willChange: "transform, filter" }}
                >
                    Tiny doodles. Big emotions.
                </p>
            </div>
        </section>
    );
};

export default Hero;
