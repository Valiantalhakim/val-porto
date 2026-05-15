"use client";

import { useEffect, useRef } from "react";
import {
  animate,
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import Image from "next/image";
import HeroContactLinks from "./HeroContactLinks";
import { profileEntrance } from "./heroAnimations";
import { profileParticles } from "./heroContent";
import ParticleField from "./ParticleField";

export default function ProfileVisual({ imageSrc, alt }) {
  const imageFrameRef = useRef(null);
  const spotlightX = useMotionValue(210);
  const spotlightY = useMotionValue(260);
  const proximity = useMotionValue(0);
  const smoothX = useSpring(spotlightX, { stiffness: 180, damping: 26 });
  const smoothY = useSpring(spotlightY, { stiffness: 180, damping: 26 });
  const smoothProximity = useSpring(proximity, { stiffness: 160, damping: 24 });
  const spotlightSize = useTransform(smoothProximity, [0, 1], [0, 170]);
  const revealOpacity = useTransform(smoothProximity, [0, 0.18, 1], [0, 0.55, 1]);
  const spotlightMask = useMotionTemplate`radial-gradient(circle ${spotlightSize}px at ${smoothX}px ${smoothY}px, black 0%, black 48%, transparent 74%)`;

  useEffect(() => {
    const frame = imageFrameRef.current;

    if (!frame) {
      return undefined;
    }

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    const hasCoarsePointer = window.matchMedia("(pointer: coarse)").matches;

    if (prefersReducedMotion) {
      proximity.set(1);
      return undefined;
    }

    if (hasCoarsePointer) {
      proximity.set(0.92);

      const controls = [
        animate(spotlightX, [120, 280, 180, 330, 120], {
          duration: 9,
          repeat: Infinity,
          ease: "easeInOut",
        }),
        animate(spotlightY, [160, 250, 430, 310, 160], {
          duration: 9,
          repeat: Infinity,
          ease: "easeInOut",
        }),
      ];

      return () => controls.forEach((control) => control.stop());
    }

    function handlePointerMove(event) {
      const rect = frame.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;
      const clampedX = Math.min(Math.max(x, 0), rect.width);
      const clampedY = Math.min(Math.max(y, 0), rect.height);
      const distanceX = Math.max(0, Math.abs(x - rect.width / 2) - rect.width / 2);
      const distanceY = Math.max(0, Math.abs(y - rect.height / 2) - rect.height / 2);
      const distance = Math.hypot(distanceX, distanceY);
      const activationDistance = 260;
      const nextProximity = Math.max(0, 1 - distance / activationDistance);

      spotlightX.set(clampedX);
      spotlightY.set(clampedY);
      proximity.set(nextProximity);
    }

    function handlePointerLeaveWindow() {
      proximity.set(0);
    }

    window.addEventListener("pointermove", handlePointerMove);
    window.addEventListener("blur", handlePointerLeaveWindow);

    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("blur", handlePointerLeaveWindow);
    };
  }, [proximity, spotlightX, spotlightY]);

  return (
    <motion.div
      initial={profileEntrance.initial}
      animate={profileEntrance.animate}
      transition={profileEntrance.transition}
      className="relative mx-auto flex w-full max-w-[320px] flex-col items-center justify-center sm:max-w-[360px] lg:max-w-[410px]"
    >
      <motion.div
        aria-hidden="true"
        className="absolute top-[12%] h-[52%] w-[68%] rounded-full bg-sky-400/20 blur-3xl"
        animate={{ scale: [1, 1.08, 1], opacity: [0.5, 0.8, 0.5] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
      <div className="absolute top-[6%] h-[68%] w-[88%] rounded-full border border-sky-200/10" />
      <div className="absolute top-[0%] h-[80%] w-[104%] rounded-full border border-white/[0.04]" />

      <ParticleField particles={profileParticles} variant="profile" />

      <motion.div
        animate={{ y: [0, -14, 0] }}
        transition={{ duration: 6.5, repeat: Infinity, ease: "easeInOut" }}
        className="relative aspect-[4/5] w-full overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.045] p-2 shadow-2xl shadow-sky-950/40 backdrop-blur-xl"
      >
        <div
          ref={imageFrameRef}
          className="relative h-full w-full overflow-hidden rounded-[1.55rem]"
        >
          <Image
            src={imageSrc}
            alt={alt}
            fill
            priority
            sizes="(min-width: 1024px) 440px, (min-width: 640px) 390px, 100vw"
            className="scale-125 object-contain object-bottom grayscale contrast-125 saturate-50 sepia-[0.18] hue-rotate-[165deg] brightness-75"
          />
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(125,211,252,0.12)_1px,transparent_1px)] bg-[size:100%_9px] mix-blend-screen" />
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_36%,rgba(2,6,23,0.58)_100%)]" />
          <motion.div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0"
            style={{ opacity: revealOpacity }}
          >
            <Image
              src={imageSrc}
              alt=""
              fill
              sizes="(min-width: 1024px) 440px, (min-width: 640px) 390px, 100vw"
              className="scale-125 object-contain object-bottom"
              style={{
                WebkitMaskImage: spotlightMask,
                maskImage: spotlightMask,
              }}
            />
            <motion.div
              className="absolute inset-0"
              style={{
                WebkitMaskImage: spotlightMask,
                maskImage: spotlightMask,
              }}
            >
              <div className="h-full w-full bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.2),transparent_48%)] mix-blend-soft-light" />
            </motion.div>
          </motion.div>
          <motion.div
            aria-hidden="true"
            className="pointer-events-none absolute h-44 w-44 -translate-x-1/2 -translate-y-1/2 rounded-full border border-sky-100/30 bg-sky-200/10 blur-[1px]"
            style={{
              x: smoothX,
              y: smoothY,
              opacity: revealOpacity,
            }}
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-white/5" />
        </div>
      </motion.div>
      <HeroContactLinks />
    </motion.div>
  );
}
