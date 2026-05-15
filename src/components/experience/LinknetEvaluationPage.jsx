import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ClipboardCheck } from "lucide-react";

const evaluationSrc =
  "/document/FORMULIR-PENILAIAN-MAGANG-PROGRAM-TI-SE-WD-ISA-BARU%20(1).pdf#toolbar=0&navpanes=0";

export default function LinknetEvaluationPage() {
  return (
    <main className="min-h-screen px-6 py-8 text-white sm:px-8 lg:px-10">
      <section className="mx-auto flex w-full max-w-6xl flex-col gap-8">
        <header className="relative flex flex-col items-center gap-5 pb-2 text-center">
          <div className="w-full">
            <Link
              href="/experience"
              className="inline-flex w-fit items-center gap-2 rounded-full border border-white/10 bg-white/[0.045] px-4 py-2 text-sm font-medium text-sky-100 transition-colors hover:border-sky-300/30 hover:bg-sky-300/10 hover:text-white sm:absolute sm:left-0 sm:top-0"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Experience
            </Link>
          </div>

          <div className="relative h-16 w-32 sm:h-20 sm:w-40">
            <Image
              src="/logos/LinkNet_logo.png"
              alt="LinkNet logo"
              fill
              sizes="160px"
              className="object-contain"
              priority
            />
          </div>

          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-sky-200/10 bg-sky-300/10 px-4 py-2 text-xs font-medium uppercase text-sky-100">
              <ClipboardCheck className="h-3.5 w-3.5" />
              Internship Evaluation
            </div>

            <h1 className="mt-4 text-3xl font-semibold tracking-normal text-white sm:text-4xl">
              LinkNet Internship Evaluation Form
            </h1>
            <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-slate-300 sm:text-base">
              Internship assessment document from PT Linknet Tbk.
            </p>
          </div>
        </header>

        <section className="mx-auto w-full max-w-2xl">
          <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.035] p-2 shadow-2xl shadow-black/40 backdrop-blur-xl sm:p-3">
            <iframe
              title="LinkNet internship evaluation form"
              src={evaluationSrc}
              className="h-[60vh] min-h-[480px] w-full rounded-xl bg-white"
            />
          </div>
        </section>
      </section>
    </main>
  );
}
