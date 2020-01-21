import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import MainLayout from './containers/MainLayout/MainLayout'
import Authentication from './containers/Authentication/Authentication'

function App() {
  return (
    <BrowserRouter>
      <Switch>
      <Route exact path='/welcome' component={Authentication}/>
      <Route exact path='/' component={MainLayout}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
