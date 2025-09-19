export default function CartWidget({ count }) {
  return (
    <div style={{ position: "relative", fontSize: "28px", cursor: "pointer", color: "#fff" }}>
      🛒
      <span
        style={{
          position: "absolute",
          top: "-8px",
          right: "-12px",
          backgroundColor: "#158f69",
          color: "#fff",
          borderRadius: "50%",
          padding: "4px 8px",
          fontSize: "12px",
          fontWeight: "bold"
        }}
      >
        {count}
      </span>
    </div>
  );
}
