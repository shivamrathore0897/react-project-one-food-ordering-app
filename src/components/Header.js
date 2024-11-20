import { useState, useContext } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom"
import userContext from "../utils/userContext";
import { useSelector } from "react-redux";



let Header = () => {
  // console.log("Header Calls")
  let [loginBtnName, setLoginBtnName] = useState("Login")

  let data = useContext(userContext);
  // console.log("🚀 ~ Header ~ userContext: new way of using context, It is generally used in Function Based Components", data);

  // store = react store, cart = slice name, items = slice items
  // Now you can use this cartItems like a normal js obj
  let cartItems = useSelector((store) => store.cart.items)
  // console.log("🚀 ~ Header ~ cartItems:", cartItems);

  return (
    <div className="header">
      <div className="logo-container">
        <img src={LOGO_URL}></img>
      </div>
      <div className="nav-items">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About Us</Link></li>
          <li><Link to="/contact">Contact Us</Link></li>
          <li><Link to="/grocery">Grocery</Link></li>
          <li><Link to="/cart">Cart ({cartItems.length} items)</Link></li>
          <li>{data.loggedInUser}</li>
          <button className="login-logout-btn" onClick={() => {
            loginBtnName === "Login" ? setLoginBtnName("Logout") : setLoginBtnName("Login")
          }}>{loginBtnName}</button>
        </ul>
      </div>
    </div>
  );
};

export default Header;