"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Linkedin, Github, Twitter, Mail, Copy } from "lucide-react";
import Link from "next/link";

export default function Contact() {
    return (
        <section
            id="contact"
            className="py-20 px-4 md:px-10 bg-black min-h-[80vh] flex flex-col justify-between"
        >
            {/* Top Section */}
            <div className="max-w-7xl mx-auto w-full">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-20"
                >
                    <h2 className="text-4xl md:text-6xl font-bold mb-8">
                        Got a project in mind? <br />
                        Drop a HOWDY!
                    </h2>

                    {/* Main Contact Button */}
                    <Link
                        href="mailto:das.ritam077@gmail.com"
                        className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white rounded-full text-lg font-medium hover:bg-primary/90 transition-colors"
                    >
                        Get in touch
                        <ArrowUpRight className="w-5 h-5" />
                    </Link>

                    {/* Email Display Section */}
                    <div className="mt-10 flex items-center gap-3 text-muted-foreground">
                        <Mail className="w-5 h-5" />
                        <span className="text-lg">das.ritam077@gmail.com</span>
                        <CopyEmailButton email="das.ritam077@gmail.com" />
                    </div>
                </motion.div>
            </div>

            {/* Footer Section */}
            <div className="max-w-7xl mx-auto w-full">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="border-t border-white/10 pt-10"
                >
                    <div className="flex flex-col md:flex-row justify-between items-end gap-10">

                        {/* Branding */}
                        <div>
                            <p className="text-muted-foreground mb-2">© 2025 RITAM DAS. ALL RIGHTS RESERVED.</p>
                            <h1 className="text-[12vw] leading-none font-bold tracking-tighter text-white">
                                RDX
                            </h1>
                        </div>

                        {/* Social Icons */}
                        <div className="flex gap-6 mb-4">
                            <Link
                                href="https://www.linkedin.com/in/das-ritam"
                                target="_blank"
                                className="text-muted-foreground hover:text-white transition-all hover:scale-110"
                            >
                                <Linkedin className="w-7 h-7" />
                            </Link>

                            <Link
                                href="https://github.com/rdx-exe"
                                target="_blank"
                                className="text-muted-foreground hover:text-white transition-all hover:scale-110"
                            >
                                <Github className="w-7 h-7" />
                            </Link>

                            <Link
                                href="https://x.com/rdx_exe"
                                target="_blank"
                                className="text-muted-foreground hover:text-white transition-all hover:scale-110"
                            >
                                <Twitter className="w-7 h-7" />
                            </Link>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

function CopyEmailButton({ email }: { email: string }) {
    const [copied, setCopied] = useState(false);

    const handleCopy = async () => {
        if (typeof navigator !== "undefined" && navigator.clipboard?.writeText) {
            try {
                await navigator.clipboard.writeText(email);
                setCopied(true);
                setTimeout(() => setCopied(false), 2000);
                return;
            } catch (e) {
                // fall through to fallback copy below
            }
        }

        // Fallback for older browsers
        try {
            const el = document.createElement("textarea");
            el.value = email;
            el.setAttribute("readonly", "");
            el.style.position = "absolute";
            el.style.left = "-9999px";
            document.body.appendChild(el);
            el.select();
            document.execCommand("copy");
            document.body.removeChild(el);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        } catch (e) {
            // ignore failures silently
        }
    };

    return (
        <button
            type="button"
            onClick={handleCopy}
            className="ml-2 inline-flex items-center gap-2 px-3 py-1 bg-primary/10 text-sm rounded hover:bg-primary/20 transition-colors"
        >
            <Copy className="w-4 h-4" />
            {copied ? "Copied!" : "Copy"}
        </button>
    );
}
