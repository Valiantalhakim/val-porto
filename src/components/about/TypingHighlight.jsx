"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

export default function TypingHighlight({ text }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.7 });
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    if (!isInView) {
      return undefined;
    }

    const characters = Array.from(text);
    let characterIndex = 0;

    const interval = window.setInterval(() => {
      characterIndex += 1;
      setDisplayText(characters.slice(0, characterIndex).join(""));

      if (characterIndex >= characters.length) {
        window.clearInterval(interval);
      }
    }, 34);

    return () => window.clearInterval(interval);
  }, [isInView, text]);

  return (
    <motion.p
      ref={ref}
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.7 }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      className="mx-auto min-h-16 max-w-2xl text-lg font-medium leading-8 text-sky-100 sm:text-xl"
    >
      {displayText}
      <motion.span
        aria-hidden="true"
        className="ml-1 inline-block h-5 w-px translate-y-1 bg-sky-200/80"
        animate={{ opacity: [1, 0.2, 1] }}
        transition={{ duration: 0.9, repeat: Infinity, ease: "easeInOut" }}
      />
    </motion.p>
  );
}
