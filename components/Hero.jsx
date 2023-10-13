import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillInstagram,
  AiFillYoutube,
  AiFillMail,
} from "react-icons/ai";

function Hero() {
  return (
    <div className="pl-4">
      <h1 className="lg:text-4xl text-2xl font-bold text-text">
        Android Developer,
        <br />
        Full-Stack Developer e
        <br />
        entusiasta de Tecnologia.
      </h1>
      <div className="text-primary max-w-[95vw] md:max-w-[65vw] lg:max-w-[60vw] mt-4">
        <p>
          Olá, sou Jhonata Demuner, um Desenvolvedor Full-Stack e Desenvolvedor
          Android. Neste espaço, você encontrará informações sobre mim, meus
          trabalhos e projetos, além de posts sobre as tecnologias que utilizo e
          acho interessantes.
        </p>
      </div>
      <div className="flex mt-4 space-x-4 text-2xl text-primary">
        <a
          href="https://github.com/jhonataplt"
          target="_blank"
          rel="noopener noreferrer"
        >
          <AiFillGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/jhonatapolito/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <AiFillLinkedin />
        </a>
        <a
          href="https://www.instagram.com/jhonataplt/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <AiFillInstagram />
        </a>
        <a
          href="https://www.youtube.com/channel/UCs-8HkxVpEMgOuxqnHn4IvA"
          target="_blank"
          rel="noopener noreferrer"
        >
          <AiFillYoutube />
        </a>
        <a
          href="https://www.youtube.com/channel/UCs-8HkxVpEMgOuxqnHn4IvA"
          target="_blank"
          rel="noopener noreferrer"
        >
          <AiFillMail />
        </a>
      </div>
    </div>
  );
}

export default Hero;
