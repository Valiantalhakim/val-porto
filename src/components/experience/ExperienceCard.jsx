"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, MapPin } from "lucide-react";
import { cardVariants } from "./experienceData";

function LogoPlaceholder({ company, Icon, accent, logo }) {
  const initials = company
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((word) => word[0])
    .join("");

  return (
    <div className="relative flex h-14 w-14 shrink-0 items-center justify-center overflow-hidden rounded-2xl border border-white/10 bg-white/[0.045] shadow-inner shadow-white/5">
      <div className={`absolute inset-0 bg-gradient-to-br ${accent} opacity-20`} />
      {logo ? (
        <Image
          src={logo}
          alt={`${company} logo`}
          fill
          sizes="56px"
          className="object-contain p-2"
        />
      ) : (
        <>
          <Icon className="relative h-5 w-5 text-sky-100" />
          <span className="sr-only">{initials} logo placeholder</span>
        </>
      )}
    </div>
  );
}

export default function ExperienceCard({ experience }) {
  const Icon = experience.icon;
  const CardWrapper = experience.href ? Link : "div";

  return (
    <CardWrapper
      href={experience.href}
      aria-label={experience.href ? `Open ${experience.company} document` : undefined}
      className={experience.href ? "block focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-300 focus-visible:ring-offset-2 focus-visible:ring-offset-black" : undefined}
    >
      <motion.article
        variants={cardVariants}
        whileHover={{ y: -6, scale: 1.01 }}
        className="group relative grid gap-5 rounded-[1.75rem] border border-white/10 bg-white/[0.045] p-5 shadow-2xl shadow-black/25 backdrop-blur-xl transition-colors duration-300 hover:border-sky-300/35 hover:bg-white/[0.065] sm:p-6 lg:grid-cols-[0.9fr_1.1fr]"
      >
        <div
          className={`pointer-events-none absolute -inset-px rounded-[1.75rem] bg-gradient-to-br ${experience.accent} opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-20`}
        />

        <div className="relative">
          <div className="flex items-start gap-4">
            <LogoPlaceholder
              company={experience.company}
              Icon={Icon}
              accent={experience.accent}
              logo={experience.logo}
            />

            <div className="min-w-0">
              <p className="text-xs font-medium uppercase tracking-[0.18em] text-sky-200/80">
                {experience.duration}
              </p>
              <h2 className="mt-2 text-xl font-semibold text-white sm:text-2xl">
                {experience.company}
              </h2>
              <p className="mt-1 text-sm font-medium text-sky-100">
                {experience.role}
              </p>
            </div>
          </div>

          <div className="mt-5 grid gap-3 text-sm text-slate-300">
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-sky-300" />
              {experience.location}
            </div>
          </div>

          <p className="mt-5 text-sm leading-7 text-slate-300">
            {experience.description}
          </p>
        </div>

        <div className="relative">
          <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-slate-300">
            Responsibilities
          </h3>
          <ul className="mt-4 grid gap-3">
            {experience.responsibilities.map((item) => (
              <li key={item} className="flex gap-3 text-sm leading-6 text-slate-300">
                <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-sky-300" />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <div className="mt-6 flex flex-wrap gap-2">
            {experience.techStack.map((tech, techIndex) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.35 }}
                transition={{ delay: techIndex * 0.035, duration: 0.35 }}
                className="rounded-full border border-sky-200/10 bg-sky-300/10 px-3 py-1 text-xs font-medium text-sky-100"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </div>
      </motion.article>
    </CardWrapper>
  );
}
