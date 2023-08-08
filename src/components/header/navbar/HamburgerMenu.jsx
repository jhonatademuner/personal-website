import Dropdown from "./Dropdown";
import "animate.css";

import { GiHamburgerMenu } from "react-icons/gi";
import { MdClose } from "react-icons/md";
import { useState } from "react";

function HamburgerMenu() {
  const [menu, setMenu] = useState(false);

  function handleMenuClick() {
    setMenu(!menu);
  }

  return (
    <>
      {!menu ? (
        <GiHamburgerMenu
          onClick={handleMenuClick}
          className="text-3xl text-palette-300 transition-all duration-500 cursor-pointer animate__animated animate__zoomIn"
        />
      ) : (
        <MdClose
          onClick={handleMenuClick}
          className="text-3xl text-palette-300 transition-all duration-500 cursor-pointer animate__animated animate__zoomIn"
        />
      )}
      <Dropdown status={menu} />
    </>
  );
}

export default HamburgerMenu;
