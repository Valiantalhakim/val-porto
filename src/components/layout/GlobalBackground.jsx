"use client";

import { motion } from "framer-motion";

const globalParticles = [
  { left: "8%", top: "18%", size: "h-1 w-1", delay: 0, duration: 7 },
  { left: "18%", top: "72%", size: "h-1.5 w-1.5", delay: 1.2, duration: 8 },
  { left: "31%", top: "30%", size: "h-1 w-1", delay: 0.7, duration: 6 },
  { left: "45%", top: "84%", size: "h-1 w-1", delay: 2.1, duration: 9 },
  { left: "62%", top: "16%", size: "h-1.5 w-1.5", delay: 1.6, duration: 7 },
  { left: "78%", top: "66%", size: "h-1 w-1", delay: 0.4, duration: 8 },
  { left: "89%", top: "24%", size: "h-1 w-1", delay: 2.8, duration: 7 },
  { left: "94%", top: "78%", size: "h-1.5 w-1.5", delay: 1.9, duration: 10 },
];

export default function GlobalBackground() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_76%_20%,rgba(14,116,144,0.24),transparent_32%),radial-gradient(circle_at_18%_78%,rgba(30,64,175,0.22),transparent_30%),linear-gradient(135deg,#020617_0%,#02040a_44%,#000000_100%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.022)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.022)_1px,transparent_1px)] bg-[size:72px_72px] [mask-image:radial-gradient(circle_at_center,black,transparent_78%)]" />

      {globalParticles.map((particle) => (
        <motion.span
          key={`${particle.left}-${particle.top}`}
          className={`absolute rounded-full bg-sky-200/70 shadow-[0_0_18px_rgba(125,211,252,0.8)] ${particle.size}`}
          style={{ left: particle.left, top: particle.top }}
          animate={{ opacity: [0.2, 0.95, 0.2], y: [0, -18, 0] }}
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}
