import Logo from "./Logo";
import Navbar from "./navbar/Navbar";

function Header() {

  

  return (
    <header
      className="px-8 flex justify-between bg-palette-100 items-center w-full h-16"
    >
      <div className="w-full h-full bg-palette-100 z-20">
        <Logo />
      </div>
      <Navbar/>
    </header>
  );
}

export default Header;
