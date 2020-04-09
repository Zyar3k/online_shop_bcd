import React from 'react';
import './Homepage.scss';

import Products from '../../features/Products/ProductsContainer';
import ProductsAmount from '../../features/ProductsAmount/ProductsAmountContainer';
import ProductSort from '../../features/ProductSort/ProductSortContainer';

class Homepage extends React.Component {

  render(){

    return(
      <div className='container'>
        <div className='homeCont'>
          <div className='barCont'>
            <ProductsAmount />
            <ProductSort />
          </div>
          <div>
            <Products />
          </div>
        </div>
      </div>
    );
  };
};

export default Homepage;