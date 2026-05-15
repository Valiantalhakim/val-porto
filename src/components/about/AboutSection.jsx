"use client";

import { motion } from "framer-motion";
import { Code2, Layers3, Sparkles } from "lucide-react";
import AboutCards from "./AboutCards";
import {
  aboutContent,
  educationCards,
  techStack,
} from "./aboutContent";
import TechStackOrbit from "./TechStackOrbit";
import TypingHighlight from "./TypingHighlight";

const aboutFocus = [
  {
    icon: Code2,
    label: "Full-stack web development",
  },
  {
    icon: Layers3,
    label: "Mobile development",
  },
  {
    icon: Sparkles,
    label: "AI-powered systems & automation",
  },
];

const revealTransition = {
  duration: 0.72,
  ease: [0.22, 1, 0.36, 1],
};

export default function AboutSection() {
  return (
    <section
      id="about"
      aria-label="About Muhammad Valiant Althaf Alhakim"
      className="relative isolate min-h-screen overflow-hidden px-6 py-24 text-white sm:px-8 lg:px-10 lg:py-32"
    >
      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
        <motion.div
          initial={{ opacity: 0, y: 34 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={revealTransition}
          className="mx-auto max-w-3xl text-center lg:order-2"
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.045] px-4 py-2 text-xs font-medium uppercase text-sky-100/90 backdrop-blur-xl">
            <span className="h-1.5 w-1.5 rounded-full bg-sky-300 shadow-[0_0_12px_rgba(125,211,252,0.9)]" />
            {aboutContent.eyebrow}
          </div>

          <h2 className="mx-auto max-w-3xl text-3xl font-semibold leading-tight tracking-normal text-white sm:text-4xl lg:text-5xl">
            {aboutContent.title}
          </h2>

          <div className="mt-6">
            <TypingHighlight text={aboutContent.highlight} />
          </div>

          <TechStackOrbit items={techStack} />
        </motion.div>

        <motion.aside
          initial={{ opacity: 0, y: 34 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ ...revealTransition, delay: 0.08 }}
          className="rounded-[2rem] border border-white/10 bg-white/[0.035] p-5 shadow-2xl shadow-sky-950/20 backdrop-blur-2xl sm:p-6 lg:order-1"
        >
          <div className="mb-6 flex items-start justify-between gap-4">
            <div>
              <p className="text-xs font-medium uppercase text-slate-400">
                Education & Certification
              </p>
              <h3 className="mt-2 text-2xl font-semibold text-white">
                Learning path
              </h3>
            </div>
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-sky-200/10 bg-sky-300/10 text-sky-200">
              <Sparkles className="h-5 w-5" />
            </div>
          </div>

          <AboutCards cards={educationCards} />

          <div className="mt-6 grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
            {aboutFocus.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.label}
                  className="flex items-center gap-3 rounded-2xl bg-black/20 px-4 py-3 text-sm text-slate-300"
                >
                  <Icon className="h-4 w-4 shrink-0 text-sky-300" />
                  <span>{item.label}</span>
                </div>
              );
            })}
          </div>
        </motion.aside>
      </div>
    </section>
  );
}
