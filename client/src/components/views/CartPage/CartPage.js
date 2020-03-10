import React from 'react';
import './CartPage.scss';
import Cart from '../../features/Cart/Cart';

class CartPage extends React.Component {

  render(){

    return(
      <div className='container'>
        <Cart />
      </div>
    );
  };
};

export default CartPage;