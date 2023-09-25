import Image from "next/image";

import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillInstagram,
  AiFillYoutube,
  AiFillMail,
} from "react-icons/ai";

import Logo from "@/public/logo.svg";
import Photo from "@/public/images/photo.jpeg";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <main className="flex flex-col min-w-full">
      <Navbar />
      <section className="flex flex-col min-h-screen pt-52 mx-auto xl:w-[1024px] relative">
        <a href="/">
          <Image
            src={Logo}
            alt="Logo"
            width={48}
            className="absolute top-8 left-4"
          />
        </a>
        <div className="flex justify-center flex-1 gap-8">
          <div className="w-[23rem] flex flex-col shrink-0 gap-4">
            <Image src={Photo} alt="Photo" width={368} className="rounded-xl shadow-[0_6px_15px_rgba(100,100,197,0.1)]" />
            <div className="h-0.5 w-full rounded-sm bg-secondary"></div>
            <p className="text-primary">
              Olá, meu nome é{" "}
              <strong className="text-accent">Jhonata Demuner</strong>, eu
              resolvo problemas de pessoas através de código, sou desenvolvedor
              web full-stack, android e apaixonado por tecnologia.
            </p>
            <div className="flex space-x-4 text-2xl text-primary">
              <a
                href="https://github.com/jhonataplt"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-accent transition-colors duration-200"
              >
                <AiFillGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/jhonatapolito/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-accent transition-colors duration-200"
              >
                <AiFillLinkedin />
              </a>
              <a
                href="https://www.instagram.com/jhonataplt/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-accent transition-colors duration-200"
              >
                <AiFillInstagram />
              </a>
              <a
                href="https://www.youtube.com/channel/UCs-8HkxVpEMgOuxqnHn4IvA"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-accent transition-colors duration-200"
              >
                <AiFillYoutube />
              </a>
              <a
                href="https://www.youtube.com/channel/UCs-8HkxVpEMgOuxqnHn4IvA"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-accent transition-colors duration-200"
              >
                <AiFillMail />
              </a>
            </div>
          </div>
          <p className="text-justify text-text">
            <span className="text-4xl font-bold">
              Um pouco sobre mim <strong className="text-accent font-medium">!</strong>
            </span>
            <br />
            <br />
            Natural de Vitória, Espírito Santo, Brasil, com 20 anos de idade,
            sou um entusiasta da tecnologia, apaixonado pela programação e pelo
            desenvolvimento de software. Atuo como desenvolvedor full-stack web
            e Android, trabalhando com as tecnologias mais recentes do mercado,
            tais como React, Next.js, Node.js, TypeScript, Kotlin e outras.
            Também tenho experiência como instrutor de informática em escolas
            técnicas e gosto de criar conteúdo educativo sempre que possível.
            <br />
            <br />
            Minha paixão pela tecnologia remonta à minha infância, mas foi em
            2021, durante meu último ano do ensino médio, que iniciei meus
            estudos em programação e desenvolvimento de sites. Naquele mesmo
            ano, tive a oportunidade de aprender Python por meio do{" "}
            <a
              href="https://senaies.com.br/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent font-bold"
            >
              SENAI
            </a>
            , enquanto participava do programa de Aprendiz Industrial associado
            ao{" "}
            <a
              href="https://marketing.biancogres.com.br/grupo-biancogres"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent font-bold"
            >
              Grupo Biancogres
            </a>
            . Foi nesse momento que tomei a decisão de seguir carreira na área
            de tecnologia e desenvolvimento de software.
            <br />
            <br />
            Atualmente, estou dedicando-me ao curso de Sistemas de Informação no
            Instituto Federal do Espírito Santo e atuo como estagiário na equipe
            de desenvolvimento de sistemas back-end da{" "}
            <a
              href="https://www.wine.com.br/institucional/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent font-bold"
            >
              Wine
            </a>
            , onde sou responsável por criar e manter sistemas que atendem a uma
            base de mais de 400 mil clientes. Essa experiência tem sido valiosa
            para aplicar minhas habilidades de programação em um ambiente de
            produção de alto desempenho.
            <br />
            <br />
            Estou constantemente em busca de novos desafios e oportunidades para
            aplicar meu conhecimento e contribuir ativamente. Se você tiver
            algum projeto ou oportunidade em que eu possa fazer a diferença, por
            favor, não hesite em entrar em contato comigo por meio das minhas
            redes sociais. Estou ansioso para colaborar e crescer junto com
            projetos inovadores no mundo da tecnologia.
          </p>
        </div>
      </section>
      <Footer />
    </main>
  );
}
