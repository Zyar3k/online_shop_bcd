import React from 'react';
import { PropTypes } from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingBasket } from '@fortawesome/free-solid-svg-icons';

import './CartLink.scss';

const CartLink = (props) => {

    return (
        <span className='cartLink'>
            <FontAwesomeIcon  icon={faShoppingBasket} /> 
            {props.prod > 0 ? <span className='cartLinkNo'>{props.prod}</span> : ''}
        </span>
    );
}

CartLink.propTypes = {
  prod: PropTypes.number.isRequired,
};

export default CartLink;