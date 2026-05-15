import { motion } from "framer-motion";
import Badge from "./Badge";
import { cardVariants } from "./projectAnimations";

export default function ProjectCard({ project }) {
  const Icon = project.icon;

  return (
    <motion.article
      layout
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      whileHover={{ y: -5, scale: 1.01 }}
      className="group relative overflow-hidden rounded-[1.5rem] border border-white/10 bg-white/[0.045] p-5 shadow-xl shadow-black/20 backdrop-blur-xl transition-colors hover:border-sky-300/35 hover:bg-white/[0.065]"
    >
      <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-sky-300/10 blur-3xl transition-opacity group-hover:opacity-100" />
      <div className="relative flex items-start justify-between gap-4">
        <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-sky-200/10 bg-sky-300/10 text-sky-200">
          <Icon className="h-5 w-5" />
        </div>
        <Badge>{project.status}</Badge>
      </div>

      <h3 className="relative mt-5 text-xl font-semibold text-white">
        {project.title}
      </h3>
      <p className="relative mt-3 text-sm leading-7 text-slate-300">
        {project.description}
      </p>

      <div className="relative mt-5 flex flex-wrap gap-2">
        {project.techStack.map((tech) => (
          <Badge key={tech}>{tech}</Badge>
        ))}
      </div>
    </motion.article>
  );
}
