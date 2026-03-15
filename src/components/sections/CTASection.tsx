"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export function CTASection() {
    return (
        <section className="relative py-40 overflow-hidden flex items-center justify-center">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0">
                <motion.div
                    whileInView={{ scale: 1.05 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 10, ease: "easeOut" }}
                    className="w-full h-full"
                >
                    <img
                        src="https://images.unsplash.com/photo-1600566752355-35792bedcfea?q=80&w=2940&auto=format&fit=crop"
                        alt="Luxury Pool"
                        className="w-full h-full object-cover filter brightness-[0.4]"
                    />
                </motion.div>
                {/* Gradients to blend with previous/next sections */}
                <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-card to-transparent" />
                <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-card to-transparent" />
            </div>

            <div className="container mx-auto px-6 relative z-10 flex flex-col items-center text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="max-w-3xl glassmorphism-card text-white"
                >
                    <h2 className="font-playfair text-5xl md:text-7xl mb-6">
                        Begin Your <span className="italic text-white">Journey</span>
                    </h2>
                    <p className="text-white/80 text-lg md:text-xl font-light max-w-2xl mx-auto mb-12">
                        Schedule a private consultation with our luxury real estate specialists to find your extraordinary home.
                    </p>

                    <button className="group relative inline-flex items-center justify-center px-10 py-5 bg-white text-black font-medium tracking-[0.2em] rounded-full uppercase overflow-hidden transition-all hover:scale-105 duration-300">
                        {/* Button Glow Effect */}
                        <div className="absolute inset-0 bg-black/5 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
                        <span className="relative z-10 text-sm">Contact an Agent</span>
                        <ArrowRight size={18} className="relative z-10 ml-3 group-hover:translate-x-1 transition-transform" />

                        {/* Outer Glow */}
                        <div className="absolute -inset-2 bg-white/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0" />
                    </button>
                </motion.div>
            </div>
        </section>
    );
}
