import React from 'react';
import PropTypes from 'prop-types';

import './MainTitle.scss';

const MainTitle = ({ children }) => (
  <h1 className="mainTitle">
    {children}
  </h1>
);

MainTitle.propTypes = {
  children: PropTypes.string,
};

export default MainTitle;