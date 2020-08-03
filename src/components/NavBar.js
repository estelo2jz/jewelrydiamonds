import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getNumbers } from '../actions/getAction';
import { NavLink } from 'react-router-dom';


function NavBar(props) {
  console.log(props)

  useEffect(() => {
    getNumbers();
  }, []);
  
  return (
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
        <h3 className="nav-cart">Cart <span>{props.basketProps.basketNumbers}</span></h3>
      </NavLink>
    </nav>
  );
}

const mapStateToProps = state => ({
  basketProps: state.basketState
})

export default connect(mapStateToProps, { getNumbers })(NavBar);