import React from 'react';
import { PropTypes } from 'prop-types';
import './ProductCartCounter.scss';

class ProductCartCounter extends React.Component {

  render(){

    const { products } = this.props;
    return(
      <div className='productCartCounter'>
        <div className='btnQuantity'>
          <button>-</button>
            <div>{products.quantity}</div>
          <button>+</button>
        </div>

        <button>delete</button>
      </div>
    );
  };
};

ProductCartCounter.propTypes = {
  products: PropTypes.object.isRequired,
};

export default ProductCartCounter;