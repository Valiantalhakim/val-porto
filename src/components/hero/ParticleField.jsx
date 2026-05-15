"use client";

import { motion } from "framer-motion";

export default function ParticleField({ particles, variant = "background" }) {
  return particles.map((particle) => {
    const isBackground = variant === "background";
    const className = isBackground
      ? `absolute rounded-full bg-sky-200/70 shadow-[0_0_18px_rgba(125,211,252,0.8)] ${particle.size}`
      : "absolute h-2 w-2 rounded-full bg-cyan-200 shadow-[0_0_18px_rgba(103,232,249,0.8)]";

    return (
      <motion.span
        key={`${variant}-${particle.left}-${particle.top}`}
        aria-hidden="true"
        className={className}
        style={{ left: particle.left, top: particle.top }}
        animate={
          isBackground
            ? { opacity: [0.2, 0.95, 0.2], y: [0, -18, 0] }
            : { opacity: [0.15, 0.95, 0.15], scale: [0.8, 1.25, 0.8] }
        }
        transition={{
          duration: isBackground ? particle.duration : 4.5,
          delay: particle.delay,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    );
  });
}
