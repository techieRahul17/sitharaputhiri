import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Team: React.FC = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo(".artist-card",
                { opacity: 0, scale: 0.8, rotateX: 10 },
                {
                    opacity: 1,
                    scale: 1,
                    rotateX: 0,
                    duration: 1.2,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: containerRef.current,
                        start: "top 70%"
                    }
                }
            );
        }, containerRef);
        return () => ctx.revert();
    }, []);

    return (
        <section ref={containerRef} className="py-32 bg-gradient-to-t from-pink-50 to-white overflow-hidden">
            <div className="container mx-auto px-4 text-center">
                <h2 className="text-4xl md:text-5xl font-playfair mb-20 text-gray-800 leading-tight">Meet the Artist</h2>

                <div className="artist-card max-w-md mx-auto perspective-1000 relative z-10">
                    <div className="relative bg-white/40 backdrop-blur-xl rounded-[2.5rem] p-8 md:p-12 border border-white/60 shadow-2xl hover:shadow-pink-200/50 transition-all duration-700 group">
                        <div className="absolute inset-0 bg-gradient-to-br from-pink-400/10 to-purple-400/10 rounded-[2.5rem] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                        <div className="w-48 h-48 md:w-56 md:h-56 mx-auto rounded-full overflow-hidden border-[6px] border-white shadow-xl mb-10 relative z-10 transform transition-transform duration-700 group-hover:scale-105">
                            <img
                                src="https://placehold.co/400x400/pink/white?text=Artist"
                                alt="Artist"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="relative z-10">
                            <h3 className="text-3xl md:text-4xl font-playfair text-gray-800 mb-2">Your Name</h3>
                            <p className="text-pink-500 font-dancing text-2xl md:text-3xl mb-8">Lead Artist & Creator</p>
                            <p className="font-poppins text-gray-600 text-lg leading-relaxed italic">
                                "Pouring my heart into every sketch, hoping to bring a smile to your face."
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Team;
