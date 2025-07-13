import React from "react";
import { NavLink } from "react-router";

const Header = () => {
  return (
    <div className="header">
      <nav>
        <ul>
          <li>
            <NavLink
              to="/"
              className={(nav) => (nav.isActive ? "nav-active" : "")}
            >
              Accueil
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/likepage"
              className={(nav) => (nav.isActive ? "nav-active" : "")}
            >
              Coups de coeur
            </NavLink>
          </li>
        </ul>
      </nav>
      <h1>React Movies</h1>
    </div>
  );
};

export default Header;
