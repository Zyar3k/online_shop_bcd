import React from 'react';
import PropTypes from 'prop-types';
import './ProductSort.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons';

const ProductSort = ({ sortOptions }) => {

  const handleOnClick = (key, direction) => {
    sortOptions({key, direction});
  };


  return (
    <div className='sortCont'>
      <div className='sortIcon' onClick={() => handleOnClick('price', 'asc')}>
        <FontAwesomeIcon  icon={faChevronUp}  />
      </div>
      <div className='sortText'>
        Sort product by price
      </div>
      <div className='sortIcon' onClick={() => handleOnClick('price', 'desc')}>
        <FontAwesomeIcon  icon={faChevronDown}  /> 
      </div>
    </div>
  )
}

ProductSort.propTypes = {
  sortOptions: PropTypes.func.isRequired
};

export default ProductSort;