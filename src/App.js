import React from 'react';
import './App.css';
import HomePage from './components/pages/homepage/homepage.component'
import { Route, Switch } from 'react-router-dom';
import ShopePage from './components/pages/shop/shop.component';

function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={ShopePage} />
      </Switch>
    </div>
  );
}

export default App;
