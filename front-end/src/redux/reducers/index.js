import { combineReducers } from 'redux';
import orderReducer from './orderReducer';
import tokenReducer from './tokenReducer';
import userReducer from './userReducer';

const rootReducer = combineReducers({
  orders: orderReducer,
  userInfo: userReducer,
  token: tokenReducer,
});

export default rootReducer;
