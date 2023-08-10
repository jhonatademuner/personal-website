import { BiArrowToTop } from "react-icons/bi";

function BackToTopButton() {
  return (
    <button className="absolute bg-palette-600 rounded-full h-16 w-16 top-[-2rem] right-4 flex justify-center items-center">
      <a href="#header">
        <BiArrowToTop className="text-palette-100 text-4xl text-center align-middle" />
      </a>
    </button>
  );
}

export default BackToTopButton;
