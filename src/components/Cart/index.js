import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import Constants from "../../constants";
import * as cartActions from "../../redux/actions/cartActions";

// const Cart = (props) => {
//   const [cartItems, setCartItems] = React.useState([]);

//   const { Cart } = Constants.Icons;

//   let {
//     cartReducer: { previousCartItems },
//     dispatch,
//   } = props;

//   const actionCtx = bindActionCreators(cartActions, dispatch);

//   useEffect(() => {
//     setCartItems(previousCartItems);
//   }, []);

//   const deleteItem = () => {
//     dispatch(actionCtx.deleteCartItem());
//   };

//   return (
//     <div>
//       <div
//         style={{
//           display: "flex",
//           flexDirection: "row",
//           justifyContent: "space-between",
//           alignItems: "center",
//         }}
//       >
//         <img src={Cart.default} />

//         <h1>Shopping Cart</h1>

//         <span>Total Items : {cartItems.length}</span>
//       </div>

//       <div
//         style={{
//           display: "flex",
//           flexDirection: "row",
//           justifyContent: "center",
//         }}
//       >
//         <ul>
//           {cartItems.map((item = {}) => {
//             return (
//               <li key={item.itemId}>
//                 {item.itemName}
//                 <button onClick={() => deleteItem()}>Delete</button>
//                 <button>Update</button>
//               </li>
//             );
//           })}
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default connect((state) => state)(Cart);

class Cart extends Component {
  constructor() {
    super();
    this.state = {
      cartItems: [],
    };
  }

  componentDidMount() {
    const {
      cartReducer: { cartItems },
    } = this.props;
    this.setState({ cartItems });
  }

  componentDidUpdate(thisProps, prevState) {
    if (this.props.cartReducer.cartItems.length != prevState.cartItems.length) {
      this.setState({ cartItems: this.props.cartReducer.cartItems });
    }
  }

  deleteItem = (id) => {
    const { deleteItem } = this.props;
    deleteItem(id);
  };

  render() {
    const { cartItems } = this.state;
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
              return (
                <li key={item.itemId}>
                  {item.itemName}
                  <button onClick={() => this.deleteItem(item.itemId)}>
                    Delete
                  </button>
                  <button>Update</button>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => state;

const mapDispatchToProps = (dispatch) => {
  return {
    deleteItem: (id) => {
      dispatch(cartActions.deleteCartItem(id));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
