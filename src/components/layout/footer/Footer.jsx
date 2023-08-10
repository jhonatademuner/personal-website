import { BsLinkedin, BsGithub } from "react-icons/bs";
import { IoMdMail } from "react-icons/io";
import Logo from "../header/Logo";
import BackToTopButton from "../../BackToTopButton";

function Footer() {
  return (
    <footer className="relative bg-palette-100 px-4 py-8 flex flex-col justify-center items-center gap-6">
      <Logo />
      <div className="flex gap-8 text-2xl mb-4">
        <a
          href="https://www.linkedin.com/in/jhonata-polito/"
          target="_blank"
          rel="noreferrer"
        >
          <BsLinkedin />
        </a>
        <a
          href="https://github.com/jhonataplt"
          target="_blank"
          rel="noreferrer"
        >
          <BsGithub />
        </a>
        <a
          href="mailto: jhonata.demuner@gmail.com"
          target="_blank"
          rel="noreferrer"
        >
          <IoMdMail />
        </a>
      </div>
      <div className=" h-[1px] w-full bg-palette-300 !px-2"></div>
      <p className="text-sm text-palette-500">
        © Copyright 2023 Jhonata Polito. All rights reserved.
      </p>
      <BackToTopButton />
    </footer>
  );
}

export default Footer;
