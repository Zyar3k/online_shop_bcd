import { connect } from 'react-redux';
import { getCart, getPrice, deleteCartProduct, plusCartProduct, removeCartProduct, calculatePrice }  from '../../../redux/productRedux';

import Cart from './Cart';

const mapStateToProps = state => ({
  cart: getCart(state),
  price: getPrice(state),
});

const mapDispatchToProps = dispatch => ({
  deleteProduct: (id) => dispatch(deleteCartProduct(id)),
  plusProduct: (id) => dispatch(plusCartProduct(id)),
  removeProduct: (id) => dispatch(removeCartProduct(id)),
  calculatePrice: () => dispatch(calculatePrice()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Cart);