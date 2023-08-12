import "./App.css";

import Header from "./components/layout/header/Header";
import Introduction from "./components/Introduction";
import ContactButton from "./components/ContactButton";
import ProjectsButton from "./components/ProjectsButton";
import Projects from "./components/projects/Projects";
import Form from "./components/form/Form";
import Footer from "./components/layout/Footer";

import Photo from "/src/assets/photo.png";
import AboutMeImg from "/src/assets/about_me.svg";

function App() {
  return (
    <>
      <Header />
      <section className="fluid_content relative flex flex-col justify-between items-center bg-gradient-to-b from-palette-100 to-palette-800 h-[calc(100vh-4rem)] w-full lg:flex-row">
        <div className="flex flex-col items-center gap-12 py-4 lg:px-32">
          <Introduction />
          <div className="flex justify-center gap-4">
            <ContactButton />
            <ProjectsButton />
          </div>
        </div>
        <img
          src={Photo}
          alt="My Photo"
          className=" h-max object-contain bottom-0 absolute lg:right-0 lg:h-[36rem] xl:right-32 "
        />
        <div className="absolute w-full h-32 -bottom-1 left-0 bg-[url('/src/assets/wave.svg')] bg-repeat-x"></div>
      </section>
      <section
        className="flex flex-col items-center bg-palette-700 fluid_content gap-16 "
        id="aboutMe"
      >
        <h3 className="text-3xl text-palette-600 font-bold" id="aboutMe">
          About Me
        </h3>
        <div className="flex flex-col h-full items-center gap-16 pb-16 lg:flex-row lg:max-w-[1440px]">
          <img
            src={AboutMeImg}
            alt="Draw of a guy sitting beside a computer"
            className=" h-1/2 max-h-96 object-contain lg:w-1/2 lg:h-auto"
          />
          <p className="text-palette-600 text-left font-semibold md:w-4/5 lg:w-1/2">
            Back in 2021, I started my journey in the world of programming after
            a sudden interest in how websites were made. I started learning
            HTML, CSS, and JavaScript, I was amazed by how much you could do
            with just a few lines of code.
            <br />
            Since then, I&apos;ve been learning new technologies and improving
            my skills. I&apos;m currently coursing Information Systems at the
            Federal Institute of Espírito Santo.
            <br />
            Nowadays, i trying to expose myself to new challenges and
            technologies, and I&apos;m always looking for new opportunities to
            learn and grow. In my free time, I often play some games, listen to
            music and watch some videos of new technologies.
          </p>
        </div>
      </section>
      <section
        className="flex flex-col items-center w-full relative bg-gradient-to-b from-palette-100 to-palette-200 gap-16 pb-44"
      >
        <h3 className="text-3xl text-palette-600 font-bold mt-16" id="projects">
          Projects
        </h3>
        <Projects />
        <div className="absolute w-full h-32 -bottom-1 left-0 bg-[url('/src/assets/wave.svg')] bg-repeat-x"></div>
      </section>
      <section
        className=" w-full bg-palette-700 fluid_content flex flex-col items-center gap-16"
      >
        <h3
          className="text-3xl text-palette-600 font-bold text-center"
          id="contact"
        >
          Contact Me
        </h3>
        <Form />
      </section>
      <Footer />
    </>
  );
}

export default App;
