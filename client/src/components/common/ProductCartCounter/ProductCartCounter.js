import React from 'react';
import { PropTypes } from 'prop-types';
import './ProductCartCounter.scss';

class ProductCartCounter extends React.Component {

  deleteProduct = () => {
    const { products, deleteProduct } = this.props;
    deleteProduct(products.id);
  };

  plusProduct = () => {
    const { products, plusProduct } = this.props;
    plusProduct(products.id);
  };

  removeProduct = () => {
    const { products, removeProduct } = this.props;
    removeProduct(products);
  };

  render(){

    const { products } = this.props;
    return(
      <div className='productCartCounter'>
        <div className='btnQuantity'>
          <button className='btnMinus' onClick={this.removeProduct}>-</button>
            <div className='quantityProduct'>
              {products.quantity}
            </div>
          <button className='btnPlus' onClick={this.plusProduct}>+</button>
        </div>

        <button className='btnDelete' onClick={this.deleteProduct}>delete</button>
      </div>
    );
  };
};

ProductCartCounter.propTypes = {
  products: PropTypes.object.isRequired,
  deleteProduct: PropTypes.func.isRequired,
  plusProduct: PropTypes.func.isRequired,
  removeProduct: PropTypes.func.isRequired,
};

export default ProductCartCounter;