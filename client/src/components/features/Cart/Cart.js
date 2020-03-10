import React from 'react';
import { PropTypes } from 'prop-types';
import './Cart.scss';
import CartProduct from './CartProduct';
import PendingInfo from '../../common/PendingInfo/PendingInfo';

class Cart extends React.Component {

  render() {

    const { cart } = this.props;

    return(
      <div>
        <div className='cartProduct'>
          
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
          <div>total price</div>
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