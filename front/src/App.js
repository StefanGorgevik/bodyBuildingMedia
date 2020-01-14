import React from 'react';
import './App.css';
import { BrowserRouter, Switch } from 'react-router-dom'

import Header from './components/Navigation/Header'
import MainLayout from './containers/MainLayout/MainLayout'

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <MainLayout/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
