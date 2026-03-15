"use client";

import { useRef } from "react";
import { motion, useInView, Variants } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const PROPERTIES = [
    {
        id: 1,
        title: "The Glass House",
        location: "Beverly Hills, CA",
        price: "$45,000,000",
        beds: 6,
        baths: 8,
        sqft: "12,500",
        image: "https://images.unsplash.com/photo-1613977257363-707ba9348227?q=80&w=2940&auto=format&fit=crop",
    },
    {
        id: 2,
        title: "Oceanfront Estate",
        location: "Malibu, CA",
        price: "$68,500,000",
        beds: 8,
        baths: 11,
        sqft: "18,200",
        image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2940&auto=format&fit=crop",
    },
    {
        id: 3,
        title: "Modern Oasis",
        location: "Bel Air, CA",
        price: "$32,900,000",
        beds: 5,
        baths: 7,
        sqft: "9,800",
        image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2940&auto=format&fit=crop",
    },
    {
        id: 4,
        title: "Sky Penthouse",
        location: "Manhattan, NY",
        price: "$85,000,000",
        beds: 4,
        baths: 5,
        sqft: "7,500",
        image: "https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=2938&auto=format&fit=crop",
    },
];

const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2,
            delayChildren: 0.3,
        },
    },
};

const itemVariant: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
    },
};

export function FeaturedProperties() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section id="residences" className="py-32 bg-background relative overflow-hidden">
            <div className="container mx-auto px-6 md:px-12">

                {/* Section Header */}
                <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="max-w-2xl"
                    >
                        <div className="flex items-center space-x-4 mb-4">
                            <div className="h-[1px] w-12 bg-white" />
                            <span className="text-white uppercase tracking-[0.3em] text-xs font-semibold">Curated Collection</span>
                        </div>
                        <h2 className="font-playfair text-4xl md:text-6xl text-foreground">Featured <span className="text-white italic">Residences</span></h2>
                    </motion.div>
                    <motion.button
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                        className="group flex items-center text-sm uppercase tracking-widest hover:text-white transition-colors"
                    >
                        View All Properties
                        <div className="ml-3 w-10 h-10 rounded-full border border-white/20 flex items-center justify-center group-hover:border-white transition-colors">
                            <ArrowUpRight size={16} />
                        </div>
                    </motion.button>
                </div>

                {/* Properties Grid */}
                <motion.div
                    ref={ref}
                    variants={staggerContainer}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12"
                >
                    {PROPERTIES.map((property) => (
                        <motion.div
                            key={property.id}
                            variants={itemVariant}
                            className="group cursor-pointer"
                        >
                            {/* Image Container */}
                            <div className="relative aspect-[4/5] md:aspect-[3/4] overflow-hidden mb-6 bg-card border border-white/5">
                                <motion.div
                                    whileHover={{ scale: 1.05 }}
                                    transition={{ duration: 1.2, ease: "easeOut" }}
                                    className="w-full h-full"
                                >
                                    <img
                                        src={property.image}
                                        alt={property.title}
                                        className="w-full h-full object-cover filter brightness-90 group-hover:brightness-100 transition-all duration-700"
                                    />
                                </motion.div>

                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60" />

                                {/* Overlay Info */}
                                <div className="absolute top-6 left-6 flex space-x-3">
                                    <span className="bg-background/80 backdrop-blur-md px-4 py-1.5 text-xs font-medium tracking-widest uppercase">For Sale</span>
                                </div>

                                <div className="absolute bottom-6 right-6">
                                    <div className="w-12 h-12 rounded-full bg-white text-black flex items-center justify-center translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                                        <ArrowUpRight size={20} />
                                    </div>
                                </div>
                            </div>

                            {/* Property Details */}
                            <div className="flex justify-between items-start">
                                <div>
                                    <h3 className="font-playfair text-2xl md:text-3xl text-foreground mb-2 group-hover:text-white/80 transition-colors">{property.title}</h3>
                                    <p className="text-muted-foreground tracking-wide text-sm mb-4">{property.location}</p>
                                    <div className="flex items-center space-x-6 text-xs uppercase tracking-widest text-muted-foreground/80">
                                        <span>{property.beds} BEDS</span>
                                        <span className="w-1 h-1 rounded-full bg-white/20" />
                                        <span>{property.baths} BATHS</span>
                                        <span className="w-1 h-1 rounded-full bg-white/20" />
                                        <span>{property.sqft} SQFT</span>
                                    </div>
                                </div>
                                <div className="text-right">
                                    <span className="text-xl md:text-2xl font-light text-foreground">{property.price}</span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
