import { FaBoxOpen } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./EmptyCart.css";

const EmptyCart = () => {
  return (
    <section className="empty">
      <FaBoxOpen className="boxIcon" />
      <p>the cart is empty</p>
      <Link to="/shop">
        <button className="shopBtn">Go To Shop</button>
      </Link>
    </section>
  );
};

export default EmptyCart;
