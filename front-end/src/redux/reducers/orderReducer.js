import { ADD_ORDER, SET_ORDERS } from '../actions';

const INITIAL_STATE = [];

const orderReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case ADD_ORDER:
    return [...state, action.payload];
  case SET_ORDERS:
    return action.payload;
  default:
    return state;
  }
};

export default orderReducer;
