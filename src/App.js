import React from 'react';
import './App.css';
import HomePage from './components/pages/homepage/homepage.component'
import { Route, Switch } from 'react-router-dom';
import HatsPage from './components/pages/hats/hats.component';

function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/hats' component={HatsPage} />
      </Switch>
    </div>
  );
}

export default App;
