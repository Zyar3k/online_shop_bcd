import { connect } from 'react-redux';
import { getProduct, loadProductRequest, getRequest, getCart, addProductCart, plusProductCart, calculatePrice } from '../../../redux/productRedux';
import Product from './Product';

const mapStateToProps = state => ({
  products: getProduct(state),
  request: getRequest(state),
  cart: getCart(state),
});

const mapDispatchToProps = dispatch => ({
  loadProducts: (id) => dispatch(loadProductRequest(id)),
  addProductCart: payload => dispatch(addProductCart(payload)),
  plusProductCart: id => dispatch(plusProductCart(id)),
  calculatePrice: () => dispatch(calculatePrice()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Product);