"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function HeroSection() {
    const containerRef = useRef<HTMLDivElement>(null);
    const videoRef = useRef<HTMLDivElement>(null);
    const textRef = useRef<HTMLDivElement>(null);
    const propertiesRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Video scale down and fade out on scroll
            gsap.to(videoRef.current, {
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top top",
                    end: "bottom top",
                    scrub: true,
                },
                scale: 0.8,
                opacity: 0,
                ease: "none",
            });

            // Hero text fade out and move up
            gsap.to(textRef.current, {
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top top",
                    end: "50% top",
                    scrub: true,
                },
                y: -100,
                opacity: 0,
                ease: "none",
            });

            // Properties section parallax effect
            gsap.fromTo(
                ".properties-bg",
                { y: "-20%" },
                {
                    scrollTrigger: {
                        trigger: propertiesRef.current,
                        start: "top bottom",
                        end: "bottom top",
                        scrub: true,
                    },
                    y: "20%",
                    ease: "none",
                }
            );

            // Properties text reveal
            gsap.from(".properties-content > *", {
                scrollTrigger: {
                    trigger: propertiesRef.current,
                    start: "top 80%",
                },
                y: 50,
                opacity: 0,
                duration: 1,
                stagger: 0.2,
                ease: "power3.out",
            });
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <div ref={containerRef} className="relative">
            {/* 1. Fullscreen Cinematic Video Hero */}
            <section className="relative h-screen w-full flex items-center justify-center overflow-hidden z-10">
                <div ref={videoRef} className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-black/50 z-10" />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/60 z-10" />
                    <video
                        autoPlay
                        muted
                        loop
                        playsInline
                        className="w-full h-full object-cover"
                    >
                        <source src="https://www.pexels.com/download/video/7239160/" type="video/mp4" />
                    </video>
                </div>

                <div ref={textRef} className="relative z-20 container mx-auto px-6 text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.2, ease: "easeOut" }}
                        className="font-playfair text-5xl md:text-7xl lg:text-8xl text-white mb-6 leading-tight"
                    >
                        Discover <span className="text-white/90">Extraordinary</span> Living
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
                        className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto tracking-wide font-light"
                    >
                        Where modern design meets timeless luxury
                    </motion.p>
                </div>

                {/* Scroll Indicator */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 1.5 }}
                    className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center"
                >
                    <div className="w-[1px] h-12 bg-white/20 relative overflow-hidden">
                        <motion.div
                            animate={{ y: ["-100%", "100%"] }}
                            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute top-0 left-0 w-full h-full bg-white"
                        />
                    </div>
                </motion.div>
            </section>

            {/* 3. Exquisite Properties Showcase Section */}
            <section
                ref={propertiesRef}
                className="relative min-h-screen w-full flex items-center justify-center overflow-hidden py-24"
            >
                {/* Background with Parallax */}
                <div className="absolute inset-0 z-0 properties-bg scale-110">
                    <div className="absolute inset-0 bg-black/60 z-10" />
                    <img
                        src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2940&auto=format&fit=crop"
                        alt="Luxury Property"
                        className="w-full h-full object-cover"
                        loading="lazy"
                    />
                </div>

                {/* Content */}
                <div className="relative z-20 container mx-auto px-6 text-center properties-content">
                    <div className="flex items-center justify-center space-x-4 mb-8">
                        <div className="h-[1px] w-8 md:w-12 bg-white/50" />
                        <span className="text-white/80 uppercase tracking-[0.3em] text-xs font-semibold">Exquisite Properties</span>
                        <div className="h-[1px] w-8 md:w-12 bg-white/50" />
                    </div>

                    <h2 className="font-playfair text-5xl md:text-7xl text-white mb-6">
                        Curated Excellence
                    </h2>

                    <p className="text-white/70 text-lg md:text-xl max-w-2xl mx-auto tracking-wide font-light mb-12">
                        Curated luxury homes designed for extraordinary lifestyles.
                    </p>

                    {/* Glassmorphism Card Element */}
                    <div className="max-w-4xl mx-auto mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { title: "Architectural Marvels", desc: "Innovative designs that push boundaries." },
                            { title: "Prime Locations", desc: "The most prestigious addresses in the city." },
                            { title: "Unmatched Comfort", desc: "Every detail crafted for your convenience." },
                        ].map((item, i) => (
                            <div
                                key={i}
                                className="bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-2xl hover:bg-white/10 transition-colors duration-500 group"
                            >
                                <h3 className="text-white font-medium mb-3 group-hover:text-white transition-colors">
                                    {item.title}
                                </h3>
                                <p className="text-white/50 text-sm leading-relaxed">
                                    {item.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
