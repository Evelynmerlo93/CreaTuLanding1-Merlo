import { useState } from "react";

export default function ItemCount({ stock = 10, initial = 1, onAdd }) {
  const [count, setCount] = useState(initial);

  const handleIncrease = () => {
    if (count < stock) setCount(count + 1);
  };

  const handleDecrease = () => {
    if (count > 1) setCount(count - 1);
  };

  return (
    <div style={{ marginTop: "20px" }}>
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "10px" }}>
        <button
          onClick={handleDecrease}
          style={{
            backgroundColor: "#ff69b4",
            border: "none",
            color: "white",
            fontSize: "18px",
            borderRadius: "5px",
            padding: "5px 10px",
            cursor: "pointer",
          }}
        >
          −
        </button>

        <span style={{ fontSize: "18px", fontWeight: "bold" }}>{count}</span>

        <button
          onClick={handleIncrease}
          style={{
            backgroundColor: "#ff69b4",
            border: "none",
            color: "white",
            fontSize: "18px",
            borderRadius: "5px",
            padding: "5px 10px",
            cursor: "pointer",
          }}
        >
          +
        </button>
      </div>

      <button
        onClick={() => onAdd(count)}
        style={{
          marginTop: "15px",
          backgroundColor: "#ff85c1",
          border: "none",
          color: "white",
          borderRadius: "5px",
          padding: "10px 20px",
          fontWeight: "bold",
          cursor: "pointer",
        }}
      >
        Agregar al carrito 🛒
      </button>
    </div>
  );
}
