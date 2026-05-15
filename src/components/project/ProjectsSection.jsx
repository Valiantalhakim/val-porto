"use client";

import { useMemo, useState } from "react";
import ProjectGallery from "./ProjectGallery";
import ProjectFilter from "./ProjectFilter";
import ProjectHeader from "./ProjectHeader";
import { projects } from "./projectData";

export default function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState("All");
  const visibleProjects = useMemo(() => {
    return projects.filter((project) => {
      return activeFilter === "All" || project.categories.includes(activeFilter);
    });
  }, [activeFilter]);

  return (
    <main className="min-h-screen px-6 py-8 text-white sm:px-8 lg:px-10">
      <section className="mx-auto w-full max-w-7xl">
        <ProjectHeader />

        <section id="project-grid" className="mt-12">
          <ProjectFilter
            activeFilter={activeFilter}
            visibleCount={visibleProjects.length}
            onFilterChange={setActiveFilter}
          />

          <ProjectGallery projects={visibleProjects} />
        </section>
      </section>
    </main>
  );
}
