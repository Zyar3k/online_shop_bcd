import React from 'react';
import { PropTypes } from 'prop-types';
import './ProductCartCounter.scss';

class ProductCartCounter extends React.Component {

  deleteProduct = () => {
    const { products, deleteProduct } = this.props;
    deleteProduct(products.id);
  };

  render(){

    const { products } = this.props;
    return(
      <div className='productCartCounter'>
        <div className='btnQuantity'>
          <button className='btnMinus'>-</button>
            <div className='quantityProduct'>{products.quantity}</div>
          <button className='btnPlus'>+</button>
        </div>

        <button className='btnDelete' onClick={this.deleteProduct}>delete</button>
      </div>
    );
  };
};

ProductCartCounter.propTypes = {
  products: PropTypes.object.isRequired,
  deleteProduct: PropTypes.func.isRequired,
};

export default ProductCartCounter;