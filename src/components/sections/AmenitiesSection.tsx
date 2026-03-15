"use client";

import { motion, Variants } from "framer-motion";
import { Shield, Wine, Dumbbell, Car, Utensils, Wifi } from "lucide-react";

const AMENITIES = [
    {
        icon: Shield,
        title: "24/7 Concierge & Security",
        description: "Round-the-clock premium security personnel and personalized white-glove concierge services.",
    },
    {
        icon: Wine,
        title: "Private Wine Cellars",
        description: "Climate-controlled personal tasting rooms and storage for your most prized collections.",
    },
    {
        icon: Dumbbell,
        title: "State-of-the-art Wellness",
        description: "Olympic-sized indoor pools, spa facilities, and fully equipped smart fitness centers.",
    },
    {
        icon: Car,
        title: "Automated Valet Parking",
        description: "Secure, climate-controlled subterranean garages with EV charging and direct elevator access.",
    },
    {
        icon: Utensils,
        title: "Michelin-Star Dining",
        description: "Exclusive resident-only restaurants featuring diverse, world-class culinary experiences.",
    },
    {
        icon: Wifi,
        title: "Smart Home Integration",
        description: "Seamless control over climate, lighting, security, and entertainment from anywhere.",
    },
];

const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15,
        },
    },
};

const cardVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: "easeOut" }
    },
};

export function AmenitiesSection() {
    return (
        <section id="amenities" className="py-32 bg-background relative overflow-hidden">
            <div className="container mx-auto px-6 md:px-12">

                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8 }}
                        className="flex items-center justify-center space-x-4 mb-6"
                    >
                        <div className="h-[1px] w-8 bg-white" />
                        <span className="text-white uppercase tracking-[0.3em] text-xs font-semibold">Unrivaled Lifestyle</span>
                        <div className="h-[1px] w-8 bg-white" />
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="font-playfair text-4xl md:text-5xl lg:text-6xl text-foreground mb-6"
                    >
                        World-Class <span className="text-white italic">Amenities</span>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="text-muted-foreground tracking-wide text-lg"
                    >
                        Experience a level of service and facilities that surpass the world&apos;s most exclusive five-star resorts, designed entirely around your lifestyle.
                    </motion.p>
                </div>

                {/* Grid */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                >
                    {AMENITIES.map((amenity, index) => (
                        <motion.div
                            key={index}
                            variants={cardVariants}
                            className="group relative bg-card border border-white/5 p-8 overflow-hidden hover:border-white/30 transition-colors duration-500"
                        >
                            {/* Hover Glow Effect */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-white/10 rounded-full blur-[80px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

                            <div className="relative z-10">
                                <div className="w-14 h-14 rounded-full border border-white/10 flex items-center justify-center mb-6 text-white group-hover:scale-110 group-hover:bg-white/10 transition-all duration-500">
                                    <amenity.icon strokeWidth={1.5} size={24} />
                                </div>

                                <h3 className="font-playfair text-xl text-foreground mb-4 group-hover:text-white/80 transition-colors">{amenity.title}</h3>
                                <p className="text-muted-foreground text-sm leading-relaxed">{amenity.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
