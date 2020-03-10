import { connect } from 'react-redux';
import { getCart, getRequest, getPrice } from '../../../redux/productRedux';

import Summary from './Summary';

const mapStateToProps = state => ({
  cart: getCart(state),
  request: getRequest(state),
  price: getPrice(state),
});

export default connect(mapStateToProps)(Summary);