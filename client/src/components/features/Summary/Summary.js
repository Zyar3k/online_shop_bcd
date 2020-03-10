import React from 'react';
import { Link } from 'react-router-dom';
import { PropTypes } from 'prop-types';
import Loader from '../../common/Loader/Loader';
import MainTitle from '../../common/MainTitle/MainTitle';
import './Summary.scss';
import ButtonNext from '../../common/ButtonNext/ButtonNext';

const Summary = (props) => {

  const { cart, request, price } = props;

  if (request.success === true && request.pending === false && cart.length > 0) {
    return(
      <div className="summary">
        <MainTitle>Summary</MainTitle>
        <div className='tableSummary'>          
          <div className='tableHead'>
            <div className='name'>name</div>
            <div className='price number'>price</div>
            <div className='quantity number'>quantity</div>
            <div className='number'>total</div>
          </div>         
          {cart.map(idx =>
          <div className='tableBody' key='1'>            
            <div className='name'>{ idx.name }</div>
            <div className='price number'>{ idx.price }£</div>
            <div className='quantity number'>{idx.quantity}</div>
            <div className='totalPrice number'>{(idx.price * idx.quantity).toFixed(2)}£</div>
            </div>
          )}
        </div>
        <div className='payOrderWrapper'>
          <div className='payOrder'>
            <div className='payOrderTitle'>grand total</div>
            <div className='grandTotal'> {price}£</div>         
          </div>
            <Link to={'/'}>
              <ButtonNext>
                order & pay
              </ButtonNext>
            </Link>
        </div>
      </div>
    );
  } else if(request.pending === true || request.success === null) {
    return <Loader />
  }
};

Summary.propTypes = {
  cart: PropTypes.array.isRequired,
  request: PropTypes.object.isRequired,
};

export default Summary;