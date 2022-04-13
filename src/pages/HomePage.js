import SlideShow from "../components/SlideShow/SlideShow";
import Layout from "../Layout/Layout";
import { Products } from "../data";
import { SlideData } from "../components/SlideShow/SlideShowData";
import { useState } from "react";
import baner from "../images/baner.png";
import "./homePage.css";
import { AiTwotoneStar } from "react-icons/ai";
import { chekInCart } from "../utils/checkInCart";
import { useCart, useCartActions } from "../Provider/CartProvider";

const HomePage = ({ history, location }) => {
  const { cart } = useCart();
  const dispatch = useCartActions();
  const [products, setProducts] = useState(Products);
  const [isActive, setActive] = useState({
    isActive: "true",
    id: "3",
  });
  const comments = [
    {
      id: 1,
      name: "Victor-Marie Hugo",
      job: "Web Developer",
      body: "I don’t say that you must not fall in love when you first look at someone but I believe you must take a look for the second time",
    },
    {
      id: 2,
      name: "Alvin Toffler",
      job: "UX Designer",
      body: "The illiterates of The 21st century are not those who can’t write and read but those who are not able to learn, get rid of old learnings, and learn again",
    },
    {
      id: 3,
      name: "Albert Einstein",
      job: "UI Designer",
      body: "You can hardly find someone among Geniuses around the world that doesn’t have a kind of special religious feeling for him/herself this religion is different from ordinary people’s religion",
    },
    {
      id: 4,
      name: "Thomas Jefferson",
      job: "Front-End Developer",
      body: "If a nation expects to be ignorant and free it expects what never was and never will be",
    },
    {
      id: 5,
      name: "Ali Shariati",
      job: "Back-End Developer",
      body: "I am surprised by the people who they themselves live under the lash of injustice and cry for “Husayn” who lived free",
    },
  ];
  const [comment, setComment] = useState({
    name: "Albert Einstein",
    job: "UI Designer",
    body: "You can hardly find someone among Geniuses around the world that doesn’t have a kind of special religious feeling for him/herself this religion is different from ordinary people’s religion.",
  });
  const clickHandler = (e) => {
    const selectedComment = comments.filter((c) => c.id == e.target.id);
    setComment(selectedComment[0]);
    setActive({
      isActive: "true",
      id: e.target.id,
    });
    console.log(e);
  };
  const addProductHandler = (product) => {
    if (chekInCart(cart, product)) {
      history.push("/checkout");
    } else {
      dispatch({ type: "ADD_TO_CART", payload: product });
    }
  };

  if (!products) return <div>Loading</div>;
  return (
    <Layout>
      <main className="mainPage">
        <div className="poster">
          <img src={baner} />
        </div>

        <section className="shortDesk">
          <div className="smartWatch">
            <img src="https://s4.uupload.ir/files/w_wgob.png" />
          </div>
          <div className="deskItems">
            <div className="deskItem">
              <img src="https://s4.uupload.ir/files/2_kecx.png" />
              <h3>Build Quality and Design</h3>
              <p>
                The companion app allows you to customise the button function,
                and also it allows you to use.
              </p>
            </div>
            <div className="deskItem">
              <img src="https://s4.uupload.ir/files/3_phq3.png" />
              <h3>Excellent battery life</h3>
              <p>
                With smart notifications features, the smartwatch can display
                all notifacations on the Amazfit.
              </p>
            </div>
            <div className="deskItem">
              <img src="https://s4.uupload.ir/files/4_c6xd.png" />
              <h3>Battery Life</h3>
              <p>
                in terms of battery, the company claims that the Amazfit Verge
                Lite will deliver up to 20 days.
              </p>
            </div>
            <div className="deskItem">
              <img src="https://s4.uupload.ir/files/5_1j00.png" />
              <h3>Accurate activity tracking</h3>
              <p>
                The smartwatch can track sleep with close ideal efficiency and
                deliver the data into.
              </p>
            </div>
          </div>
        </section>
        <section className="section2">
          <h2>
            Production for displaying the text, Numbers with good clarity.
          </h2>
          <p>
            You If is inconvenient to call, voice chat is always available. It
            allows you to send voice messages for them to be listened.
          </p>
          <section className="productList">
            {products.slice(0, 3).map((p) => (
              <section className="product">
                <div className="productImg">
                  <img src={p.image} alt={p.name} />
                </div>
                <div className="productDesc">
                  <div>
                    <p>{p.name}</p>
                    <div>
                      <AiTwotoneStar color="#6777e6" />
                      <AiTwotoneStar color="#6777e6" />
                      <AiTwotoneStar color="#6777e6" />
                      <AiTwotoneStar color="#6777e6" />
                      <AiTwotoneStar color="#f0f1fc" />
                    </div>
                  </div>
                  <div>
                    <p>${p.offPrice}</p>
                    <p>${p.price}</p>
                  </div>
                  <button
                    className="btn primary"
                    onClick={() => addProductHandler(p)}
                  >
                    {chekInCart(cart, p) ? "Continue ordering" : "Buy Now"}
                  </button>
                </div>
              </section>
            ))}
          </section>
          <p>You do khow that they don't want You to have lunch</p>
        </section>
        <SlideShow slides={SlideData} />
        <section className="section3">
          <p>You do khow that they don't want You to have lunch</p>
          <p>
            You If is inconvenient to call, voice chat is always available. It
            allows you to send voice messages for them to be listened.
          </p>
          <div className="commnetImgs">
            <img
              src="https://s6.uupload.ir/files/b52e290c_free-profile-photo-whatsapp-4_uufh.png"
              onClick={clickHandler}
              id="1"
              className={
                isActive.isActive && isActive.id == "1"
                  ? "activeImg"
                  : "commnetImg"
              }
            />
            <img
              src="https://s6.uupload.ir/files/profile_user_4t1u.jpg"
              onClick={clickHandler}
              id="2"
              className={
                isActive.isActive && isActive.id == "2"
                  ? "activeImg"
                  : "commnetImg"
              }
            />
            <img
              src="https://s6.uupload.ir/files/profile-pic_rac2.jpg"
              onClick={clickHandler}
              id="3"
              className={
                isActive.isActive && isActive.id == "3"
                  ? "activeImg"
                  : "commnetImg"
              }
            />
            <img
              src="https://s6.uupload.ir/files/uifaces1_9zla.jpg"
              onClick={clickHandler}
              id="4"
              className={
                isActive.isActive && isActive.id == "4"
                  ? "activeImg"
                  : "commnetImg"
              }
            />
            <img
              src="https://s6.uupload.ir/files/user_l2ow.jpg"
              onClick={clickHandler}
              id="5"
              className={
                isActive.isActive && isActive.id == "5"
                  ? "activeImg"
                  : "commnetImg"
              }
            />
          </div>
          <div className="fullComment">
            <p>{comment.body}</p>
            <div>
              <h4>{comment.name}</h4>
              <p>{comment.job}</p>
            </div>
          </div>
        </section>
        <section className="emailBox">
          <div>
            <p>You do khow that they don't want You to have lunch</p>
            <div className="formContainer">
              <input type="email" />
              <button>Send</button>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
};

export default HomePage;
