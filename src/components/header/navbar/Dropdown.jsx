import PropTypes from "prop-types";
import "animate.css";

function Dropdown({ status }) {
  return status ? (
    <>
      <nav className="absolute flex flex-col items-center w-full mt-[1.15rem] left-0 bg-palette-100 rounded-b-2xl py-4 animate__animated animate__slideInDown">
        <ul className="text-palette-600 font-semibold flex flex-col gap-4 items-center">
          <a href="aboutMe">
            <li className='relative after:content-[""] after:absolute after:left-1/2 after:bottom-[2px] after:w-0 after:h-[2px] after:bg-palette-600 after:transition-all after:duration-500 hover:after:w-full hover:after:left-0'>
              ABOUT ME
            </li>
          </a>
          <a href="skills">
            <li className='relative after:content-[""] after:absolute after:left-1/2 after:bottom-[2px] after:w-0 after:h-[2px] after:bg-palette-600 after:transition-all after:duration-500 hover:after:w-full hover:after:left-0'>
              SKILLS
            </li>
          </a>
          <a href="projects">
            <li className='relative after:content-[""] after:absolute after:left-1/2 after:bottom-[2px] after:w-0 after:h-[2px] after:bg-palette-600 after:transition-all after:duration-500 hover:after:w-full hover:after:left-0'>
              PROJECTS
            </li>
          </a>
          <a href="contact">
            <li className='relative after:content-[""] after:absolute after:left-1/2 after:bottom-[2px] after:w-0 after:h-[2px] after:bg-palette-600 after:transition-all after:duration-500 hover:after:w-full hover:after:left-0'>
              CONTACT
            </li>
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
