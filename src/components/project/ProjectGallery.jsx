"use client";

import { AnimatePresence, motion } from "framer-motion";
import ProjectGalleryCard from "./card/ProjectGalleryCard";

export default function ProjectGallery({ projects }) {
  return (
    <motion.div layout className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
      <AnimatePresence mode="popLayout">
        {projects.map((project) => (
          <ProjectGalleryCard key={project.slug} project={project} />
        ))}
      </AnimatePresence>
    </motion.div>
  );
}
