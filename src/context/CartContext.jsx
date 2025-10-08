import { createContext, useState, useContext } from "react";

// 1️⃣ Creamos el contexto
const CartContext = createContext();

// 2️⃣ Hook personalizado para acceder fácilmente al contexto
export const useCart = () => useContext(CartContext);

// 3️⃣ Componente proveedor del carrito
export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  // 🛒 Agregar un producto al carrito
  const addToCart = (product, quantity) => {
    const existing = cart.find((item) => item.id === product.id);

    if (existing) {
      // Si el producto ya está en el carrito, actualizamos su cantidad
      setCart(
        cart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        )
      );
    } else {
      // Si no está, lo agregamos nuevo
      setCart([...cart, { ...product, quantity }]);
    }
  };

  // ❌ Eliminar un producto del carrito
  const removeFromCart = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  // 🔁 Vaciar carrito
  const clearCart = () => setCart([]);

  // 💰 Calcular total
  const totalPrice = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  // 🔢 Total de unidades
  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, clearCart, totalPrice, totalItems }}
    >
      {children}
    </CartContext.Provider>
  );
};
