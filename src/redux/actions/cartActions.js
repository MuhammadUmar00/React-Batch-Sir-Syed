import {
  GET_PREVIOUS_CART_ITEMS,
  DELETE_CART_ITEM,
} from "../types/cartActionTypes";

export const getPreviousCartItems = () => {
  return (dispatch) =>
    dispatch({
      type: GET_PREVIOUS_CART_ITEMS,
      data: {
        name: "item1",
      },
    });
};

export const deleteCartItem = (id) => {
  // console.log("CALLED ME");
  return (dispatch) =>
    dispatch({
      type: DELETE_CART_ITEM,
      id,
    });
};
