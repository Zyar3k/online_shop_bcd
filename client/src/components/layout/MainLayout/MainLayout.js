import React from 'react';

import MainContainer from '../MainContainer/MainContainer';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

const MainLayout = ({children}) => (
  <MainContainer>
    <Header />
      {children}
    <Footer />
  </MainContainer>
);

export default MainLayout;