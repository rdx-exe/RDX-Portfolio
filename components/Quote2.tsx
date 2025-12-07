"use client";

import { motion } from "framer-motion";
import { mateSC } from "../app/fonts";

export default function Quote2() {
    return (
        <section id="quote2" className="flex items-center justify-center px-6 md:px-10 bg-orange-700 py-12 md:py-16">
            <div className="text-center">
                <motion.h1
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className={`${mateSC.className} font-extrabold tracking-widest uppercase leading-tight text-[clamp(1.75rem,5vw,5rem)] px-4 md:px-0 text-white`}
                >
                    &ldquo;No internet-connected technology is <span className="text-black">unhackable</span>.&rdquo;
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="mt-8 text-lg md:text-2xl italic text-white/80"
                >
                    — Abhijit Naskar
                </motion.p>
            </div>
        </section>
    );
}
