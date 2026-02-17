import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { AlertCircle } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const Preorder: React.FC = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const imageRef = useRef<HTMLDivElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top 70%",
                    end: "bottom bottom",
                    toggleActions: "play none none reverse"
                }
            });

            tl.fromTo(imageRef.current,
                { x: -100, opacity: 0, rotate: -10 },
                { x: 0, opacity: 1, rotate: -2, duration: 1.2, ease: "power3.out" }
            )
                .fromTo(contentRef.current,
                    { x: 50, opacity: 0 },
                    { x: 0, opacity: 1, duration: 1.2, ease: "power3.out" },
                    "-=0.8"
                );

            // Floating blobs animation
            gsap.to(".blob-anim", {
                y: "random(-30, 30)",
                x: "random(-20, 20)",
                scale: "random(0.9, 1.1)",
                duration: 4,
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut",
                stagger: 1
            });

        }, containerRef);
        return () => ctx.revert();
    }, []);

    return (
        <section ref={containerRef} className="py-40 bg-pink-50 relative overflow-hidden">
            {/* Decorative background */}
            <div className="blob-anim absolute top-0 left-0 w-[40rem] h-[40rem] bg-pink-200 rounded-full mix-blend-multiply filter blur-[80px] opacity-30"></div>
            <div className="blob-anim absolute bottom-0 right-0 w-[40rem] h-[40rem] bg-purple-200 rounded-full mix-blend-multiply filter blur-[80px] opacity-30"></div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-24">
                    <h2 className="text-5xl md:text-7xl font-playfair text-gray-800 mb-8 drop-shadow-sm">Photostrips</h2>
                    <div className="inline-flex items-center gap-3 bg-red-100/90 backdrop-blur-sm border border-red-200 text-red-600 px-8 py-3 rounded-full text-base font-bold tracking-wide shadow-md hover:shadow-lg transition-shadow">
                        <AlertCircle size={20} />
                        <span>Preorder Only – Not Available at Live Stall</span>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row gap-20 items-center justify-center max-w-7xl mx-auto">
                    <div ref={imageRef} className="w-full md:w-1/2 max-w-lg transform hover:scale-105 transition-transform duration-500">
                        <div className="bg-white p-6 pb-20 shadow-2xl rotate-[-2deg] hover:rotate-0 transition-transform duration-500 rounded-sm border border-gray-100">
                            <img
                                src="https://placehold.co/300x800/pink/white?text=Photostrip+Example"
                                alt="Photostrip"
                                className="w-full h-auto filter sepia-[.2]"
                            />
                        </div>
                    </div>

                    <div ref={contentRef} className="w-full md:w-1/2 text-center md:text-left space-y-10">
                        <h3 className="text-5xl md:text-6xl font-playfair text-gray-800 leading-tight">Capture Memories<br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500">in a Strip</span></h3>
                        <p className="text-gray-600 text-xl font-poppins leading-relaxed max-w-xl">
                            Perfect for your dorm room wall, wallet, or phone case.
                            Customize with 3-4 of your favorite photos.
                        </p>
                        <button className="group relative bg-pink-500 text-white px-12 py-5 rounded-full font-bold text-lg tracking-wide shadow-xl hover:shadow-pink-300/50 transition-all duration-300 overflow-hidden">
                            <span className="relative z-10 group-hover:scale-105 inline-block transition-transform">Preorder Now</span>
                            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Preorder;
