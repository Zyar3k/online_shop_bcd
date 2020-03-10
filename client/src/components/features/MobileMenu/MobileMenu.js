import React from 'react';
import { bool } from 'prop-types';
import { Link } from 'react-router-dom';
import { StyledMenu } from './MobileMenu.styled';

const MobileMenu = ({ open }) => {
  return (
    <StyledMenu open={open}>
      <Link to="/contact">
        Contact
      </Link>      
      <Link to="/cart">
        Cart
      </Link>
    </StyledMenu>
  );
};

MobileMenu.propTypes = {
  open: bool.isRequired,
};

export default MobileMenu;