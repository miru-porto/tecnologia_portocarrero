import { createContext, useEffect, useState } from "react";
import { React } from "react";
export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [quantity, setQuantity] = useState(0);

  const addToCart = (product) => {
    setCart([...cart, product]);
    if (itemInCart(product.id /*me retorna true o false*/)) {
      //que sume cantidades
    } else {
      //el producto no esta
    }
  };

  const removeFromCard = (productId) => {
    const newCart = cart.filter((product) => product.id !== productId);
    setCart(newCart);
  };

  const itemInCart = (productId) => {
    /* si el carrito ya contiene el nombre del producto seleccionado, entonces sumar a la
    cantidad del producto seleccionado 1 */
    return cart.some((p) => p.id === productId);
  };
  useEffect(() => {
    setQuantity(cart.length);
  }, [cart]);

  //logica del context
  return (
    <CartContext.Provider value={{ cart, addToCart, quantity, removeFromCard }}>
      {children}
    </CartContext.Provider>
  );
};
