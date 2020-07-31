import React from 'react';

import '../styles/main.scss';

import One from '../images/grills/one.jpg'
import Two from '../images/grills/two.jpg'
import Three from '../images/grills/three.jpg'
import Four from '../images/grills/four.jpg'
import Fift from '../images/grills/fift.jpg'
import Sixth from '../images/grills/sixth.jpg'
import Seven from '../images/grills/seven.jpg'
import Eight from '../images/grills/eight.jpg'
import Nine from '../images/grills/nine.jpg'
import Ten from '../images/grills/ten.jpg'
import Eleven from '../images/grills/eleven.jpg'
import Thirt from '../images/grills/thirt.jpg'


const Home = (props) => {
  console.log(props);

  //  PASS the state inside of home component, but impossible to the NavBar component
  // const [basketNumbers, setBasketNumbers] = useState(0);

  // const addToBasket = () => {
  //   setBasketNumbers(basketNumbers + 1);
  // }

  return (
    <div className="para-container">
      <div className="image para-quote">
        <img src={One} alt="GOLDTEETH S505 INVISIBLE SET EMERALD CUT DIAMOND" />
        <h3 className="jewel-name">S505 INVISIBLE SET EMERALD CUT DIAMOND</h3>
        <h3 className="jewel-price">$4,000,00</h3>
        <a onClick={() => props.addBasket('OriginalGucci')} className="addToCart cart1" href="#">
          <button className="button">Add to Cart</button>
        </a>
      </div>
      <div className="image para-quote">
        <img src={Two} alt="S161506-3A CUSTOM SKY BLUE DIAMOND HANDSET" />
        <h3 className="jewel-name">S161506-3A SKY BLUE DIAMOND HANDSET</h3>
        <h3 className="jewel-price">$24,000,00</h3>
        <a onClick={() => props.addBasket('OriginalGucci')} className="addToCart cart1" href="#">
          <button className="button">Add to Cart</button>
        </a>
      </div>
      <div className="image para-quote">
        <img src={Three} alt="JDG73-ICE SKATE 8 PIECE INVISIBLE HANDSET DIAMOND " />
        <h3 className="jewel-name">JDG73-ICE SKATE 8 PIECE INVISIBLE DIAMOND</h3>
        <h3 className="jewel-price">$5,162,00</h3>
        <a onClick={() => props.addBasket('OriginalGucci')} className="addToCart cart1" href="#">
          <button className="button">Add to Cart</button>
        </a>
      </div>
      <div className="image para-quote">
        <img src={Four} alt="JDG65-BLUE MAGIC 4 ROW HAND SET DIAMOND" />
        <h3 className="jewel-name">JDG65-BLUE MAGIC 4 ROW HANDSET</h3>
        <h3 className="jewel-price">$11,200,00</h3>
        <a onClick={() => props.addBasket('OriginalGucci')} className="addToCart cart1" href="#">
          <button className="button">Add to Cart</button>
        </a>
      </div>
      <div className="image para-quote">
        <img src={Fift} alt="S161506-1B INVISIBLE HANDSET DIAMOND" />
        <h3 className="jewel-name">S161506-1B INVISIBLE HANDSET</h3>
        <h3 className="jewel-price">$6,4000,00</h3>
        <a onClick={() => props.addBasket('OriginalGucci')} className="addToCart cart1" href="#">
          <button className="button">Add to Cart</button>
        </a>
      </div>
      <div className="image para-quote">
        <img src={Sixth} alt="S2530032-A 16 GOLD TEETH BLOCK SET" />
        <h3 className="jewel-name">S2530032-A 16 GOLD TEETH BLOCK SET</h3>
        <h3 className="jewel-price">$6,000,00</h3>
        <a onClick={() => props.addBasket('OriginalGucci')} className="addToCart cart1" href="#">
          <button className="button">Add to Cart</button>
        </a>
      </div>
      <div className="image para-quote">
        <img src={Seven} alt="S105B 6 PIECE INVISIBLE HAND SET DIAMOND" />
        <h3 className="jewel-name">S105B 6 PIECE INVISIBLE HAND SET DIAMOND</h3>
        <h3 className="jewel-price">$6,050,00</h3>
        <a onClick={() => props.addBasket('OriginalGucci')} className="addToCart cart1" href="#">
          <button className="button">Add to Cart</button>
        </a>
      </div>
      <div className="image para-quote">
        <img src={Eight} alt="C1532-1 16 TEETH PRONG BLOCK SET" />
        <h3 className="jewel-name">C1532-1 16 TEETH PRONG BLOCK SET</h3>
        <h3 className="jewel-price">$4,000,00</h3>
        <a onClick={() => props.addBasket('OriginalGucci')} className="addToCart cart1" href="#">
          <button className="button">Add to Cart</button>
        </a>
      </div>
      <div className="image para-quote">
        <img src={Nine} alt="JDG69-4TH WARD 6 PIECE 14K WHITE GOLD PRINCESS CUT DIAMOND" />
        <h3 className="jewel-name">JDG69-4TH 14K PRINCESS CUT DIAMOND</h3>
        <h3 className="jewel-price">$2,742,00</h3>
        <a onClick={() => props.addBasket('OriginalGucci')} className="addToCart cart1" href="#">
          <button className="button">Add to Cart</button>
        </a>
      </div>
      <div className="image para-quote">
        <img src={Ten} alt="JDG36-YIELD" />
        <h3 className="jewel-name">JDG36</h3>
        <h3 className="jewel-price">$5,600,00</h3>
        <a onClick={() => props.addBasket('OriginalGucci')} className="addToCart cart1" href="#">
          <button className="button">Add to Cart</button>
        </a>
      </div>
      <div className="image para-quote">
        <img src={Eleven} alt="JDG32-LIL JON" />
        <h3 className="jewel-name">JDG32</h3>
        <h3 className="jewel-price">$7,800,00</h3>
        <a onClick={() => props.addBasket('OriginalGucci')} className="addToCart cart1" href="#">
          <button className="button">Add to Cart</button>
        </a>
      </div>
      <div className="image para-quote">
        <img src={Thirt} alt="A-JD103 16 TEETH HAND PRONG SET PERM CUT DIAMOND" />
        <h3 className="jewel-name">A-JD103 16 TEETH PERM CUT DIAMOND</h3>
        <h3 className="jewel-price">$8,800,00</h3>
        <a onClick={() => props.addBasket('OriginalGucci')} className="addToCart cart1" href="#">
          <button className="button">Add to Cart</button>
        </a>
      </div>
    </div>
  );
}

export default Home;