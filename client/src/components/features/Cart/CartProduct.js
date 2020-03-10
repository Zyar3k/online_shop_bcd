import React from 'react';
import { PropTypes } from 'prop-types';
import './Cart.scss';
import MainTitle from '../../common/MainTitle/MainTitle';

const CartProduct = (props) => {

  const { products } = props;

  return(
    <div className='cartProduct'>
      <MainTitle>Cart Product</MainTitle>
      <div className='cartProdContent'>

        <div className='cartProdImg'>
          <img src={products.img} alt='img' />
        </div>

        <div className='cartProdText'>
          <div>
          name{products.name}
          </div>
          <div>
            descr
          </div>
        </div>
        <div className='cartProdPrice'>
          price{products.price}
        </div>
      </div>
    </div>
  );
};

CartProduct.propTypes = {
  products: PropTypes.object.isRequired,
};

export default CartProduct;