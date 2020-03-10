import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavMenu.scss';
import CartLink from '../../common/CartLink/CartLink';
import { PropTypes } from 'prop-types';

class NavMenu extends React.Component {

  render(){
    const { cart } = this.props;

    return(
      <div className='navMenu'>
        <div className='logo'>
          <NavLink className='link' to='/'>Logo</NavLink>
        </div>
        <div>
          <NavLink className='link' to='/'>Home</NavLink>
          <NavLink className='link' to='/contact'>Contact</NavLink>
          <NavLink className='link' to='/cart'><CartLink prod={cart.length}/></NavLink>
        </div>
      </div>
    );
  };
};

NavMenu.propTypes = {
  cart: PropTypes.array.isRequired,
};

export default NavMenu;