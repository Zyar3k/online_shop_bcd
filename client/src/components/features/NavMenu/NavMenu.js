import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './NavMenu.scss';
import CartLink from '../../common/CartLink/CartLink';
import { PropTypes } from 'prop-types';
import Logo from '../../common/Logo/Logo';
import MobileMenu from '../MobileMenu/MobileMenu';
import Burger from '../../common/Burger/Burger';

  function NavMenu(props) {

    const { cart } = props;
    const [open, setOpen] = useState(false);

    return(
      <>
        <div className='navMenu'>
          <div>
            <NavLink className='logo' exact to='/'>
              <Logo />
            </NavLink>
          </div>
          <div>
            <NavLink className='navLink' activeClassName="active" exact to='/'>Home</NavLink>
            <NavLink className='navLink' activeClassName="active" exact to='/contact'>Contact</NavLink>
            <NavLink className='navLink' activeClassName="active" exact to='/cart'><CartLink prod={cart.length}/></NavLink>
          </div>
        </div>
          <Burger open={open} setOpen={setOpen} />
          <MobileMenu open={open} setOpen={setOpen} />
      </>
    );
};

NavMenu.propTypes = {
  cart: PropTypes.array.isRequired,
};

export default NavMenu;