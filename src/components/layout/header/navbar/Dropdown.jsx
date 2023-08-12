import { useState, useEffect } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import PropTypes from "prop-types";
import "animate.css";

function Dropdown({ status }) {
  const [isVisible, setIsVisible] = useState(status);
  const [isAnimatingOut, setIsAnimatingOut] = useState(false);

  const handleToggleDropdown = () => {
    setIsVisible(!isVisible);
    setIsAnimatingOut(false);
  };

  const handleCloseDropdown = () => {
    setIsAnimatingOut(true);
  };

  useEffect(() => {
    if (isAnimatingOut) {
      const interval = setInterval(() => {
        setIsVisible(false);
        setIsAnimatingOut(false);
        clearInterval(interval);
      }, 300); // Adjust the delay to match the animation duration
    }
  }, [isAnimatingOut]);

  return (
    <div className="">
      <button
        onClick={handleToggleDropdown}
        className="text-palette-600 font-semibold relative z-20"
      >
        <GiHamburgerMenu className="text-3xl text-palette-400 transition-all duration-500 cursor-pointer animate__animated animate__zoomIn" />
      </button>
      {isVisible && (
        <nav
          className={`absolute flex flex-col items-center w-screen mt-[1.15rem] left-0 bg-palette-100 rounded-b-2xl py-4 animate__animated ${
            isAnimatingOut ? "animate__slideOutUp" : "animate__slideInDown"
          } animate__faster z-10`}
        >
          <ul className="text-palette-600 font-semibold flex flex-col gap-4 items-center">
            <a href="#aboutMe" onClick={handleCloseDropdown}>
              <li>ABOUT ME</li>
            </a>
            <a href="#projects" onClick={handleCloseDropdown}>
              <li>PROJECTS</li>
            </a>
            <a href="#contact" onClick={handleCloseDropdown}>
              <li>CONTACT</li>
            </a>
          </ul>
        </nav>
      )}
    </div>
  );
}

Dropdown.propTypes = {
  status: PropTypes.bool,
};

export default Dropdown;
