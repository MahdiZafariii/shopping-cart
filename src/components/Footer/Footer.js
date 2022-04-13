import { NavLink } from "react-router-dom";
import Style from "./Footer.module.css";
import { BsInstagram, BsFacebook, BsWhatsapp } from "react-icons/bs";
import { BsSmartwatch } from "react-icons/bs";

const Footer = () => {
  return (
    <section className={Style.footerContainer}>
      <footer className={Style.footer}>
        <div className={Style.content}>
          <h3>About</h3>
          <p>
            <NavLink to="/">Home</NavLink>
          </p>
          <p>
            <NavLink to="/#">About Product</NavLink>
          </p>
          <p>
            <NavLink to="/#">Our Process</NavLink>
          </p>
          <p>
            <NavLink to="/#">Contact</NavLink>
          </p>
        </div>

        <div className={Style.socialNetwork}>
          <div className={Style.footerLogo}>
            <BsSmartwatch />
            <p>Watch</p>
          </div>
          <p>We are Concern with Watch</p>
          <div className={Style.iconContainer}>
            <a href="https://instagram.com/mahdizafarii">
              <BsInstagram color="#fff" />
            </a>
            <a href="#">
              <BsFacebook color="#fff" />
            </a>
            <a href="#">
              <BsWhatsapp color="#fff" />
            </a>
          </div>
        </div>
        <div className={Style.contact}>
          <h3>Products</h3>
          <p>
            <NavLink to="/#">Product Pricing</NavLink>
          </p>
          <p>
            <NavLink to="/#">About Product</NavLink>
          </p>
          <p>
            <NavLink to="/#">Our Process</NavLink>
          </p>
          <p>
            <NavLink to="/#">Populer Product</NavLink>
          </p>
        </div>
      </footer>
    </section>
  );
};

export default Footer;
