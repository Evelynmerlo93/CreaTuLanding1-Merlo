export default function ItemListContainer({ greeting }) {
  return (
    <section
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          textAlign: "center",
          backgroundColor: "#c6c6f0", // lavanda pastel
          padding: "50px",
          borderRadius: "20px",
          boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
          maxWidth: "800px",
        }}
      >
        <h2
          style={{
            fontSize: "32px",
            marginBottom: "20px",
            color: "#ff69b4", // rosa fuerte en lugar de naranja
          }}
        >
          {greeting}
        </h2>
        <p style={{ fontSize: "18px", color: "#555" }}>
          Aquí próximamente verás nuestro catálogo de peluches anime
          coleccionables. 🌸
        </p>
        <button
          style={{
            marginTop: "20px",
            padding: "12px 24px",
            backgroundColor: "rgba(198, 198, 240, 1)", // lavanda pastel
            color: "#fff",
            border: "none",
            borderRadius: "25px",
            cursor: "pointer",
            fontSize: "16px",
            transition: "0.3s",
          }}
          onMouseOver={(e) => (e.target.style.backgroundColor = "#a78bfa")} // lavanda más intensa
          onMouseOut={(e) =>
            (e.target.style.backgroundColor = "rgba(198, 198, 240, 1)")
          }
        >
          Explorar colecciones ✨
        </button>
      </div>
    </section>
  );
}
