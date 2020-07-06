import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';

import HomePage from './pages/homepage/homepage.component.jsx';

const HatPage = () => (
  <div>
    <h1>Hats Page</h1>
  </div>
);


function App() {
  return (
    <div>
      <Switch>
        <Route path="/hats" component={HatPage} />
        <Route path="/" component={HomePage} /> 
      </Switch>  
    </div>
  );
}

export default App;
