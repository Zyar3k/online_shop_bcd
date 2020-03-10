import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavMenu.scss';

class NavMenu extends React.Component {

  render(){

    return(
      <div className='navMenu'>
        <div className='logo'>
          <NavLink className='link' to='/'>Logo</NavLink>
        </div>
        <div>
          <NavLink className='link' to='/'>Home</NavLink>
          <NavLink className='link' to='/contact'>Contact</NavLink>
          <NavLink className='link' to='/cart'>Cart</NavLink>
        </div>
      </div>
    );
  };
};

export default NavMenu;