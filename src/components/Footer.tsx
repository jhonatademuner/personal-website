import React from "react";
import { FaDiscord, FaGithub, FaLinkedin } from "react-icons/fa";
import { RiArrowUpDoubleFill } from "react-icons/ri";
import { IoMdMail } from "react-icons/io";

const Footer = () => {
  return (
    <footer className="w-full flex flex-col gap-3 items-center pb-3 mt-64">
      <div className="w-full h-0.5 bg-background-2"></div>
      <div className="w-full flex justify-between items-center px-4">
        <p className="text-xl text-text">© <span className="text-text-2">Code by</span> <span className="text-primary">Jhonata Demuner</span></p>
        <div className="flex justify-center gap-4 border-2 border-background-2 rounded-full px-4 text-2xl">
          <a href="https://discord.com/users/917529601520066560">
            <div className="h-10 w-10 rounded-full bg-text flex justify-center items-center transition-transform transform hover:scale-110">
              <FaDiscord />
            </div>
          </a>
          <a href="https://github.com/jhonatademuner">
            <div className="h-10 w-10 rounded-full bg-text flex justify-center items-center transition-transform transform hover:scale-110">
              <FaGithub />
            </div>
          </a>
          <a href="https://www.linkedin.com/in/jhonatademuner/">
            <div className="h-10 w-10 rounded-full bg-text flex justify-center items-center transition-transform transform hover:scale-110">
              <FaLinkedin />
            </div>
          </a>
          <a href="#">
            <div className="h-10 w-10 rounded-full bg-text flex justify-center items-center text-3xl transition-transform transform hover:scale-110">
              <RiArrowUpDoubleFill />
            </div>
          </a>
        </div>
        <div className="flex items-center gap-2 border-2 border-background-2 rounded-full px-2">
          <a href="mailto:jhonata.demuner@gmail.com">
            <div className="h-10 w-10 rounded-full bg-text flex justify-center items-center text-2xl transition-transform transform hover:scale-110">
              <IoMdMail />
            </div>
          </a>
          <p className="text-text">jhonata.demuner@gmail.com</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
