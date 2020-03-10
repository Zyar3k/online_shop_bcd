import React from 'react';
import { PropTypes } from 'prop-types';
import { Link } from 'react-router-dom';
import './Cart.scss';
import ProductCartCounter from '../../common/ProductCartCounter/ProductCartCounter';

const CartProduct = (props) => {

  const { products, deleteProduct, plusProduct, removeProduct } = props;

  return(
    <div className='cartProduct'>
      <Link to={'product/' + products.id}>
        <div className='cartProdContent'>
          <div className='cartProdImg'>
            <img src={products.img} alt='img' />
          </div>
          <div className='cartProdText'>
            <div className='cartProdName'>
            {products.name}
            </div>
            <div className='cartProdDescr'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </div>
          </div>
          <div className='cartProdPrice'>
          {products.price}£
          </div>
        </div>
      </Link>
      <div className='productCartCounter'>
        <ProductCartCounter
          products={products}
          deleteProduct={deleteProduct}
          plusProduct={plusProduct}
          removeProduct={removeProduct}
        />
      </div>
    </div>
  );
};

CartProduct.propTypes = {
  products: PropTypes.object.isRequired,
  deleteProduct: PropTypes.func.isRequired,
  plusProduct: PropTypes.func.isRequired,
  removeProduct: PropTypes.func.isRequired,
};

export default CartProduct;