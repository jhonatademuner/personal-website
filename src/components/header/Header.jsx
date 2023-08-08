import PropTypes from "prop-types";

import { AiOutlineCode } from "react-icons/ai";
import Navbar from "./navbar/Navbar";

function Header({ mobile }) {
  return (
    <header className="px-8 flex justify-between bg-palette-100 items-center w-full h-16">
      <div className="flex items-center gap-2 z-10 w-full h-full bg-palette-100">
        <AiOutlineCode className="text-4xl" />
        <span className="text-xl text-palette-600">Jhonata Polito</span>
      </div>
      <Navbar mobile={mobile} />
    </header>
  );
}

Header.propTypes = {
  mobile: PropTypes.bool,
};

export default Header;
