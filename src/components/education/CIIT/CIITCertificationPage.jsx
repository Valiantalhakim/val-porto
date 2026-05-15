"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Award, ExternalLink } from "lucide-react";

const documents = [
  {
    title: "CCIT Certificate",
    src: "/document/Certifiate%20IT%20CCIT%20FT%20Universitas%20Indonesia.jpg",
    href: "/document/Certifiate%20IT%20CCIT%20FT%20Universitas%20Indonesia.jpg",
    alt: "CCIT certification",
    width: 921,
    height: 1280,
  },
  {
    title: "CCIT Grade Report",
    src: "/document/nilai%20ccit.jpeg",
    href: "/document/nilai%20ccit.jpeg",
    alt: "CCIT grade report",
    width: 904,
    height: 1280,
  },
  {
    title: "Socio-Technopreneurship Seminar",
    src: "/document/sertifikat_seminar_%20Socio-Technopreneurship.png",
    href: "/document/sertifikat_seminar_%20Socio-Technopreneurship.png",
    alt: "Socio-Technopreneurship seminar certificate",
    width: 1132,
    height: 799,
  },
];

export default function CIITCertificationPage() {
  const [isSplit, setIsSplit] = useState(false);
  const toggleDocuments = () => setIsSplit((current) => !current);

  return (
    <main className="min-h-screen px-6 py-8 text-white sm:px-8 lg:px-10">
      <section className="mx-auto flex w-full max-w-6xl flex-col gap-8">
        <header className="relative flex flex-col items-center gap-5 pb-2 text-center">
          <div className="w-full">
            <Link
              href="/#about"
              className="inline-flex w-fit items-center gap-2 rounded-full border border-white/10 bg-white/[0.045] px-4 py-2 text-sm font-medium text-sky-100 transition-colors hover:border-sky-300/30 hover:bg-sky-300/10 hover:text-white sm:absolute sm:left-0 sm:top-0"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to About
            </Link>
          </div>

          <div className="relative h-16 w-32 sm:h-20 sm:w-40">
            <Image
              src="/logos/ccit-logo.png"
              alt="CCIT logo"
              fill
              sizes="160px"
              className="object-contain"
              priority
            />
          </div>

          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-sky-200/10 bg-sky-300/10 px-4 py-2 text-xs font-medium uppercase text-sky-100">
              <Award className="h-3.5 w-3.5" />
              CCIT Certification
            </div>

            <h1 className="mt-4 text-3xl font-semibold tracking-normal text-white sm:text-4xl">
              CCIT Certificate & Grade
            </h1>
            <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-slate-300 sm:text-base">
              Certificate and academic grade document from CCIT Faculty of
              Engineering Universitas Indonesia.
            </p>
          </div>
        </header>

        <section className="mx-auto flex w-full flex-col items-center">
          <div
            role="button"
            tabIndex={0}
            aria-pressed={isSplit}
            onClick={toggleDocuments}
            onKeyDown={(event) => {
              if (event.key === "Enter" || event.key === " ") {
                event.preventDefault();
                toggleDocuments();
              }
            }}
            className={`relative grid w-full max-w-[960px] cursor-pointer items-center justify-items-center transition-[min-height] duration-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-300 focus-visible:ring-offset-2 focus-visible:ring-offset-black ${
              isSplit
                ? "min-h-[980px] gap-6 md:min-h-[640px] md:grid-cols-2 xl:min-h-[560px] xl:grid-cols-3"
                : "min-h-[600px] md:min-h-[650px]"
            }`}
            aria-label={isSplit ? "Stack CCIT documents" : "Split CCIT documents"}
          >
            {documents.map((document, index) => {
              const isCertificate = index === 0;
              const isLandscape = document.width > document.height;

              return (
                <motion.figure
                  key={document.title}
                  initial={false}
                  animate={
                    isSplit
                      ? {
                          x: 0,
                          y: 0,
                          rotate: 0,
                          scale: 1,
                          zIndex: documents.length - index,
                        }
                      : {
                          x: index * 28,
                          y: index * 34,
                          rotate: [-1.5, 2.5, -3][index] ?? 0,
                          scale: [1, 0.94, 0.82][index] ?? 0.9,
                          zIndex: documents.length - index,
                        }
                  }
                  transition={{ type: "spring", stiffness: 120, damping: 20 }}
                  className={
                    isSplit
                      ? isLandscape
                        ? "relative w-full max-w-[420px] md:max-w-[450px]"
                        : "relative w-full max-w-[330px] md:max-w-[360px]"
                      : "absolute w-[min(76vw,390px)]"
                  }
                >
                  <Image
                    src={document.src}
                    alt={document.alt}
                    width={document.width}
                    height={document.height}
                    priority={isCertificate}
                    sizes="(min-width: 768px) 400px, 76vw"
                    className="h-auto w-full rounded-xl border border-white/10 shadow-2xl shadow-black/45"
                  />
                  <figcaption className="mt-3 flex justify-center">
                    <a
                      href={document.href}
                      target="_blank"
                      rel="noreferrer"
                      onClick={(event) => event.stopPropagation()}
                      className="inline-flex items-center gap-2 text-sm font-medium text-sky-200 transition-colors hover:text-white"
                    >
                      {document.title}
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  </figcaption>
                </motion.figure>
              );
            })}
          </div>
        </section>
      </section>
    </main>
  );
}
