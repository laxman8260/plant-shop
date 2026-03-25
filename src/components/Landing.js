import React from "react";
import { Link } from "react-router-dom";

function Landing() {
  return (
    <div
  style={{
    backgroundColor: "rgba(0,0,0,0.6)",
    padding: "20px",
    display: "inline-block",
    borderRadius: "10px",
  }}
>
  <h1>🌿 GreenGrow Plant Shop</h1>

  <p style={{ fontSize: "18px", lineHeight: "1.6" }}>
  Welcome to GreenGrow Plant Shop, your trusted destination for high-quality indoor and outdoor plants. 
  We are passionate about bringing nature closer to your home by offering a wide variety of carefully 
  selected plants that enhance both beauty and well-being. Our mission is to promote a greener lifestyle 
  by making plant care simple, accessible, and enjoyable for everyone. Whether you're a beginner or a 
  plant enthusiast, GreenGrow is here to help you grow your personal green space.
</p>

  <Link to="/shop">
    <button style={{ padding: "10px 20px", fontSize: "18px" }}>
      Get Started
    </button>
  </Link>
</div>
  );
}

export default Landing;