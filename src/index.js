import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import LoginScreen from './screens/login';
import SignUpScreen from './screens/signup';
import OverViewScreen from './screens/overview';


import {BrowserRouter,Route, Switch} from 'react-router-dom';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route exact path="/react-demo">
        <LoginScreen />
      </Route>
      <Route path="/signup">
        <SignUpScreen />
      </Route>
      <Route path="/overview">
        <OverViewScreen />
      </Route>
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);