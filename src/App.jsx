import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";

export default function App() {
  return (
    <div
      style={{
        backgroundColor: "#fdf6f9", // fondo pastel rosado
        minHeight: "100vh",
        width: "100%",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <NavBar />
      <main
        style={{
          flex: 1,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <ItemListContainer greeting="¡Bienvenido a Kawaii Plush Store! 🧸✨" />
      </main>
    </div>
  );
}
