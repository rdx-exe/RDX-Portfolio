"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Linkedin, Github, Twitter, Mail } from "lucide-react";
import { mateSC } from "../app/fonts";

export default function About() {
    return (
        <>
            <header className="py-6 px-4 md:px-10 mt-0 bg-zinc-950 text-white">
                <div className="pt-8 md:pt-12"> {/* internal padding to move heading down without shifting layout */}
                    <motion.h1
                        initial={{ opacity: 0, y: 8 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className={`${mateSC.className} text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-center mb-4`}
                    >
                        Hey there! I&apos;m Ritam.
                    </motion.h1>
                </div>
            </header>

            <section id="about" className="py-0 px-4 md:px-10 bg-zinc-950 text-white">
                <div className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
                    {/* Left: Social Logos */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="w-full flex flex-row items-center justify-center md:flex-col md:items-center md:justify-start"
                    >
                        <div className="flex flex-row md:flex-col gap-4 text-white/60 w-full md:w-auto justify-center md:justify-start">
                            <motion.div whileHover={{ scale: 1.15, color: "#ff6600" }} whileTap={{ scale: 0.95 }}>
                                <Link
                                    href="https://www.linkedin.com/in/das-ritam"
                                    target="_blank"
                                    aria-label="LinkedIn"
                                    className="flex items-center gap-3 text-lg hover:text-orange-500 transition-colors"
                                >
                                    <Linkedin className="w-8 h-8" />
                                    <span className="hidden md:inline">/das-ritam</span>
                                </Link>
                            </motion.div>

                            <motion.div whileHover={{ scale: 1.15, color: "#ff6600" }} whileTap={{ scale: 0.95 }}>
                                <Link
                                    href="https://github.com/rdx-exe"
                                    target="_blank"
                                    aria-label="GitHub"
                                    className="flex items-center gap-3 text-lg hover:text-orange-500 transition-colors"
                                >
                                    <Github className="w-8 h-8" />
                                    <span className="hidden md:inline">/rdx-exe</span>
                                </Link>
                            </motion.div>

                            <motion.div whileHover={{ scale: 1.15, color: "#ff6600" }} whileTap={{ scale: 0.95 }}>
                                <Link
                                    href="https://x.com/rdx_exe"
                                    target="_blank"
                                    aria-label="X (Twitter)"
                                    className="flex items-center gap-3 text-lg hover:text-orange-500 transition-colors"
                                >
                                    <Twitter className="w-8 h-8" />
                                    <span className="hidden md:inline">@rdx_exe</span>
                                </Link>
                            </motion.div>

                            <motion.div whileHover={{ scale: 1.15, color: "#ff6600" }} whileTap={{ scale: 0.95 }}>
                                <Link
                                    href="mailto:das.ritam077@gmail.com"
                                    aria-label="Email"
                                    className="flex items-center gap-3 text-lg hover:text-orange-500 transition-colors"
                                >
                                    <Mail className="w-8 h-8" />
                                    <span className="hidden md:inline">das.ritam077@gmail.com</span>
                                </Link>
                            </motion.div>
                        </div>
                    </motion.div>

                    {/* Right: About paragraph */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="flex flex-col justify-start"
                    >
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="p-6 bg-white/5 border border-white/10 rounded-xl backdrop-blur-sm hover:bg-white/10 transition-colors"
                        >
                            <p className="text-lg text-white/80 leading-relaxed max-w-2xl">
                                An engineering undergrad, building clean, performant, and <span className="text-orange-400 font-semibold">secure digital experiences</span>. I enjoy taking ideas from a rough concept to polished product, with attention to <span className="text-orange-400 font-semibold">accessibility, performance, maintainability</span>, and most importantly <span className="text-orange-500 font-bold">'security'</span>. My work spans frontend interfaces, tooling, and small backend services; I prefer simple, pragmatic solutions that scale.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                            className="mt-6 p-6 bg-white/5 border border-white/10 rounded-xl backdrop-blur-sm hover:bg-white/10 transition-colors"
                        >
                            <p className="text-lg text-white/80 leading-relaxed max-w-2xl">
                                When I&apos;m not building, I&apos;m learning about <span className="text-orange-400 font-semibold">offensive security</span>, experimenting with <span className="text-orange-400 font-semibold">small automation projects</span>, or refining an <span className="text-orange-400 font-semibold">open-source contribution</span>. If you&apos;d like to collaborate or say hello, reach out via any of the links given.
                            </p>
                        </motion.div>
                    </motion.div>
                </div>
                <div className="h-12 md:h-24" /> {/* extra space at the end of the about page */}
            </section>
        </>
    );
}
