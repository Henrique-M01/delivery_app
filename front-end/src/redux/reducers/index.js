import { combineReducers } from 'redux';
import orderReducer from './orderReducer';
import userReducer from './userReducer';

const rootReducer = combineReducers({ orderReducer, userReducer });

export default rootReducer;
