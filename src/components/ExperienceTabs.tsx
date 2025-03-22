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
      title: "Software Engineer",
      company: "Wine",
      companyUrl: "https://www.wine.com.br/institucional/",
      period: "Oct 2023 - Present",
      description: `Optimized a geolocation microservice by applying classification algorithms and caching, increasing accuracy by 95% and reducing costs by 50%.
        Fixed security vulnerabilities identified in penetration tests, following best practices and eliminating 100% of the detected issues.
        Implemented optimizations for high-volume data loads using ActiveMQ, applying parallelism to reduce processing time to less than 10% of the original duration.
        Improved the performance of both new and legacy systems through caching with Redis, reducing latency.
        Analyze and resolve production bugs using tools like Grafana and Kubernetes, including during high-demand periods such as Black Friday.
        Develop and maintain various projects, including legacy code with Spring Framework (Java 7) and microservices with Spring Boot (Java 17 and 21).
        Develop interfaces using Java Server Pages (JSP) and jQuery, consistently receiving praise for attention to interface and user experience (UI/UX).`,
      photo: WineLogo,
    },
  ];

  const educationHistory = [
    {
      title: "Bachelor's Degree in Information Systems",
      institution: "Instituto Federal do Espírito Santo - IFES",
      period: "2025",
      description:
        "Currently on the 7th semester of the course, with a focus on software development and systems analysis.",
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
