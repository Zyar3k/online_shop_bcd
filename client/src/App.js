import React from 'react';
import { Switch, Route } from 'react-router-dom';
import MainLayout from './components/layout/MainLayout/MainLayout';
import Homepage from './components/views/Homepage/Homepage';
import ProductExtension from './components/views/ProductExtension/ProductExtension';
import Contact from './components/views/Contact/Contact';
import CartPage from './components/views/CartPage/CartPage';
import SummaryPage from './components/views/SummaryPage/SummaryPage';
import NotFound from './components/views/NotFound/NotFound';

function App() {
  return (
    <MainLayout>
      <Switch>
        <Route exact path='/' component={Homepage} />
        <Route path='/product/:id' component={ProductExtension} />
        <Route path='/contact' component={Contact} />
        <Route path='/cart' component={CartPage} />
        <Route path='/summarycart' component={SummaryPage} />
        <Route component={NotFound} />
      </Switch>
    </MainLayout>
  );
};

export default App;