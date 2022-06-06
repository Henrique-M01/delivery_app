export const SET_USER = 'SET_USER';
export const SET_TOKEN = 'SET_TOKEN';
export const SET_IS_LOGGED_IN = 'SET_IS_LOGGED_IN';
export const CLEAR_CART = 'CLEAR_CART';
export const ICREMENT_ITEM = 'ICREMENT_ITEM';
export const DECREMENT_ITEM = 'DECREMENT_ITEM';
export const REMOVE_ITEM = 'REMOVE_ITEM';
export const ADD_ITEM = 'ADD_ITEM';
export const SET_CART_PRODUCTS = 'SET_CART_PRODUCTS';

export const clearShoppingCart = () => ({
  type: CLEAR_CART,
});

export const incrementCartItem = (id) => ({
  type: CLEAR_CART,
  payload: id,
});

export const decrementCartItem = (id) => ({
  type: CLEAR_CART,
  payload: id,
});

export const removeCartItem = (id) => ({
  type: CLEAR_CART,
  payload: id,
});

export const setCartProducts = (payload) => ({
  type: SET_CART_PRODUCTS,
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
