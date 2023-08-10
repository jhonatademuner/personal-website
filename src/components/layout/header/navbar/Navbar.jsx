import PropTypes from "prop-types";
import HamburgerMenu from "./HamburgerMenu";

function Navbar({ mobile }) {
  return mobile ? (
    <div>
      <HamburgerMenu />
    </div>
  ) : (
    <div>
      <h1>False</h1>
    </div>
  );
}

Navbar.propTypes = {
  mobile: PropTypes.bool,
};

export default Navbar;
