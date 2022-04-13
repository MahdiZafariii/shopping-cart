import { toast } from "react-toastify";

const CartReducer = (state, action) => {
  const addProductToCart = (state, payload) => {
    const updatedCart = [...state.cart];
    //   console.log(updatedCart);
    const updatedItemIndex = updatedCart.findIndex(
      (item) => item.name === payload.name
    );
    const updatedItem = { ...updatedCart[updatedItemIndex] };
    if (updatedItemIndex < 0) {
      updatedCart.push({ ...payload, quantity: 1 });
      toast.success(`${payload.name} added in cart`);
      console.log(updatedItem);
    } else {
      updatedItem.quantity++;
      updatedCart[updatedItemIndex] = updatedItem;
    }
    return {
      ...state,
      cart: updatedCart,
      total: state.total + payload.offPrice,
    };
  };
  const removeProducctFromCart = (state, payload) => {
    const updatedCart = [...state.cart];
    const updatedItemIndex = updatedCart.findIndex(
      (item) => item.name === payload.name
    );
    const updatedItem = { ...updatedCart[updatedItemIndex] };

    if (updatedItem.quantity === 1) {
      const filteredCart = updatedCart.filter(
        (item) => item.name !== payload.name
      );
      toast.error(`${updatedItem.name} delete from cart`);

      return {
        ...state,
        cart: filteredCart,
        total: state.total - payload.offPrice,
      };
    } else {
      console.log(updatedItem);
      updatedItem.quantity--;
      updatedCart[updatedItemIndex] = updatedItem;
      return {
        ...state,
        cart: updatedCart,
        total: state.total - payload.offPrice,
      };
    }
  };

  switch (action.type) {
    case "ADD_TO_CART":
      return addProductToCart(state, action.payload);
    case "REMOVE_PRODUCT":
      return removeProducctFromCart(state, action.payload);
    default:
      return state;
  }
};

export default CartReducer;
