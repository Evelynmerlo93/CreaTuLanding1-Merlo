import { NavLink, Link } from "react-router-dom";
import { products } from "../data/products"; // ajusta la ruta si es distinta
import CartWidget from "./CartWidget";

export default function NavBar() {
  // Creamos un array de categorías únicas
  const categories = [...new Set(products.map((p) => p.category))];

  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "10px 20px",
        backgroundColor: "#ffb6c1",
      }}
    >
      <Link
        to="/"
        style={{
          fontWeight: "bold",
          fontSize: "20px",
          color: "#fff",
          textDecoration: "none",
        }}
      >
        Kawaii Plush
      </Link>

      {/* Menú dinámico */}
      <ul
        style={{
          listStyle: "none",
          display: "flex",
          gap: "15px",
          margin: 0,
        }}
      >
        {categories.map((cat) => (
          <li key={cat}>
            <NavLink
              to={`/category/${cat}`}
              style={({ isActive }) => ({
                color: isActive ? "#000" : "#fff",
                textDecoration: "none",
                fontWeight: isActive ? "bold" : "normal",
              })}
            >
              {cat}
            </NavLink>
          </li>
        ))}
      </ul>

      <CartWidget />
    </nav>
  );
}
