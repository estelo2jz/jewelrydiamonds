import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

import '../styles/navbar.scss';


function NavBar(props) {
  console.log(props)
  
  return (
    <header>
      <div className="overlay"></div>
      <nav>
        {/* <h2>FAKE GUCCI STORE</h2> */}
        <ul>
          <li className="nav-home">
            <Link to="/">Grillz</Link>
          </li>
          <li className="nav-home">
            <Link to="/chainz">Chainz</Link>
          </li>
          <li className="nav-home">
            <Link to="/watchz">Watchz</Link>
          </li>
          <li className="nav-about">
            <Link to="/about">About</Link>
          </li>
          <li className="cart">
            <Link to="/cart">
              <ion-icon name="basket-outline"></ion-icon>Cart <span>0</span>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default NavBar;