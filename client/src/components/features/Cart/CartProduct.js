import React from 'react';
import { PropTypes } from 'prop-types';
import './Cart.scss';
import ProductCartCounter from '../../common/ProductCartCounter/ProductCartCounter';


const CartProduct = (props) => {

  const { products, deleteProduct } = props;

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
      <div className='productCartCounter'>
        <ProductCartCounter 
          products={products} 
          deleteProduct={deleteProduct} 
        />
      </div>
    </div>
  );
};

CartProduct.propTypes = {
  products: PropTypes.object.isRequired,
  deleteProduct: PropTypes.func.isRequired,
};

export default CartProduct;