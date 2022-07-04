import React, { useState } from "react";
import { Link } from "react-router-dom";
// import { FaBars } from "react-icons/fa";
// import { AiOutlineClose } from "react-icons/ai";
// import { SidebarData } from "./Sidebar";
// import { IconContext } from "react-icons";
// import { useStateValue } from "./ContextAPI/StateProvider";

// import { auth } from "./Firebase/firebase";
// import { useHistory } from "react-router-dom";
// import "./navbar.css";
function Navbar() {
  // const [sidebar, setSidebar] = useState(false);
  const [navbar, setNavbar] = useState(false);
  const [burger, setBurger] = useState(false);

  console.log(navbar, burger);
  //   const [{ user }, dispatch] = useStateValue();
  const user = "null";
  //   const history = useHistory();

  // const showSidebar = () => setSidebar(!sidebar);

  const showBurger = () => {
    if (window.innerWidth <= 765) {
      setBurger(true);
    } else {
      setBurger(false);
    }
  };

  window.addEventListener("resize", showBurger);

  const changeBackground = () => {
    if (window.scrollY >= 50) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener("scroll", changeBackground);

  console.log(user);

  return (
    <>
      {/* ======= Header ======= */}
      {/* <header id="header" className=""> */}

      <nav className=" navbar navbar-expand-lg navbar-light bg-light  header fixed-top d-flex align-items-center">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
          Records System
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div
            className="collapse navbar-collapse bg-light p-2"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              {/* <li className="nav-item">
                <Link className="nav-link" to="/">
                  Link
                </Link> 
              </li> */}
              {/* <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  to="/"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Dropdown
                </Link> 
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <Link className="dropdown-item" to="/">
                      Action
                    </Link> 
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/">
                      Another action
                    </Link> 
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/">
                      Something else here
                    </Link> 
                  </li>
                </ul>
              </li> */}
              {/* <li className="nav-item">
                <Link
                  className="nav-link disabled"
                  to="/"
                  tabIndex={-1}
                  aria-disabled="true"
                >
                  Disabled
                </Link> 
              </li> */}
            </ul>
            {/* <form className="d-flex">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form> */}
          </div>
        </div>
      </nav>

      {/* </header> */}
      {/* End Header */}
    </>
  );
}

export default Navbar;
