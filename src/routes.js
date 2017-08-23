/**
 * Setting up routes for application
 * Author: Kailash kumar
 */
import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import LoginPage from './components/user/LoginPage';

export default (
    <Route path="/" component={App}>
          <Route path="/login" component={LoginPage}/>
    </Route>
);