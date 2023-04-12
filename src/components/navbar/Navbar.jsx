import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "./navbar.scss";

const relPath = {
  accueil: "/",
  competence: "/competence",
  projet: "/oui",
  contact: "/contact",
};

const updatePath = (path) => {
  const allLink = document.querySelectorAll(".navlink");
  const allPath = [...Object.values(relPath)];
  if (document.querySelector(".active") !== null) {
    const allActive = document.querySelector(".active");
    allActive.classList.remove("active");
  }
  for (let i = 0; i < allPath.length; i++) {
    if (allPath[i] === path) {
      allLink[i].classList.add("active");
    }
  }
};

const Navbar = () => {
  const location = useLocation();
  useEffect(() => {
    updatePath(location.pathname);
  }, [location.pathname]);
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link to="/" className="navlink">
              Accueil
            </Link>
          </li>
          <li>
            <Link to="/competence" className="navlink">
              Compétences
            </Link>
          </li>
          <li>
            <Link to="/" className="navlink">
              Projets
            </Link>
          </li>
          <li>
            <Link to="/" className="navlink">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
