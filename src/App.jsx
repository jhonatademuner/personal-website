import "./App.css";
import Header from "./components/header/Header";
import Introduction from "./components/Introduction";
import ContactButton from "./components/ContactButton";
import ProjectsButton from "./components/ProjectsButton";

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
            src="./src/assets/photo.png"
            alt="teste"
            className="-z-10 w-full h-full object-contain"
          />
        </div>
      </section>
      <section className="flex h-[45rem]">

      </section>
    </>
  );
}

export default App;
