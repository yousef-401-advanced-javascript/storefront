import React from 'react';
import { connect } from 'react-redux';
import { Button } from '@material-ui/core';


const SimpleCart = (props) => {
  return (
    <>
      <div className='products'>
        {props.cartReducer.items
          .map(product => {

            return (
              <div className='one-product' key={product.name}>
                <h3>Product Name : {product.name}</h3>
                <img src={`${product.img}`} alt='hi' />
                <p className='category'>Product Category : {product.category}</p>
                {/* <p className='inStock'>In Stock : {product.inStock}</p> */}
                <p className='inStock'>Quantity In The Cart: {product.quantity}</p>

                <p className='price'>Price : {product.price}</p>

                <div className='buttons'>
                  <Button variant="contained" color="primary" aria-label="outlined secondary button group" >
                                        X
                  </Button>
                  <Button variant="contained" color="primary" aria-label="outlined secondary button group">
                                        View Details
                  </Button>

                </div>


              </div>
            );
          })}

      </div>
    </>
  );

};


const mapStateToProps = (state) => {
  return {
    categoryReducer: state.categoryReducer,
    productsReducer: state.productsReducer,
    cartReducer: state.cartReducer,
  };
};
// const mapDispatchToProps ={triggerTheStock,addToCart};

export default connect(mapStateToProps)(SimpleCart);