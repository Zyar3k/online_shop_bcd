import React from 'react';
import { PropTypes } from 'prop-types';
import ProductBox from '../ProductBox/ProductBox'
import './ProductsList.scss'
import MainTitle from '../../common/MainTitle/MainTitle';

const ProductsList = ({ products }) => (

  <div>
    <MainTitle>Our offer</MainTitle>
    <div className='boxWrapper'>
      {products.map(products => <ProductBox key={products.id}{...products} /> )}
    </div>
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