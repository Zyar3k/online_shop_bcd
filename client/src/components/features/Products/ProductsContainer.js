import { connect } from 'react-redux';
import { getProducts, getProductsSort, loadProductsRequest, getRequest } from '../../../redux/productRedux';
import Products from './Products';

const mapStateToProps = state => ({
  // products: getProducts(state),
  products: getProductsSort(state),
  request: getRequest(state),
});

const mapDispatchToProps = dispatch => ({
  loadProducts: () => dispatch(loadProductsRequest()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Products);