export const ADD_ORDER = 'ADD_ORDER';
export const SET_ORDERS = 'SET_ORDERS';
export const SET_USER = 'SET_USER';
export const SET_TOKEN = 'SET_TOKEN';
export const SET_IS_LOGGED_IN = 'SET_IS_LOGGED_IN';

export const setNewOrder = (payload) => ({
  type: ADD_ORDER,
  payload,
});

export const setOrders = (payload) => ({
  type: SET_ORDERS,
  payload,
});

export const setNewUser = (payload) => ({
  type: SET_USER,
  payload,
});

export const setToken = (payload) => ({
  type: SET_TOKEN,
  payload,
});

export const setIsLoggedIn = (payload) => ({
  type: SET_IS_LOGGED_IN,
  payload,
});
