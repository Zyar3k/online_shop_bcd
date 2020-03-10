import React from 'react';
import './Homepage.scss';

import Products from '../../features/Products/ProductsContainer';
import ProductsAmount from '../../features/ProductsAmount/ProductsAmountContainer';

class Homepage extends React.Component {

  render(){

    return(
      <div className='container'>
        <ProductsAmount />
        <Products />
      </div>
    );
  };
};

export default Homepage;