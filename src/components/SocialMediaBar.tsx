import React from "react";
import { FaDiscord, FaGithub, FaLinkedin } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";

const SocialMediaBar = () => {
  return (
    <div className="flex flex-col w-full">
      <div className="bg-background-2 h-0.5 w-full"></div>
      <div className="flex justify-center items-center pt-3">
        <div className="flex justify-center gap-4 border-2 border-background-2 rounded-full px-4 text-2xl">
          <a href="https://discord.com/users/917529601520066560" target="_blank">
            <div className="h-10 w-10 rounded-full bg-text flex justify-center items-center transition-transform transform hover:scale-110">
              <FaDiscord />
            </div>
          </a>
          <a href="https://github.com/jhonatademuner" target="_blank">
            <div className="h-10 w-10 rounded-full bg-text flex justify-center items-center transition-transform transform hover:scale-110">
              <FaGithub />
            </div>
          </a>
          <a href="https://www.linkedin.com/in/jhonatademuner/" target="_blank">
            <div className="h-10 w-10 rounded-full bg-text flex justify-center items-center transition-transform transform hover:scale-110">
              <FaLinkedin />
            </div>
          </a>
          <a href="mailto:jhonata.demuner@gmail.com" target="_blank">
            <div className="h-10 w-10 rounded-full bg-text flex justify-center items-center transition-transform transform hover:scale-110">
              <IoMdMail />
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default SocialMediaBar;
