import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Header() {
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);

  return (
    <div style={{
      display: "flex",
      justifyContent: "space-between",
      padding: "10px",
      background: "lightgreen"
    }}>
      <h2>🌱 Plant Shop</h2>

      <div>
        <Link to="/cart">🛒 Cart: {totalQuantity}</Link>
      </div>
    </div>
  );
}

export default Header;