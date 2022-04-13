import { Link } from "react-router-dom";
import Layout from "../Layout/Layout";
import { useCart, useCartActions } from "../Provider/CartProvider";
import EmptyCart from "../components/EmptyCart/EmptyCart";
import "./cartPage.css";

const CartPage = () => {
  const dispatch = useCartActions();
  const decHandler = (cartItem) => {
    dispatch({ type: "REMOVE_PRODUCT", payload: cartItem });
  };
  const incHandler = (cartItem) => {
    dispatch({ type: "ADD_TO_CART", payload: cartItem });
  };

  const { cart, total } = useCart();
  if (cart.length) {
    return (
      <Layout>
        <main className="container">
          <section className="cartCenter">
            <section className="cartItemList">
              {cart.map((item) => {
                return (
                  <section className="cartItem">
                    <div className="cartImg">
                      <img src={item.image} alt={item.name} />
                    </div>
                    <p>{item.name}</p>
                    <p>${item.price}</p>
                    <div className="btnGroup">
                      <button onClick={() => decHandler(item)}>-</button>
                      <button>{item.quantity}</button>
                      <button onClick={() => incHandler(item)}>+</button>
                    </div>
                  </section>
                );
              })}
            </section>
            <CartSummery cart={cart} total={total} />
          </section>
        </main>
      </Layout>
    );
  }

  return (
    <Layout>
      <EmptyCart />
    </Layout>
  );
};

export default CartPage;

const CartSummery = ({ total, cart }) => {
  const originalTotalPrice = cart.length
    ? cart.reduce((acc, curr) => acc + curr.price * curr.quantity, 0)
    : 0;

  return (
    <section className="cartSummery">
      <h2 style={{ marginBottom: "30px" }}>cart summery</h2>
      <div className="summeryItem">
        <p>original total price</p>
        <p>${originalTotalPrice}</p>
      </div>
      <div className="summeryItem">
        <p>cart dicount</p>
        <p>${originalTotalPrice - total}</p>
      </div>
      <div className="summeryItem net">
        <p>net price</p>
        <p>${total}</p>
      </div>
      <Link to="/login?redirect=checkout">
        <button
          className="btn primary"
          style={{ marginTop: "30px", width: "100%" }}
        >
          go to checkout
        </button>
      </Link>
    </section>
  );
};
