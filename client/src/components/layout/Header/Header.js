import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.scss';

class Header extends React.Component {

  render(){

    return(
      <div className='header'>
        <NavLink to='/'>Logo</NavLink>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/contact'>Contact</NavLink>
        <NavLink to='/cart'>Cart</NavLink>
      </div>
    );
  };
};

export default Header;