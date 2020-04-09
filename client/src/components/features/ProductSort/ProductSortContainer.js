import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { sortOptions, getProductsSort } from '../../../redux/productRedux';
import ProductSort from './ProductSort';

const ProductSortContainer = ({ sortOptions }) => {
  return <ProductSort sortOptions={sortOptions} />;
};

ProductSortContainer.propTypes = {
  sortOptions: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  products: getProductsSort(state),
});

const mapDispatchToProps = {
  sortOptions
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductSortContainer);