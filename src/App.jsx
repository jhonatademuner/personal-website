import "./App.css";
import Header from "./components/header/Header";
import Introduction from "./components/Introduction";


function App() {
  
  return (
    <>
      <Header mobile={window.innerWidth <= 415 || window.innerHeight <= 415} />
      <section className="flex h-[45rem] w-full bg-[url('./assets/wave.svg')] bg-contain bg-no-repeat bg-bottom ">
        <div className="fluid_content  w-full h-full flex flex-col justify-between">
          <Introduction />
          <img src="./src/assets/photo.png" alt="teste" className="-z-10 w-full  object-contain"/>
        </div>
      </section>
    </>
  );
}

export default App;
