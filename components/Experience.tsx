"use client";

import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

const experiences = [
    {
        company: "INDIAN INSTITUTE OF TECHNOLOGY, ROORKEE",
        role: "Campus Ambassador",
        period: "November 2025 – Present",
        location: "Roorkee, Uttarakhand (Remote)",
        logo: "/IIT-R.png"
    },
];

export default function Experience() {
    return (
        <section className="py-20 px-4 md:px-10 bg-zinc-950">
            <div className="max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16"
                >
                    <h2 className={`text-3xl md:text-5xl font-extrabold mb-6 flex items-center gap-4 tracking-tight`}>
                        <Briefcase className="w-8 h-8 md:w-12 md:h-12 text-orange-500" />
                        EXPERIENCE
                    </h2>
                    <p className="text-white/60 max-w-md leading-relaxed">
                        A timeline of my professional growth and contributions in the cybersecurity landscape.
                    </p>
                </motion.div>

                <div className="relative">
                    {/* Animated Timeline Line */}
                    <motion.div
                        initial={{ scaleY: 0 }}
                        whileInView={{ scaleY: 1 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="absolute left-0 top-0 bottom-0 w-0.5 bg-gradient-to-b from-orange-500 via-orange-500/50 to-transparent origin-top"
                    />

                    <div className="space-y-8">
                        {experiences.map((exp, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.2, duration: 0.5 }}
                                className="relative pl-8 group"
                            >
                                {/* Animated Dot */}
                                <motion.div
                                    initial={{ scale: 0 }}
                                    whileInView={{ scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.2 + 0.3, type: "spring", stiffness: 200 }}
                                    className="absolute -left-[7px] top-3 w-4 h-4 rounded-full bg-orange-500 shadow-lg shadow-orange-500/70 group-hover:scale-125 transition-transform"
                                >
                                    <motion.div
                                        animate={{ scale: [1, 1.5, 1] }}
                                        transition={{ duration: 2, repeat: Infinity }}
                                        className="absolute inset-0 rounded-full bg-orange-500 opacity-75"
                                    />
                                </motion.div>

                                {/* Content Card */}
                                <motion.div
                                    whileHover={{ x: 4, boxShadow: "0 0 20px rgba(249, 115, 22, 0.3)" }}
                                    transition={{ duration: 0.2 }}
                                    className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-orange-500/50 hover:bg-white/10 transition-all"
                                >
                                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-2">
                                        <motion.div
                                            whileHover={{ scale: 1.05 }}
                                            className="flex items-center gap-4"
                                        >
                                            <motion.div
                                                whileHover={{ rotate: 10, scale: 1.1 }}
                                                className="w-12 h-12 rounded-full flex items-center justify-center overflow-hidden shrink-0 bg-white"
                                            >
                                                <img
                                                    src={exp.logo}
                                                    alt={`${exp.company} logo`}
                                                    className="w-full h-full object-cover"
                                                />
                                            </motion.div>
                                            <div>
                                                <h3 className="text-2xl font-bold text-white group-hover:text-orange-400 transition-colors">
                                                    {exp.role}
                                                </h3>
                                                <p className="text-white/80 font-medium">{exp.company}</p>
                                            </div>
                                        </motion.div>
                                        <div className="text-white/60 text-sm md:text-right pl-[4rem] md:pl-0">
                                            <p className="font-medium text-orange-400">{exp.period}</p>
                                            <p className="text-white/60">{exp.location}</p>
                                        </div>
                                    </div>
                                </motion.div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}