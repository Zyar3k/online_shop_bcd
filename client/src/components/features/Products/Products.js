import React from 'react';
import { PropTypes } from 'prop-types';
import ProductsList from '../ProductsList/ProductsList';

class Products extends React.Component {

  componentDidMount() {
    const { loadProducts } = this.props;
    loadProducts();
  };

  render() {
    const { products } = this.props;

    return(
      <div>
        <ProductsList products={products}/>
      </div>
    );
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