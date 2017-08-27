/**
 * Author: Kailash kumar
 * combine reducer as root reducer
 */

import { combineReducers } from 'redux';
import  userReducer  from './userReducer';

const rootReducer = combineReducers({
     userReducer
});

export default rootReducer;