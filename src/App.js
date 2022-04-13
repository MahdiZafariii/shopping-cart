import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import CartPage from "./pages/CartPage";
import ShopPage from "./pages/ShopPage";
import CartProvider from "./Provider/CartProvider";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CheckoutPage from "./pages/CheckoutPage";
import SignupPage from "./pages/SignupPage";
import LoginPage from "./pages/LoginPage";
import AuthProvider from "./Provider/AuthProvider";
import HomePage from "./pages/HomePage";
import ProfilePage from "./pages/ProfilePage";
import ProductPage from "./pages/ProductPage";
import ScrollToTop from "./common/Scroll";

function App() {
  return (
    <Router>
      <ScrollToTop>
        <AuthProvider>
          <CartProvider>
            <ToastContainer
              position="top-right"
              autoClose={5000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
            />
            <Switch>
              <Route path="/product/:id?" component={ProductPage} />
              <Route path="/checkout" component={CheckoutPage} />
              <Route path="/profile" component={ProfilePage} />
              <Route path="/signup" component={SignupPage} />
              <Route path="/login" component={LoginPage} />
              <Route path="/cart" component={CartPage} />
              <Route path="/shop" component={ShopPage} />
              <Route path="/" component={HomePage} />
            </Switch>
          </CartProvider>
        </AuthProvider>
      </ScrollToTop>
    </Router>
  );
}

export default App;
