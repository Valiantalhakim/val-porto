"use client";

import { useEffect, useRef, useState } from "react";
import { animate, motion, useMotionValue, useTransform } from "framer-motion";
import Image from "next/image";
import { Orbit } from "lucide-react";

export default function TechStackOrbit({ items = [] }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const orbitRotation = useMotionValue(0);
  const counterRotation = useTransform(orbitRotation, (value) => -value);
  const animationRef = useRef(null);

  useEffect(() => {
    animationRef.current?.stop();

    if (isExpanded) {
      animationRef.current = animate(orbitRotation, 360, {
        duration: 22,
        ease: "linear",
        repeat: Infinity,
      });
    } else {
      animationRef.current = animate(orbitRotation, 0, {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      });
    }

    return () => animationRef.current?.stop();
  }, [isExpanded, orbitRotation]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{ duration: 0.72, ease: [0.22, 1, 0.36, 1] }}
      className="mx-auto mt-10 w-full max-w-[640px]"
    >
      <button
        type="button"
        aria-pressed={isExpanded}
        onClick={() => setIsExpanded((current) => !current)}
        className="group relative mx-auto flex aspect-square w-full max-w-[360px] items-center justify-center rounded-full bg-transparent transition-transform duration-300 hover:scale-[1.01] focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-300 focus-visible:ring-offset-2 focus-visible:ring-offset-black sm:max-w-[430px]"
      >
        <span className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_center,rgba(14,165,233,0.18),transparent_30%),radial-gradient(circle_at_30%_70%,rgba(59,130,246,0.1),transparent_26%)] blur-sm" />
        <span className="absolute h-[78%] w-[78%] rounded-full border border-sky-200/10" />
        <span className="absolute h-[55%] w-[55%] rounded-full border border-white/[0.06]" />
        <span className="absolute h-[32%] w-[32%] rounded-full border border-sky-300/10" />

        <motion.span
          aria-hidden="true"
          className="absolute h-1 w-1 rounded-full bg-sky-100/70 shadow-[0_0_18px_rgba(125,211,252,0.8)]"
          animate={{ x: [-130, 120, -80, -130], y: [-110, 80, 130, -110] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        />

        <motion.div
          className="absolute inset-0"
          style={{ rotate: orbitRotation }}
        >
          {items.map((item, index) => {
            const angle =
              (index / Math.max(items.length, 1)) * Math.PI * 2 - Math.PI / 2;
            const radiusX = index % 2 === 0 ? 150 : 120;
            const radiusY = index % 3 === 0 ? 126 : 145;
            const x = Math.cos(angle) * radiusX;
            const y = Math.sin(angle) * radiusY;

            return (
              <motion.span
                key={item.name}
                initial={false}
                animate={{
                  x: isExpanded ? x : 0,
                  y: isExpanded ? y : 0,
                  opacity: isExpanded ? 1 : 0.92,
                  scale: isExpanded ? 1 : 0.82,
                }}
                transition={{
                  type: "spring",
                  stiffness: 120,
                  damping: 18,
                  delay: isExpanded ? index * 0.035 : 0,
                }}
                className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2"
              >
                <motion.span
                  style={{ rotate: counterRotation }}
                  className="flex min-w-16 flex-col items-center gap-1 rounded-2xl border border-white/10 bg-black/55 px-3 py-2 text-center shadow-lg shadow-black/25 backdrop-blur-xl"
                >
                  <span
                    className={`flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br ${item.color} shadow-inner shadow-white/20`}
                  >
                    <Image
                      src={item.logo}
                      alt=""
                      width={28}
                      height={28}
                      className="h-7 w-7 object-contain"
                      loading="lazy"
                    />
                  </span>
                  <span className="max-w-20 truncate text-[11px] font-medium text-slate-200">
                    {item.name}
                  </span>
                </motion.span>
              </motion.span>
            );
          })}
        </motion.div>

        <span className="relative z-10 flex h-28 w-28 flex-col items-center justify-center rounded-full border border-yellow-200/30 bg-[radial-gradient(circle_at_35%_28%,#fff7ad_0%,#facc15_28%,#f97316_62%,#7c2d12_100%)] text-orange-950 shadow-[0_0_52px_rgba(251,191,36,0.45)] transition-transform duration-300 group-hover:scale-105">
          <motion.span
            aria-hidden="true"
            className="absolute -left-2 top-5 h-8 w-8 rounded-full bg-yellow-300/80 blur-sm"
            animate={{ scale: [0.65, 1.15, 0.7], y: [0, -8, 2], opacity: [0.55, 0.9, 0.45] }}
            transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.span
            aria-hidden="true"
            className="absolute -right-3 top-8 h-10 w-10 rounded-full bg-orange-400/75 blur-sm"
            animate={{ scale: [0.8, 1.25, 0.75], y: [3, -10, 0], opacity: [0.5, 0.85, 0.5] }}
            transition={{ duration: 2.9, repeat: Infinity, ease: "easeInOut", delay: 0.35 }}
          />
          <motion.span
            aria-hidden="true"
            className="absolute bottom-1 left-7 h-7 w-7 rounded-full bg-amber-300/80 blur-sm"
            animate={{ scale: [0.75, 1.2, 0.8], y: [2, -7, 2], opacity: [0.45, 0.85, 0.45] }}
            transition={{ duration: 2.6, repeat: Infinity, ease: "easeInOut", delay: 0.7 }}
          />
          <span className="absolute inset-2 rounded-full bg-[radial-gradient(circle_at_35%_30%,rgba(255,255,255,0.55),transparent_34%),radial-gradient(circle_at_center,rgba(251,146,60,0.35),transparent_70%)]" />
          <Orbit className="relative h-6 w-6 text-orange-700 drop-shadow-sm" />
          <span className="relative mt-2 text-xs font-black uppercase text-orange-800 drop-shadow-sm">
            Tech Stack
          </span>
          <span className="relative mt-1 text-[10px] font-semibold text-orange-900/75">
            {isExpanded ? "Collapse" : "Click"}
          </span>
        </span>
      </button>
    </motion.div>
  );
}
