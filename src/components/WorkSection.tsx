"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Experience } from "@/types/Experience";

const experiences: Experience[] = [
  {
    id: 1,
    title: "Back-end Developer",
    company: "Wine",
    companyUrl: "https://www.wine.com.br",
    startDate: "October 2023",
    endDate: "Present",
    description: `<span className="text-accent">Wine</span> is the largest wine subscription club in the world and the largest wine e-commerce platform in Brazil. The company offers a
            diverse selection of wines from around the globe, ensuring quality
            and customer satisfaction. Known for its innovative approach to
            e-commerce, <span className="text-accent">Wine</span> provides a seamless shopping experience with
            curated wine selections, detailed product information, and
            personalized recommendations to help customers discover and enjoy
            new wines.
            <br />
            <br />
            What I’ve done there: <br />
            <ul className="list-disc list-inside list-disc-accent">
              <li>
                  Develop sustainable and scalable software used by over 500,000
                  customers
              </li>
              <li>
                Maintain and optimize existing software, ensuring high
                performance and stability
              </li>
              <li>
                Assist in emergency actions during Black Friday, ensuring system
                availability and performance during high-demand periods
              </li>
              <li>Work with messaging and e-commerce platforms</li>
            </ul>`,
    skillsUsed: [
      "java",
      "spring",
      "mysql",
      "redis",
      "activemq",
      "grafana",
      "docker",
      "elastic-path",
      "git",
      "jira",
    ],
    order: 1,
  },
];

const WorkSection = () => {
  const [selectedExperience, setSelectedExperience] = useState<Experience>(
    experiences[0]
  );

  function handleExperienceSelection(experience: Experience) {
    setSelectedExperience(experience);
  }

  return (
    <section
      className="flex flex-col justify-center gap-4 pt-48 text-text w-[78rem]"
      id="work-section"
    >
      <div className="flex items-center gap-4">
        <h2 className="text-nowrap text-[2rem]">Where I've worked</h2>
        <div className="h-0.5 w-full bg-background-2"></div>
      </div>
      <div className="flex items-center w-full min-h-64 h-96 gap-4">
        <div className="flex items-center h-full w-[23rem]">
          <div className="w-0.5 h-full bg-background-2"></div>
          <div className="flex flex-col h-full w-full py-1">
            {experiences.map((experience) => (
              <div
                key={experience.id}
                className="flex items-center h-10 bg-background-2 relative"
                onClick={() => handleExperienceSelection(experience)}
              >
                <div className="h-12 w-0.5 bg-accent absolute -left-0.5"></div>
                <p className="text-2xl pl-4">{experience.company}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col w-full h-full text-text pt-2 gap-4">
          <div className="flex flex-col">
            <p className="text-2xl">
              {selectedExperience.title} -{" "}
              <a
                href={selectedExperience.companyUrl}
                className="text-accent-3 underline"
              >
                @{selectedExperience.company}
              </a>
            </p>
            <p className="text-text-2">
              {selectedExperience.startDate} - {selectedExperience.endDate}
            </p>
          </div>
          <p className="text-text">
            <span className="text-accent">Wine</span> is the largest wine
            subscription club in the world and the largest wine e-commerce
            platform in Brazil. The company offers a diverse selection of wines
            from around the globe, ensuring quality and customer satisfaction.
            Known for its innovative approach to e-commerce,{" "}
            <span className="text-accent">Wine</span> provides a seamless
            shopping experience with curated wine selections, detailed product
            information, and personalized recommendations to help customers
            discover and enjoy new wines.
            <br />
            <br />
            What I’ve done there: <br />
          </p>
          <ul className="list-disc list-inside list-disc-accent text-text">
            <li>
              Develop sustainable and scalable software used by over 500,000
              customers
            </li>
            <li>
              Maintain and optimize existing software, ensuring high performance
              and stability
            </li>
            <li>
              Assist in emergency actions during Black Friday, ensuring system
              availability and performance during high-demand periods
            </li>
            <li>Work with messaging and e-commerce platforms</li>
          </ul>
          <div className="flex gap-4">
            {selectedExperience.skillsUsed.map((skill: String) => (
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
        </div>
      </div>
    </section>
  );
};

export default WorkSection;
