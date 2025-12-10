"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Linkedin, Github, Twitter, Mail, Copy, Send } from "lucide-react";
import Link from "next/link";

export default function Contact() {
    const [formSubmitted, setFormSubmitted] = useState(false);
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });

    const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleFormSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Create mailto link with form data
        const mailtoLink = `mailto:das.ritam077@gmail.com?subject=Message from ${formData.name}&body=${encodeURIComponent(formData.message)}`;
        window.location.href = mailtoLink;
        
        setFormSubmitted(true);
        setTimeout(() => {
            setFormSubmitted(false);
            setFormData({ name: "", message: "" });
        }, 3000);
    };

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
                    <h2 className="text-4xl md:text-6xl font-bold mb-2 tracking-tight">
                        Got a project in mind?
                    </h2>
                    <h2 className="text-4xl md:text-6xl font-bold mb-8 text-orange-500 tracking-tight">
                        Drop a HOWDY!
                    </h2>

                    <p className="text-white/60 mb-8 text-lg">I typically respond within 24 hours</p>

                    {/* Main Contact Button */}
                    <Link
                        href="mailto:das.ritam077@gmail.com"
                    >
                        <motion.button
                            whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(249, 115, 22, 0.5)" }}
                            whileTap={{ scale: 0.95 }}
                            className="inline-flex items-center gap-2 px-8 py-4 bg-orange-500 hover:bg-orange-600 text-white rounded-full text-lg font-medium transition-colors"
                        >
                            Get in touch
                            <ArrowUpRight className="w-5 h-5" />
                        </motion.button>
                    </Link>

                    {/* Email Display Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="mt-12 p-6 bg-white/5 border border-white/10 rounded-xl backdrop-blur-sm hover:bg-white/10 transition-colors"
                    >
                        <div className="flex items-center gap-4 flex-wrap">
                            <Mail className="w-5 h-5 text-orange-500" />
                            <span className="text-lg text-white">das.ritam077@gmail.com</span>
                            <CopyEmailButton email="das.ritam077@gmail.com" />
                        </div>
                    </motion.div>
                </motion.div>

                {/* Contact Form Section */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                    className="mb-20 p-8 bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 rounded-2xl backdrop-blur-sm"
                >
                    <h3 className="text-2xl md:text-3xl font-bold mb-6 text-white">Or send a message directly:</h3>
                    <form onSubmit={handleFormSubmit} className="space-y-5">
                        <div>
                            <label className="block text-white/70 text-sm font-medium mb-2">Your Name</label>
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleFormChange}
                                required
                                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-orange-500/50 focus:bg-white/10 transition-all"
                                placeholder="John Doe"
                            />
                        </div>
                        <div>
                            <label className="block text-white/70 text-sm font-medium mb-2">Your Email</label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleFormChange}
                                required
                                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-orange-500/50 focus:bg-white/10 transition-all"
                                placeholder="john@example.com"
                            />
                        </div>
                        <div>
                            <label className="block text-white/70 text-sm font-medium mb-2">Your Message</label>
                            <textarea
                                name="message"
                                value={formData.message}
                                onChange={handleFormChange}
                                required
                                rows={5}
                                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-orange-500/50 focus:bg-white/10 transition-all resize-none"
                                placeholder="Tell me about your project..."
                            />
                        </div>
                        <motion.button
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            type="submit"
                            className="w-full px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-lg flex items-center justify-center gap-2 transition-colors"
                        >
                            {formSubmitted ? "Message Sent! 🎉" : "Send Message"}
                            {!formSubmitted && <Send className="w-4 h-4" />}
                        </motion.button>
                    </form>
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
                        <motion.div
                            whileHover={{ y: -5 }}
                            transition={{ type: "spring", stiffness: 300 }}
                        >
                            <p className="text-white/60 mb-2 text-sm">© 2025 RITAM DAS. ALL RIGHTS RESERVED.</p>
                            <h1 className="text-[12vw] leading-none font-bold tracking-tighter text-white hover:text-orange-500 transition-colors">
                                RDX
                            </h1>
                        </motion.div>

                        {/* Social Icons */}
                        <div className="flex gap-6 mb-4">
                            <motion.div whileHover={{ rotate: 20, scale: 1.2 }}>
                                <Link
                                    href="https://www.linkedin.com/in/das-ritam"
                                    target="_blank"
                                    className="text-white/60 hover:text-orange-500 transition-colors"
                                >
                                    <Linkedin className="w-7 h-7" />
                                </Link>
                            </motion.div>

                            <motion.div whileHover={{ rotate: 20, scale: 1.2 }}>
                                <Link
                                    href="https://github.com/rdx-exe"
                                    target="_blank"
                                    className="text-white/60 hover:text-orange-500 transition-colors"
                                >
                                    <Github className="w-7 h-7" />
                                </Link>
                            </motion.div>

                            <motion.div whileHover={{ rotate: 20, scale: 1.2 }}>
                                <Link
                                    href="https://x.com/rdx_exe"
                                    target="_blank"
                                    className="text-white/60 hover:text-orange-500 transition-colors"
                                >
                                    <Twitter className="w-7 h-7" />
                                </Link>
                            </motion.div>
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
        <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="button"
            onClick={handleCopy}
            className="inline-flex items-center gap-2 px-3 py-2 bg-orange-500/20 hover:bg-orange-500/40 text-orange-300 text-sm rounded-lg transition-colors border border-orange-500/30"
        >
            <Copy className="w-4 h-4" />
            {copied ? "Copied!" : "Copy"}
        </motion.button>
    );
}
