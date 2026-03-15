"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export function HeroSection() {
    const containerRef = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"],
    });

    const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
    const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
    const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

    return (
        <section
            ref={containerRef}
            className="relative h-screen w-full flex items-center justify-center overflow-hidden"
        >
            {/* Background Image with slow zoom (simulating cinematic video pan) / Parallax */}
            <motion.div
                style={{ y, scale }}
                className="absolute inset-0 z-0"
            >
                <div className="absolute inset-0 bg-black/40 z-10" />
                <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-background z-10" />
                <motion.div
                    animate={{ scale: 1.05 }}
                    transition={{ duration: 20, repeat: Infinity, repeatType: "reverse", ease: "linear" }}
                    className="w-full h-full"
                >
                    <img
                        src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2940&auto=format&fit=crop"
                        alt="Luxury Mansion Exterior"
                        className="w-full h-full object-cover"
                    />
                </motion.div>
            </motion.div>

            {/* Content */}
            <motion.div
                style={{ opacity }}
                className="relative z-20 container mx-auto px-6 md:px-12 flex flex-col items-center text-center mt-20 mb-30"
            >
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 2.5, ease: "easeOut" }}
                    className="flex items-center space-x-4 mb-6"
                >
                    <div className="h-[1px] w-12 bg-white" />
                    <span className="text-white uppercase tracking-[0.3em] text-xs font-semibold">Exquisite Properties</span>
                    <div className="h-[1px] w-12 bg-white" />
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.2, delay: 2.7, ease: [0.2, 0.65, 0.3, 0.9] }}
                    className="font-playfair text-5xl md:text-7xl lg:text-8xl text-white mb-6 leading-tight max-w-5xl"
                >
                    Discover <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white/80 to-white/50">Extraordinary</span> Living
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 3, ease: "easeOut" }}
                    className="text-white/80 text-lg md:text-xl max-w-2xl tracking-wide font-light mb-12"
                >
                    Luxury homes curated for modern lifestyles. Enter a world of unparalleled elegance and breathtaking architecture.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 3.3 }}
                >
                    <button className="px-10 py-4 bg-white text-black rounded-full font-medium tracking-widest uppercase text-sm hover:bg-white/90 transition-all duration-300">
                        Explore Residences
                    </button>
                </motion.div>
            </motion.div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 4 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center"
            >
                <span className="text-white/50 text-xs tracking-[0.2em] uppercase mb-4">Scroll to Explore</span>
                <div className="w-[1px] h-12 bg-white/20 relative overflow-hidden">
                    <motion.div
                        animate={{ y: ["-100%", "100%"] }}
                        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute top-0 left-0 w-full h-full bg-white"
                    />
                </div>
            </motion.div>
        </section>
    );
}
