import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import MainLayout from './containers/MainLayout/MainLayout'
import Authentication from './containers/Authentication/Authentication'
import Register from './components/WelcomePage/Register/Register'

function App() {
  return (
    <BrowserRouter>
      <Switch>
          <Route exact path='/welcome' component={Authentication} />
          <Route exact path='/' component={MainLayout} />
          <Route exact path='/edit-info' component={Register} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
