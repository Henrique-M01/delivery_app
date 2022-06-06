import {
  ADD_ITEM,
  CLEAR_CART,
  ICREMENT_ITEM,
  REMOVE_ITEM,
  SET_CART_PRODUCTS,
} from '../actions';

const INITIAL_STATE = {
  products: [],
  cartItems: [],
};

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case SET_CART_PRODUCTS:
    return {
      ...state,
      products: action.payload,
    };
  case ADD_ITEM:
    return {
      ...state,
      cartItems: [...state.cartItems, action.payload],
    };
  case REMOVE_ITEM:
    return {
      ...state,
      cartItems: state.cartItems
        .filter((item) => item.id !== action.payload),
    };
  case ICREMENT_ITEM:
    return {
      ...state,
      cartItems: state.cartItems.map((item) => {
        if (item.id === action.payload.id) {
          return {
            ...item,
            quantity: item.quantity + 1,
          };
        }
        return item;
      }),
    };
  case CLEAR_CART:
    return { ...state, cartItems: [] };
  default:
    return state;
  }
};

export default cartReducer;
