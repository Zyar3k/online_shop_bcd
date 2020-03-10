import React from 'react';
import { Link } from 'react-router-dom';

import logo from './bcd.png';

import './Logo.scss';

const Logo = () => {
  return(
    <span className='logoWrap'>
			<Link className='logo' to ="/">
				<img src={logo} alt='logo'/>
			</Link>
		</span>
  );
};

export default Logo;