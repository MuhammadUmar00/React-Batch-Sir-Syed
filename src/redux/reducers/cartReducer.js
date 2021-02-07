import { cartState } from "../state/cart";
import { GET_PREVIOUS_CART_ITEMS } from "../types/cartActionTypes";

export default function cartReducer(state = cartState, action) {
  switch (action.type) {
    case GET_PREVIOUS_CART_ITEMS:
      return {
        ...state,
      };

    default:
      return state;
  }
}
