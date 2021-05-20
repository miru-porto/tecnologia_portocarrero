import { createContext, useEffect, useState } from "react";
import { React } from "react";
export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    console.log(cart);
  }, [cart]);

  const addToCart = (qty, product) => {
    if (itemInCart(product.id)) {
      const newCart = [...cart];

      newCart.forEach((p) => {
        if (p.id === product.id) {
          console.log(p);
          p.qty = p.qty + qty;
        }
      });

      setCart(newCart);
    } else {
      //el producto no esta
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
    return cart.some(p => p.id === productId);
  };
  
  const removeItems = () => setCart([]);

  //logica del context
  return (
    <CartContext.Provider
      value={{
        cart,
        setCart,
        addToCart,
        getSize,
        removeFromCart,
        getTotalPrice,
        getSubtotal,
        removeItems
      }}
    >
      {children}
    </CartContext.Provider>
  );
};