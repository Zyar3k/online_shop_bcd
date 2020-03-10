import { connect } from 'react-redux';
import { getCart, getPrice }  from '../../../redux/productRedux';


import Cart from './Cart';

const mapStateToProps = state => ({
  cart: getCart(state),
  price: getPrice(state),
});

export default connect(mapStateToProps)(Cart);