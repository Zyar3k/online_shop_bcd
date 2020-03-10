import React from 'react';
import { PropTypes } from 'prop-types';
import './Cart.scss';

class Cart extends React.Component {

  render() {

    return(
      <div>
        <div className='cartProduct'>
          <h4>Cart Product</h4>
          <div>
            img
          </div>
          <div>
            name
          </div>
          <div>
            descr
          </div>
          <div>
            price
          </div>
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

export default Cart;