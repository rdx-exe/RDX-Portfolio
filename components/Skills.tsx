"use client";

import { motion } from "framer-motion";

/* ------------------------------------
   SKILLS DATA USING PUBLIC ICONS
-------------------------------------*/
const skillsData = [
  {
    title: "SECURITY OPERATIONS & TOOLS",
    logos: [
      "/icons/kalilinux.png",
      "/icons/burp-suite.png",
      "/icons/nmap.png",
      "/icons/hydra.png",
      "/icons/metasploit.png",
    ],
  },
  {
    title: "LANGUAGES & SCRIPTING",
    reverse: true,
    logos: [
      "/icons/python.png",
      "/icons/java.png",
      "/icons/cpp.png",
      "/icons/c.png",
      "/icons/bash.png",
      "/icons/powershell.png",
    ],
  },
  {
    title: "WEB DEVELOPMENT",
    logos: [
      "/icons/html.png",
      "/icons/css.png",
      "/icons/js.png",
      "/icons/ts.png",
      "/icons/react.png",
      "/icons/nextjs.png",
      "/icons/tailwind.png",
      "/icons/nodejs.png",
      "/icons/vite.png",
    ],
  },
];

/* ------------------------------------
   INFINITE LOGO LOOP WITH RESPONSIVE SPEED
-------------------------------------*/
function LogoLoop({
  logos,
  reverse = false,
}: {
  logos: string[];
  reverse?: boolean;
}) {
  const doubled = [...logos, ...logos];

  // ⚡ Faster on mobile, normal on desktop
  const isMobile =
    typeof window !== "undefined" && window.innerWidth < 768;
  const duration = isMobile ? 8 : 15;

  return (
    <div
      className="overflow-hidden w-full py-6"
      style={{
        maskImage:
          "linear-gradient(to right, transparent, black 15%, black 85%, transparent)",
      }}
    >
      <motion.div
        className="flex gap-16"
        animate={{
          x: reverse ? ["-50%", "0%"] : ["0%", "-50%"],
        }}
        transition={{
          repeat: Infinity,
          duration,
          ease: "linear",
        }}
      >
        {doubled.map((logo, i) => (
          <img
            key={i}
            src={logo}
            className="w-20 h-20 object-contain opacity-90 hover:opacity-100 transition"
            alt={`logo-${i}`}
          />
        ))}
      </motion.div>
    </div>
  );
}

/* ------------------------------------
   MAIN SKILLS SECTION
-------------------------------------*/
export default function Skills() {
  return (
    <section id="skills" className="py-20 px-4 md:px-10 bg-black">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className={`text-3xl md:text-5xl font-bold mb-6`}>
            SKILLS THAT FUEL MY PASSION
          </h2>
          <p className="text-muted-foreground max-w-md">
            My technical arsenal, ranging from offensive and defensive security
            tools to modern web development frameworks.
          </p>
        </motion.div>

        {/* Skill categories + loops */}
        <div className="space-y-16">
          {skillsData.map((group, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              {/* Section Title */}
              <h3 className="text-xl md:text-2xl font-semibold mb-4">
                {group.title}
              </h3>

              {/* Loop with optional reverse */}
              <LogoLoop logos={group.logos} reverse={group.reverse} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
