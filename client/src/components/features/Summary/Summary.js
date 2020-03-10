import React from 'react';
import { Link } from 'react-router-dom';
import { PropTypes } from 'prop-types';
import Loader from '../../common/Loader/Loader';

const Summary = (props) => {

  const { cart, request, price } = props;

  // if (request.success === true && request.pending === false && cart.length > 0) {
    return(
      <div className="scroll-wrapper">
      <div>
        <thead>
          <tr>
            <th>name</th>
            <th>price</th>
            <th>quantity</th>
            <th>total price</th>
          </tr>
        </thead>
        <tbody>
          {/* {cart.map(idx => */}
          <tr key='1'>            
              {/* <td>{ idx.name }</td> */}
              <td>Handmade Card For Mum</td>
              {/* <td>{ idx.price }£</td> */}
              <td>4£</td>
              {/* <td>{idx.quantity}</td> */}
              <td>3</td>
              {/* <td>{(idx.price * idx.quantity).toFixed(2)}£</td> */}
              <td>12£</td>
            </tr>
          {/* )} */}
        </tbody>
      </div>
      <div>
      grand total 12 £
      {/* {price}£ */}
      </div>
      <Link to={'/'}>
            <div>order & pay</div>
          </Link>
    </div>
    );
  // } else if(request.pending === true || request.success === null) {
  //   return <Loader />
  // } 
};


Summary.propTypes = {
  cart: PropTypes.array.isRequired,
  request: PropTypes.object.isRequired,
}

export default Summary;