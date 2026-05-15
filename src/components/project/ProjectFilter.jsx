"use client";

import { useEffect, useRef } from "react";
import { Filter } from "lucide-react";
import { filters } from "./projectData";

export default function ProjectFilter({ activeFilter, visibleCount, onFilterChange }) {
  const filterScrollRef = useRef(null);

  useEffect(() => {
    const scroller = filterScrollRef.current;

    if (!scroller) {
      return undefined;
    }

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (prefersReducedMotion) {
      return undefined;
    }

    let animationFrameId;
    let lastTimestamp = 0;
    let scrollPosition = scroller.scrollLeft;
    let direction = 1;
    const speed = 34;

    function syncManualScroll() {
      scrollPosition = scroller.scrollLeft;
    }

    function animate(timestamp) {
      const maxScroll = scroller.scrollWidth - scroller.clientWidth;

      if (maxScroll > 0) {
        const delta = lastTimestamp
          ? Math.min((timestamp - lastTimestamp) / 1000, 0.05)
          : 0;

        scrollPosition += direction * speed * delta;

        if (scrollPosition >= maxScroll) {
          scrollPosition = maxScroll;
          direction = -1;
        }

        if (scrollPosition <= 0) {
          scrollPosition = 0;
          direction = 1;
        }

        scroller.scrollLeft = scrollPosition;
      }

      lastTimestamp = timestamp;
      animationFrameId = requestAnimationFrame(animate);
    }

    scroller.addEventListener("scroll", syncManualScroll, { passive: true });
    animationFrameId = requestAnimationFrame(animate);

    return () => {
      scroller.removeEventListener("scroll", syncManualScroll);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="mb-6 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
      <div>
        <div className="inline-flex items-center gap-2 text-sm font-medium uppercase tracking-[0.18em] text-sky-100/80">
          <Filter className="h-4 w-4 text-sky-300" />
          Project Filter
        </div>
        <p className="mt-2 text-sm text-slate-400">
          Showing {visibleCount} project{visibleCount === 1 ? "" : "s"}.
        </p>
      </div>

      <div
        ref={filterScrollRef}
        className="project-filter-scroll -mx-6 overflow-x-auto overflow-y-hidden px-6 sm:mx-0 sm:px-0 md:overflow-visible"
      >
        <div className="flex w-max gap-2 md:w-auto md:flex-wrap md:justify-end">
          {filters.map((filter) => {
            const isActive = activeFilter === filter;

            return (
              <button
                key={filter}
                type="button"
                onClick={() => onFilterChange(filter)}
                className={`shrink-0 rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
                  isActive
                    ? "border-white/70 bg-white text-slate-950"
                    : "border-white/10 bg-white/[0.045] text-slate-100 hover:border-sky-300/35 hover:bg-sky-300/10"
                }`}
              >
                {filter}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
