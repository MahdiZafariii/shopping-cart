import { createContext, useContext, useEffect, useReducer } from "react";
import CartReducer from "./CartReducer";

const CartContext = createContext();
const CartContextDispatcher = createContext();
const CartProvider = ({ children }) => {
  let initialState = {
    cart: [],
    total: 0,
  };

  const [cart, dispatch] = useReducer(CartReducer, initialState);

  return (
    <CartContext.Provider value={cart}>
      <CartContextDispatcher.Provider value={dispatch}>
        {children}
      </CartContextDispatcher.Provider>
    </CartContext.Provider>
  );
};

export default CartProvider;

export const useCart = () => useContext(CartContext);
export const useCartActions = () => useContext(CartContextDispatcher);
