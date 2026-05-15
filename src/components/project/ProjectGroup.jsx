import { AnimatePresence, motion } from "framer-motion";
import ProjectCard from "./ProjectCard";
import { listVariants, sectionVariants } from "./projectAnimations";

export default function ProjectGroup({ section, activeFilter }) {
  const visibleProjects = section.projects.filter((project) => {
    return activeFilter === "All" || project.categories.includes(activeFilter);
  });

  if (visibleProjects.length === 0) {
    return null;
  }

  return (
    <motion.section
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.18 }}
      className="mt-12"
    >
      <div className="mb-6">
        <h2 className="text-2xl font-semibold text-white sm:text-3xl">
          {section.title}
        </h2>
        <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-300 sm:text-base">
          {section.subtitle}
        </p>
      </div>

      <motion.div
        layout
        variants={listVariants}
        initial="hidden"
        animate="visible"
        className="grid gap-4 md:grid-cols-2 xl:grid-cols-3"
      >
        <AnimatePresence mode="popLayout">
          {visibleProjects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </AnimatePresence>
      </motion.div>
    </motion.section>
  );
}
