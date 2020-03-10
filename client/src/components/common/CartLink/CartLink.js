import React from 'react';
import { PropTypes } from 'prop-types';

import './CartLink.scss';

const CartLink = (props) => {

    return (
        <span className='cartLink'>
            Cart {props.prod > 0 ? <span className='cartLinkNo'>{props.prod}</span> : ''}
        </span>
    );
}

CartLink.propTypes = {
  prod: PropTypes.number.isRequired,
};

export default CartLink;