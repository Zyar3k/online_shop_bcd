import React from 'react';
import logo from './bcd.png';

import './Logo.scss';

const Logo = () => {
  return(  
		<span className='logo'>
			<img src={logo} alt='logo'/>
		</span>	
  );
};

export default Logo;