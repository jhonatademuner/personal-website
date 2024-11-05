import React from "react";
import Image, { StaticImageData } from "next/image";
import { IoLogoGithub, IoLink } from "react-icons/io5";
import { CardSpotlightEffect } from "./CardSpotlightEffect";

interface ProjectCardProps {
  name: string;
  description: string;
  logo: StaticImageData;
  skillsUsed: string[];
  repoUrl: string;
  liveUrl: string;
}

const ProjectCard = ({
  name,
  description,
  logo,
  skillsUsed,
  repoUrl,
  liveUrl,
}: ProjectCardProps) => {
  return (
    <CardSpotlightEffect>
      <div className="flex flex-col gap-4 bg-background-900 border-2 border-background-800 rounded-xl p-2 w-full h-full">
        <Image
          src={logo}
          width={640}
          height={640}
          alt="Tech Logo"
          className="flex rounded-xl w-full h-52 object-cover"
        />
        <div className="flex gap-2 bg-background-800 bg-opacity-50 p-2 rounded-lg">
          {skillsUsed.map((skill, index) => (
            <div className="flex items-center hover:scale-110" key={index}>
              <Image
                src={`/icons/${skill}.svg`}
                alt={`${skill} icon`}
                width={28}
                height={28}
                className="object-cover"
              />
            </div>
          ))}
        </div>
        <div className="flex flex-col p-2 gap-2 h-full">
          <h1 className="text-xl font-bold">{name}</h1>
          <p className="text-base text-text-200">{description}</p>
        </div>
        <div className="flex w-full justify-end items-center gap-2 mt-2 shrink-0">
          <a href={repoUrl} target="_blank">
            <button className="btn btn-outline border-2 bg-background-800 border-background-800 font-semibold">
              <IoLogoGithub className="text-2xl " />
              Source
            </button>
          </a>
          {liveUrl !== "" && (
            <a href={liveUrl} target="_blank">
              <button className="btn btn-outline border-2 bg-background-800 border-background-800 font-semibold">
                <IoLink className="text-2xl" />
                Live
              </button>
            </a>
          )}
        </div>
      </div>
    </CardSpotlightEffect>
  );
};

export default ProjectCard;
