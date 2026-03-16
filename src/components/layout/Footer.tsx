"use client";

import Link from "next/link";
import { ArrowRight, Instagram, Twitter, Linkedin, Facebook } from "lucide-react";

export function Footer() {
    return (
        <footer className="bg-card border-t border-white/5 pt-20 pb-10 relative overflow-hidden">
            {/* Decorative gradient */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent" />

            <div className="container mx-auto px-6 md:px-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-20">

                    {/* Brand Info */}
                    <div className="col-span-1 lg:col-span-1">
                        <h2 className="font-playfair text-3xl tracking-widest text-white mb-6 relative inline-block">
                            BABA<span className="text-foreground">PROPERTIES</span>
                        </h2>
                        <p className="text-muted-foreground mb-8 text-sm leading-relaxed max-w-sm">
                            Curating extraordinary living spaces for those who demand the absolute best in modern luxury.
                        </p>
                        <div className="flex space-x-4">
                            {[Instagram, Twitter, Linkedin, Facebook].map((Icon, i) => (
                                <a key={i} href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-muted-foreground hover:text-black hover:bg-white hover:border-white transition-all duration-300">
                                    <Icon size={18} />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="uppercase tracking-[0.2em] text-sm text-foreground mb-6 font-medium">Explore</h3>
                        <ul className="space-y-4">
                            {["Our Residences", "Amenities & Lifestyle", "The Ace Experience", "Neighborhood", "News & Press"].map((link) => (
                                <li key={link}>
                                    <Link href="#" className="text-muted-foreground hover:text-white transition-colors text-sm flex items-center group">
                                        <span className="w-0 h-[1px] bg-white inline-block transition-all duration-300 group-hover:w-4 group-hover:mr-2" />
                                        {link}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Details */}
                    <div>
                        <h3 className="uppercase tracking-[0.2em] text-sm text-foreground mb-6 font-medium">Contact</h3>
                        <ul className="space-y-4 text-sm text-muted-foreground">
                            <li>100 Luxury Avenue<br />Beverly Hills, CA 90210</li>
                            <li><a href="mailto:info@babaproperties.com" className="hover:text-white transition-colors">info@babaproperties.com</a></li>
                            <li><a href="tel:+18005550199" className="hover:text-white transition-colors">+1 (800) 555-0199</a></li>
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div className="col-span-1 md:col-span-2 lg:col-span-1">
                        <h3 className="uppercase tracking-[0.2em] text-sm text-foreground mb-6 font-medium">Newsletter</h3>
                        <p className="text-muted-foreground mb-6 text-sm">
                            Subscribe to stay updated on our exclusive new property listings and events.
                        </p>
                        <form className="relative" onSubmit={(e) => e.preventDefault()}>
                            <input
                                type="email"
                                placeholder="YOUR EMAIL ADDRESS"
                                className="w-full bg-background border-b border-white/20 px-0 py-3 text-sm text-foreground focus:outline-none focus:border-white transition-colors placeholder:text-muted-foreground/50 tracking-widest focus:ring-0"
                            />
                            <button
                                type="submit"
                                className="absolute right-0 top-1/2 -translate-y-1/2 text-white hover:opacity-70 transition-opacity"
                                aria-label="Subscribe"
                            >
                                <ArrowRight size={20} />
                            </button>
                        </form>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-xs text-muted-foreground/60 tracking-wider">
                    <p>&copy; {new Date().getFullYear()} BABA PROPERTIES. ALL RIGHTS RESERVED.</p>
                    <div className="flex space-x-6 mt-4 md:mt-0">
                        <Link href="#" className="hover:text-white transition-colors">PRIVACY POLICY</Link>
                        <Link href="#" className="hover:text-white transition-colors">TERMS OF SERVICE</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
