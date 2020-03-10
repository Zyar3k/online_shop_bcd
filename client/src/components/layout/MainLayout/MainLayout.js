import React from 'react';

import MainContainer from '../MainContainer/MainContainer';
import Header from '../Header/Header';

const MainLayout = ({children}) => (
  <MainContainer>
    <Header />
    {children}
  </MainContainer>
);

export default MainLayout;