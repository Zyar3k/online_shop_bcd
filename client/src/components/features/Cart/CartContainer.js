import { connect } from 'react-redux';
import { getCart, getPrice, deleteCartProduct }  from '../../../redux/productRedux';


import Cart from './Cart';

const mapStateToProps = state => ({
  cart: getCart(state),
  price: getPrice(state),
});

const mapDispatchToProps = dispatch => ({
  deleteProduct: (id) => dispatch(deleteCartProduct(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Cart);