"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Menu, X, Terminal } from "lucide-react";
import { cn } from "../lib/utils";

interface NavItem {
    name: string;
    href: string;
    external?: boolean;
}

const navItems: NavItem[] = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
    { name: "Resume", href: "/sample-resume.pdf", external: true },
];

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState("");
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        const observerOptions = {
            root: null,
            rootMargin: "-20% 0px -35% 0px",
            threshold: 0.1,
        };

        const observerCallback = (entries: IntersectionObserverEntry[]) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setActiveSection(entry.target.id);
                } else if (window.scrollY < 100) {
                    setActiveSection("");
                }
            });
        };

        const observer = new IntersectionObserver(observerCallback, observerOptions);

        navItems.forEach((item) => {
            if (item.href.startsWith("#") && item.href !== "#") {
                const sectionId = item.href.substring(1);
                const element = document.getElementById(sectionId);
                if (element) observer.observe(element);
            }
        });

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
            observer.disconnect();
        };
    }, []);

    return (
        <header
            className={cn(
                "fixed top-4 left-1/2 -translate-x-1/2 z-50 transition-all duration-300",
                "rounded-full px-4 md:px-8 shadow-lg backdrop-blur-xl",
                scrolled
                    ? "bg-black/80 border border-white/10 py-3"
                    : "bg-black/40 border border-transparent py-4"
            )}
            style={{ width: "90%", maxWidth: "1100px" }}
        >
            <div className="w-full flex justify-between items-center">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Link href="#" className="flex items-center gap-2 text-xl font-bold tracking-tighter hover:text-orange-500 transition-colors">
                        <Terminal className="w-6 h-6 text-white" />
                        <span>
                            RDX<span className="text-orange-500">.</span>
                        </span>
                    </Link>
                </motion.div>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-8">
                    {navItems.map((item) => {
                        const isRoute = item.href.startsWith("/");
                        const isActive = isRoute
                            ? pathname === item.href
                            : activeSection === item.href.substring(1) ||
                              (item.href === "#" && activeSection === "");
                        const isExternal = item.external;

                        return (
                            <motion.div key={item.name} whileHover={{ y: -2 }}>
                                <Link
                                    href={item.href}
                                    target={isExternal ? "_blank" : undefined}
                                    className={cn(
                                        "text-sm font-medium transition-all relative py-1 px-3 rounded-lg",
                                        isActive && !isExternal
                                            ? "text-orange-500 bg-orange-500/10"
                                            : "text-white/60 hover:text-white hover:bg-white/5"
                                    )}
                                >
                                    {item.name}
                                    {isActive && !isExternal && (
                                        <motion.div
                                            layoutId="activeNav"
                                            className="absolute -bottom-0.5 left-0 right-0 h-1 bg-orange-500 rounded-full"
                                            initial={{ opacity: 0, scaleX: 0 }}
                                            animate={{ opacity: 1, scaleX: 1 }}
                                            transition={{ duration: 0.3 }}
                                        />
                                    )}
                                </Link>
                            </motion.div>
                        );
                    })}
                </nav>

                {/* Mobile Menu Button */}
                <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="md:hidden text-white hover:text-orange-500 transition-colors"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X /> : <Menu />}
                </motion.button>
            </div>

            {/* Mobile Nav */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="absolute top-full left-0 w-full bg-black/95 backdrop-blur-md border-b border-white/10 overflow-hidden md:hidden rounded-b-2xl"
                    >
                        <nav className="flex flex-col p-4 gap-2">
                            {navItems.map((item, index) => (
                                <motion.div
                                    key={item.name}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -20 }}
                                    transition={{ delay: index * 0.1, duration: 0.2 }}
                                >
                                    <Link
                                        href={item.href}
                                        target={item.external ? "_blank" : undefined}
                                        className="block text-lg font-medium text-white/70 hover:text-orange-500 transition-colors py-2 px-4 rounded-lg hover:bg-orange-500/10"
                                        onClick={() => setIsOpen(false)}
                                    >
                                        {item.name}
                                    </Link>
                                </motion.div>
                            ))}
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
