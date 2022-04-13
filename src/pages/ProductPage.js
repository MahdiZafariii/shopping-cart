import Layout from "../Layout/Layout";
import { Products } from "../data";
import "./productpage.css";
import { useCart, useCartActions } from "../Provider/CartProvider";
import { chekInCart } from "../utils/checkInCart";

const ProductPage = ({ match, history }) => {
  const id = match.params.id;
  const product = Products.filter((p) => p.id == id)[0];
  const { cart } = useCart();
  const dispatch = useCartActions();

  const addProductHandler = (product) => {
    if (chekInCart(cart, product)) {
      history.push("/checkout");
    } else {
      dispatch({ type: "ADD_TO_CART", payload: product });
    }
  };
  console.log(product);
  return (
    <Layout>
      <main className="productPage">
        <section className="productItem">
          <div className="imgContainer">
            <img src={product.image} alt="product image" />
          </div>
          <div className="descContainer">
            <h3>{product.name}</h3>
            <ul>
              <h4>Description :</h4>
              {product.description.map((desc) => {
                return <li>{desc.support}</li>;
              })}
            </ul>
          </div>
        </section>
        <section className="order">
          <h3>Order</h3>
          <div className="priceContainer">
            <p>Price : {product.price}</p>
            <p>Discount : {product.discount} %</p>
            <p>OffPrice : {product.offPrice}</p>
          </div>
          <button
            className={`${"btn"} ${"primary"}`}
            onClick={() => addProductHandler(product)}
          >
            {chekInCart(cart, product) ? "Continue ordering" : "Add To Cart"}
          </button>
        </section>
      </main>
    </Layout>
  );
};

export default ProductPage;
