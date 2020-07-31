import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => (
  <nav className="navbar">
    <h1 className="navbar-heading"><h2>Ice Ice Diamond Drip</h2></h1>
    <NavLink
      exact
      activeClassName="navbar__link--active"
      className="navbar__link"
      to="/"
    >
      Grillz
    </NavLink>
    <NavLink
      activeClassName="navbar__link--active"
      className="navbar__link"
      to="/chainz"
    >
      Chainz
    </NavLink>
    <NavLink
      activeClassName="navbar__link--active"
      className="navbar__link"
      to="/watchz"
    >
      Watchz
    </NavLink>
    <NavLink
      activeClassName="navbar__link--active"
      className="navbar__link"
      to="/pendantz"
    >
      Pendantz
    </NavLink>
    <NavLink
      activeClassName="navbar__link--active"
      className="navbar__link"
      to="/cart"
    >
      Cart <span>0</span>
    </NavLink>
  </nav>
);

export default Navbar;