"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const SHOWCASE_IMAGES = [
    "https://images.unsplash.com/photo-1600607687644-c7171b42498f?q=80&w=2940&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=2874&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?q=80&w=2940&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=2940&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2940&auto=format&fit=crop",
];

export function ShowcaseSlider() {
    const targetRef = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: targetRef,
    });

    const x = useTransform(scrollYProgress, [0, 1], ["0%", "-75%"]);

    return (
        <section ref={targetRef} className="relative h-[300vh] bg-background">
            <div className="sticky top-0 h-screen flex items-center overflow-hidden">

                {/* Section Title Overlay */}
                <div className="absolute top-32 left-6 md:left-12 z-20 mix-blend-difference">
                    <div className="flex items-center space-x-4 mb-4">
                        <div className="h-[1px] w-12 bg-white" />
                        <span className="text-white uppercase tracking-[0.3em] text-xs font-semibold">Gallery</span>
                    </div>
                    <h2 className="font-playfair text-5xl md:text-7xl text-white">Visual <span className="italic">Journey</span></h2>
                </div>

                {/* Horizontal Scroll Track */}
                <motion.div style={{ x }} className="flex gap-8 px-6 md:px-12 pt-20 pb-10">
                    {SHOWCASE_IMAGES.map((src, index) => (
                        <div
                            key={index}
                            className="relative w-[80vw] sm:w-[60vw] md:w-[45vw] lg:w-[35vw] h-[60vh] md:h-[70vh] flex-shrink-0 group overflow-hidden"
                        >
                            <div className="absolute inset-0 bg-black/20 z-10 group-hover:bg-transparent transition-colors duration-700" />
                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                transition={{ duration: 1.5, ease: "easeOut" }}
                                className="w-full h-full"
                            >
                                <img
                                    src={src}
                                    alt={`Luxury Space ${index + 1}`}
                                    className="w-full h-full object-cover"
                                />
                            </motion.div>
                        </div>
                    ))}

                    {/* Final Element to show End of Gallery */}
                    <div className="relative w-[50vw] md:w-[30vw] h-[60vh] md:h-[70vh] flex-shrink-0 flex items-center justify-center border border-white/10 ml-8">
                        <div className="text-center">
                            <p className="font-playfair text-2xl text-white mb-4 italic">Experience it</p>
                            <p className="uppercase tracking-[0.2em] text-xs text-muted-foreground">Schedule a Private Viewing</p>
                        </div>
                    </div>
                </motion.div>

            </div>
        </section>
    );
}
