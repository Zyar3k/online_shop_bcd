import React from 'react';
import './Header.scss';

import NavMenu from '../../features/NavMenu/NavMenu';

class Header extends React.Component {

  render(){

    return(
      <div className='header'>
        <NavMenu />
      </div>
    );
  };
};

export default Header;