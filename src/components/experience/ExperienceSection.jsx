"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, BriefcaseBusiness, Sparkles } from "lucide-react";
import ExperienceCard from "./ExperienceCard";
import { experiences, listVariants, sectionVariants } from "./experienceData";

export default function ExperienceSection() {
  return (
    <main className="min-h-screen px-6 py-8 text-white sm:px-8 lg:px-10">
      <section className="mx-auto w-full max-w-6xl">
        <motion.header
          variants={sectionVariants}
          initial="hidden"
          animate="visible"
          className="relative flex flex-col items-center gap-5 pb-12 text-center"
        >
          <div className="w-full">
            <Link
              href="/"
              className="inline-flex w-fit items-center gap-2 rounded-full border border-white/10 bg-white/[0.045] px-4 py-2 text-sm font-medium text-sky-100 transition-colors hover:border-sky-300/30 hover:bg-sky-300/10 hover:text-white sm:absolute sm:left-0 sm:top-0"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Home
            </Link>
          </div>

          <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-sky-200/10 bg-sky-300/10 text-sky-200 shadow-[0_0_48px_rgba(56,189,248,0.16)]">
            <BriefcaseBusiness className="h-6 w-6" />
          </div>

          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.045] px-4 py-2 text-xs font-medium uppercase tracking-[0.18em] text-sky-100/90 backdrop-blur-xl">
              <Sparkles className="h-3.5 w-3.5 text-sky-300" />
              Professional Journey
            </div>
            <h1 className="mt-5 text-4xl font-semibold tracking-normal text-white sm:text-5xl lg:text-6xl">
              Experience
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
              Internship experiences, engineering explorations, and real-world
              software development journey.
            </p>
          </div>
        </motion.header>

        <motion.section
          variants={listVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.18 }}
          aria-label="Internship experience timeline"
          className="relative"
        >
          <div className="absolute bottom-8 left-5 top-8 hidden w-px bg-gradient-to-b from-sky-300/0 via-sky-300/40 to-sky-300/0 lg:block" />

          <div className="grid gap-6">
            {experiences.map((experience, index) => (
              <div key={experience.company} className="relative lg:pl-12">
                <div className="absolute left-[1.05rem] top-8 hidden h-3 w-3 rounded-full border border-sky-200/50 bg-sky-300 shadow-[0_0_22px_rgba(125,211,252,0.8)] lg:block" />
                <ExperienceCard experience={experience} />
              </div>
            ))}
          </div>
        </motion.section>
      </section>
    </main>
  );
}
