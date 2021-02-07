import React from "react";
import Constants from "../../constants";

const Cart = () => {
  const [cartItems, setCartItems] = React.useState([
    { itemId: 1, itemName: "ITEM1" },
    { itemId: 2, itemName: "ITEM2" },
    { itemId: 3, itemName: "ITEM3" },
  ]);
  const [cartItemObj, setCartItemsObj] = React.useState({
    itemId: 3,
    itemName: "ITEM3",
  });

  const { Cart } = Constants.Icons;

  return (
    <div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <img src={Cart.default} />

        <h1>Shopping Cart</h1>

        <span>Total Items : {cartItems.length}</span>
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
        }}
      >
        <ul>
          {cartItems.map((item = {}) => {
            return <li key={item.itemId}>{item.itemName}</li>;
          })}
        </ul>

        <ul>
          {Object.keys(cartItemObj).map((item, index) => {
            return <li>{item}</li>;
          })}
        </ul>
      </div>
    </div>
  );
};

export default Cart;
