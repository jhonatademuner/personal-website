import "./App.css";

import Header from "./components/layout/header/Header";
import Introduction from "./components/Introduction";
import ContactButton from "./components/ContactButton";
import ProjectsButton from "./components/ProjectsButton";
import Projects from "./components/projects/Projects";
import Form from "./components/form/Form";
import Footer from "./components/layout/footer/Footer";

import Photo from "/src/assets/photo.png";
import AboutMeImg from "/src/assets/about_me.svg";
import Wave from "/src/assets/wave.svg";
import WaveInverted from "/src/assets/wave-inverted.svg";

function App() {
  const isMobile = window.innerWidth <= 415 || window.innerHeight <= 415;

  return (
    <>
      {isMobile ? (
        <>
          <Header mobile={isMobile} />
          <section className="flex h-[45rem] w-full">
            <div className="fluid_content relative  w-full h-full flex flex-col justify-between bg-gradient-to-b from-palette-100 to-palette-800">
              <div className="flex flex-col items-center gap-12 py-4">
                <Introduction />
                <div className="flex justify-center gap-4">
                  <ContactButton />
                  <ProjectsButton />
                </div>
              </div>
              <img
                src={Photo}
                alt="My Photo"
                className="w-full mb-8 object-contain"
              />
              <img
                src={Wave}
                alt="Wave"
                className="absolute w-ful bottom-0 left-0"
              />
            </div>
          </section>
          <section
            className="flex flex-col items-center justify-around h-[49rem] bg-palette-700 fluid_content"
            id="aboutMe"
          >
            <h3 className="text-3xl text-palette-600 font-bold" id="aboutMe">
              About Me
            </h3>
            <img
              src={AboutMeImg}
              alt="Draw of a guy sitting beside a computer"
              className=" w-60 object-contain"
            />
            <p className="text-palette-600 text-left font-semibold">
              Back in 2021, I started my journey in the world of programming
              after a sudden interest in how websites were made. I started
              learning HTML, CSS, and JavaScript, I was amazed by how much you
              could do with just a few lines of code.
              <br />
              Since then, I&apos;ve been learning new technologies and improving
              my skills. I&apos;m currently coursing Information Systems at the
              Federal Institute of Espírito Santo.
              <br />
              Nowadays, i trying to expose myself to new challenges and
              technologies, and I&apos;m always looking for new opportunities to
              learn and grow. In my free time, I often play some games, listen
              to music and watch some videos of new technologies.
            </p>
          </section>
          <section className="flex w-full pb-32 relative" id="projects">
            <div className="flex flex-col items-center pt-8 pb-12 gap-8 bg-gradient-to-b from-palette-100 to-palette-200 p-2">
              <h3
                className="text-3xl text-palette-600 font-bold m-4"
                id="aboutMe"
              >
                Projects
              </h3>
              <Projects />
            </div>
            <img
              src={WaveInverted}
              alt="Wave"
              className="absolute w-ful bottom-0 left-0"
            />
          </section>
          <section
            className="h-[39rem] w-full bg-palette-700 fluid_content"
            id="contact"
          >
            <h3
              className="text-3xl text-palette-600 font-bold text-center"
              id="aboutMe"
            >
              Contact Me
            </h3>
            <Form />
          </section>
          <Footer />
        </>
      ) : (
        <div className="flex flex-col justify-center items-center h-screen w-full">
          <Introduction />
        </div>
      )}
    </>
  );
}

export default App;
