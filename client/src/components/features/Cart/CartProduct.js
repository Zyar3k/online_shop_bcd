import React from 'react';
import { PropTypes } from 'prop-types';
import './Cart.scss';
import ProductCartCounter from '../../common/ProductCartCounter/ProductCartCounter';


const CartProduct = (props) => {

  const { products, deleteProduct, plusProduct, removeProduct } = props;

  return(
    <div className='cartProduct'>
      
      <div className='cartProdContent'>

        <div className='cartProdImg'>
          <img src={products.img} alt='img' />
          {/* <img src="../../images/img01.jpg" alt='img' /> */}
        </div>

        <div className='cartProdText'>
          <div className='cartProdName'>
          {products.name}
          {/* Handmade Card For Mum */}
          </div>
          <div className='cartProdDescr'>
          {/* Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. */}
          </div>
        </div>
        <div className='cartProdPrice'>
          {products.price}  £
        
        </div>
      </div>

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