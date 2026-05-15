import { CheckCircle2, Clock3 } from "lucide-react";
import Badge from "../Badge";
import TechStackLogos from "./TechStackLogos";

export default function ProjectCardHeader({ project }) {
  const isCompleted = project.status.toLowerCase().includes("completed");
  const StatusIcon = isCompleted ? CheckCircle2 : Clock3;

  return (
    <div className="mb-5 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
      <div className="max-w-2xl">
        <div className="flex items-center gap-3">
          <span
            className={`flex h-11 w-11 items-center justify-center rounded-2xl border ${
              isCompleted
                ? "border-emerald-200/10 bg-emerald-300/10 text-emerald-200"
                : "border-amber-200/10 bg-amber-300/10 text-amber-200"
            }`}
          >
            <StatusIcon className="h-5 w-5" />
          </span>
          <div>
            <h2 className="text-xl font-semibold text-white">{project.title}</h2>
            <div className="mt-2 flex flex-wrap gap-2">
              <Badge>{project.status}</Badge>
              {project.categories.slice(0, 2).map((category) => (
                <Badge key={category}>{category}</Badge>
              ))}
            </div>
          </div>
        </div>
        <p className="mt-3 text-sm leading-6 text-slate-300">
          {project.description}
        </p>
        <TechStackLogos techStack={project.techStack} />
      </div>
    </div>
  );
}
