import "./App.css";
import Header from "./components/header/Header";
import Introduction from "./components/Introduction";
import ContactButton from "./components/ContactButton";
import ProjectsButton from "./components/ProjectsButton";
import Projects from "./components/projects/Projects";
import Photo from "/src/assets/photo.png"
import AboutMeImg from "/src/assets/about_me.svg"

function App() {

  return (
    <>
      <Header mobile={window.innerWidth <= 415 || window.innerHeight <= 415} />
      <section className="flex h-[45rem] w-full bg-[url('./assets/wave.svg')] bg-contain bg-no-repeat bg-bottom ">
        <div className="fluid_content  w-full h-full flex flex-col justify-between bg-gradient-to-b from-palette-100 to-palette-800 -z-10">
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
            className="-z-10 w-full h-full object-contain"
          />
        </div>
      </section>
      <section className="flex flex-col items-center justify-around h-[49rem] bg-gradient-to-b from-palette-700 to-palette-100 fluid_content">
        <img
          src={AboutMeImg}
          alt="Draw of a guy sitting beside a computer"
          className=" w-80 object-contain"
        />
        <h3 className="text-3xl text-palette-600 font-bold" id="aboutMe">
          About Me
        </h3>
        <p className="text-palette-600 text-lg text-left font-semibold">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo pariatur
          aut perferendis amet, optio in velit sequi quas libero ullam, odio,
          obcaecati repellendus voluptas nesciunt! Atque deleniti veniam rerum
          minus! Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          Commodi rem repellendus nulla magni. Asperiores, impedit. Veritatis ad
          voluptatibus hic ab nam. Laudantium exercitationem ut laborum ratione
          debitis sapiente adipisci numquam!
        </p>
      </section>
      <section className="flex flex-col items-center pt-8 pb-12 gap-8 bg-palette-100 p-2">
        <h3 className="text-3xl text-palette-600 font-bold" id="aboutMe">
          Projects
        </h3>
        <Projects />
      </section>
    </>
  );
}

export default App;
