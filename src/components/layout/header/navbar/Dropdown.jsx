import PropTypes from "prop-types";
import "animate.css";

function Dropdown({ status }) {
  return status ? (
    <>
      <nav className="absolute flex flex-col items-center w-full mt-[1.15rem] left-0 bg-palette-100 rounded-b-2xl py-4 animate__animated animate__slideInDown z-10">
        <ul className="text-palette-600 font-semibold flex flex-col gap-4 items-center">
          <a href="#aboutMe">
            <li>ABOUT ME</li>
          </a>
          <a href="#projects">
            <li>PROJECTS</li>
          </a>
          <a href="#contact">
            <li>CONTACT</li>
          </a>
        </ul>
      </nav>
    </>
  ) : (
    <></>
  );
}

Dropdown.propTypes = {
  status: PropTypes.bool,
};

export default Dropdown;
