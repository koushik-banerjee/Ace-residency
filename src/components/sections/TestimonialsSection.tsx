"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const TESTIMONIALS = [
    {
        id: 1,
        quote: "The attention to detail in their properties is simply unmatched. It's not just a home; it's a meticulously crafted masterpiece that elevates everyday living.",
        author: "Eleanor Vance",
        role: "CEO, TechVentures",
    },
    {
        id: 2,
        quote: "Purchasing a property through Baba Properties was the most seamless luxury experience I've ever encountered. Their team anticipates needs you didn't even know you had.",
        author: "Jameson Wright",
        role: "International Developer",
    },
    {
        id: 3,
        quote: "The architectural vision and integration of smart home technology creates an environment that is both breathtakingly beautiful and effortlessly functional.",
        author: "Sophia Laurent",
        role: "Award-winning Designer",
    },
];

export function TestimonialsSection() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [direction, setDirection] = useState(1);

    const next = () => {
        setDirection(1);
        setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
    };

    const prev = () => {
        setDirection(-1);
        setCurrentIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
    };

    useEffect(() => {
        const timer = setInterval(() => {
            next();
        }, 6000);
        return () => clearInterval(timer);
    }, [currentIndex]);

    const variants: Variants = {
        enter: (direction: number) => ({
            x: direction > 0 ? 50 : -50,
            opacity: 0,
            scale: 0.95,
        }),
        center: {
            x: 0,
            opacity: 1,
            scale: 1,
            transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
        },
        exit: (direction: number) => ({
            x: direction > 0 ? -50 : 50,
            opacity: 0,
            scale: 0.95,
            transition: { duration: 0.5, ease: "easeIn" }
        }),
    };

    return (
        <section className="py-32 bg-card relative overflow-hidden">
            {/* Background Accents */}
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.05),transparent_40%)] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-full h-full bg-[radial-gradient(circle_at_bottom_left,rgba(255,255,255,0.03),transparent_40%)] pointer-events-none" />

            <div className="container mx-auto px-6 md:px-12 relative z-10">
                <div className="flex flex-col items-center text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="flex items-center space-x-4 mb-4"
                    >
                        <div className="h-[1px] w-8 bg-white" />
                        <span className="text-white uppercase tracking-[0.3em] text-xs font-semibold">Client Voices</span>
                        <div className="h-[1px] w-8 bg-white" />
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="font-playfair text-4xl md:text-5xl text-foreground"
                    >
                        What They <span className="italic text-white">Say</span>
                    </motion.h2>
                </div>

                <div className="max-w-4xl mx-auto relative h-[400px] md:h-[300px]">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 opacity-20 text-white">
                        <Quote size={120} />
                    </div>

                    <AnimatePresence custom={direction} mode="wait">
                        <motion.div
                            key={currentIndex}
                            custom={direction}
                            variants={variants}
                            initial="enter"
                            animate="center"
                            exit="exit"
                            className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 md:px-12 pt-16"
                        >
                            <p className="font-playfair text-2xl md:text-3xl text-foreground leading-relaxed mb-8 font-light relative z-10">
                                &quot;{TESTIMONIALS[currentIndex].quote}&quot;
                            </p>
                            <div>
                                <h4 className="uppercase tracking-widest text-sm text-white font-semibold mb-1">
                                    {TESTIMONIALS[currentIndex].author}
                                </h4>
                                <p className="text-muted-foreground text-xs uppercase tracking-[0.2em]">
                                    {TESTIMONIALS[currentIndex].role}
                                </p>
                            </div>
                        </motion.div>
                    </AnimatePresence>

                    {/* Controls */}
                    <div className="absolute bottom-0 left-0 w-full flex justify-between items-center mt-12 px-4 md:px-0">
                        <button
                            onClick={prev}
                            className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-muted-foreground hover:border-white hover:text-white transition-all duration-300 group"
                        >
                            <ChevronLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
                        </button>

                        {/* Dots */}
                        <div className="flex space-x-3">
                            {TESTIMONIALS.map((_, idx) => (
                                <button
                                    key={idx}
                                    onClick={() => {
                                        setDirection(idx > currentIndex ? 1 : -1);
                                        setCurrentIndex(idx);
                                    }}
                                    className={`w-2 h-2 rounded-full transition-all duration-300 ${idx === currentIndex ? "bg-white w-8" : "bg-white/20 hover:bg-white/40"
                                        }`}
                                    aria-label={`Go to slide ${idx + 1}`}
                                />
                            ))}
                        </div>

                        <button
                            onClick={next}
                            className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-muted-foreground hover:border-white hover:text-white transition-all duration-300 group"
                        >
                            <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
