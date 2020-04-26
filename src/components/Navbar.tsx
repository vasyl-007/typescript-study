import React from "react";

export const Navbar: React.FC = () => (
  <nav>
    <div className="nav-wrapper purple darken-2 px1">
      <a href="/" className="brand-logo">
        React + TypeScript
      </a>
      <ul className="right hide-on-med-and-down">
        <li>
          <a href="/">The list of tasks</a>
        </li>
        <li>
          <a href="/">About us</a>
        </li>
      </ul>
    </div>
  </nav>
);
