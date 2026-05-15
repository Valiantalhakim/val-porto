"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Award, Building2, CalendarDays, GraduationCap } from "lucide-react";

const cardIcons = [GraduationCap, Building2, Award];

export default function AboutCards({ cards = [] }) {
  return (
    <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
      {cards.map((card, index) => {
        const Icon = cardIcons[index] ?? GraduationCap;
        const CardWrapper = card.href ? Link : "div";

        return (
          <CardWrapper
            key={card.name}
            href={card.href}
            aria-label={card.href ? `Open ${card.name} certification` : undefined}
            className={card.href ? "block focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-300 focus-visible:ring-offset-2 focus-visible:ring-offset-black" : undefined}
          >
            <motion.article
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.45 }}
              transition={{
                duration: 0.55,
                delay: index * 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={{ y: -4, scale: 1.01 }}
              className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.045] p-4 shadow-lg shadow-black/20 backdrop-blur-xl transition-colors duration-300 hover:border-sky-300/30 hover:bg-white/[0.07]"
            >
              <div className="relative flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-xl border border-white/10 bg-white p-2 shadow-inner shadow-black/10">
                {card.logo ? (
                  <Image
                    src={card.logo}
                    alt={`${card.name} logo`}
                    fill
                    sizes="48px"
                    className="object-contain p-1.5"
                  />
                ) : (
                  <span className="text-sm font-semibold text-slate-950">
                    {card.initials}
                  </span>
                )}
              </div>

              <div className="min-w-0 flex-1">
                <div className="flex items-center gap-2 text-xs font-medium uppercase text-slate-400">
                  <Icon className="h-3.5 w-3.5 text-sky-300" />
                  {card.label}
                </div>
                <div className="mt-1 flex flex-wrap items-center gap-2">
                  <h3 className="text-sm font-semibold leading-6 text-white sm:text-base">
                    {card.name}
                  </h3>
                  <span className="rounded-full border border-sky-200/10 bg-sky-300/10 px-2 py-0.5 text-[11px] font-medium text-sky-100">
                    {card.country}
                  </span>
                </div>
                <div className="mt-1 flex items-center gap-2 text-xs text-slate-400">
                  <CalendarDays className="h-3.5 w-3.5 text-sky-300/80" />
                  {card.period}
                </div>
              </div>
            </motion.article>
          </CardWrapper>
        );
      })}
    </div>
  );
}
