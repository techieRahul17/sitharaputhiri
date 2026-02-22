import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Check } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const Pricing: React.FC = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    const plans = [
        {
            name: "Postcard Doodles",
            price: "₹60+",
            features: ["1 person - ₹60", "2 ppl - ₹90", "3 ppl - ₹130"],
            color: "from-pink-100 to-white"
        },
        {
            name: "Custom Couple Doodles",
            price: "DM for Price",
            features: ["Fully personalized", "Digital + Physical copy", "Frame-worthy art"],
            color: "from-purple-100 to-white",
            featured: true
        },
        {
            name: "Photostrips",
            price: "Preorder",
            features: ["set of 5 strips", "Custom photos", "Glossy finish"],
            color: "from-blue-50 to-white"
        }
    ];

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo(".pricing-card",
                { opacity: 0, y: 50 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.8,
                    stagger: 0.2,
                    ease: "back.out(1.5)",
                    scrollTrigger: {
                        trigger: ".pricing-grid",
                        start: "top 75%"
                    }
                }
            );
        }, containerRef);
        return () => ctx.revert();
    }, []);

    return (
        <section ref={containerRef} className="py-24 relative bg-white" id="pricing">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-playfair text-gray-800">Pricing</h2>
                    <p className="text-gray-500 mt-2 font-dancing text-2xl text-pink-500">Affordable memories for everyone</p>
                </div>

                <div className="pricing-grid grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 max-w-7xl mx-auto items-stretch px-4 md:px-0">
                    {plans.map((plan, idx) => (
                        <div
                            key={idx}
                            className={`
                                pricing-card relative p-8 rounded-[2.5rem] border border-gray-100 shadow-xl transition-all duration-300 hover:-translate-y-3 flex flex-col justify-between
                                bg-gradient-to-b ${plan.color}
                                ${plan.featured ? 'md:scale-110 z-10 ring-4 ring-pink-100 shadow-2xl skew-y-0' : 'hover:shadow-2xl hover:shadow-pink-100/40'}
                            `}
                        >
                            {plan.featured && (
                                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-pink-500 text-white text-xs font-bold px-4 py-1.5 rounded-full shadow-md uppercase tracking-wider">
                                    Best Seller
                                </div>
                            )}
                            <h3 className={`text-2xl font-playfair text-gray-800 mb-2 ${plan.featured ? 'text-3xl' : ''}`}>{plan.name}</h3>
                            <div className="text-3xl font-bold text-pink-500 mb-6">{plan.price}</div>

                            <ul className="space-y-4 mb-8">
                                {plan.features.map((feat, fIdx) => (
                                    <li key={fIdx} className="flex items-center gap-3 text-gray-600 font-poppins text-sm group">
                                        <div className="p-1 rounded-full bg-green-100 text-green-500 group-hover:bg-pink-500 group-hover:text-white transition-colors duration-300">
                                            <Check size={14} />
                                        </div>
                                        {feat}
                                    </li>
                                ))}
                            </ul>

                            <button className="group relative bg-pink-500 text-white px-12 py-5 rounded-full font-bold text-lg tracking-wide shadow-xl hover:shadow-pink-300/50 transition-all duration-300 overflow-hidden">
                                <a href="https://wa.me/9840702348"><span className="relative z-10 group-hover:scale-105 inline-block transition-transform">Preorder Now</span></a>
                                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Pricing;
