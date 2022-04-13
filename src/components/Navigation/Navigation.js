import { Link, NavLink, useHistory } from "react-router-dom";
import { useAuth, useAuthActions } from "../../Provider/AuthProvider";
import { useCart } from "../../Provider/CartProvider";
import { motion } from "framer-motion";
import { BsSmartwatch, BsCart2 } from "react-icons/bs";
import "./Navigation.css";
import { Turn as Hamburger } from "hamburger-react";
import { FaSignOutAlt, FaRegUserCircle } from "react-icons/fa";
import { useState } from "react";

const Navigation = () => {
  const history = useHistory();
  const { cart } = useCart();
  const userData = useAuth();
  const authAction = useAuthActions();
  const [isOpen, setOpen] = useState(false);
  const [isOpenHamburger, setOpenHamburger] = useState(false);
  const clickHandler = () => {
    if (userData) {
      setOpen(!isOpen);
    } else {
      setOpen(false);
    }
  };
  const signoutHander = () => {
    authAction(false);
    history.push("/");
    setOpen(false);
  };
  const openMenuHandler = () => {
    setOpenHamburger(!isOpenHamburger);
  };
  const animateFrom = {
    opacity: 0,
    y: -40,
  };
  const animateto = {
    opacity: 1,
    y: 0,
  };
  return (
    <>
      <header className="mainNavigation">
        <section className="desktopHeader">
          <nav className="desktopNav">
            <div className="logoNav">
              <BsSmartwatch />
              <p>Watch</p>
            </div>
            <ul>
              <li>
                <NavLink to="/" activeClassName="activeLink" exact>
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/shop" activeClassName="activeLink" exact>
                  Product
                </NavLink>
              </li>
              <li>
                <NavLink to="/signup" activeClassName="activeLink" exact>
                  Sign up
                </NavLink>
              </li>
              <li>
                <NavLink to="/login" activeClassName="activeLink" exact>
                  Login
                </NavLink>
              </li>
            </ul>
            <ul>
              <li className="cartLink">
                <NavLink to="/cart" activeClassName="activeLink">
                  Cart
                </NavLink>
                <span>{cart.length}</span>
              </li>
            </ul>
          </nav>
        </section>
        <section className="mobileHeader">
          <h1>Mahdi Shopping</h1>
          <ul className="cartLinkContainer">
            <li className="cartLinkMobile">
              <NavLink to="/cart" activeClassName="activeLinkMobile">
                <BsCart2 color="#fff" />
              </NavLink>
              <span>{cart.length}</span>
            </li>
          </ul>
          <nav className="mobileNav">
            <div className="iconContainer">
              <Hamburger
                toggled={isOpenHamburger}
                toggle={setOpenHamburger}
                color="#fff"
              />
            </div>
            {isOpenHamburger && (
              <ul>
                <NavLink to="/" onClick={openMenuHandler}>
                  <motion.li
                    animate={animateto}
                    initial={animateFrom}
                    transition={{ delay: 0.05 }}
                  >
                    Home
                  </motion.li>
                </NavLink>
                <NavLink to="/shop" onClick={openMenuHandler}>
                  <motion.li
                    animate={animateto}
                    initial={animateFrom}
                    transition={{ delay: 0.1 }}
                  >
                    Shop
                  </motion.li>
                </NavLink>
                <NavLink
                  to={userData ? "/profile" : "/login"}
                  onClick={openMenuHandler}
                >
                  <motion.li
                    animate={animateto}
                    initial={animateFrom}
                    transition={{ delay: 0.2 }}
                  >
                    {userData ? userData.name : "Signin/Login"}
                  </motion.li>
                </NavLink>
              </ul>
            )}
          </nav>
        </section>
      </header>
      {isOpen && (
        <section className="userMenu">
          <ul>
            <Link to="/profile">
              <li className="profileOption">
                <FaRegUserCircle className="userIcon" />
                Profile
              </li>
            </Link>
            <li onClick={signoutHander} className="signoutOption">
              <FaSignOutAlt className="signoutIcons" />
              Sign Out
            </li>
          </ul>
        </section>
      )}
    </>
  );
};

export default Navigation;
