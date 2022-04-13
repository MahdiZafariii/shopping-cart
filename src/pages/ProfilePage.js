import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import Layout from "../Layout/Layout";
import { useAuth, useAuthActions } from "../Provider/AuthProvider";
import { FaSignOutAlt, FaRegUserCircle } from "react-icons/fa";
import "./ProfilePage.css";

const ProfilePage = () => {
  const history = useHistory();
  const authAction = useAuthActions();
  const userData = useAuth();

  const signoutHander = () => {
    authAction(false);
    history.push("/");
  };
  return (
    <Layout>
      <main className="container">
        <section className="profileCenter">
          <section className="linkBox">
            <ul>
              <li>
                <FaRegUserCircle className="userIcon" />
                <Link to="/profile">Profile</Link>
              </li>
              <li>
                <Link to="/cart">Cart</Link>
              </li>
              <li onClick={signoutHander} className="signoutLink">
                <FaSignOutAlt className="signoutIcons" />
                &ensp; Sign Out
              </li>
            </ul>
          </section>
          <section className="profileDesc">
            <div>
              hello {userData.name} dear <br /> welcome to my website
            </div>
          </section>
        </section>
      </main>
    </Layout>
  );
};

export default ProfilePage;
