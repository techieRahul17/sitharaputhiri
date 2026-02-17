import React, { useRef, useEffect } from 'react';
import { Instagram, Phone, Heart } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Footer: React.FC = () => {
    const footerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo(".footer-content",
                { y: 50, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 1,
                    stagger: 0.2,
                    scrollTrigger: {
                        trigger: footerRef.current,
                        start: "top 90%"
                    }
                }
            );
        }, footerRef);
        return () => ctx.revert();
    }, []);

    return (
        <footer ref={footerRef} className="bg-white pt-32 pb-16 border-t border-pink-100 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-pink-200 via-purple-200 to-pink-200"></div>

            <div className="container mx-auto px-4 text-center">
                <div className="mb-20">
                    <h2 className="footer-content text-4xl md:text-5xl font-playfair mb-6 text-gray-800">Join the Family</h2>
                    <p className="footer-content text-gray-500 mb-12 font-poppins text-lg max-w-2xl mx-auto">Follow us for daily doodles, behind the scenes, and updates! We love seeing our art in your homes.</p>

                    <div className="footer-content flex flex-col md:flex-row justify-center items-center gap-6 mb-16">
                        <a href="#" className="group flex items-center gap-3 bg-pink-500 text-white px-8 py-4 rounded-full shadow-lg shadow-pink-200 hover:shadow-xl hover:shadow-pink-300 transition-all duration-300 transform hover:-translate-y-1 w-64 justify-center">
                            <Instagram size={22} className="group-hover:rotate-12 transition-transform" />
                            <span className="font-medium tracking-wide">Instagram</span>
                        </a>
                        <a href="#" className="group flex items-center gap-3 bg-[#25D366] text-white px-8 py-4 rounded-full shadow-lg shadow-green-200 hover:shadow-xl hover:shadow-green-300 transition-all duration-300 transform hover:-translate-y-1 w-64 justify-center">
                            <Phone size={22} className="group-hover:rotate-12 transition-transform" />
                            <span className="font-medium tracking-wide">WhatsApp</span>
                        </a>
                    </div>

                    <div className="footer-content">
                        <button className="relative cursor-pointer group bg-white border-2 border-pink-400 text-pink-500 px-12 py-4 rounded-full font-bold tracking-widest hover:bg-pink-400 hover:text-white transition-all duration-300 shadow-sm hover:shadow-lg">
                            PREORDER NOW
                        </button>
                    </div>
                </div>

                <div className="footer-content border-t border-gray-100 pt-10 flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm font-poppins gap-4">
                    <p>&copy; 2026 Sitharaputhiri. All rights reserved.</p>
                    <p className="flex items-center justify-center gap-2">
                        Made with <Heart size={16} className="text-red-400 fill-current animate-pulse" /> for Mela 2026
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
