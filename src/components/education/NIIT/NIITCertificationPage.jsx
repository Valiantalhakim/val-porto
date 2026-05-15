import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Award, ExternalLink } from "lucide-react";

export default function NIITCertificationPage() {
  return (
    <main className="min-h-screen px-6 py-8 text-white sm:px-8 lg:px-10">
      <section className="mx-auto flex w-full max-w-5xl flex-col gap-8">
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

          <div className="relative h-16 w-28 sm:h-20 sm:w-36">
            <Image
              src="/logos/NIIT-logo.png"
              alt="NIIT logo"
              fill
              sizes="144px"
              className="object-contain"
              priority
            />
          </div>

          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-sky-200/10 bg-sky-300/10 px-4 py-2 text-xs font-medium uppercase text-sky-100">
              <Award className="h-3.5 w-3.5" />
              NIIT Certification
            </div>

            <h1 className="mt-4 text-3xl font-semibold tracking-normal text-white sm:text-4xl">
              NIIT Certificate
            </h1>
            <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-slate-300 sm:text-base">
              International certification from NIIT.
            </p>
          </div>
        </header>

        <figure className="mx-auto w-full max-w-[420px] sm:max-w-[500px]">
          <div className="relative aspect-[529/793] w-full overflow-hidden rounded-xl border border-white/10 shadow-2xl shadow-black/40">
            <Image
              src="/document/niit.png"
              alt="NIIT certification"
              fill
              priority
              sizes="(min-width: 1024px) 760px, 100vw"
              className="object-contain"
            />
          </div>
          <figcaption className="mt-4 flex justify-center">
            <a
              href="/document/niit.png"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium text-sky-200 transition-colors hover:text-white"
            >
              Open certificate image
              <ExternalLink className="h-4 w-4" />
            </a>
          </figcaption>
        </figure>
      </section>
    </main>
  );
}
