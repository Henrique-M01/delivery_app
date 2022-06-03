import { combineReducers } from 'redux';
import loginReducer from './loginReducer';
import orderReducer from './orderReducer';
import tokenReducer from './tokenReducer';
import userReducer from './userReducer';

const rootReducer = combineReducers({
  orders: orderReducer,
  userInfo: userReducer,
  token: tokenReducer,
  loginInfo: loginReducer,
});

export default rootReducer;
