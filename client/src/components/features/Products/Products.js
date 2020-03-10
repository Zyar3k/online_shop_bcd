import React from 'react';
import { PropTypes } from 'prop-types';

class Products extends React.Component {

  componentDidMount() {
    const { loadProducts } = this.props;
    loadProducts();
  };

  render() {
    const { products } = this.props;

    return(
      <div>
        <ul>
          {products.map(products => <li key={products.id}>
            {products.name}
            <img src={products.img} alt='img' />
            {products.description}
            {products.price}£
          </li>)}
        </ul>
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