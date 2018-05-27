import React, { Component } from 'react';
import { Route, Switch }  from 'react-router-dom';
import Homepage from './components/pages/Homepage';
import LoginPage from './components/pages/Loginpage';
import  NotFound from "./components/pages/404/404";

const App =()=>(
  <div className="ui container">
  <Switch>
  <Route path="/" exact component={Homepage}/> 
  <Route path="/login"  component={LoginPage}/> 
  <Route   component={NotFound}/> 
  </Switch>

  </div>
)

export default App;
