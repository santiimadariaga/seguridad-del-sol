import { ADD_TO_CART, REMOVE_FROM_CART, CLEAR_CART } from "./cart-actions";
import { addProductToCart, removeProductFromCart } from "./cart-functions";

const INITIAL_STATE = {
  cartList: [],
};

const cardReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        cartList: addProductToCart(state.cartList, action.payload),
      };
    case REMOVE_FROM_CART:
      return {
        ...state,
        cartList: removeProductFromCart(state.cartList, action.payload),
      };
    case CLEAR_CART:
      return {
        ...state,
        cartList: [],
      };
    default:
      return state;
  }
};

export default cardReducer;
