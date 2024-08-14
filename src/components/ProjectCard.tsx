'use client';

import React, {useState} from "react";
import Image from "next/image";
import { Project } from "@/types/Project";

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="h-80 w-full"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={`h-full w-full ${isHovered && "bg-[#27253030]"} rounded-[2rem] gap-8 p-4 flex transition-colors`}>
        <div className="rounded-[2rem] flex justify-center items-center flex-shrink-0 w-[28rem] h-[18rem] relative">
          <div className="relative w-full h-full rounded-[2rem] overflow-hidden">
            <Image
              src={project.imgUrl}
              alt={`${project.title} image`}
              layout="fill"
              objectFit="cover"
            />
            <div className={`bg-background-2 ${isHovered ? "opacity-0" : "opacity-50"} hover:opacity-0 w-full h-full absolute`}></div>
          </div>
        </div>
        <div className="flex flex-col justify-between gap-4 text-text w-full">
          <div className="flex flex-col gap-4">
            <h3 className="text-2xl">
              <span className={isHovered ? "text-accent" : ""}>{project.title}</span> -{" "}
              {project.subtitle}
            </h3>
            <p className={`text-xl  ${isHovered ? "text-text" : "text-text-2"}`}>
              {project.description}
            </p>
          </div>
          <div className="flex justify-between items-center">
            <div className="flex gap-4">
              {project.skillsUsed.map((skill: String) => (
                <div className="flex items-center">
                  <Image
                    src={`/icons/${skill}.svg`}
                    alt={`${skill} icon`}
                    width={28}
                    height={28}
                  />
                </div>
              ))}
            </div>
            <div className="flex justify-end gap-4">
              {project.repoUrl && (
                <a href={project.repoUrl} target="blank">
                  <div className={`flex items-center justify-center w-10 h-10 rounded-full ${isHovered ? "bg-text-2" : "bg-background-2"}  transition-transform transform hover:scale-110`}>
                    <Image
                      src="/icons/github.svg"
                      alt="github icon"
                      width={28}
                      height={28}
                    />
                  </div>
                </a>
              )}
              {project.downloadUrl && (
                <a href={project.downloadUrl} target="blank">
                  <div className={`flex items-center justify-center w-10 h-10 rounded-full ${isHovered ? "bg-text-2" : "bg-background-2"} transition-transform transform hover:scale-110`}>
                    <Image
                      src="/icons/download.svg"
                      alt="download icon"
                      width={28}
                      height={28}
                    />
                  </div>
                </a>
              )}
              {project.liveUrl && (
                  <a href={project.liveUrl} target="blank">
                <div className={`flex items-center justify-center w-10 h-10 rounded-full ${isHovered ? "bg-text-2" : "bg-background-2"} transition-transform transform hover:scale-110`}>
                    <Image
                      src="/icons/external-link.svg"
                      alt="external-link icon"
                      width={28}
                      height={28}
                    />
                </div>
                  </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
