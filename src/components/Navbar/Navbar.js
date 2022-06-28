import React from "react";
import logo from "../../images/navbar/logo.png";
import "./Navbar.css";
import { useNavigate } from "react-router-dom";

function Navbar({ showSignInButton }) {
  const navigate = useNavigate();

  function redirectTo(path) {
    navigate(path);
  }

  return (
    <div className="navbar_container">
      <img src={logo} alt="logo" onClick={() => redirectTo("/")} />
      {showSignInButton === false ? (
        ""
      ) : (
        <button onClick={() => redirectTo("/sign-in")}>Sign In</button>
      )}
    </div>
  );
}

export default Navbar;
