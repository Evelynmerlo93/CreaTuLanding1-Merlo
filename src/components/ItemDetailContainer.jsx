import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { products } from "../data/products";
import ItemCount from "./ItemCount"; // Importamos ItemCount
import { useCart } from "../context/CartContext"; // Importamos el contexto

export default function ItemDetailContainer() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const { addToCart } = useCart(); // Extraemos la función del carrito

  useEffect(() => {
    const getProduct = new Promise((resolve) => {
      setTimeout(() => {
        const foundProduct = products.find((p) => p.id === parseInt(id));
        resolve(foundProduct);
      }, 500);
    });

    getProduct.then((res) => setProduct(res));
  }, [id]);

  if (!product) return <h2 style={{ textAlign: "center" }}>Cargando...</h2>;

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

      {/* Aquí agregamos el ItemCount para añadir al carrito */}
      <ItemCount
        stock={10}
        initial={1}
        onAdd={(quantity) => addToCart(product, quantity)}
      />
    </div>
  );
}
