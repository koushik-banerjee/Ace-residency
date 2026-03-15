"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function LoadingScreen() {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Simulate initial loading time for assets
        const timeout = setTimeout(() => {
            setIsLoading(false);
        }, 2500);

        return () => clearTimeout(timeout);
    }, []);

    return (
        <AnimatePresence>
            {isLoading && (
                <motion.div
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                    className="fixed inset-0 z-[100] flex items-center justify-center bg-background pointer-events-none"
                >
                    <div className="flex flex-col items-center">
                        <motion.div
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            className="text-white mb-6 font-playfair text-4xl tracking-widest relative"
                        >
                            ACE RESIDENCY
                            <motion.div
                                initial={{ width: 0 }}
                                animate={{ width: "100%" }}
                                transition={{ duration: 1.5, ease: "easeInOut", delay: 0.5 }}
                                className="absolute -bottom-2 left-0 h-[3px] bg-white"
                            />
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.8 }}
                            className="text-muted-foreground text-sm tracking-[0.3em] uppercase"
                        >
                            Extraordinary Living
                        </motion.div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
