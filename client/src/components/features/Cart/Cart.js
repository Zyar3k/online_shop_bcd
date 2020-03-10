import React from 'react';
import { PropTypes } from 'prop-types';
import { Link } from 'react-router-dom';
import './Cart.scss';
import CartProduct from './CartProduct';
import PendingInfo from '../../common/PendingInfo/PendingInfo';
import MainTitle from '../../common/MainTitle/MainTitle';
import ButtonNext from '../../common/ButtonNext/ButtonNext';
import ButtonBack from '../../common/ButtonBack/ButtonBack';

class Cart extends React.Component {

  deleteProduct = (id) => {
    const {deleteProduct, calculatePrice} = this.props;
    deleteProduct(id);
    calculatePrice();
  };

  removeProduct = (products) => {
    const { removeProduct, calculatePrice } = this.props;
    products.quantity === 1 ? void(0) : removeProduct(products.id);
    calculatePrice();
  };

  plusProduct = (id) => {
    const { plusProduct, calculatePrice } = this.props;
    plusProduct(id);
    calculatePrice();
  };

  render() {

    const { cart, price } = this.props;

    return(
      <div className='cart'>
          <ButtonBack className='back' />
        <MainTitle>
          Your cart</MainTitle>
        <span className='cart'>
          <div className='productCart'>
            {cart.length !== 0 
            ?
            cart.map(idx =>
            <CartProduct
              key=''
              products={idx}
              deleteProduct={this.deleteProduct}
              plusProduct={this.plusProduct}
              removeProduct={this.removeProduct}
            />) 
            : 
            <PendingInfo>Your shopping cart is empty!</PendingInfo>}
          </div>
          <div className='summaryWrapper'>
            <div className='totalPrice'>Total Price: {price}£</div>
          {cart.length !== 0 
            ?
            <Link to={'summarycart'}>
              <ButtonNext>
                Summary
              </ButtonNext>
            </Link> 
            :
            <ButtonNext disabled>Summary</ButtonNext>
            }
          </div>
        </span>
      </div>
    );
  };
};

Cart.propTypes = {
  cart: PropTypes.array.isRequired,
  deleteProduct: PropTypes.func.isRequired,
  plusProduct: PropTypes.func.isRequired,
  removeProduct: PropTypes.func.isRequired,
  calculatePrice: PropTypes.func.isRequired,
};

export default Cart;