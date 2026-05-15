"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import MatrixCodeBackground from "../../layout/MatrixCodeBackground";
import ProjectCardHeader from "./ProjectCardHeader";
import ScreenshotFrame from "./ScreenshotFrame";
import ScreenshotLightbox from "./ScreenshotLightbox";
import SourceCodeLink from "./SourceCodeLink";

function getScreenshotClassName({ isSplit, hasSingleScreenshot, screenshot }) {
  if (isSplit) {
    if (screenshot.height > screenshot.width) {
      return "relative mx-auto w-full max-w-[260px]";
    }

    return hasSingleScreenshot
      ? "relative mx-auto w-full max-w-[760px]"
      : "relative w-full";
  }

  if (screenshot.height > screenshot.width) {
    return "absolute w-[min(58vw,260px)]";
  }

  return hasSingleScreenshot
    ? "absolute left-1/2 w-[min(82vw,520px)] -translate-x-1/2"
    : "absolute w-[min(82vw,520px)]";
}

function getScreenshotAnimation({ isSplit, hasSingleScreenshot, index, total }) {
  if (isSplit) {
    return {
      x: 0,
      y: 0,
      rotate: 0,
      scale: 1,
      zIndex: total - index,
    };
  }

  return {
    x: hasSingleScreenshot ? 0 : index * 24,
    y: hasSingleScreenshot ? 0 : index * 22,
    rotate: hasSingleScreenshot ? 0 : [-2.5, 2, -1][index] ?? 0,
    scale: [1, 0.93, 0.86][index] ?? 0.86,
    zIndex: total - index,
  };
}

export default function ProjectGalleryCard({ project }) {
  const [isSplit, setIsSplit] = useState(false);
  const [activeScreenshot, setActiveScreenshot] = useState(null);
  const hasSingleScreenshot = project.screenshots.length === 1;

  function toggleSplit() {
    setIsSplit((current) => !current);
  }

  function handleCardKeyDown(event) {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      toggleSplit();
    }
  }

  function openScreenshotPreview(event, screenshot) {
    if (!isSplit || !screenshot.src) {
      return;
    }

    event.stopPropagation();
    setActiveScreenshot(screenshot);
  }

  function handleScreenshotKeyDown(event, screenshot) {
    if (!isSplit || !screenshot.src) {
      return;
    }

    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      openScreenshotPreview(event, screenshot);
    }
  }

  return (
    <motion.article
      layout
      role="button"
      tabIndex={0}
      aria-expanded={isSplit}
      onClick={toggleSplit}
      onKeyDown={handleCardKeyDown}
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 16 }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      className={`group relative cursor-pointer overflow-hidden rounded-[1.5rem] border border-white/10 bg-white/[0.045] p-5 shadow-xl shadow-black/20 backdrop-blur-xl transition-colors hover:border-sky-300/35 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-300 focus-visible:ring-offset-2 focus-visible:ring-offset-black ${
        isSplit ? "md:col-span-2 xl:col-span-3" : ""
      }`}
    >
      <MatrixCodeBackground />
      <div className="pointer-events-none absolute inset-0 bg-slate-950/8" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/5 via-transparent to-black/18" />

      <div className="relative z-10">
        <ProjectCardHeader project={project} />

        <div className="relative grid w-full items-center justify-items-center p-2 transition-colors">
          <div
            className={`grid w-full transition-[min-height] duration-500 ${
              isSplit
                ? hasSingleScreenshot
                  ? "justify-items-center gap-4"
                  : "gap-4 md:grid-cols-3"
                : "min-h-[270px]"
            }`}
          >
            {project.screenshots.map((screenshot, index) => (
              <motion.figure
                key={screenshot.title}
                role={isSplit && screenshot.src ? "button" : undefined}
                tabIndex={isSplit && screenshot.src ? 0 : undefined}
                aria-label={
                  isSplit && screenshot.src
                    ? `Open ${screenshot.title} preview`
                    : undefined
                }
                onClick={(event) => openScreenshotPreview(event, screenshot)}
                onKeyDown={(event) => handleScreenshotKeyDown(event, screenshot)}
                initial={false}
                animate={getScreenshotAnimation({
                  isSplit,
                  hasSingleScreenshot,
                  index,
                  total: project.screenshots.length,
                })}
                transition={{ type: "spring", stiffness: 120, damping: 20 }}
                className={getScreenshotClassName({
                  isSplit,
                  hasSingleScreenshot,
                  screenshot,
                })}
              >
                <ScreenshotFrame
                  screenshot={screenshot}
                  project={project}
                  index={index}
                  priority={index === 0}
                />
              </motion.figure>
            ))}
          </div>
        </div>

        {isSplit && project.sourceCodeHref !== null ? (
          <SourceCodeLink href={project.sourceCodeHref} />
        ) : null}
      </div>

      <ScreenshotLightbox
        screenshot={activeScreenshot}
        project={project}
        onClose={() => setActiveScreenshot(null)}
      />
    </motion.article>
  );
}
