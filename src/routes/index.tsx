import React from 'react';

import { Switch } from 'react-router-dom';

import Route from './routes';

import Login from '../pages/login';
import Dashboard from '../pages/dashboard';

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path="/" exact component ={Login} />

      <Route path="/dashboard" component ={Dashboard} isPrivate/>
    </Switch>
  )
}

export default Routes;