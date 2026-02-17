import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { Heart } from 'lucide-react';

const Background: React.FC = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.utils.toArray<HTMLElement>(".global-floating-heart").forEach((heart) => {
                gsap.to(heart, {
                    y: `random(-200, 200)`,
                    x: `random(-100, 100)`,
                    rotation: `random(-180, 180)`,
                    scale: `random(0.8, 1.2)`,
                    duration: `random(5, 10)`,
                    repeat: -1,
                    yoyo: true,
                    ease: "sine.inOut"
                });
            });
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <div ref={containerRef} className="fixed inset-0 pointer-events-none overflow-hidden z-50">
            {[...Array(30)].map((_, i) => (
                <div
                    key={i}
                    className="global-floating-heart absolute opacity-40 text-pink-400 transform-gpu mix-blend-multiply"
                    style={{
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                        fontSize: `${Math.random() * 4 + 1}rem`,
                        filter: `blur(${Math.random() * 2}px)`
                    }}
                >
                    <Heart fill="currentColor" />
                </div>
            ))}
        </div>
    );
};

export default Background;
