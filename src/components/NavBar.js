import React from 'react';
import { NavLink } from 'react-router-dom';

// import Logo from './logo';
// import Header from './header';

const Navbar = () => (
  <nav className="navbar"> 
    {/* <div>
      <Logo />
      <Header />
    </div>    */}
    <NavLink
      exact
      activeClassName="navbar__link--active"
      className="navbar__link"
      to="/"
    >
      <a>Grillz</a>
    </NavLink>
    <NavLink
      activeClassName="navbar__link--active"
      className="navbar__link"
      to="/chainz"
    >
      <a>Chainz</a>
    </NavLink>
    <NavLink
      activeClassName="navbar__link--active"
      className="navbar__link"
      to="/watchz"
    >
      <a>Watchz</a>
    </NavLink>
    <NavLink
      activeClassName="navbar__link--active"
      className="navbar__link"
      to="/pendantz"
    >
      <a>Pendantz</a>
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