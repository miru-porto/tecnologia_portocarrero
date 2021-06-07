import { createContext, useEffect, useState } from "react";
import { React } from "react";
export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(
    localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")) : []
  );
  const [message, setMessage] = useState("");

  useEffect(() => {
    console.log(cart);
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (qty, product) => {
    if (itemInCart(product.id)) {
      const newCart = [...cart];

      newCart.forEach((p) => {
        if (p.id === product.id) {
          console.log(p.stock);
          if (p.qty + qty <= product.stock) {
            p.qty += qty;
          } else {
            p.qty = parseInt(product.stock);
            setMessage(
              `¡Llevás como máximo ${product.stock} de este producto!`
            );
            console.log(p);
          }
        }
      });

      setCart(newCart);
      console.log(newCart);
    } else {
      setCart([...cart, { ...product, qty }]);
    }
  };

  const getSize = () => {
    return cart.reduce((acc, p) => acc + p.qty, 0);
  };

  const getTotalPrice = () => {
    return cart.reduce((acc, p) => acc + p.qty * p.price, 0);
  };

  const getSubtotal = (p) => {
    return p.qty * p.price;
  };

  const removeFromCart = (productId) => {
    const newCart = cart.filter((product) => product.id !== productId);
    setCart(newCart);
  };

  const itemInCart = (productId) => {
    return cart.some((p) => p.id === productId);
  };

  const removeItems = () => setCart([]);

  return (
    <CartContext.Provider
      value={{
        cart,
        message,
        setMessage,
        setCart,
        addToCart,
        getSize,
        removeFromCart,
        getTotalPrice,
        getSubtotal,
        removeItems,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
