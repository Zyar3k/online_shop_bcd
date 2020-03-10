import React from 'react';
import { PropTypes } from 'prop-types';
import './Cart.scss';
import CartProduct from './CartProduct';
import PendingInfo from '../../common/PendingInfo/PendingInfo';
import MainTitle from '../../common/MainTitle/MainTitle';

class Cart extends React.Component {

  render() {

    const { cart, price } = this.props;

    return(
      <div>
        <div className='cartProduct'>
          <MainTitle>Your cart</MainTitle>
            {cart.length !== 0 ? cart.map(idx =>
          <CartProduct products={idx} />) : <PendingInfo />}

          <div>
            <button>+</button>
            <button>del</button>
            <button>-</button>
          </div>
        </div>
        <div>
          <h4>Summary</h4>
          <div>{price}</div>
          <button>buy</button>
        </div>
      </div>
    );
  };
};

Cart.propTypes = {
  cart: PropTypes.array.isRequired,
};

export default Cart;