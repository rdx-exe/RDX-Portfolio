"use client";

import { motion } from "framer-motion";
import { mateSC } from "../app/fonts";

export default function Quote1() {
    return (
        <section id="quote1" className="flex items-center justify-center px-6 md:px-10 bg-orange-700 py-12 md:py-16">
            <motion.h1
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className={`${mateSC.className} text-center font-extrabold tracking-widest uppercase leading-tight text-[clamp(1.75rem,5vw,5rem)] px-4 md:px-0 text-white`}
            >
                &ldquo;How Might We Protect <span className="text-black">People</span> And Not Just <span className="text-black">Systems</span>?&rdquo;
            </motion.h1>
        </section>
    );
}
