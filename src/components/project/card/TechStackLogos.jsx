import Image from "next/image";
import { techLogoMap } from "./projectTechLogos";

export default function TechStackLogos({ techStack }) {
  const visibleTechStack = techStack.filter((tech) => techLogoMap[tech]);

  if (visibleTechStack.length === 0) {
    return null;
  }

  return (
    <div className="mt-4 flex flex-wrap gap-2" aria-label="Project tech stack">
      {visibleTechStack.map((tech) => (
        <span
          key={tech}
          title={tech}
          aria-label={tech}
          className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-white/[0.045] text-sky-100 shadow-lg shadow-black/15 backdrop-blur-xl transition-colors hover:border-sky-300/35 hover:bg-sky-300/10"
        >
          <Image
            src={techLogoMap[tech]}
            alt=""
            width={22}
            height={22}
            className="max-h-5 max-w-5 object-contain"
          />
        </span>
      ))}
    </div>
  );
}
