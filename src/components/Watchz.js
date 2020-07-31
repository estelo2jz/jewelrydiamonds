import React from 'react';
import '../styles/main.scss';

import ImageOne from './watchComponent/imageone';
import ImageTwo from './watchComponent/imagetwo';
import ImageThree from './watchComponent/imagethree';
import ImageFour from './watchComponent/imagefour';
import ImageFive from './watchComponent/imagefived';
import ImageSix from './watchComponent/imagesix';
import ImageSeven from './watchComponent/imageseven';
import ImageEight from './watchComponent/imageeight';
import ImageNine from './watchComponent/imagenine';
import ImageTen from './watchComponent/imageten';
import ImageEleven from './watchComponent/imageeleven';
import ImageTwelve from './watchComponent/imagetwelve';
import ImageThirteen from './watchComponent/imagethirteen';
import ImageFourteen from './watchComponent/imagefourteen';
import ImageFifteen from './watchComponent/imagefifteen';
import ImageSixteen from './watchComponent/imagesixteen';
import ImageSeventeen from './watchComponent/imageseventeen';

const Watchz = (props) => {
  console.log(props);

  //  PASS the state inside of home component, but impossible to the NavBar component
  // const [basketNumbers, setBasketNumbers] = useState(0);

  // const addToBasket = () => {
  //   setBasketNumbers(basketNumbers + 1);
  // }


  

  return (
    <div className="para-container">
      <div className="image">
        <ImageOne />
        {/* <img src={Watchz1} alt="CW-0001 CUSTOM WATCH" /> */}
        <h3 className="jewel-name">CW-0001 CUSTOM WATCH</h3>
        <h3 className="jewel-price">$38,000,00</h3>
        <a onClick={() => props.addBasket('OriginalGucci')} className="addToCart cart1" href="#">
          <button className="button">Add to Cart</button>
        </a>
      </div>
      <div className="image">
        <ImageTwo />
        <h3 className="jewel-name">CW-0002 CUSTOM WATCH</h3>
        <h3 className="jewel-price">$12,000,00</h3>
        <a onClick={() => props.addBasket('OriginalGucci')} className="addToCart cart1" href="#">
          <button className="button">Add to Cart</button>
        </a>
      </div>
      <div className="image">
        <ImageThree />
        <h3 className="jewel-name">CW-0003 CUSTOM WATCH</h3>
        <h3 className="jewel-price">$27,000,00</h3>
        <a onClick={() => props.addBasket('OriginalGucci')} className="addToCart cart1" href="#">
          <button className="button">Add to Cart</button>
        </a>
      </div>
      <div className="image">
        <ImageFour />
        <h3 className="jewel-name">CW-0004 CUSTOM WATCH</h3>
        <h3 className="jewel-price">$24,000,00</h3>
        <a onClick={() => props.addBasket('OriginalGucci')} className="addToCart cart1" href="#">
          <button className="button">Add to Cart</button>
        </a>
      </div>
      <div className="image">
        <ImageFive />        
        <h3 className="jewel-name">CW-0005 CUSTOM WATCH</h3>
        <h3 className="jewel-price">$9,000,00</h3>
        <a onClick={() => props.addBasket('OriginalGucci')} className="addToCart cart1" href="#">
          <button className="button">Add to Cart</button>
        </a>
      </div>
      <div className="image">
        <ImageSix />
        <h3 className="jewel-name">CW-0006 CUSTOM WATCH</h3>
        <h3 className="jewel-price">$12,000,00</h3>
        <a onClick={() => props.addBasket('OriginalGucci')} className="addToCart cart1" href="#">
          <button className="button">Add to Cart</button>
        </a>
      </div>
      <div className="image">
        <ImageSeven />
        <h3 className="jewel-name">CW-0007 CUSTOM WATCH</h3>
        <h3 className="jewel-price">$15,000,00</h3>
        <a onClick={() => props.addBasket('OriginalGucci')} className="addToCart cart1" href="#">
          <button className="button">Add to Cart</button>
        </a>
      </div>
      <div className="image">
        <ImageEight />
        <h3 className="jewel-name">CW-0008 CUSTOM WATCH</h3>
        <h3 className="jewel-price">$25,000,00</h3>
        <a onClick={() => props.addBasket('OriginalGucci')} className="addToCart cart1" href="#">
          <button className="button">Add to Cart</button>
        </a>
      </div>
      <div className="image">
        <ImageNine />
        <h3 className="jewel-name">CW-0009 CUSTOM WATCH</h3>
        <h3 className="jewel-price">$9,000,00</h3>
        <a onClick={() => props.addBasket('OriginalGucci')} className="addToCart cart1" href="#">
          <button className="button">Add to Cart</button>
        </a>
      </div>
      <div className="image">
        <ImageTen />
        <h3 className="jewel-name">CW-00010 CUSTOM WATCH</h3>
        <h3 className="jewel-price">$22,990,00</h3>
        <a onClick={() => props.addBasket('OriginalGucci')} className="addToCart cart1" href="#">
          <button className="button">Add to Cart</button>
        </a>
      </div>
      <div className="image">
        <ImageEleven />
        <h3 className="jewel-name">CW-00011 CUSTOM WATCH</h3>
        <h3 className="jewel-price">$26,400,00</h3>
        <a onClick={() => props.addBasket('OriginalGucci')} className="addToCart cart1" href="#">
          <button className="button">Add to Cart</button>
        </a>
      </div>
      <div className="image">
        <ImageTwelve />
        <h3 className="jewel-name">CW-00012 CUSTOM WATCH</h3>
        <h3 className="jewel-price">$22,990,00</h3>
        <a onClick={() => props.addBasket('OriginalGucci')} className="addToCart cart1" href="#">
          <button className="button">Add to Cart</button>
        </a>
      </div>
      <div className="image">
        <ImageThirteen />
        <h3 className="jewel-name">CW-00013 CUSTOM WATCH</h3>
        <h3 className="jewel-price">$22,990,00</h3>
        <a onClick={() => props.addBasket('OriginalGucci')} className="addToCart cart1" href="#">
          <button className="button">Add to Cart</button>
        </a>
      </div>
      <div className="image">
        <ImageFourteen />
        <h3 className="jewel-name">CW-00014 CUSTOM WATCH</h3>
        <h3 className="jewel-price">$29,990,00</h3>
        <a onClick={() => props.addBasket('OriginalGucci')} className="addToCart cart1" href="#">
          <button className="button">Add to Cart</button>
        </a>
      </div>
      <div className="image">
        <ImageFifteen />
        <h3 className="jewel-name">CW-00015 CUSTOM WATCH</h3>
        <h3 className="jewel-price">$16,940,00</h3>
        <a onClick={() => props.addBasket('OriginalGucci')} className="addToCart cart1" href="#">
          <button className="button">Add to Cart</button>
        </a>
      </div>
      <div className="image">
        <ImageSixteen />
        <h3 className="jewel-name">CW-00016 CUSTOM WATCH</h3>
        <h3 className="jewel-price">$16,940,00</h3>
        <a onClick={() => props.addBasket('OriginalGucci')} className="addToCart cart1" href="#">
          <button className="button">Add to Cart</button>
        </a>
      </div>
      <div className="image">
        <ImageSeventeen />
        <h3 className="jewel-name">CW-00017 CUSTOM WATCH</h3>
        <h3 className="jewel-price">$18,000,00</h3>
        <a onClick={() => props.addBasket('OriginalGucci')} className="addToCart cart1" href="#">
          <button className="button">Add to Cart</button>
        </a>
      </div>
      {/* <div className="image">
        <img src={Watchz18} alt="CW-00018 CUSTOM WATCH" />
        <h3 className="jewel-name">CW-00018 CUSTOM WATCH</h3>
        <h3 className="jewel-price">$19,000,00</h3>
        <a onClick={() => props.addBasket('OriginalGucci')} className="addToCart cart1" href="#">
          <button className="button">Add to Cart</button>
        </a>
      </div> */}
    </div>
  );
}

export default Watchz;