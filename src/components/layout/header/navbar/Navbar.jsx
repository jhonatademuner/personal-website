import PropTypes from "prop-types";
import Dropdown from "./Dropdown";
import { useState, useEffect } from "react";

function Navbar() {
  const [screen, setScreen] = useState(false);
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const handleResize = () => {
    if (window.innerWidth <= 768) {
      setScreen(true);
    } else {
      setScreen(false);
    }
  };

  const closeDropdown = () => {
    setDropdownVisible(false);
  };

  useEffect(() => {
    handleResize();

    window.addEventListener("resize", handleResize);
    window.addEventListener("load", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("load", handleResize);
    };
  }, []);

  return (
    <div>
      {screen ? (
        <Dropdown status={dropdownVisible} onClose={closeDropdown} />
      ) : (
        <nav className="bg-palette-100">
          <ul className="text-palette-600 font-semibold flex items-center gap-8">
            <a href="#aboutMe">
              <li className="whitespace-nowrap">About me</li>
            </a>
            <a href="#projects">
              <li>Projects</li>
            </a>
            <a href="#contact">
              <li>Contact</li>
            </a>
          </ul>
        </nav>
      )}
    </div>
  );
}

Navbar.propTypes = {
  screen: PropTypes.bool,
};

export default Navbar;
