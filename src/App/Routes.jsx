import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import PrivateRoute from './routing/PrivateRoute';

import Signin from '../routes/Auth/Signin';
import Signup from '../routes/Auth/Signup';
import Activate from '../routes/Auth/Activate';
import Private from './core/Private';
import Welcome from './core/Welcome';
import Forgot from '../routes/Auth/ForgotPassword';
import Reset from '../routes/Auth/ResetPassword';

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route path='/' exact component={Welcome} />
        <Route path='/signin' exact component={Signin} />
        <Route path='/signup' exact component={Signup} />
        <Route path='/auth/activate/:token' exact component={Activate} />
        <PrivateRoute path='/private' exact component={Private} />
        <Route path='/auth/password/forgot' exact component={Forgot} />
        <Route path='/auth/password/reset/:token' exact component={Reset} />
      </Switch>
    </Router>
  );
};

export default Routes;
