import { createContext, useEffect, useState } from "react";
import { React } from "react";
export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  /* const [quantity, setQuantity] = useState(0); */

  useEffect(() => {
    console.log(cart);
  }, [cart]);

  const addToCart = (qty, product) => {
    if (itemInCart(product.id /*me retorna true o false*/)) {
      //que sume cantidades
      cart.forEach((p) => {
        console.log(p);
      });
    } else {
      //el producto no esta
      setCart([...cart, { ...product, qty }]);
    }
  };

  const getSize = () => {
    return cart.reduce((acc, p) =>  acc + p.qty, 0);
  };
  
  const removeFromCard = (productId) => {
    const newCart = cart.filter((product) => product.id !== productId);
    setCart(newCart);
  };
  
  const itemInCart = (productId) => {
    return cart.some((p) => p.id === productId);
  };

  useEffect(() => {
  }, [cart]);

  //logica del context
  return (
    <CartContext.Provider value={{ cart, addToCart, getSize} }>
      {children}
    </CartContext.Provider>
  );
};
  /**
   *  //SIN SPREAD OEPRATOR
   *  [
   *    {
   *      product: {name: '', price: 200 },
   *      qty: 5
   *    }
   *  ]
   *
   *  //CON SPREAD OPERATOR
   *  [
   *    {
   *       name: '',
   *       price: 200,
   *       qty: 5
   *    }
   *  ]
   */
