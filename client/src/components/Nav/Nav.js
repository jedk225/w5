import React from "react";
import './Nav.css';

const Nav = () => (
  <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <a className="navbar-brand NavLogo" href="/">
      W5
    </a>
    <span className="NavDescription">
      who what when where why
    </span>
  </nav>
);

export default Nav;
