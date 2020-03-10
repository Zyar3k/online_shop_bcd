import React from 'react';
import './Homepage.scss';

import Products from '../../features/Products/ProductsContainer';

class Homepage extends React.Component {

  render(){

    return(
      <div className='container'>
        <Products />
      </div>
    );
  };
};

export default Homepage;