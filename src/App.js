import React, { Component } from 'react';
import { Route }  from 'react-router-dom';
import Homepage from './components/pages/Homepage';
import LoginPage from './components/pages/Loginpage';


const App =()=>(
  <div className="ui container">
  <Route path="/" exact component={Homepage}/> 
  <Route path="/login" exact component={LoginPage}/> 
  </div>
)

export default App;
