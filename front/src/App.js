import React from 'react';
import './App.css';
import { BrowserRouter, Switch } from 'react-router-dom'
import MainLayout from './containers/MainLayout/MainLayout'

function App() {
  return (
    <BrowserRouter>
      
      <Switch>
      <div id="wrapper">
        <MainLayout/>
        </div>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
