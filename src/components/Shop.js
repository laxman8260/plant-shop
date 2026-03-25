import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../redux/cartSlice";
import { Link } from "react-router-dom";

function Shop() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  const plants = [
    { id: 1, name: "Aloe Vera", price: 10 },
    { id: 2, name: "Snake Plant", price: 15 },
    { id: 3, name: "Peace Lily", price: 20 },
    { id: 4, name: "Cactus", price: 12 },
    { id: 5, name: "Bonsai", price: 25 },
    { id: 6, name: "Fern", price: 18 },
  ];

  return (
    <div>
      <h1>🌿 Plant Shop</h1>

      {/* Go to Cart */}
      <Link to="/cart">🛒 Go to Cart ({cartItems.length})</Link>

      {/* Plant List */}
      {plants.map((plant) => (
        <div
          key={plant.id}
          style={{
            border: "1px solid black",
            margin: "10px",
            padding: "10px",
          }}
        >
          <h3>{plant.name}</h3>
          <p>Price: ${plant.price}</p>

          <button
            onClick={() => dispatch(addToCart(plant))}
            disabled={cartItems.find((item) => item.id === plant.id)}
          >
            {cartItems.find((item) => item.id === plant.id)
              ? "Added"
              : "Add to Cart"}
          </button>
        </div>
      ))}
    </div>
  );
}

export default Shop;