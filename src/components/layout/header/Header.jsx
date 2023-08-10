import PropTypes from "prop-types";
import Logo from "./Logo";

import Navbar from "./navbar/Navbar";

function Header({ mobile }) {
  return (
    <header
      className="px-8 flex justify-between bg-palette-100 items-center w-full h-16"
      id="header"
    >
      <div className="w-full h-full bg-palette-100 z-20">
        <Logo />
      </div>
      <Navbar mobile={mobile} />
    </header>
  );
}

Header.propTypes = {
  mobile: PropTypes.bool,
};

export default Header;
