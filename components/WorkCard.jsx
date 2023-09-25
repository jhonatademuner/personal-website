import { AiFillAndroid, AiFillGithub } from "react-icons/ai";
import { BsGlobe, BsGlobe2 } from "react-icons/bs";
import { IoMdDownload } from "react-icons/io";

import Image from "next/image";

function WorkCard({
  isAndroid,
  isWeb,
  img,
  title,
  subtitle,
  description,
  techs,
  repo,
  link,
  download,
}) {
  return (
    <div className="flex flex-col min-h-[42rem] box-border gap-4 w-96 rounded-2xl overflow-hidden bg-primary bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-10 shadow-[0_6px_15px_rgba(100,100,197,0.1)]">
      <div
        className={`flex justify-center items-center h-2/5 relative shrink-0`}
      >
        <Image
          src={img}
          alt="Localif Logo"
          fill={true}
          style={{ objectFit: "cover" }}
        />

        <div className="absolute -bottom-4 left-4 flex gap-2 text-background text-3xl font-bold ">
          {isAndroid && (
            <span className="bg-accent bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-70 rounded-xl p-2">
              <AiFillAndroid />
            </span>
          )}
          {isWeb && (
            <span className="bg-accent bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-70 rounded-xl p-2">
              <BsGlobe2 />
            </span>
          )}
        </div>
      </div>
      <div className="flex flex-col p-4 gap-4 justify-between h-full">
        <div className="flex flex-col gap-4">
          <div className="flex flex-col">
            <p className="text-text text-xl">{title}</p>
            <p className="text-primary text-md">{subtitle}</p>
          </div>
          <p className="text-text text-md break-words">
            {description.length > 220
              ? description.slice(0, 230) + "..."
              : description}
          </p>
        </div>
        <div className="flex flex-col gap-4 pb-2">
          <div className="flex gap-2 flex-wrap h-16">
            <p className="text-text text-md">Techs:</p>
            {techs &&
              techs.map((tech) => (
                <span
                  key={tech}
                  className="bg-primary px-2 rounded-2xl flex h-7 items-center font-semibold"
                >
                  {tech}
                </span>
              ))}
          </div>
          <div className="flex w-full gap-2 flex-wrap">
            {repo && (
              <a
                href={repo}
                target="_blank"
                rel="noopener noreferrer"
                className="flex justify-center items-center w-fit border-2 border-accent py-1 px-2 rounded-xl text-accent font-semibold hover:bg-accent hover:text-background transition-all"
              >
                <span className="text-2xl">
                  <AiFillGithub className="mr-2" />
                </span>
                Github
              </a>
            )}
            {link && (
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex justify-center items-center w-fit border-2 border-accent py-1 px-2 rounded-xl text-accent font-semibold hover:bg-accent hover:text-background transition-all"
              >
                <span className="text-xl">
                  <BsGlobe className="mr-2" />
                </span>
                Web
              </a>
            )}
            {download && (
              <a
                href={download}
                target="_blank"
                rel="noopener noreferrer"
                className="flex justify-center items-center w-fit border-2 border-accent py-1 px-2 rounded-xl text-accent font-semibold hover:bg-accent hover:text-background transition-all"
              >
                <span className="text-xl">
                  <IoMdDownload className="mr-2" />
                </span>
                Download
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default WorkCard;
