/**
 * Author: Kailash kumar
 */
import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
// import configureStore from './store/configureStore';
// import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
// import routes from './routes';
// import './styles/style.css';
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

/**
 * Configure store
 * <Provider store={store}>
    <Router history={browserHistory} routes={routes} />
    </Provider>
 */
// const store = configureStore();

render(
    <Router history={browserHistory} routes={routes} />,
    document.getElementById('ecommerce')
);