import Image from "next/image";
import { defaultSourceCodeHref, techLogoMap } from "./projectTechLogos";

export default function SourceCodeLink({ href = defaultSourceCodeHref }) {
  return (
    <div className="mt-5 flex justify-center">
      <a
        href={href}
        target="_blank"
        rel="noreferrer"
        onClick={(event) => event.stopPropagation()}
        className="inline-flex w-fit items-center gap-2 rounded-full border border-white/10 bg-white/[0.045] px-4 py-2 text-sm font-medium text-slate-100 transition-colors hover:border-sky-300/35 hover:bg-sky-300/10 hover:text-white"
      >
        <Image
          src={techLogoMap.GitHub}
          alt=""
          width={18}
          height={18}
          className="h-4.5 w-4.5 object-contain"
        />
        for source code click here
      </a>
    </div>
  );
}
