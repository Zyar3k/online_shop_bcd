import React from 'react';
import { PropTypes } from 'prop-types';
import ProductsList from '../ProductsList/ProductsList';
import Loader from '../../common/Loader/Loader';
import PendingInfo from '../../common/PendingInfo/PendingInfo';

class Products extends React.Component {

  componentDidMount() {
    const { loadProducts } = this.props;
    loadProducts();
  };

  render() {
    const { products, request } = this.props;

    if (request.success === true && request.pending === false && products.length > 0) {
      return <ProductsList products={products} />
    } else if(request.pending === true || request.success === null) {
      return <Loader />
    } else if(request.pending === false && request.error !== null) {
      return <PendingInfo />
    } else if(request.pending === false && request.success === true && products.length === 0) {
      return <PendingInfo />
    }
  };
};

Products.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      img: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    }),
  ),
  loadProducts: PropTypes.func.isRequired,
};

export default Products;