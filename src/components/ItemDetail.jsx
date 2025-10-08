import React from "react";
import ItemCount from "./ItemCount";

export default function ItemDetail({ product, onAdd }) {
  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <h1>{product.name}</h1>
      <img
        src={product.image}
        alt={product.name}
        style={{ width: "300px", height: "300px", objectFit: "cover" }}
      />
      <h2>${product.price}</h2>
      <p>{product.description}</p>

      <ItemCount stock={10} initial={1} onAdd={onAdd} />
    </div>
  );
}
