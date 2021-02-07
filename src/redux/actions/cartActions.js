import { GET_PREVIOUS_CART_ITEMS } from "../types/cartActionTypes";

export const getPreviousCartItems = () => {
  return (dispatch) =>
    dispatch({
      type: GET_PREVIOUS_CART_ITEMS,
    });
};
