import React from 'react';
import { PropTypes } from 'prop-types';
import { withRouter } from 'react-router-dom';
import PendingInfo from '../../common/PendingInfo/PendingInfo';
import Loader from '../../common/Loader/Loader';
import './Product.scss';
import MainTitle from '../../common/MainTitle/MainTitle';
import ButtonNext from '../../common/ButtonNext/ButtonNext';
import ButtonBack from '../../common/ButtonBack/ButtonBack';

class Product extends React.Component {

  componentDidMount() {
    const { loadProducts, match } = this.props;
    loadProducts(match.params.id);
  };

  addProductToCart = () => {
    const { products, cart, addProductCart, plusProductCart, calculatePrice } = this.props;
    const match = this.props.match.params.id;
    const prepCart = cart.filter(idx => idx.id === match);

    prepCart.length === 0 ? addProductCart(products[0]) : plusProductCart(match);
    calculatePrice();
  };

  render() {
    const { products, request } = this.props;

    if (request.success === true && request.pending === false && products.length > 0) {
      return (
        <div className='product'>
          <ButtonBack />
          <div className='productWrapper'>
            <div className='imgWrapper'>
              <img src={products[0].img} alt="img" />
            </div>
            <div className='productContent'>
              <MainTitle>{products[0].name}</MainTitle>
              <div className='productPrice'>
                {products[0].price} £
              </div>
              <div className='productDescription'>
                {products[0].description}
              </div>
              <div className='productAction'>
                <div className='btn'> 
                </div>
                <div className='btn' onClick={this.addProductToCart}>
                  <ButtonNext>Add to cart</ButtonNext>
                </div>
              </div>
            </div>
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