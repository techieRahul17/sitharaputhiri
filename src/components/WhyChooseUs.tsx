import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Heart, Smile, Star, Gift } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const WhyChooseUs: React.FC = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    const reasons = [
        { icon: <Heart className="w-8 h-8 text-pink-500 group-hover:scale-110 transition-transform duration-300" />, title: "Handmade with Love", desc: "Every piece is crafted with genuine care and attention to detail." },
        { icon: <Smile className="w-8 h-8 text-yellow-500 group-hover:scale-110 transition-transform duration-300" />, title: "Personalized Memories", desc: "Custom art that tells your unique story." },
        { icon: <Star className="w-8 h-8 text-purple-500 group-hover:scale-110 transition-transform duration-300" />, title: "Affordable Art", desc: "Premium aesthetic without the premium price tag." },
        { icon: <Gift className="w-8 h-8 text-blue-500 group-hover:scale-110 transition-transform duration-300" />, title: "Perfect Gifts", desc: "The most thoughtful present for your loved ones." }
    ];

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo(".reason-card",
                { opacity: 0, scale: 0.9, y: 30 },
                {
                    opacity: 1,
                    scale: 1,
                    y: 0,
                    duration: 0.6,
                    stagger: 0.15,
                    ease: "back.out(1.5)",
                    scrollTrigger: {
                        trigger: ".reasons-grid",
                        start: "top 80%"
                    }
                }
            );
        }, containerRef);
        return () => ctx.revert();
    }, []);

    return (
        <section ref={containerRef} className="py-32 bg-white relative">
            <div className="container mx-auto px-4">
                <div className="text-center mb-20">
                    <h2 className="text-4xl md:text-5xl font-playfair text-gray-800">Why Sitharaputhiri?</h2>
                    <div className="w-24 h-1.5 bg-pink-200 mx-auto mt-6 rounded-full"></div>
                </div>

                <div className="reasons-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
                    {reasons.map((reason, idx) => (
                        <div
                            key={idx}
                            className="reason-card group text-center p-10 rounded-[2rem] hover:bg-pink-50/50 transition-all duration-500 border border-transparent hover:border-pink-100 hover:shadow-xl hover:-translate-y-2"
                        >
                            <div className="bg-gray-50 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm group-hover:bg-white transition-colors duration-300">
                                {reason.icon}
                            </div>
                            <h3 className="font-playfair text-xl mb-3 text-gray-800">{reason.title}</h3>
                            <p className="font-poppins text-gray-500 text-sm leading-relaxed">{reason.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;
