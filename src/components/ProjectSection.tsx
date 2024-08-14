import React from "react";
import ProjectList from "./ProjectList";

const ProjectSection = () => {
  return (
    <section className="flex flex-col justify-center gap-4 pt-48 text-text w-[78rem]">
      <div className="flex items-center gap-4" id="project-section">
        <h2 className="text-nowrap text-[2rem]">What I've build</h2>
        <div className="h-0.5 w-full bg-background-2"></div>
      </div>
      <ProjectList />
    </section>
  );
};

export default ProjectSection;
