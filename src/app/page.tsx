import Image from "next/image";
import { IoLogoGithub, IoLogoLinkedin, IoMailSharp } from "react-icons/io5";
import { LuDownload } from "react-icons/lu";
import Photo from "@/../public/photo.jpg";
import Brazil from "@/../public/brazil-flag.png";
import ExperienceTabs from "@/components/ExperienceTabs";
import TechCard from "@/components/TechCard";
import ProjectCard from "@/components/ProjectCard";
import ArchiterPreview from "@/../public/architer-preview.png";
import ReleaseGuardPreview from "@/../public/release-guard-preview.png";
import StudaiPreview from "@/../public/studai-preview.png";
import DevOpsChallengePreview from "@/../public/devops-challenge-preview.jpg";
import ClipboarPreview from "@/../public/clipboar-preview.png";
import LocalifPreview from "@/../public/localif-preview.png";
import { FooterCardSpotlightEffect } from "@/components/FooterCardSpotlightEffect";

export default function Home() {
  return (
    <div className="w-full min-h-screen flex flex-col items-center">
      <main className="flex flex-col items-center w-full md:gap-64 gap-32">
        <section className="flex flex-col justify-center items-center w-full min-h-[50vh] gap-8 xl:w-[80rem] lg:w-[64rem] md:w-[48rem] sm:w-[40rem] my-8">
          <div className="flex gap-4 z-10 items-center">
            <div className="border-2 border-gray-300 rounded-full p-1">
              <Image
                src={Photo}
                width={64}
                height={64}
                alt="Jhonata Demuner"
                className="rounded-full h-fit"
              />
            </div>
            <div className="flex flex-col">
              <h1 className="text-2xl font-bold">Jhonata Demuner</h1>
              <div className="flex h-4 items-center gap-2">
                <Image
                  src={Brazil}
                  alt="Brazil"
                  width={16}
                  height={16}
                  className="w-fit h-full"
                />
                <p className="text-sm">Based on Brazil</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col relative items-center gap-4 text-center">
            <div className=" bg-accent-400 w-4/5 h-32 blur-[12rem] opacity-50 absolute"></div>
            <p className=" md:text-7xl text-4xl font-semibold text-center z-10 xl:w-3/4 ">
              I&apos;m a Software Engineer{" "}
              <span className="text-accent-300">&</span> Backend Developer.
            </p>
            <p className="md:text-xl text-gray-300 z-10 ">
              I solve problems. Code just happens to be my method.
            </p>
          </div>
          <div className="flex gap-4 z-10">
            <a href="https://github.com/jhonatademuner" target="_blank">
              <button className="btn btn-circle btn-outline border-text-100 text-text-100 hover:bg-text-100 hover:scale-110 transition-colors duration-300">
                <IoLogoGithub className="text-2xl " />
              </button>
            </a>
            <a
              href="https://www.linkedin.com/in/jhonatademuner/"
              target="_blank"
            >
              <button className="btn btn-circle btn-outline border-text-100 text-text-100 hover:bg-text-100 hover:scale-110 transition-colors duration-300">
                <IoLogoLinkedin className="text-2xl " />
              </button>
            </a>
            <a href="mailto:jhonata.demuner@gmail.com" target="_blank">
              <button className="btn btn-circle btn-outline border-text-100 text-text-100 hover:bg-text-100 hover:scale-110 transition-colors duration-300">
                <IoMailSharp className="text-2xl " />
              </button>
            </a>
            <a href="/jhonata_cv_en.pdf" download="jhonata_cv_en.pdf">
              <button className="btn rounded-full btn-outline text-lg font-medium border-text-100 text-text-950 bg-white hover:bg-transparent hover:text-text-100 hover:scale-110 transition-colors duration-300">
                <LuDownload className="text-2xl " />
                Download CV
              </button>
            </a>
          </div>
        </section>
        <div className="flex flex-col w-full items-center gap-16">
          <div className="w-full h-0.5 bg-background-600 bg-opacity-20"></div>
          <section
            className="flex flex-col items-center justify-center gap-4 lg:w-[56rem] md:w-[48rem] sm:w-[40rem] w-full relative px-2"
            id="experiences"
          >
            <div className="flex w-full items-center gap-4 z-10">
              <div className="w-full h-0.5 bg-background-600 bg-opacity-50"></div>
              <h3 className="text-2xl  text-background-500">Experience</h3>
              <div className="w-full h-0.5 bg-background-600 bg-opacity-50"></div>
            </div>
            <div className=" bg-accent-400 w-4/5 h-24 blur-[12rem] opacity-50 absolute"></div>
            <ExperienceTabs />
          </section>
        </div>
        <div className="flex flex-col w-full items-center gap-16">
          <section
            className="flex flex-col items-center justify-center gap-8 lg:w-[56rem] md:w-[48rem] sm:w-[40rem] w-full relative px-2"
            id="techStack"
          >
            <div className="flex w-full items-center gap-4 z-10">
              <div className="w-full h-0.5 bg-background-600 bg-opacity-50"></div>
              <h3 className="text-2xl text-background-500 text-nowrap">
                Tech Stack
              </h3>
              <div className="w-full h-0.5 bg-background-600 bg-opacity-50"></div>
            </div>
            <div className=" bg-accent-400 w-4/5 h-24 blur-[12rem] opacity-50 absolute"></div>
            <div className=" grid md:grid-rows-3 md:grid-cols-3 grid-cols-1 w-full gap-4 z-10">
              <TechCard
                name="Java"
                description="Programming Language"
                icon="java"
                iconBackgroundColor="#f8982025"
              />
              <TechCard
                name="Kotlin"
                description="Programming Language"
                icon="kotlin"
                iconBackgroundColor="#7A6BFF25"
              />
              <TechCard
                name="Spring"
                description="Java Framework"
                icon="spring"
                iconBackgroundColor="#6db33f25"
              />
              <TechCard
                name="jUnit"
                description="Testing Framework"
                icon="junit"
                iconBackgroundColor="#DC514A25"
              />
              <TechCard
                name="RabbitMQ"
                description="Message Broker"
                icon="rabbitmq"
                iconBackgroundColor="#FF660025"
              />
              <TechCard
                name="Redis"
                description="In-Memory Data Store"
                icon="redis"
                iconBackgroundColor="#d82c2025"
              />
              <TechCard
                name="PostgreSQL"
                description="Relational Database"
                icon="postgresql"
                iconBackgroundColor="#33679125"
              />
              <TechCard
                name="MongoDB"
                description="Non-Relational Database"
                icon="mongodb"
                iconBackgroundColor="#47A24825"
              />
              <TechCard
                name="Amazon AWS"
                description="Cloud Provider"
                icon="aws"
                iconBackgroundColor="#f8982015"
              />
              <TechCard
                name="Go"
                description="Programming Language"
                icon="go"
                iconBackgroundColor="#6AD7E525"
              />
              <TechCard
                name="Docker"
                description="Containerization Platform"
                icon="docker"
                iconBackgroundColor="#0db7ed25"
              />
              <TechCard
                name="Grafana"
                description="Monitoring & Visualization"
                icon="grafana"
                iconBackgroundColor="#FAC43425"
              />
            </div>
          </section>
        </div>
        <div className="flex flex-col w-full items-center gap-16">
          <section
            className="flex flex-col items-center justify-center gap-8 lg:w-[56rem] md:w-[48rem] sm:w-[40rem] w-full relative px-2"
            id="projects"
          >
            <div className="flex w-full items-center gap-4 z-10">
              <div className="w-full h-0.5 bg-background-600 bg-opacity-50"></div>
              <h3 className="text-2xl text-background-500 text-nowrap">
                Projects
              </h3>
              <div className="w-full h-0.5 bg-background-600 bg-opacity-50"></div>
            </div>
            <div className=" bg-accent-400 w-4/5 h-3/5 blur-[24rem] opacity-30 absolute"></div>
            <div className=" grid md:grid-rows-2 md:grid-cols-2 grid-cols-1 px-4 w-full gap-4 lg:w-[56rem] md:w-[48rem] sm:w-[40rem] z-10">
            <ProjectCard
                name="Architer"
                description="🧠 System Design Interview Simulation Platform (powered by OpenAI)."
                logo={ArchiterPreview}
                skillsUsed={[
                  "kotlin",
                  "spring",
                  "junit",
                  "postgresql",
                  "flyway",
                  "docker",
                  "openai",
                ]}
                repoUrl="https://github.com/jhonatademuner/architer"
                liveUrl=""
              />
              <ProjectCard
                name="Release Guard"
                description="⚙️ Automated Release Policy Service for GitHub."
                logo={ReleaseGuardPreview}
                skillsUsed={[
                  "java",
                  "spring",
                  "junit",
                  "postgresql",
                  "docker",
                ]}
                repoUrl="https://github.com/jhonatademuner/release-guard"
                liveUrl=""
              />
              <ProjectCard
                name="StudAI"
                description="📝 Quiz creator for YouTube videos using AI (powered by OpenAI)."
                logo={StudaiPreview}
                skillsUsed={[
                  "java",
                  "spring",
                  "junit",
                  "postgresql",
                  "flyway",
                  "docker",
                  "sonarqube",
                  "openai",
                ]}
                repoUrl="https://github.com/jhonatademuner/studai"
                liveUrl=""
              />
              <ProjectCard
                name="DevOps Challenge"
                description="🚀 Scalable Spring Boot API with Full CI/CD Pipeline for Candidate Matching"
                logo={DevOpsChallengePreview}
                skillsUsed={[
                  "java",
                  "spring",
                  "junit",
                  "postgresql",
                  "flyway",
                  "aws",
                  "aws-ec2",
                  "aws-rds",
                  "terraform",
                  "docker",
                  "sonarqube",
                ]}
                repoUrl="https://github.com/jhonatademuner/leds-devops"
                liveUrl=""
              />
              <ProjectCard
                name="Clipboar"
                description="📋 Networked Clipboard Sharing with Expiration and Security Features"
                logo={ClipboarPreview}
                skillsUsed={[
                  "java",
                  "spring",
                  "mongodb",
                  "react",
                  "nextjs",
                  "typescript",
                ]}
                repoUrl="https://github.com/jhonatademuner/clipboar"
                liveUrl=""
              />
              <ProjectCard
                name="Localif"
                description="📍 Campus-Specific Image Recognition and Navigation for IFES Serra"
                logo={LocalifPreview}
                skillsUsed={[
                  "kotlin",
                  "android",
                  "java",
                  "python",
                  "c",
                  "c-plus",
                ]}
                repoUrl="https://github.com/jhonatademuner/localif"
                liveUrl=""
              />
            </div>
          </section>
        </div>
        <section className="flex relative items-end lg:w-[56rem] md:w-[48rem] sm:w-[40rem] w-full px-2">
          <div className=" bg-accent-400 w-4/5 h-3/5 blur-[12rem] opacity-30 absolute"></div>
          <FooterCardSpotlightEffect>
            <footer className="flex flex-col items-center justify-between w-full min-h-48 border-t-2 border-l-2 border-r-2 border-background-800 rounded-t-2xl bg-background-900 p-4 gap-8">
              <div className="flex justify-between w-full">
                <div className="flex flex-col gap-4">
                  <p className="text-4xl text-background-300 font-bold">
                    Jhonata Demuner.
                  </p>
                  <div className="flex gap-2 items-center text-2xl text-background-700 flex-wrap">
                    <a href="https://github.com/jhonatademuner" target="_blank">
                      <button className="btn btn-circle btn-outline border-background-600 text-background-600 hover:bg-background-600 hover:border-background-600 hover:scale-110 transition-colors duration-300">
                        <IoLogoGithub className="text-2xl " />
                      </button>
                    </a>
                    <a
                      href="https://www.linkedin.com/in/jhonatademuner/"
                      target="_blank"
                    >
                      <button className="btn btn-circle btn-outline border-background-600 text-background-600 hover:bg-background-600 hover:border-background-600 hover:scale-110 transition-colors duration-300">
                        <IoLogoLinkedin className="text-2xl " />
                      </button>
                    </a>
                    <a href="mailto:jhonata.demuner@gmail.com" target="_blank">
                      <button className="btn btn-circle btn-outline border-background-600 text-background-600 hover:bg-background-600 hover:border-background-600 hover:scale-110 transition-colors duration-300">
                        <IoMailSharp className="text-2xl " />
                      </button>
                    </a>
                    <a href="/jhonata_cv_en.pdf" target="_blank">
                      <button className="btn rounded-full btn-outline text-lg font-medium border-background-600 text-text-950 bg-background-600 hover:bg-transparent hover:text-background-600 hover:border-background-600 hover:scale-110 transition-colors duration-300">
                        <LuDownload className="text-2xl " />
                        Download CV
                      </button>
                    </a>
                  </div>
                </div>
                <nav className="flex flex-col gap-2 text-xl text-background-500 items-end font-medium underline">
                  <a
                    href="#experiences"
                    className="hover:scale-110 hover:text-text-200"
                  >
                    Experience
                  </a>
                  <a
                    href="#techStack"
                    className="hover:scale-110 hover:text-text-200 text-wrap"
                  >
                    Tech Stack
                  </a>
                  <a
                    href="#projects"
                    className="hover:scale-110 hover:text-text-200"
                  >
                    Projects
                  </a>
                </nav>
              </div>
              <div className="flex justify-center w-full text-base text-background-600">
                <p>© 2024 Jhonata Demuner. All rights reserved.</p>
              </div>
            </footer>
          </FooterCardSpotlightEffect>
        </section>
      </main>
    </div>
  );
}
