import React from 'react';

import '../styles/main.scss';

import One from '../images/pendantz/pendants1.jpg'
import Two from '../images/pendantz/pendants2.jpg'
import Three from '../images/pendantz/pendants3.jpg'

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
        <img src={One} alt="GOLDTEETH S505 INVISIBLE SET EMERALD CUT DIAMOND TOOTH" />
        <h3 className="jewel-name">S505 INVISIBLE SET EMERALD CUT DIAMOND TOOTH</h3>
        <h3 className="jewel-price">$4,000,00</h3>
        <a onClick={() => props.addBasket('OriginalGucci')} className="addToCart cart1" href="#">Add to Cart</a>
      </div>
      <div className="image">
        <img src={Two} alt="S161506-3A CUSTOM SKY BLUE DIAMOND HAND SET GRILL FOR TYGA" />
        <h3 className="jewel-name">S161506-3A SKY BLUE DIAMOND HAND SET GRILL</h3>
        <h3 className="jewel-price">$24,000,00</h3>
        <a onClick={() => props.addBasket('GucciDisk')} className="addToCart cart1" href="#">Add to Cart</a>
      </div>
      <div className="image">
        <img src={Three} alt="JDG73-ICE SKATE 8 PIECE INVISIBLE HANDSET DIAMOND GRILL" />
        <h3 className="jewel-name">JDG73-ICE SKATE 8 PIECE INVISIBLE DIAMOND GRILL</h3>
        <h3 className="jewel-price">$5,162,00</h3>
        <a onClick={() => props.addBasket('GucciDisk')} className="addToCart cart1" href="#">Add to Cart</a>
      </div>
      <div className="image">
        <img src={Four} alt="JDG65-BLUE MAGIC 4 ROW HAND SET DIAMOND GRILL" />
        <h3 className="jewel-name">JDG65-BLUE MAGIC 4 ROW HAND SET DIAMOND GRILL</h3>
        <h3 className="jewel-price">$11,200,00</h3>
        <a onClick={() => props.addBasket('GucciDisk')} className="addToCart cart1" href="#">Add to Cart</a>
      </div>
      <div className="image">
        <img src={Fift} alt="S161506-1B INVISIBLE HANDSET DIAMOND GRILL" />
        <h3 className="jewel-name">S161506-1B INVISIBLE HANDSET DIAMOND GRILL</h3>
        <h3 className="jewel-price">$6,4000,00</h3>
        <a onClick={() => props.addBasket('GucciDisk')} className="addToCart cart1" href="#">Add to Cart</a>
      </div>
      <div className="image">
        <img src={Sixth} alt="S2530032-A 16 GOLD TEETH BLOCK SET GRILL" />
        <h3 className="jewel-name">S2530032-A 16 GOLD TEETH BLOCK SET GRILL</h3>
        <h3 className="jewel-price">$6,000,00</h3>
        <a onClick={() => props.addBasket('GucciDisk')} className="addToCart cart1" href="#">Add to Cart</a>
      </div>
      <div className="image">
        <img src={Seven} alt="S105B 6 PIECE INVISIBLE HAND SET DIAMOND GRILL" />
        <h3 className="jewel-name">S105B 6 PIECE INVISIBLE HAND SET DIAMOND GRILL</h3>
        <h3 className="jewel-price">$6,050,00</h3>
        <a onClick={() => props.addBasket('GucciDisk')} className="addToCart cart1" href="#">Add to Cart</a>
      </div>
      <div className="image">
        <img src={Eight} alt="C1532-1 16 TEETH PRONG BLOCK SET GRILL" />
        <h3 className="jewel-name">C1532-1 16 TEETH PRONG BLOCK SET GRILL</h3>
        <h3 className="jewel-price">$4,000,00</h3>
        <a onClick={() => props.addBasket('GucciDisk')} className="addToCart cart1" href="#">Add to Cart</a>
      </div>
      <div className="image">
        <img src={Nine} alt="JDG69-4TH WARD 6 PIECE 14K WHITE GOLD PRINCESS CUT DIAMOND GRILL" />
        <h3 className="jewel-name">JDG69-4TH 14K PRINCESS CUT DIAMOND</h3>
        <h3 className="jewel-price">$2,742,00</h3>
        <a onClick={() => props.addBasket('GucciDisk')} className="addToCart cart1" href="#">Add to Cart</a>
      </div>
      <div className="image">
        <img src={Ten} alt="JDG36-YIELD" />
        <h3 className="jewel-name">JDG36-YIELD</h3>
        <h3 className="jewel-price">$5,600,00</h3>
        <a onClick={() => props.addBasket('GucciDisk')} className="addToCart cart1" href="#">Add to Cart</a>
      </div>
      <div className="image">
        <img src={Eleven} alt="JDG32-LIL JON" />
        <h3 className="jewel-name">JDG32-LIL JON</h3>
        <h3 className="jewel-price">$7,800,00</h3>
        <a onClick={() => props.addBasket('GucciDisk')} className="addToCart cart1" href="#">Add to Cart</a>
      </div>
      <div className="image">
        <img src={Thirt} alt="A-JD103 16 TEETH HAND PRONG SET PERM CUT DIAMOND GRILL" />
        <h3 className="jewel-name">A-JD103 16 TEETH PERM CUT DIAMOND GRILL</h3>
        <h3 className="jewel-price">$8,800,00</h3>
        <a onClick={() => props.addBasket('GucciDisk')} className="addToCart cart1" href="#">Add to Cart</a>
      </div>
    </div>
  );
}

export default Home;