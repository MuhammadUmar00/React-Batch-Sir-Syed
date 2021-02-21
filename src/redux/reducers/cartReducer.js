import { cartState } from "../state/cart";
import {
  GET_PREVIOUS_CART_ITEMS,
  DELETE_CART_ITEM,
} from "../types/cartActionTypes";

export default function cartReducer(state = cartState, action) {
  switch (action.type) {
    case GET_PREVIOUS_CART_ITEMS:
      return {
        ...state,
      };

    case DELETE_CART_ITEM:
      state.cartItems = state.cartItems.filter((item) => {
        return item.itemId != action.id;
      });
      return {
        ...state,
      };

    default:
      return state;
  }
}
