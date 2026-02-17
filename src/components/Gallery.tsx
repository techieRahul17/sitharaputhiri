import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const products = [
    { id: 1, title: 'Postcard Doodles', price: '₹85', img: 'https://placehold.co/400x500/pink/white?text=Postcard+1', type: 'postcard' },
    { id: 2, title: 'Couple Doodles', price: 'Custom', img: 'https://placehold.co/400x600/lavender/white?text=Couple+Art', type: 'custom' },
    { id: 3, title: 'Landscape', price: '₹85', img: 'https://placehold.co/400x300/pink/white?text=Landscape', type: 'postcard' },
    { id: 4, title: 'Bookmark Style', price: 'Coming Soon', img: 'https://placehold.co/300x700/pink/white?text=Bookmark', type: 'bookmark' },
    { id: 5, title: 'Abstract Pink', price: '₹85', img: 'https://placehold.co/400x400/lavender/white?text=Abstract', type: 'postcard' },
    { id: 6, title: 'Floral', price: '₹85', img: 'https://placehold.co/400x550/pink/white?text=Floral', type: 'postcard' },
];

const Gallery: React.FC = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo(".gallery-item",
                { opacity: 0, y: 100 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 1,
                    stagger: 0.2,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: ".gallery-grid",
                        start: "top 80%",
                    }
                }
            );
        }, containerRef);
        return () => ctx.revert();
    }, []);

    return (
        <section ref={containerRef} className="py-40 bg-gradient-to-b from-white to-pink-50" id="gallery">
            <div className="container mx-auto px-4">
                <div className="text-center mb-24">
                    <span className="font-dancing text-pink-500 text-4xl drop-shadow-sm">Collection</span>
                    <h2 className="text-6xl md:text-7xl font-playfair text-gray-800 mt-4">Our Doodles</h2>
                </div>

                <div className="gallery-grid columns-1 md:columns-2 lg:columns-3 gap-10 space-y-10 max-w-7xl mx-auto">
                    {products.map((item) => (
                        <div
                            key={item.id}
                            className="gallery-item break-inside-avoid relative group rounded-[2rem] overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl hover:shadow-pink-200/50 transition-all duration-500"
                        >
                            <img
                                src={item.img}
                                alt={item.title}
                                className="w-full h-auto object-cover transform group-hover:scale-110 transition-transform duration-1000"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                                <h3 className="text-white font-playfair text-2xl translate-y-8 group-hover:translate-y-0 transition-transform duration-500">{item.title}</h3>
                                <p className="text-pink-300 font-poppins font-medium mt-1 translate-y-8 group-hover:translate-y-0 transition-transform duration-500 delay-75">{item.price}</p>
                                {item.type === 'bookmark' && (
                                    <span className="absolute top-6 right-6 bg-white/20 backdrop-blur-md text-white text-xs px-3 py-1.5 rounded-full uppercase tracking-wider font-bold">Coming Soon</span>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Gallery;
