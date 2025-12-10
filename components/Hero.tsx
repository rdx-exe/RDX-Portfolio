"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { mateSC } from "../app/fonts";
import Link from "next/link";

export default function Hero() {
    return (
        <section className="min-h-screen flex flex-col justify-center px-4 md:px-10 pt-20 pb-8 md:pb-0 relative overflow-hidden bg-gradient-to-br from-[#ff6600] via-black to-black">
            
            {/* Optional Background Glow (Made orange to match theme) */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-orange-500/10 rounded-full blur-[120px] -z-10" />

            <div className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                
                {/* LEFT SIDE TEXT */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <motion.h2
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="text-sm md:text-base font-medium text-white/60 mb-4 tracking-wider uppercase"
                    >
                        Cyber Security Enthusiast
                    </motion.h2>

                    <motion.h1
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className={`${mateSC.className} text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[0.9] mb-6`}
                    >
                        Ritam <br />
                        <span className="text-orange-500">Das</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="text-lg text-white/70 max-w-md mb-8 leading-relaxed"
                    >
                        Driven by curiosity and a love for security. I create simple, functional, and secure digital experiences.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="flex items-center gap-4 mb-8"
                    >
                        <div className="h-[1px] w-12 bg-white/30"></div>
                        <span className="text-sm text-white/80">Based in Kolkata, India</span>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.5 }}
                        className="flex gap-4"
                    >
                        <Link href="#projects">
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="px-8 py-3 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-lg transition-colors"
                            >
                                View My Work
                            </motion.button>
                        </Link>
                        <Link href="#contact">
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="px-8 py-3 border-2 border-white/30 hover:border-white/60 text-white font-semibold rounded-lg transition-colors"
                            >
                                Get In Touch
                            </motion.button>
                        </Link>
                    </motion.div>
                </motion.div>

                {/* RIGHT SIDE IMAGE */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="relative h-[400px] md:h-[600px] w-full rounded-2xl overflow-hidden"
                >
                    <Image
                        src="/hero.jpg"
                        alt="Ritam Das - Portfolio"
                        fill
                        className="object-cover"
                        quality={100}
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                </motion.div>
            </div>
        </section>
    );
}