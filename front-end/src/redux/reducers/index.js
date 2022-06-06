import { combineReducers } from 'redux';
import loginReducer from './loginReducer';
import cartReducer from './cartReducer';
import tokenReducer from './tokenReducer';
import userReducer from './userReducer';

const rootReducer = combineReducers({
  cart: cartReducer,
  userInfo: userReducer,
  token: tokenReducer,
  loginInfo: loginReducer,
});

export default rootReducer;
