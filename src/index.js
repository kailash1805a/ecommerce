/**
 * Author: Kailash kumar
 */
import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import App from './components/App';
import configureStore from './store/configureStore';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import routes from './routes';

import './assets/css/bootstrap.min.css';
import './assets/css/custom.min.css';
import './assets/css/style.css';

//Configure store



const store = configureStore();

render(
    <Provider store={store}>
        <Router history={browserHistory} routes={routes} />
    </Provider>,
    document.getElementById('ecommerce')
);