import React from "react";

import { BiHomeAlt2 } from "react-icons/bi";
import { BsGear } from "react-icons/bs";
import { FaRegUser, FaRegFileAlt } from "react-icons/fa";
import { IoBriefcaseOutline } from "react-icons/io5";

const Header = () => {
  return (
    <header className="w-full flex flex-col gap-3 items-center pt-3">
      <div className="w-full flex justify-between items-center px-4">
        <a href="/">
          <div className="flex items-center gap-2 border-2 border-background-2 rounded-full py-2 px-4">
            <div className="bg-accent w-5 h-5 rounded-full"></div>
            <h1 className=" text-text">Jhonata Demuner</h1>
          </div>
        </a>
        <nav>
          <ul className="flex items-center gap-8 border-2 border-background-2 rounded-full py-2 px-8 text-text">
            <li className="flex items-center gap-1 hover:text-accent cursor-pointer">
              <BiHomeAlt2 />
              Home
            </li>
            <a href="#about-section">
              <li className="flex items-center gap-1 hover:text-accent cursor-pointer">
                <FaRegUser />
                About
              </li>
            </a>
            <a href="#project-section">
              <li className="flex items-center gap-1 hover:text-accent cursor-pointer">
                <BsGear />
                Projects
              </li>
            </a>
            <a href="#work-section">
              <li className="flex items-center gap-1 hover:text-accent cursor-pointer">
                <IoBriefcaseOutline />
                Work
              </li>
            </a>
          </ul>
        </nav>
        <div className="flex items-center gap-2 border-2 border-background-2 rounded-full py-2 px-4 text-text  cursor-pointer">
          <FaRegFileAlt />
          <p>My Resume</p>
        </div>
      </div>
      <div className="w-full h-0.5 bg-background-2"></div>
    </header>
  );
};

export default Header;
