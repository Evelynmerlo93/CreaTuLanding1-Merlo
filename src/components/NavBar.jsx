import CartWidget from "./CartWidget";

export default function NavBar() {
  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "15px 30px",
        background: "linear-gradient(90deg, #ffb6c1, #ff69b4)",
        boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
      }}
    >
      {/* Logo */}
      <div style={{ fontWeight: "bold", fontSize: "24px", color: "#fff" }}>
        🌸 Kawaii Plush 🧸
      </div>

      {/* Enlaces de navegación */}
      <div
        style={{
          display: "flex",
          gap: "20px",
          fontSize: "18px",
        }}
      >
        <a href="#" style={{ textDecoration: "none", color: "#fff" }}>
          Inicio
        </a>
        <a href="#" style={{ textDecoration: "none", color: "#fff" }}>
          Productos
        </a>
        <a href="#" style={{ textDecoration: "none", color: "#fff" }}>
          Contacto
        </a>
      </div>

      {/* Carrito */}
      <CartWidget count={3} />
    </nav>
  );
}
