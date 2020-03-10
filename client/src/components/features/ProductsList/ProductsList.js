import React from 'react';
import { PropTypes } from 'prop-types';
import ProductBox from '../ProductBox/ProductBox'

const ProductsList = ({ products }) => (

  <div>
    {products.map(products => <ProductBox key={products.id}{...products} /> )}
  </div>
);

ProductsList.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      tag: PropTypes.string.isRequired,
      img: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
    }),
  ),
};

export default ProductsList;