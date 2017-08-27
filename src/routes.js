/**
 * Setting up routes for application
 * Author: Kailash kumar
 */
import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import LoginPage from './components/user/LoginPage';
import HomePage from './components/dashboard/HomePage';

export default (
    <Route path="/" component={App}>
        <IndexRoute component={LoginPage} />
        <Route path="dashboard" component={HomePage} />
    </Route>
);