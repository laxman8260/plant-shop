import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  addToCart,
  removeFromCart,
  deleteItem,
} from "../redux/cartSlice";
import { Link } from "react-router-dom";

function Carts() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  const totalItems = cartItems.length;

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price,
    0
  );

  return (
    <div>
      <h2>🛒 Shopping Cart</h2>

      <h3>Total Items: {totalItems}</h3>
      <h3>Total Price: ${totalPrice}</h3>

      {cartItems.map((item) => (
        <div
          key={item.id}
          style={{
            border: "1px solid black",
            margin: "10px",
            padding: "10px",
          }}
        >
          <h3>{item.name}</h3>
          <p>Price: ${item.price}</p>

          {/* Increase */}
          <button onClick={() => dispatch(addToCart(item))}>+</button>

          {/* Decrease */}
          <button onClick={() => dispatch(removeFromCart(item.id))}>
            -
          </button>

          {/* Delete */}
          <button onClick={() => dispatch(deleteItem(item.id))}>
            Delete
          </button>
        </div>
      ))}

      <br />

      {/* Checkout */}
      <button onClick={() => alert("Coming Soon")}>
        Checkout
      </button>

      <br /><br />

      {/* Continue Shopping */}
      <Link to="/shop">⬅ Continue Shopping</Link>
    </div>
  );
}

export default Carts;