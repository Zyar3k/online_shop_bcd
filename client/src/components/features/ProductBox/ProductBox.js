import React from 'react';
import {PropTypes} from 'prop-types';
import {Link} from 'react-router-dom';
import './ProductBox.scss';

class ProductBox extends React.Component {

  render() {

    const { id, tag, img, name, price } = this.props;

    return(

      <Link to={`product/${id}`}>
        <div>{tag}</div>
        <div>{name}</div>
        <div>{price}</div>
        <div><img src={img} alt='img' /></div>
      </Link>
    );
  };
};

ProductBox.propTypes = {
  id: PropTypes.string,
  tag: PropTypes.string,
  img: PropTypes.string,
  name: PropTypes.string,
  price: PropTypes.number,
};

export default ProductBox;