import { SET_ORDERS } from '../actions';

const ordersReducer = (state = [], action) => {
  console.log(action.type)
  switch (action.type) {
    case SET_ORDERS:
      return action.payload;
    default:
      return state;
  }
};

export default ordersReducer;
