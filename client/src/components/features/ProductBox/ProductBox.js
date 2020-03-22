import React from 'react';
import {PropTypes} from 'prop-types';
import {Link} from 'react-router-dom';
import './ProductBox.scss';

class ProductBox extends React.Component {

  render() {

    const { id, tag, img, name, price } = this.props;

    return(
      <div className='productBox'>
        <Link to={`product/${id}`}>
          <div className='productTitle'>
            <div className='productTag'>
              <span className='tag'>{tag}</span>
            </div>
            <div className='productName'>
              {name}
            </div>
          </div>
          <div className='productImg'>
            <img src={img} alt='img' />
          </div>
          <div className='productText'>
          available from
          </div>
          <div className='productPrice'>
            {price} £
          </div>
        </Link>
      </div>
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