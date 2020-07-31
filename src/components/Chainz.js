import React from 'react';

import '../styles/main.scss';

import Chainz1 from '../images/chainz/chain1.jpg'
import Chainz2 from '../images/chainz/chain2.jpg'
import Chainz3 from '../images/chainz/chain3.jpg'
import Chainz4 from '../images/chainz/chain4.jpg'
import Chainz5 from '../images/chainz/chain5.jpg'
import Chainz6 from '../images/chainz/chain6.jpg'
import Chainz7 from '../images/chainz/chain7.jpg'
import Chainz8 from '../images/chainz/chain8.jpg'
import Chainz9 from '../images/chainz/chain9.jpg'
import Chainz10 from '../images/chainz/chain10.jpg'
import Chainz11 from '../images/chainz/chain11.jpg'
import Chainz12 from '../images/chainz/chain12.jpg'


const Home = (props) => {
  console.log(props);

  //  PASS the state inside of home component, but impossible to the NavBar component
  // const [basketNumbers, setBasketNumbers] = useState(0);

  // const addToBasket = () => {
  //   setBasketNumbers(basketNumbers + 1);
  // }

  return (
    <div className="container">
      <div className="image">
        <img src={Chainz1} alt="1JDN090517 - DIAMOND STAR CHAIN" />
        <h3 className="jewel-name">1JDN090517 - DIAMOND STAR CHAIN</h3>
        <h3 className="jewel-price">$9,128,00</h3>
        <a onClick={() => props.addBasket('OriginalGucci')} className="addToCart cart1" href="#">Add to Cart</a>
      </div>
      <div className="image">
        <img src={Chainz2} alt="1JDN1611291 - DIAMOND CHAIN" />
        <h3 className="jewel-name">1JDN1611291 - DIAMOND CHAIN</h3>
        <h3 className="jewel-price">$12,580,00</h3>
        <a onClick={() => props.addBasket('GucciDisk')} className="addToCart cart1" href="#">Add to Cart</a>
      </div>
      <div className="image">
        <img src={Chainz3} alt="1JDN170119-10 DIAMOND CHAIN" />
        <h3 className="jewel-name">1JDN170119-10 DIAMOND CHAIN</h3>
        <h3 className="jewel-price">$15,027,00</h3>
        <a onClick={() => props.addBasket('GucciDisk')} className="addToCart cart1" href="#">Add to Cart</a>
      </div>
      <div className="image">
        <img src={Chainz4} alt="1JDN170119-12 BLACK DIAMOND CHAIN" />
        <h3 className="jewel-name">1JDN170119-12 BLACK DIAMOND CHAIN</h3>
        <h3 className="jewel-price">$9,600,00</h3>
        <a onClick={() => props.addBasket('GucciDisk')} className="addToCart cart1" href="#">Add to Cart</a>
      </div>
      <div className="image">
        <img src={Chainz5} alt="1JDN40407-1 DIAMOND CHAIN" />
        <h3 className="jewel-name">1JDN40407-1 DIAMOND CHAIN</h3>
        <h3 className="jewel-price">$4,475,00</h3>
        <a onClick={() => props.addBasket('GucciDisk')} className="addToCart cart1" href="#">Add to Cart</a>
      </div>
      <div className="image">
        <img src={Chainz6} alt="1JDN6897 - BLUE DIAMOND CHAIN" />
        <h3 className="jewel-name">1JDN6897 - BLUE DIAMOND CHAIN</h3>
        <h3 className="jewel-price">$14,220,00</h3>
        <a onClick={() => props.addBasket('GucciDisk')} className="addToCart cart1" href="#">Add to Cart</a>
      </div>
      <div className="image">
        <img src={Chainz7} alt="1JDN8721 - DIAMOND CHAIN" />
        <h3 className="jewel-name">1JDN8721 - DIAMOND CHAIN</h3>
        <h3 className="jewel-price">$15,725,00</h3>
        <a onClick={() => props.addBasket('GucciDisk')} className="addToCart cart1" href="#">Add to Cart</a>
      </div>
      <div className="image">
        <img src={Chainz8} alt="1JDN9505 - BLUE DIAMOND CHAIN" />
        <h3 className="jewel-name">1JDN9505 - BLUE DIAMOND CHAIN</h3>
        <h3 className="jewel-price">$12,920,00</h3>
        <a onClick={() => props.addBasket('GucciDisk')} className="addToCart cart1" href="#">Add to Cart</a>
      </div>
      <div className="image">
        <img src={Chainz9} alt="1MH-JDN40206-2 - DIAMOND CHAIN" />
        <h3 className="jewel-name">1MH-JDN40206-2 - DIAMOND CHAIN</h3>
        <h3 className="jewel-price">$8,940,00</h3>
        <a onClick={() => props.addBasket('GucciDisk')} className="addToCart cart1" href="#">Add to Cart</a>
      </div>
      <div className="image">
        <img src={Chainz10} alt="1N15116-3 DIAMOND CHAIN" />
        <h3 className="jewel-name">1N15116-3 DIAMOND CHAIN</h3>
        <h3 className="jewel-price">$4,750,00</h3>
        <a onClick={() => props.addBasket('GucciDisk')} className="addToCart cart1" href="#">Add to Cart</a>
      </div>
      <div className="image">
        <img src={Chainz11} alt="1N170530-09 LADY DIAMOND CHAIN" />
        <h3 className="jewel-name">1N170530-09 LADY DIAMOND CHAIN</h3>
        <h3 className="jewel-price">$8,544,00</h3>
        <a onClick={() => props.addBasket('GucciDisk')} className="addToCart cart1" href="#">Add to Cart</a>
      </div>
      <div className="image">
        <img src={Chainz12} alt="1N170703-01 DIAMOND CHAIN" />
        <h3 className="jewel-name">1N170703-01 DIAMOND CHAIN</h3>
        <h3 className="jewel-price">$12,580,00</h3>
        <a onClick={() => props.addBasket('GucciDisk')} className="addToCart cart1" href="#">Add to Cart</a>
      </div>
    </div>
  );
}

export default Home;