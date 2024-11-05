"use client";

import React, { useState } from "react";
import WorkCard from "./WorkCard";
import EducationCard from "./EducationCard";
import WineLogo from "@/../public/wine-logo.png";
import IfLogo from "@/../public/if-logo.png";
import DioLogo from "@/../public/dio-logo.png";
import { CardSpotlightEffect } from "./CardSpotlightEffect";

const ExperienceTabs = () => {
  const [activeTab, setActiveTab] = useState("work");

  const workHistory = [
    {
      title: "Software Engineer (Java)",
      company: "Wine.com.br",
      companyUrl: "https://www.wine.com.br/institucional/",
      period: "Oct 2023 - Present",
      description: `Developed and maintained scalable software used by over 500,000 customers, ensuring high availability and performance.
        Optimized existing software to enhance stability and efficiency, resulting in improved user experience and reduced response times.
        Implemented emergency protocols for quick bug resolution during critical periods, such as Black Friday, ensuring system reliability and performance under high demand.
        Utilized a variety of technologies including Java, Spring Boot, PostgreSQL, MySQL, Redis, and ActiveMQ to deliver robust e-commerce solutions.
        Collaborated with cross-functional teams to identify and address software issues, contributing to continuous improvement and innovation in system architecture.`,
      photo: WineLogo,
    },
  ];

  const educationHistory = [
    {
      title: "Bachelor's Degree in Information Systems",
      institution: "Instituto Federal do Espírito Santo - IFES",
      period: "2022",
      description:
        "Currently on the 6th semester of the course, with a focus on software development and systems analysis.",
      photo: IfLogo,
    },
    {
      title: "Santander Bootcamp 2023 - Mobile Android using Kotlin",
      institution: "Digital Innovation One - DIO",
      period: "2023",
      description:
        "Intensive bootcamp focused on Android development using Kotlin, with a focus on best practices and design patterns.",
      photo: DioLogo,
    },
  ];

  return (
    <div className="flex flex-col gap-4 w-full">
      <CardSpotlightEffect>
        <div className="flex justify-between items-center w-full h-16 bg-background-900 border-2 border-background-800 rounded-2xl p-2 font-bold text-xl">
          <div
            className={`flex justify-center items-center w-1/2 h-full cursor-pointer rounded-lg ${
              activeTab === "work" ? "bg-background-800" : ""
            } transition-all duration-300 ease-in-out`}
            onClick={() => setActiveTab("work")}
          >
            Work
          </div>
          <div
            className={`flex justify-center items-center w-1/2 h-full cursor-pointer rounded-lg ${
              activeTab === "education" ? "bg-background-800" : ""
            } transition-all duration-300 ease-in-out`}
            onClick={() => setActiveTab("education")}
          >
            Education
          </div>
        </div>
      </CardSpotlightEffect>

      <CardSpotlightEffect>
        <div className="flex flex-col gap-2 bg-background-900 border-2 border-background-800 rounded-xl p-4 transition-opacity duration-500 ease-in-out">
          {activeTab === "work" ? (
            <div className="flex flex-col gap-8">
              {workHistory.map((work, index) => (
                <React.Fragment key={index}>
                  <WorkCard work={work} key={index} />
                  {index < workHistory.length - 1 && (
                    <hr className="border-background-700" />
                  )}
                </React.Fragment>
              ))}
            </div>
          ) : (
            <div className="flex flex-col gap-8">
              {educationHistory.map((education, index) => (
                <React.Fragment key={index}>
                  <EducationCard education={education} />
                  {index < educationHistory.length - 1 && (
                    <hr className="border-background-700" />
                  )}
                </React.Fragment>
              ))}
            </div>
          )}
        </div>
      </CardSpotlightEffect>
    </div>
  );
};

export default ExperienceTabs;
