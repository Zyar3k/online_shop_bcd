import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavMenu.scss';
import CartLink from '../../common/CartLink/CartLink';
import { PropTypes } from 'prop-types';
import Logo from '../../common/Logo/Logo';

class NavMenu extends React.Component {

  render(){
    const { cart } = this.props;
    return(
      <div className='navMenu'>
        <div className='logo'>
          <NavLink className='navLink' exact to='/'>
            <Logo />
          </NavLink>
        </div>
        <div>
          <NavLink className='navLink' activeClassName="active" exact to='/'>Home</NavLink>
          <NavLink className='navLink' activeClassName="active" exact to='/contact'>Contact</NavLink>
          <NavLink className='navLink' activeClassName="active" exact to='/cart'><CartLink prod={cart.length}/></NavLink>
        </div>
      </div>
    );
  };
};

NavMenu.propTypes = {
  cart: PropTypes.array.isRequired,
}

export default NavMenu;