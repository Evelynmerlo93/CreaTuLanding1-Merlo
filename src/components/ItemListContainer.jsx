import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { products } from "../data/products";
import ItemList from "./ItemList";

export default function ItemListContainer({ greeting }) {
  const { categoryId } = useParams();
  const [items, setItems] = useState([]);

  useEffect(() => {
    const getProducts = new Promise((resolve) => {
      setTimeout(() => {
        if (categoryId) {
          resolve(products.filter((p) => p.category === categoryId));
        } else {
          resolve(products);
        }
      }, 500);
    });

    getProducts.then((res) => setItems(res));
  }, [categoryId]);

  return (
    <div>
      <h2 style={{ textAlign: "center", marginTop: "20px" }}>
        {greeting || `Catálogo: ${categoryId}`}
      </h2>
      <ItemList items={items} />
    </div>
  );
}
