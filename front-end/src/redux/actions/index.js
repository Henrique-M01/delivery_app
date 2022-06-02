export const ADD_ORDER = 'ADD_ORDER';
export const SET_ORDERS = 'SET_ORDERS';
export const SET_USER = 'SET_USER';

export const setNewOrder = (payload) => ({
  type: ADD_ORDER,
  payload,
});

export const setOrders = (payload) => ({
  type: SET_ORDERS,
  payload,
});

export const setNewUser = (payload) => ({
  type: SET_USERS,
  payload,
});
