import { Link } from "react-router-dom";

export default function ItemList({ items }) {
  return (
    <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
      {items.map((item) => (
        <div
          key={item.id}
          style={{
            border: "1px solid #ccc",
            padding: "10px",
            margin: "10px",
            width: "200px",
            textAlign: "center",
          }}
        >
          <img
            src={item.image}
            alt={item.name}
            style={{ width: "100%", height: "200px", objectFit: "cover" }}
          />
          <h3>{item.name}</h3>
          <p>${item.price}</p>
          <Link to={`/item/${item.id}`}>
            <button style={{ padding: "5px 10px" }}>Ver detalle</button>
          </Link>
        </div>
      ))}
    </div>
  );
}
