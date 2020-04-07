import React from 'react';
import { Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';

export default (
  <div>
    <Route path='/' exact component={Home}></Route>
    <Route path='/login' exact component={Login}></Route>
  </div>
);
