import React from 'react';
import { PropTypes } from 'prop-types';
import './Cart.scss';


const CartProduct = (props) => {

  const { products } = props;

  return(
    <div className='cartProduct'>

      <div className='cartProdContent'>

        <div className='cartProdImg'>
          <img src={products.img} alt='img' />
        </div>

        <div className='cartProdText'>
          <div>
          {products.name}
          </div>
          <div>
            descr
          </div>
        </div>
        <div className='cartProdPrice'>
          {products.price}  £
        </div>
      </div>
    </div>
  );
};

CartProduct.propTypes = {
  products: PropTypes.object.isRequired,
};

export default CartProduct;