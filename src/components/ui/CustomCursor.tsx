"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

export function CustomCursor() {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const updateMousePosition = (e: MouseEvent) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };

        const handleMouseOver = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            if (
                target.tagName.toLowerCase() === "a" ||
                target.tagName.toLowerCase() === "button" ||
                target.closest("a") ||
                target.closest("button") ||
                target.hasAttribute("data-cursor-hover")
            ) {
                setIsHovering(true);
            } else {
                setIsHovering(false);
            }
        };

        window.addEventListener("mousemove", updateMousePosition);
        window.addEventListener("mouseover", handleMouseOver);

        return () => {
            window.removeEventListener("mousemove", updateMousePosition);
            window.removeEventListener("mouseover", handleMouseOver);
        };
    }, [pathname]);

    // Don't render cursor on mobile/tablet devices or touch-enabled devices
    if (typeof window !== "undefined") {
        const isTouchDevice = window.matchMedia("(pointer: coarse)").matches;
        const isSmallScreen = window.innerWidth <= 1024;
        if (isTouchDevice || isSmallScreen) {
            return null;
        }
    }

    return (
        <>
            <motion.div
                className="fixed top-0 left-0 w-3 h-3 bg-white rounded-full pointer-events-none z-[100] mix-blend-difference hidden lg:block"
                animate={{
                    x: mousePosition.x - 6,
                    y: mousePosition.y - 6,
                    scale: isHovering ? 0 : 1,
                    opacity: 1,
                }}
                transition={{ type: "tween", ease: "backOut", duration: 0.15 }}
            />
            <motion.div
                className="fixed top-0 left-0 w-10 h-10 border border-white/50 rounded-full pointer-events-none z-[99] hidden lg:block"
                animate={{
                    x: mousePosition.x - 20,
                    y: mousePosition.y - 20,
                    scale: isHovering ? 1.5 : 1,
                    backgroundColor: isHovering ? "rgba(255, 255, 255, 0.1)" : "transparent",
                }}
                transition={{ type: "tween", ease: "easeOut", duration: 0.3 }}
            />
        </>
    );
}
