import { connect } from 'react-redux';
import { getCart }  from '../../../redux/productRedux';


import Cart from './Cart';

const mapStateToProps = state => ({
  cart: getCart(state),
});

export default connect(mapStateToProps)(Cart);