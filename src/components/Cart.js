import React, { Fragment } from 'react';

function Cart({basketProps}) {
  // console.log(basketProps);

  // let productsInCart = [];
 
  // Object.keys(basketProps.products).forEach( function(item) {
  //   console.log(item);
  //   console.log(basketProps.products[item].inCart);
  //   if(basketProps.products[item].inCart) {
  //     productsInCart.push(basketProps.products[item])
  //   }
  //   console.log(productsInCart);
  // })

  // const productImages = [One, Two, Three, Four, Fift, Sixth, Seven, Eight, Nine, Ten, Eleven, Thirt];

  // productsInCart = productsInCart.map((product, index) => {
  //   // We have access to this name, price, inCart using the map() statement
  //   console.log("My product is ");
  //   console.log(product);
  //   // that what were doing in down here
  //   return (
  //     // Frangment is just a placeholder rather using a div
  //     <Fragment>
  //       <div className="product">
  //         <ion-icon name="close-circle"></ion-icon>
  //         <img src={productImages[index]} />
  //         <span className="sm-hide">{product.name}</span>
  //       </div>
  //       <div className="price sm-hide">${product.price},00</div>
  //       <div className="quantity">
  //         <ion-icon className="decrease" name="arrow-back-circle-outline"></ion-icon>
  //           <span>{product.numbers}</span>
  //         <ion-icon className="increase" name="arrow-forward-circle-outline"></ion-icon>
  //       </div>
  //       <div className="total">${product.numbers * product.price},00</div>
  //     </Fragment>
  //   );
  // });

  return (
    <div className="product-containers">
      <div className="product-header">
        <h5 className="product-title">PRODUCT</h5>
        <h5 className="price sm-hide">PRICE</h5>
        <h5 className="quantity">QUANTITY</h5>
        <h5 className="total">TOTAL</h5>
      </div> 
      <div className="products">
        {/* {productsInCart} */}
      </div>
      <div className="basketTotalContainer">
        {/* <h4 className="basketTotalTitle">{basketProps.name}</h4>
        <h4 className="basketTotal">${basketProps.cartCost},00</h4> */}
      </div>
    </div>
  )
}

const mapStateToProps = state => ({
  basketProps: state.basketState
})

export default Cart;
