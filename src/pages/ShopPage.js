import Layout from "../Layout/Layout";
import { useCart, useCartActions } from "../Provider/CartProvider";
import { chekInCart } from "../utils/checkInCart";
import { useState } from "react";
import Style from "./shopPage.module.css";
import { Products } from "../data";
import { AiTwotoneStar } from "react-icons/ai";

import { Link } from "react-router-dom";

const ShopPage = ({ history, location }) => {
  const { cart } = useCart();
  const dispatch = useCartActions();
  const [products, setProducts] = useState(Products);
  const Smart = products.slice(5);
  const Classic = products.slice(0, 5);

  const addProductHandler = (product) => {
    if (chekInCart(cart, product)) {
      history.push("/checkout");
    } else {
      dispatch({ type: "ADD_TO_CART", payload: product });
    }
  };
  if (!products) return <div>Loading ...</div>;

  return (
    <Layout>
      <main className={Style.container}>
        <section className={Style.productList}>
          {products.map((product) => (
            <section className={Style.product}>
              <Link to={`/product/${product.id}`}>
                <div className="productImg">
                  <img src={product.image} alt={product.name} />
                </div>
              </Link>

              <div className="productDesc">
                <div>
                  <p>{product.name}</p>
                  <div>
                    <AiTwotoneStar color="#6777e6" />
                    <AiTwotoneStar color="#6777e6" />
                    <AiTwotoneStar color="#6777e6" />
                    <AiTwotoneStar color="#6777e6" />
                    <AiTwotoneStar color="#f0f1fc" />
                  </div>
                </div>
                <div>
                  <p>${product.offPrice}</p>
                  <p>${product.price}</p>
                </div>
                <button
                  className={`${Style.btn} ${Style.primary}`}
                  onClick={() => addProductHandler(product)}
                >
                  {chekInCart(cart, product) ? "Continue ordering" : "Buy Now"}
                </button>
              </div>
            </section>
          ))}
         
        </section>
      </main>
    </Layout>
  );
};

export default ShopPage;
