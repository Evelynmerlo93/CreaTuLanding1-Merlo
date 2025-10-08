import { useCart } from "../context/CartContext.jsx";
import { Link } from "react-router-dom";

export default function CartWidget() {
  const { totalItems } = useCart();

  return (
    <Link to="/cart" style={{ textDecoration: "none" }}>
      <div
        style={{
          position: "relative",
          fontSize: "28px",
          cursor: "pointer",
          color: "#fff",
        }}
      >
        🛒
        {totalItems > 0 && (
          <span
            style={{
              position: "absolute",
              top: "-8px",
              right: "-12px",
              backgroundColor: "#ff69b4", // rosa fuerte igual al navbar
              color: "#fff",
              borderRadius: "50%",
              padding: "4px 8px",
              fontSize: "12px",
              fontWeight: "bold",
            }}
          >
            {totalItems}
          </span>
        )}
      </div>
    </Link>
  );
}
