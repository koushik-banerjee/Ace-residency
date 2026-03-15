"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useInView, Variants } from "framer-motion";

export function ExperienceSection() {
    const containerRef = useRef<HTMLDivElement>(null);
    const textRef = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"],
    });

    const imageY = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"]);

    const isTextInView = useInView(textRef, { once: true, margin: "-150px" });

    const textVariants: Variants = {
        hidden: { opacity: 0, y: 30 },
        visible: (i: number) => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: i * 0.1,
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1],
            },
        }),
    };

    const lines = [
        "We redefine the concept of luxury",
        "living by seamlessly blending",
        "architectural mastery with",
        "unprecedented amenities."
    ];

    return (
        <section
            id="experience"
            ref={containerRef}
            className="py-32 bg-card relative overflow-hidden"
        >
            <div className="container mx-auto px-6 md:px-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

                    {/* Left Text Content */}
                    <div ref={textRef} className="order-2 lg:order-1">
                        <div className="flex items-center space-x-4 mb-8">
                            <div className="h-[1px] w-12 bg-white" />
                            <span className="text-white uppercase tracking-[0.3em] text-xs font-semibold">The Ace Experience</span>
                        </div>

                        <h2 className="font-playfair text-4xl md:text-5xl lg:text-5xl xl:text-6xl text-foreground leading-tight mb-12">
                            Where <span className="italic text-white">Design</span> Meets
                            <br /> Absolute Perfection.
                        </h2>

                        <div className="space-y-2 mb-12 max-w-lg">
                            {lines.map((line, i) => (
                                <motion.div
                                    key={i}
                                    className="overflow-hidden"
                                >
                                    <motion.p
                                        custom={i}
                                        variants={textVariants}
                                        initial="hidden"
                                        animate={isTextInView ? "visible" : "hidden"}
                                        className="text-muted-foreground text-lg md:text-xl font-light"
                                    >
                                        {line}
                                    </motion.p>
                                </motion.div>
                            ))}
                        </div>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={isTextInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                            transition={{ delay: 0.6, duration: 0.8 }}
                        >
                            <button className="relative px-8 py-4 uppercase tracking-[0.2em] text-sm overflow-hidden group border border-white/20 hover:border-white rounded-full transition-colors duration-500 hover:bg-white text-white hover:text-black">
                                <span className="relative z-10 transition-colors duration-500 delay-100">Our Story</span>
                            </button>
                        </motion.div>
                    </div>

                    {/* Right Image Parallax */}
                    <div className="order-1 lg:order-2 h-[600px] lg:h-[800px] w-full relative overflow-hidden bg-background">
                        <motion.div
                            style={{ y: imageY }}
                            className="absolute inset-0 w-full h-[140%]"
                        >
                            <img
                                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2940&auto=format&fit=crop"
                                alt="Luxury Interior"
                                className="w-full h-full object-cover filter brightness-90"
                            />
                        </motion.div>

                        {/* Decorative Elements */}
                        <div className="absolute top-10 right-10 w-24 h-24 border border-white/20 rounded-full animate-pulse blur-[1px]" />
                        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-black/50 to-transparent" />
                        <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-card to-transparent" />
                    </div>

                </div>
            </div>
        </section>
    );
}
