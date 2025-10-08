import { useCart } from "../context/CartContext.jsx";

export default function CartPage() {
  const { cart, removeFromCart, clearCart, totalPrice } = useCart();

  if (cart.length === 0) {
    return (
      <h2 style={{ textAlign: "center", marginTop: "20px" }}>
        🛒 Tu carrito está vacío
      </h2>
    );
  }

  return (
    <div style={{ padding: "20px" }}>
      <h2>Tu carrito</h2>
      <ul>
        {cart.map((item) => (
          <li
            key={item.id}
            style={{
              marginBottom: "10px",
              display: "flex",
              alignItems: "center",
              gap: "10px",
            }}
          >
            <img
              src={item.image}
              alt={item.name}
              style={{ width: "60px", height: "60px", objectFit: "cover" }}
            />
            <span>
              {item.name} - {item.quantity} x ${item.price} = $
              {item.price * item.quantity}
            </span>

            {/* Botón kawaii para eliminar producto */}
            <button
              type="button"
              onClick={() => removeFromCart(item.id)}
              style={{
                background: "#f1d2e2ff",
                border: "none",
                borderRadius: "50%",
                width: "28px",
                height: "28px",
                cursor: "pointer",
                fontSize: "16px",
                color: "#fff",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              ❌
            </button>
          </li>
        ))}
      </ul>

      <h3>Total: ${totalPrice}</h3>
      <button
        onClick={clearCart}
        style={{
          marginTop: "10px",
          background: "#dfd7e2ff",
          border: "none",
          padding: "8px 12px",
          borderRadius: "8px",
          cursor: "pointer",
          color: "#fff",
          fontWeight: "bold",
        }}
      >
        Vaciar carrito
      </button>
    </div>
  );
}
