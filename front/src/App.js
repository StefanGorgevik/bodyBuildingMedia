import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import MainLayout from './containers/MainLayout/MainLayout'
import Authentication from './containers/Authentication/Authentication'

function App() {
  return (
    <BrowserRouter>
      <Switch>
          <Route exact path='/' component={Authentication} />
          <Route exact path='/main' component={MainLayout} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
