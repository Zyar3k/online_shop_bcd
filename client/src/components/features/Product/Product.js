import React from 'react';
import { PropTypes } from 'prop-types';
import { withRouter } from 'react-router-dom';
import PendingInfo from '../../common/PendingInfo/PendingInfo';
import Loader from '../../common/Loader/Loader';

class Product extends React.Component {

  componentDidMount() {
    const { loadProducts, match } = this.props;
    loadProducts(match.params.id);
  };

  render() {
    const { products, request } = this.props;

    if (request.success === true && request.pending === false && products.length > 0) {
      return (
        <div className='product'>
          <div>
            <div>
              name:{products[0].name}
            </div>
            <div>
              price:
            </div>
            <div>
              description:
            </div>
            <div>
              <img src={products[0].img} alt="img" />
            </div>
            <button>
              Buy it!
            </button>
          </div>
        </div>
      );
    } else if(request.pending === true || request.success === null) {
      return <Loader />
    } else if(request.pending === false && request.error !== null) {
      return <PendingInfo />
    } else if(request.pending === false && request.success === true && products.length === 0) {
      return <PendingInfo />
    }
  };
};

Product.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      img: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      description: PropTypes.string.isRequired,
    }),
  ),
  loadProducts: PropTypes.func.isRequired,
};

export default withRouter(props => <Product {...props}/>);