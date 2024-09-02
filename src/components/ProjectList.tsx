import React, { useEffect, useState } from "react";
import ProjectCard from "./ProjectCard";
import axios from "axios";
import { Project } from "../types/Project";

const projects: Project[] = [
  {
    id: 1,
    imgUrl:
      "https://github.com/jhonatademuner/localif/blob/main/preview_image.png?raw=true",
    title: "Localif",
    subtitle: "Image Recognition Native Mobile App",
    description:
      "Localif ​​is an image recognition application specifically designed for IFES Campus Serra. With a comprehensive database, the program stores information about the various locations in the campus. Using two feature extractors, LocalIf ​​analyzes the photos sent by the user and determines the corresponding location. It also contains a pathfinder feature, which allows the user to find the shortest path between two locations.",
    skillsUsed: ["kotlin", "android", "java", "python", "c", "c-plus"],
    repoUrl: "https://github.com/jhonatademuner/localif",
    liveUrl: "",
    downloadUrl:
      "https://drive.google.com/file/d/1F_ip5eVP2huJprgRNnysRlwoz8d12-34/view",
    order: 1,
  },
  {
    id: 2,
    imgUrl: "https://cdn.discordapp.com/attachments/1028826463090249851/1267031568535388182/initial_screen.png?ex=66a74e9a&is=66a5fd1a&hm=03ae6144a27331c05f674d65a6f6597ffaaf26f2095e8a602806d40a035931c7&",
    title: "Komunicatte",
    subtitle: "Messaging Web App",
    description:
      "Komunicatte is an Messaging Web App designed for communication and interaction among users. The system allows users to create accounts, profiles, engage in conversations, send messages, react to messages, make calls, create communities, add friends, and more. Notifications are sent when messages are received, and users can participate in conversations within communities.",
    skillsUsed: ["nodejs", "express", "mongodb", "react", "typescript", "nextjs", "tailwind"],
    repoUrl: "https://github.com/samoleu/samuzap",
    liveUrl: "",
    downloadUrl: "",
    order: 2,
  },
  {
    id: 3,
    imgUrl: "https://github.com/jhonatademuner/sort-comparison/blob/main/preview-img.png?raw=true",
    title: "Sort Comparison",
    subtitle: "Didactic Web Application",
    description: "Website developed to propose a friendly and didactic visualization of list sorting using different algorithms. The code is implemented in a way that allows two selected algorithms to run simultaneously, allowing users to visually compare and perceive the differences in their functioning.",
    skillsUsed: ["javascript", "html", "css"],
    repoUrl: "https://github.com/jhonatademuner/sort-comparison",
    liveUrl: "https://jhonatademuner.github.io/sort-comparison/",
    downloadUrl: "",
    order: 3,
  },
];

const ProjectList: React.FC = () => {

  return (
    <div className="flex flex-col">
      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  );
};

export default ProjectList;
