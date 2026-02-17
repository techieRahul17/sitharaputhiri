import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const About: React.FC = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const titleTriggerRef = useRef<HTMLDivElement>(null);
    const textTriggerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Title Animation
            gsap.fromTo(titleTriggerRef.current,
                { opacity: 0, y: 50 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 1.2,
                    scrollTrigger: {
                        trigger: titleTriggerRef.current,
                        start: "top 80%",
                    }
                }
            );

            // Text Animation
            gsap.fromTo(".about-text",
                { opacity: 0, y: 30 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 1,
                    stagger: 0.2,
                    scrollTrigger: {
                        trigger: textTriggerRef.current,
                        start: "top 75%",
                    }
                }
            );

            // Cards Animation
            gsap.fromTo(".feature-card",
                { opacity: 0, scale: 0.8, y: 50 },
                {
                    opacity: 1,
                    scale: 1,
                    y: 0,
                    duration: 0.8,
                    stagger: 0.15,
                    ease: "back.out(1.7)",
                    scrollTrigger: {
                        trigger: ".feature-grid",
                        start: "top 70%",
                    }
                }
            );
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={containerRef} className="py-40 px-6 bg-white relative overflow-hidden">
            <div className="container mx-auto max-w-6xl text-center">
                <div ref={titleTriggerRef} className="mb-24">
                    <span className="text-pink-500 font-dancing text-5xl block mb-4 drop-shadow-sm">Our Story</span>
                    <h2 className="text-6xl md:text-7xl font-playfair mb-8 text-gray-800 tracking-tight leading-tight">Captured Feelings</h2>
                </div>

                <div ref={textTriggerRef} className="prose prose-2xl mx-auto text-gray-600 font-poppins leading-relaxed max-w-4xl">
                    <p className="about-text mb-10">
                        Sitharaputhiri is more than just art; it's a collection of <span className="text-pink-500 font-medium">tiny moments</span>, frozen in time.
                        We believe in the magic of handwritten notes, the warmth of a shared memory, and the beauty of
                        little imperfections.
                    </p>
                    <p className="about-text font-medium text-gray-800 text-3xl font-dancing leading-loose">
                        "Handcrafted postcard-sized doodles filled with emotions, memories, and warmth."
                    </p>
                </div>

                <div className="feature-grid mt-32 grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
                    {[
                        { title: "Handmade", desc: "Every stroke with love" },
                        { title: "Unique", desc: "One of a kind pieces" },
                        { title: "Emotional", desc: "Art that speaks" }
                    ].map((item, idx) => (
                        <div
                            key={idx}
                            className="feature-card p-12 rounded-[2.5rem] bg-pink-50/50 backdrop-blur-sm border border-pink-100 hover:bg-pink-100 transition-colors duration-500 hover:shadow-2xl hover:shadow-pink-100/50 hover:-translate-y-2"
                        >
                            <h3 className="font-playfair text-3xl mb-4 text-pink-600">{item.title}</h3>
                            <p className="text-gray-500 font-poppins text-lg">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default About;
