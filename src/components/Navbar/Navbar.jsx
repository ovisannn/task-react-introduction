import logo from "../assetGlobal/logo.png";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
        <div className="container p-2">
          <img
            src={logo}
            alt=""
            width="10%"
            className="d-inline-block align-text-top"
          />
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse pd" id="navbarNav">
            <ul className="navbar-nav ms-auto navbars fw-bold">
              <li className="nav-item mx-2">
                <Link
                  className="nav-link active-nav"
                  style={{ color: "#F47522" }}
                  to="/"
                >
                  HOME
                </Link>
              </li>
              <li className="nav-item mx-2">
                <a className="nav-link" href="# " style={{ color: "#19345E" }}>
                  ABOUT
                </a>
              </li>
              <li className="nav-item mx-2">
                <Link
                  className="nav-link"
                  to="/news"
                  style={{ color: "#19345E" }}
                >
                  NEWS
                </Link>
              </li>
              <li className="nav-item mx-2">
                <Link
                  className="nav-link"
                  to="/contact-us"
                  style={{ color: "#19345E" }}
                >
                  CONTACT
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
