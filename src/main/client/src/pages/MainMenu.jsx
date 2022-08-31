import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Popup from "../components/Popup";
import Error from "../components/Error";
import InvalidButton from "../components/InvalidButton";
import "./css/main-menu.css";
import "./css/shared.css";
import axios from "axios";

const MainMenu = () => {
  const [loginOpen, setLoginOpen] = useState(false);
  const [usernameError, setUsernameError] = useState(<></>);
  const [passwordError, setPasswordError] = useState(<></>);
  const [validUsername, setValidUsername] = useState(false);
  const [validPassword, setValidPassword] = useState(false);
  const [loginError, setLoginError] = useState(<></>);

  const [loggedIn, setLoggedIn] = useState(false);
  const [userId, setUserId] = useState("");
  const [username, setUsername] = useState("");
  const [userIsAdmin, setUserIsAdmin] = useState("");

  useEffect(() => {
    setLoggedIn(localStorage.getItem("loggedIn"));
    if (loggedIn === "true") {
      setUserId(localStorage.getItem("id"));
      setUsername(localStorage.getItem("username"));
      setUserIsAdmin(localStorage.getItem("admin"));
    }
  }, [loggedIn]);

  const toggleLoginPopup = () => {
    setLoginOpen(!loginOpen);
  };

  const checkUsername = () => {
    const input = document.querySelector("#username-input").value;
    return input.length > 20
      ? (setUsernameError(<Error message="Username is too long" />), setValidUsername(false))
      : input.length === 0
      ? (setUsernameError(<Error message="Enter a username" />), setValidUsername(false))
      : !new RegExp(/^[a-zA-Z0-9]+$/).test(input)
      ? (setUsernameError(<Error message="Invalid username" />), setValidUsername(false))
      : (setUsernameError(<></>), setValidUsername(true));
  };

  const checkPassword = () => {
    let input = document.querySelector("#password-input").value;
    return !new RegExp(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,20}$/).test(input)
      ? (setPasswordError(
          <Error message="Password must be between 8 and 20 characters, at least one uppercase letter, one lowercase letter, one number and one special character" />
        ),
        setValidPassword(false))
      : (setPasswordError(<></>), setValidPassword(true));
  };

  const attemptLogIn = () => {
    if (validUsername && validPassword) {
      let username = document.querySelector("#username-input").value;
      let password = document.querySelector("#password-input").value;
      axios
        .post("http://localhost:9002/user/login", { username: username, password: password })
        .then((res) => {
          return res.data.loginAttempts >= 3
            ? setLoginError(<Error message="This account has had to many incorrect login attempts. Contact your administrator to re-activate your account" />)
            : (console.log("Success"),
              setLoginError(<></>),
              localStorage.setItem("loggedIn", "true"),
              localStorage.setItem("id", res.data.id),
              localStorage.setItem("username", res.data.username),
              localStorage.setItem("admin", res.data.admin),
              toggleLoginPopup(),
              window.location.reload(false));
        })
        .catch((err) => setLoginError(<Error message="Incorrect username or password" />));
    }
  };

  const logOut = () => {
    setLoggedIn(false);
    localStorage.setItem("loggedIn", false);
    localStorage.removeItem("id");
    localStorage.removeItem("username");
    localStorage.removeItem("admin");
    window.location.reload(false);

  return (
    <div className="main-container main-menu-container">
      <h2>Main Menu</h2>
      {loginOpen && (
        <Popup
          content={
            <>
              <h2 id="popup-title">Login</h2>
              <input type="text" id="username-input" placeholder="Username..." onBlur={checkUsername} />
              {usernameError}
              <input type="password" id="password-input" placeholder="Password..." onBlur={checkPassword} />
              {passwordError}
              <button id="login-button" onClick={attemptLogIn}>
                Log in
              </button>
              {loginError}
            </>
          }
          handleClose={toggleLoginPopup}
        />
      )}
      <div id="button-container">
        {loggedIn === "true" ? <button onClick={logOut}>Log Out</button> : <button onClick={toggleLoginPopup}>Log In</button>}

        {loggedIn === "true" && userIsAdmin === "true" ? (
          <>
            <Link to="/customer-search">
              <button>Customer Search</button>
            </Link>
            <Link to="/create-customer">
              <button>Create New Customer</button>
            </Link>
            <Link to="/create-account">
              <button>Open New Account</button>
            </Link>
          </>
        ) : (
          <>
            <InvalidButton content="Customer Search" err="Log in as an admin to access this function" />
            <InvalidButton content="Create New Customer" err="Log in as an admin to access this function" />
            <InvalidButton content="Open New Account" err="Log in as an admin to access this function" />
          </>
        )}
        <button>New Transaction</button>

        <button>Transfer</button>
      </div>
    </div>
  );
};

export default MainMenu;
