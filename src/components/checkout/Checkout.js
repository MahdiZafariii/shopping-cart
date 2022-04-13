import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import { useAuth } from "../../Provider/AuthProvider";
import { useCart } from "../../Provider/CartProvider";
import "./Checkout.css";

const Checkout = () => {
  const auth = useAuth();
  const history = useHistory();
  const { cart, total } = useCart();

  if (cart.length && !auth) {
    history.push("/login");
  }
  if (!cart.length) {
    return (
      <main className="container">
        <Link to="/">
          <p>go to shopping</p>
        </Link>
      </main>
    );
  }
  return (
    <main className="container">
      <section className="summeryCenter">
        <section className="summeryItemList">
          <h3>Checkout Details</h3>
          <div>
            <p>Name : {auth.name}</p>
            <p>Email : {auth.email}</p>
            <p>PhoneNumber : {auth.phoneNumber}</p>
          </div>
        </section>
        <section className="summery">
          <h3>Your order</h3>

          <div className="productDescribtion">
            <p>Products</p>
            <p>subtotal</p>
          </div>
          <div className="products">
            {cart &&
              cart.map((c) => {
                return (
                  <div className="productPrice">
                    <p>
                      {c.name} * {c.quantity}
                    </p>
                    <p> {c.offPrice * c.quantity}</p>
                  </div>
                );
              })}
          </div>
          <div className="totalPrice">
            <p>Total Price </p> <p>{total}</p>
          </div>
        </section>
      </section>
    </main>
  );
};

export default Checkout;
