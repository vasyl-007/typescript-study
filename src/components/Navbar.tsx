import React from "react";
import { NavLink } from "react-router-dom";

export const Navbar: React.FC = () => (
  <nav>
    <div className="nav-wrapper purple darken-2 px1">
      <a href="/" className="brand-logo">
        React + TypeScript
      </a>
      <ul className="right hide-on-med-and-down">
        <li>
          <NavLink to="/">The list of tasks</NavLink>
          {/* <a href="/">The list of tasks</a> */}
        </li>
        <li>
          <NavLink to="/about">About us</NavLink>
          {/* <a href="/">About us</a> */}
        </li>
      </ul>
    </div>
  </nav>
);
