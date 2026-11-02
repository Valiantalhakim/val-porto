"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowDownToLine,
  BriefcaseBusiness,
  GitBranch,
  Rocket,
  Sparkles,
} from "lucide-react";
import HeroButton from "./HeroButton";
import ProfileVisual from "./ProfileVisual";
import { containerVariants, itemVariants } from "./heroAnimations";
import { heroContent } from "./heroContent";

const heroActions = [
  {
    id: "projects",
    href: heroContent.links.projects,
    icon: Rocket,
    label: "View Projects",
  },
  {
    id: "experience",
    href: heroContent.links.experience,
    icon: BriefcaseBusiness,
    label: "Experience",
  },
  {
    id: "cv",
    href: heroContent.links.cv,
    icon: ArrowDownToLine,
    label: "Download CV",
    download: " CV_M.Valiant Althaf_Bachelor.ICT_SE.pdf",
  },
  {
    id: "github",
    href: heroContent.links.github,
    icon: GitBranch,
    label: "GitHub",
    external: true,
    ariaLabel: "Open GitHub profile in a new tab",
  },
];

export default function HeroSection() {
  const [activeAction, setActiveAction] = useState("projects");

  return (
    <section
      id="home"
      aria-label="Personal portfolio hero"
      className="relative isolate flex min-h-screen overflow-hidden text-white"
    >
      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-12 px-6 pb-20 pt-32 sm:px-8 sm:py-24 lg:grid-cols-[1.05fr_0.95fr] lg:px-10 lg:pb-16 lg:pt-24">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-3xl text-center lg:text-left"
        >
          <motion.div
            variants={itemVariants}
            className="mx-auto mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.045] px-4 py-2 text-xs font-medium uppercase tracking-[0.18em] text-sky-100/90 backdrop-blur-xl lg:mx-0"
          >
            <Sparkles className="h-3.5 w-3.5 text-sky-300" />
            AI Software Engineer Portfolio
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-balance text-4xl font-semibold leading-tight tracking-normal text-white sm:text-5xl md:text-6xl xl:text-7xl"
          >
            {heroContent.name}
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="mx-auto mt-6 max-w-2xl text-lg font-medium leading-8 text-sky-100/90 sm:text-xl lg:mx-0"
          >
            {heroContent.subtitle}
          </motion.p>

          <motion.p
            variants={itemVariants}
            className="mx-auto mt-5 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg lg:mx-0"
          >
            {heroContent.description}
          </motion.p>

          <motion.nav
            aria-label="Hero calls to action"
            variants={itemVariants}
            className="mt-9 flex flex-col justify-center gap-3 sm:flex-row sm:flex-wrap lg:justify-start"
          >
            {heroActions.map((action) => (
              <HeroButton
                key={action.id}
                href={action.href}
                icon={action.icon}
                download={action.download}
                external={action.external}
                ariaLabel={action.ariaLabel}
                isActive={activeAction === action.id}
                onActivate={() => setActiveAction(action.id)}
              >
                {action.label}
              </HeroButton>
            ))}
          </motion.nav>
        </motion.div>

        <ProfileVisual
          imageSrc={heroContent.profileImage}
          alt={`${heroContent.name} profile portrait`}
        />
      </div>
    </section>
  );
}
