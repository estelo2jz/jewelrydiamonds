import React from 'react';

import '../styles/main.scss';

import Watchz1 from '../images/watchz/watchz1.jpg'
import Watchz2 from '../images/watchz/watchz2.jpg'
import Watchz3 from '../images/watchz/watchz3.jpg'
import Watchz4 from '../images/watchz/watchz4.jpg'
import Watchz5 from '../images/watchz/watchz5.jpg'
import Watchz6 from '../images/watchz/watchz6.jpg'
import Watchz7 from '../images/watchz/watchz7.jpg'
import Watchz8 from '../images/watchz/watchz8.jpg'
import Watchz9 from '../images/watchz/watchz9.jpg'
import Watchz10 from '../images/watchz/watchz10.jpg'
import Watchz11 from '../images/watchz/watchz11.jpg'

import Watchz12 from '../images/watchz/watchz12.jpg'
import Watchz13 from '../images/watchz/watchz13.jpg'
import Watchz14 from '../images/watchz/watchz14.jpg'
import Watchz15 from '../images/watchz/watchz15.jpg'
import Watchz16 from '../images/watchz/watchz16.jpg'
import Watchz17 from '../images/watchz/watchz17.jpg'
import Watchz18 from '../images/watchz/watchz18.jpg'
import Watchz19 from '../images/watchz/watchz19.jpg'



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
        <img src={Watchz1} alt="CW-0001 CUSTOM WATCH" />
        <h3 className="jewel-name">CW-0001 CUSTOM WATCH</h3>
        <h3 className="jewel-price">$38,000,00</h3>
        <a onClick={() => props.addBasket('OriginalGucci')} className="addToCart cart1" href="#">
          <button className="button">Add to Cart</button>
        </a>
      </div>
      <div className="image">
        <img src={Watchz2} alt="CW-0002 CUSTOM WATCH" />
        <h3 className="jewel-name">CW-0002 CUSTOM WATCH</h3>
        <h3 className="jewel-price">$12,000,00</h3>
        <a onClick={() => props.addBasket('OriginalGucci')} className="addToCart cart1" href="#">
          <button className="button">Add to Cart</button>
        </a>
      </div>
      <div className="image">
        <img src={Watchz3} alt="CW-0003 CUSTOM WATCH" />
        <h3 className="jewel-name">CW-0003 CUSTOM WATCH</h3>
        <h3 className="jewel-price">$27,000,00</h3>
        <a onClick={() => props.addBasket('OriginalGucci')} className="addToCart cart1" href="#">
          <button className="button">Add to Cart</button>
        </a>
      </div>
      <div className="image">
        <img src={Watchz4} alt="CW-0004 CUSTOM WATCH" />
        <h3 className="jewel-name">CW-0004 CUSTOM WATCH</h3>
        <h3 className="jewel-price">$24,000,00</h3>
        <a onClick={() => props.addBasket('OriginalGucci')} className="addToCart cart1" href="#">
          <button className="button">Add to Cart</button>
        </a>
      </div>
      <div className="image">
        <img src={Watchz5} alt="CW-0005 CUSTOM WATCH" />
        <h3 className="jewel-name">CW-0005 CUSTOM WATCH</h3>
        <h3 className="jewel-price">$9,000,00</h3>
        <a onClick={() => props.addBasket('OriginalGucci')} className="addToCart cart1" href="#">
          <button className="button">Add to Cart</button>
        </a>
      </div>
      <div className="image">
        <img src={Watchz6} alt="CW-0006 CUSTOM WATCH" />
        <h3 className="jewel-name">CW-0006 CUSTOM WATCH</h3>
        <h3 className="jewel-price">$12,000,00</h3>
        <a onClick={() => props.addBasket('OriginalGucci')} className="addToCart cart1" href="#">
          <button className="button">Add to Cart</button>
        </a>
      </div>
      <div className="image">
        <img src={Watchz7} alt="CW-0007 CUSTOM WATCH" />
        <h3 className="jewel-name">CW-0007 CUSTOM WATCH</h3>
        <h3 className="jewel-price">$15,000,00</h3>
        <a onClick={() => props.addBasket('OriginalGucci')} className="addToCart cart1" href="#">
          <button className="button">Add to Cart</button>
        </a>
      </div>
      <div className="image">
        <img src={Watchz8} alt="CW-0008 CUSTOM WATCH" />
        <h3 className="jewel-name">CW-0008 CUSTOM WATCH</h3>
        <h3 className="jewel-price">$25,000,00</h3>
        <a onClick={() => props.addBasket('OriginalGucci')} className="addToCart cart1" href="#">
          <button className="button">Add to Cart</button>
        </a>
      </div>
      <div className="image">
        <img src={Watchz9} alt="CW-0009 CUSTOM WATCH" />
        <h3 className="jewel-name">CW-0009 CUSTOM WATCH</h3>
        <h3 className="jewel-price">$9,000,00</h3>
        <a onClick={() => props.addBasket('OriginalGucci')} className="addToCart cart1" href="#">
          <button className="button">Add to Cart</button>
        </a>
      </div>
      <div className="image">
        <img src={Watchz10} alt="CW-00010 CUSTOM WATCH" />
        <h3 className="jewel-name">CW-00010 CUSTOM WATCH</h3>
        <h3 className="jewel-price">$22,990,00</h3>
        <a onClick={() => props.addBasket('OriginalGucci')} className="addToCart cart1" href="#">
          <button className="button">Add to Cart</button>
        </a>
      </div>
      <div className="image">
        <img src={Watchz11} alt="CW-00011 CUSTOM WATCH" />
        <h3 className="jewel-name">CW-00011 CUSTOM WATCH</h3>
        <h3 className="jewel-price">$26,400,00</h3>
        <a onClick={() => props.addBasket('OriginalGucci')} className="addToCart cart1" href="#">
          <button className="button">Add to Cart</button>
        </a>
      </div>
      <div className="image">
        <img src={Watchz12} alt="CW-00012 CUSTOM WATCH" />
        <h3 className="jewel-name">CW-00012 CUSTOM WATCH</h3>
        <h3 className="jewel-price">$22,990,00</h3>
        <a onClick={() => props.addBasket('OriginalGucci')} className="addToCart cart1" href="#">
          <button className="button">Add to Cart</button>
        </a>
      </div>
      <div className="image">
        <img src={Watchz13} alt="CW-00013 CUSTOM WATCH" />
        <h3 className="jewel-name">CW-00013 CUSTOM WATCH</h3>
        <h3 className="jewel-price">$22,990,00</h3>
        <a onClick={() => props.addBasket('OriginalGucci')} className="addToCart cart1" href="#">
          <button className="button">Add to Cart</button>
        </a>
      </div>
      <div className="image">
        <img src={Watchz14} alt="CW-00014 CUSTOM WATCH" />
        <h3 className="jewel-name">CW-00014 CUSTOM WATCH</h3>
        <h3 className="jewel-price">$29,990,00</h3>
        <a onClick={() => props.addBasket('OriginalGucci')} className="addToCart cart1" href="#">
          <button className="button">Add to Cart</button>
        </a>
      </div>
      <div className="image">
        <img src={Watchz15} alt="CW-00015 CUSTOM WATCH" />
        <h3 className="jewel-name">CW-00015 CUSTOM WATCH</h3>
        <h3 className="jewel-price">$16,940,00</h3>
        <a onClick={() => props.addBasket('OriginalGucci')} className="addToCart cart1" href="#">
          <button className="button">Add to Cart</button>
        </a>
      </div>
      <div className="image">
        <img src={Watchz16} alt="CW-00016 CUSTOM WATCH" />
        <h3 className="jewel-name">CW-00016 CUSTOM WATCH</h3>
        <h3 className="jewel-price">$16,940,00</h3>
        <a onClick={() => props.addBasket('OriginalGucci')} className="addToCart cart1" href="#">
          <button className="button">Add to Cart</button>
        </a>
      </div>
      <div className="image">
        <img src={Watchz17} alt="CW-00017 CUSTOM WATCH" />
        <h3 className="jewel-name">CW-00017 CUSTOM WATCH</h3>
        <h3 className="jewel-price">$18,000,00</h3>
        <a onClick={() => props.addBasket('OriginalGucci')} className="addToCart cart1" href="#">
          <button className="button">Add to Cart</button>
        </a>
      </div>
      <div className="image">
        <img src={Watchz18} alt="CW-00018 CUSTOM WATCH" />
        <h3 className="jewel-name">CW-00018 CUSTOM WATCH</h3>
        <h3 className="jewel-price">$19,000,00</h3>
        <a onClick={() => props.addBasket('OriginalGucci')} className="addToCart cart1" href="#">
          <button className="button">Add to Cart</button>
        </a>
      </div>
    </div>
  );
}

export default Home;