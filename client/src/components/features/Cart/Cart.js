import React from 'react';
import { PropTypes } from 'prop-types';
import './Cart.scss';
import CartProduct from './CartProduct';
import PendingInfo from '../../common/PendingInfo/PendingInfo';
import MainTitle from '../../common/MainTitle/MainTitle';

class Cart extends React.Component {

  deleteProduct = (id) => {
    const {deleteProduct, calculatePrice} = this.props;
    deleteProduct(id);
    // calculatePrice();
  };


  render() {

    const { cart, price } = this.props;

    return(
      <div>
        <div>
          <MainTitle>Your cart</MainTitle>
            {cart.length !== 0 ? cart.map(idx =>
          <CartProduct 

            key=''
            products={idx}
            deleteProduct={this.deleteProduct}
          />) : <PendingInfo />}
          
        </div>
        <div>
          <h4>Summary</h4>
        <div>Total Price: {price}  £</div>
          <button>buy</button>
        </div>
      </div>
    );
  };
};

Cart.propTypes = {
  cart: PropTypes.array.isRequired,
  deleteProduct: PropTypes.func.isRequired,
};

export default Cart;