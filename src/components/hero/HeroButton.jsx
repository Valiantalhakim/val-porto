"use client";

import { motion } from "framer-motion";

const buttonBase =
  "group relative inline-flex h-12 w-full items-center justify-center gap-2 overflow-hidden rounded-full border px-5 text-sm font-medium transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-300 focus-visible:ring-offset-2 focus-visible:ring-offset-black sm:w-auto";

export default function HeroButton({
  href,
  icon: Icon,
  children,
  download = false,
  external = false,
  ariaLabel,
  isActive = false,
  onActivate,
}) {
  const activeClasses = isActive
    ? "border-white/70 text-slate-950 shadow-[0_0_36px_rgba(125,211,252,0.18)]"
    : "border-white/10 bg-white/[0.045] text-slate-100 backdrop-blur-xl hover:border-sky-300/40 hover:bg-sky-300/10";

  return (
    <motion.a
      href={href}
      aria-label={ariaLabel}
      download={download}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      onPointerEnter={onActivate}
      onFocus={onActivate}
      onClick={onActivate}
      whileHover={{ y: -3, scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`${buttonBase} ${activeClasses}`}
    >
      {isActive ? (
        <motion.span
          layoutId="hero-active-button"
          className="absolute inset-0 rounded-full bg-white"
          transition={{ type: "spring", stiffness: 420, damping: 34 }}
        />
      ) : null}
      <Icon className="relative h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5" />
      <span className="relative">{children}</span>
    </motion.a>
  );
}
