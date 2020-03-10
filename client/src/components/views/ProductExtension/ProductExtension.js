import React from 'react';
import Product from '../../features/Product/ProductContainer';

class ProductExtension extends React.Component {

  render(){

    return(
      <div className='container'>
        <Product />
      </div>
    );
  };
};

export default ProductExtension;