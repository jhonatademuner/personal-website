"use client";

import React from "react";
import Image, { StaticImageData } from "next/image";

interface WorkCardProps {
  work: {
    title: string;
    company: string;
    companyUrl: string;
    period: string;
    description: string;
    photo: StaticImageData;
  };
}

const WorkCard = ({ work }: WorkCardProps) => {
  return (
    <div className="flex gap-4 w-full">
      <Image src={work.photo} width={64} height={64} alt="Company Logo" className="flex rounded-full w-16 h-16 object-cover border-2 border-background-700 p-1"/>
      <div className="flex flex-col gap-2 w-full">
        <div className="flex justify-between items-center flex-wrap">
          <p className="md:text-xl text-lg font-bold ">
            {work.title}{" "}
            <a href={work.companyUrl} target="_blank" className="text-primary-300 md:text-lg">@ {work.company}</a>
          </p>
          <p className="md:text-base text-sm font-semibold">{work.period}</p>
        </div>
        <ul className="text-base text-text-200 pl-4">
          {work.description.split("\n").map((line, index) => (
            <li key={index} className=" list-disc">{line}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default WorkCard;
