"use client";

import { useState, useEffect } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
    { name: "Residences", href: "#residences" },
    { name: "Amenities", href: "#amenities" },
    { name: "Experience", href: "#experience" },
    { name: "Contact", href: "#contact" },
];

export function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const { scrollY } = useScroll();

    useMotionValueEvent(scrollY, "change", (latest) => {
        if (latest > 50) {
            setIsScrolled(true);
        } else {
            setIsScrolled(false);
        }
    });

    return (
        <>
            <motion.nav
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 1.5 }}
                className={cn(
                    "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
                    isScrolled
                        ? "bg-background/80 backdrop-blur-md border-b border-white/5 py-4 shadow-2xl shadow-black/50"
                        : "bg-transparent py-6"
                )}
            >
                <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
                    <Link href="/" className="group relative">
                        <h1 className="font-playfair text-2xl tracking-widest text-white">
                            BABA <span className="text-foreground">PROPERTIES</span>
                        </h1>
                        <div className="absolute -bottom-1 left-0 w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-full" />
                    </Link>

                    {/* Desktop Nav */}
                    <div className="hidden xl:flex items-center space-x-8">
                        {NAV_LINKS.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="text-sm uppercase tracking-widest text-muted-foreground hover:text-white transition-colors duration-300 relative group"
                            >
                                {link.name}
                                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-full" />
                            </Link>
                        ))}
                        <button className="px-6 py-2.5 bg-white/5 text-white border border-white/20 rounded-full hover:bg-white hover:text-black transition-all duration-300 uppercase tracking-widest text-xs">
                            Inquire Now
                        </button>
                    </div>

                    {/* Mobile Menu Toggle */}
                    <button
                        className="xl:hidden text-foreground hover:text-white transition-colors"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>
            </motion.nav>

            {/* Mobile Menu Overlay */}
            <motion.div
                initial={false}
                animate={{
                    opacity: isMobileMenuOpen ? 1 : 0,
                    pointerEvents: isMobileMenuOpen ? "auto" : "none"
                }}
                className="fixed inset-0 z-40 bg-background/95 backdrop-blur-xl flex flex-col items-center justify-center"
            >
                <div className="flex flex-col items-center space-y-8">
                    {NAV_LINKS.map((link, i) => (
                        <motion.div
                            key={link.name}
                            initial={{ y: 20, opacity: 0 }}
                            animate={{
                                y: isMobileMenuOpen ? 0 : 20,
                                opacity: isMobileMenuOpen ? 1 : 0
                            }}
                            transition={{ delay: i * 0.1 }}
                        >
                            <Link
                                href={link.href}
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="font-playfair text-3xl text-foreground hover:text-white transition-colors"
                            >
                                {link.name}
                            </Link>
                        </motion.div>
                    ))}
                    <motion.button
                        initial={{ y: 20, opacity: 0 }}
                        animate={{
                            y: isMobileMenuOpen ? 0 : 20,
                            opacity: isMobileMenuOpen ? 1 : 0
                        }}
                        transition={{ delay: 0.4 }}
                        className="mt-8 px-8 py-3 bg-white text-black font-medium tracking-widest uppercase text-sm rounded-full hover:bg-white/90 transition-colors"
                    >
                        Inquire Now
                    </motion.button>
                </div>
            </motion.div>
        </>
    );
}
