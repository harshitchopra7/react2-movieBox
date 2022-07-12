import React from "react";
import logo from "../../images/navbar/logo.png";
import "./Navbar.css";
import { useNavigate } from "react-router-dom";
import Button from "../../global/Button/Button";
import { auth } from "../../firebase"

function Navbar({
  showSignInButton,
  showInput,
  user,
  setUser,
  showLogoutButton,
}) {
  const navigate = useNavigate();

  function redirectTo(path) {
    navigate(path);
  }

  function logout() {
    auth.signOut()
    setUser(false)
  }

  return (
    <div className="navbar_container">
      <img src={logo} alt="logo" onClick={() => redirectTo("/")} />
      {showSignInButton === false ? (
        ""
      ) : (
        <Button
          text="Sign In"
          onClicking={() => redirectTo("/signin-signup")}
        />
      )}

      {showInput === true || showLogoutButton === true ? (
        <div className="navbar_input_and_logout_container">
          {showInput && (
            <div className="navbar_inputfield">
              <input placeholder="Search movies" />
            </div>
          )}
          {showLogoutButton === true ? <Button onClicking={logout} text="Logout" /> : ""}
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default Navbar;
