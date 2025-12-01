import React, { useContext, useState, useEffect } from "react";
import { StoreContext } from "../../context/StoreContext";
import "./Navbar.css";
import { assets } from "../../assets/assets";
import { Link, useNavigate, useLocation } from "react-router-dom";

const Navbar = ({ setShowLogin }) => {
  const { getTotalQuantity, token, setToken } = useContext(StoreContext);
  const totalQuantity = getTotalQuantity();

  const [menu, setMenu] = useState("home");
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    // Reset menu state when not on home page
    if (location.pathname !== "/") {
      setMenu("");
    } else {
      setMenu("home");
    }
  }, [location.pathname]);

  const Logout = () => {
    localStorage.removeItem("token");
    setToken("");
    navigate("/");
  }

  return (
    <div className={`navbar ${token ? "navbar-logged-in" : "navbar-logged-out"}`}>
      <Link to="/">
        <img src={assets.logo} alt="logo" className="logo" />
      </Link>
      <ul className="navbar-menu">
        <Link
          to="/"
          onClick={() => setMenu("home")}
          className={location.pathname === "/" && menu === "home" ? "active" : ""}
        >
          Home
        </Link>
        <a
          href="#explore-menu"
          onClick={() => setMenu("menu")}
          className={menu === "menu" ? "active" : ""}
        >
          Menu
        </a>

        <a
          href="#footer"
          onClick={() => setMenu("contact-us")}
          className={menu === "contact-us" ? "active" : ""}
        >
          Contact Us
        </a>
      </ul>
      <div className="navbar-right">
        <div className="navbar-basket-icon">
          <Link to="/cart">
            <img src={assets.basket_icon} alt="basket_icon" />
          </Link>
          <div className={totalQuantity === 0 ? "dotHidden" : "dot"}>
            <p>{totalQuantity}</p>
          </div>
        </div>
        {!token ? (
          <button className="navbar-signin-btn" onClick={() => setShowLogin(true)}>Sign in</button>
        ) : (
          <div className="navbar-profile">
            <img
              src={assets.profile_icon}
              alt=""
              className="navbar-profile-icon"
            />
            <ul className="nav-profile-dropdown">
              <li onClick={() => navigate('/myorders')} className="nav-dropdown-item">
                <img src={assets.bag_icon} alt="" />
                <p>Orders</p>
              </li>
              <hr className="nav-dropdown-divider" />
              <li
                className="nav-dropdown-item nav-dropdown-logout"
                onClick={Logout}
              >
                <img src={assets.logout_icon} alt="" />
                <p>Logout</p>
              </li>
            </ul>

          </div>
        )}

      </div>
    </div>
  );
};

export default Navbar;
