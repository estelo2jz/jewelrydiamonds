import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => (
  <nav className="navbar">    
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
      className="navbar__link"
      to="/cart"
    >
      <h3 className="nav-cart">Cart <span>0</span></h3>
    </NavLink>
  </nav>
);

export default Navbar;