import { motion } from "framer-motion";
import { ArrowLeft, LayoutGrid, Sparkles } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { sectionVariants } from "./projectAnimations";

export default function ProjectHeader() {
  return (
    <motion.header
      variants={sectionVariants}
      initial="hidden"
      animate="visible"
      className="relative flex flex-col items-center gap-5 pb-8 text-center"
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
        <LayoutGrid className="h-6 w-6" />
      </div>

      <div>
        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.045] px-4 py-2 text-xs font-medium uppercase tracking-[0.18em] text-sky-100/90 backdrop-blur-xl">
          <Sparkles className="h-3.5 w-3.5 text-sky-300" />
          Engineering Showcase
        </div>
        <h1 className="mt-5 text-4xl font-semibold tracking-normal text-white sm:text-5xl lg:text-6xl">
          Projects
        </h1>
        <p className="mx-auto mt-4 max-w-3xl text-base leading-8 text-slate-300 sm:text-lg">
          A selected gallery of project examples from my GitHub repositories,
          including screenshots, source code links, and development work.
        </p>
        <a
          href="https://github.com/Valiantalhakim?tab=repositories"
          target="_blank"
          rel="noreferrer"
          className="mx-auto mt-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.045] px-5 py-3 text-sm font-medium text-slate-100 shadow-xl shadow-black/20 backdrop-blur-xl transition-colors hover:border-sky-300/35 hover:bg-sky-300/10 hover:text-white"
        >
          <Image
            src="/logos/tect%20logo/github_logo_icon_229278.webp"
            alt=""
            width={20}
            height={20}
            className="h-5 w-5 object-contain"
          />
          View all GitHub repositories
        </a>
      </div>
    </motion.header>
  );
}
