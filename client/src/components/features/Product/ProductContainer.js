import { connect } from 'react-redux';
import { getProduct, loadProductRequest, getRequest } from '../../../redux/productRedux';
import Product from './Product';

const mapStateToProps = state => ({
  products: getProduct(state),
  request: getRequest(state),
});

const mapDispatchToProps = dispatch => ({
  loadProducts: (id) => dispatch(loadProductRequest(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Product);