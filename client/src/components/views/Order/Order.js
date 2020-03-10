import React from 'react';
import './Order.scss';
import { Link } from 'react-router-dom';
import MainTitle from '../../common/MainTitle/MainTitle';
import ButtonNext from '../../common/ButtonNext/ButtonNext';


class Order extends React.Component {

  render(){

    return(
      <div className='container'>
        <div className="orderPage">
          <MainTitle>Congratulations</MainTitle>
          <div>
          <h3>
            Your order has been sent for processing. An order confirmation and payment methods have been sent to your email
          </h3>
          </div>
          <Link to={'/'} className='contShopping'>
            <ButtonNext >Continue shopping</ButtonNext>

          </Link>
         
        </div>
      </div>
    );
  };
};

export default Order;