"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Github } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const projects = [
    {
        title: "passForge",
        category: "Cybersecurity Tool",
        description: "Intelligence-driven password list generator with ML-based patterns and phonetic variations.",
        link: "",
        color: "bg-red-500",
        image: "/passforge_bg.png"
    },
    {
        title: "takeover",
        category: "Open Source Contribution",
        description: "Sub-Domain TakeOver Vulnerability Scanner.",
        link: "",
        color: "bg-orange-500",
        image: "/takeover_bg.png"
    },
    {
        title: "Packet-Sniffer",
        category: "Cybersecurity Tool",
        description: "A packet sniffer coded in pure python.",
        link: "",
        color: "bg-green-500",
        image: "/packet_sniffer_bg.png"
    },
    {
        title: "Web-Recon-Automation",
        category: "Automation Script",
        description: "A bash script to automate the necessary Reconnaissance task for websites.",
        link: "",
        color: "bg-purple-500",
        image: "/recon_bg.png"
    },
];

export default function Projects() {
    return (
        <section id="projects" className="py-20 px-4 md:px-10 bg-black">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex justify-between items-end mb-16"
                >
                    <div>
                        <h2 className={`text-3xl md:text-5xl font-bold mb-4 tracking-tight`}>IMPRESSIVE WORKS</h2>
                        <p className="text-white/60 max-w-md leading-relaxed">
                            Here are some of the projects I&#39;ve worked on. Each one was a unique challenge that helped me grow.
                        </p>
                    </div>
                    <motion.div whileHover={{ scale: 1.05 }}>
                        <Link href="https://github.com/rdx-exe?tab=repositories" target="_blank" className="hidden md:flex items-center gap-2 text-white/60 hover:text-orange-500 transition-colors font-medium">
                            View all repositories <ArrowUpRight className="w-4 h-4" />
                        </Link>
                    </motion.div>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group cursor-pointer"
                        >
                            <Link href={project.link} target="_blank">
                                <div className={`relative h-[250px] md:h-[300px] w-full rounded-3xl overflow-hidden mb-6 border border-white/10 group-hover:border-orange-500/50 transition-all`}>
                                    {/* Image */}
                                    <div className="absolute inset-0">
                                        <Image
                                            src={project.image}
                                            alt={project.title}
                                            fill
                                            className="object-cover opacity-60 group-hover:scale-105 transition-transform duration-500"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/60 to-transparent" />
                                    </div>

                                    {/* Content overlay */}
                                    <div className="absolute bottom-6 left-6 right-6 z-10">
                                        <motion.div
                                            whileHover={{ scale: 1.1, rotate: 5 }}
                                            className={`w-12 h-12 rounded-full ${project.color} flex items-center justify-center mb-4 text-white shadow-lg`}
                                        >
                                            <Github className="w-6 h-6" />
                                        </motion.div>
                                        <p className="text-sm text-white/80 line-clamp-2 font-medium">{project.description}</p>
                                    </div>
                                </div>

                                <div className="flex justify-between items-start px-2">
                                    <div>
                                        <h3 className="text-2xl font-semibold mb-1 group-hover:text-orange-400 transition-colors">{project.title}</h3>
                                        <p className="text-white/60 text-sm font-medium">{project.category}</p>
                                    </div>
                                    <motion.div
                                        whileHover={{ scale: 1.1, rotate: 45 }}
                                        className="p-3 rounded-full border border-white/10 group-hover:bg-orange-500 group-hover:border-orange-500 transition-all"
                                    >
                                        <ArrowUpRight className="w-5 h-5" />
                                    </motion.div>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>

                <div className="flex justify-center">
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                        <Link
                            href="https://github.com/rdx-exe"
                            target="_blank"
                            className="px-8 py-3 rounded-full bg-orange-500/10 border border-orange-500/30 hover:bg-orange-500/20 hover:border-orange-500/60 transition-all text-orange-400 font-semibold flex items-center gap-2"
                        >
                            And many more <ArrowUpRight className="w-4 h-4" />
                        </Link>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}