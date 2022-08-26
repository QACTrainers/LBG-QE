import React, { useState } from "react";
import { Link } from "react-router-dom";
import Popup from "../components/Popup";
import Error from "../components/Error";
import "./css/main-menu.css";
import "./css/shared.css";
const axios = require("axios").default;

const MainMenu = () => {
  const [loginOpen, setLoginOpen] = useState(false);
  const [usernameError, setUsernameError] = useState(<></>);
  const [passwordError, setPasswordError] = useState(<></>);

  axios
    .get(`http://localhost:9002/user/test`)
    .then((res) => console.log(res.data));

  axios
    .post(`http://localhost:9002/user/login`, {
      username: "admin!",
      password: "IAmAnAdmin!",
    })
    .then((res) => console.table(res.data));

  const toggleLoginPopup = () => {
    setLoginOpen(!loginOpen);
  };

  const checkUsername = () => {
    let input = document.querySelector("#username-input").value;
    setUsernameError(
      input.length > 20 ? (
        <Error message="Username is too long" />
      ) : input.length === 0 ? (
        <Error message="Enter a username" />
      ) : !new RegExp(/^[a-zA-Z0-9]+$/).test(input) ? (
        <Error message="Invalid characters in username" />
      ) : (
        <></>
      )
    );
  };

  const checkPassword = () => {
    let input = document.querySelector("#password-input").value;
    setPasswordError(
      !new RegExp(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,20}$/
      ).test(input) ? (
        <Error message="Password must be between 8 and 20 characters, at least one uppercase letter, one lowercase letter, one number and one special character" />
      ) : (
        <></>
      )
    );
  };

  return (
    <div className="main-container main-menu-container">
      <h2>Main Menu</h2>
      {loginOpen && (
        <Popup
          content={
            <>
              <h2 id="popup-title">Login</h2>
              <input
                type="text"
                id="username-input"
                placeholder="Username..."
                onBlur={checkUsername}
              />
              {usernameError}
              <input
                type="password"
                id="password-input"
                placeholder="Password..."
                onBlur={checkPassword}
              />
              {passwordError}
              <input type="submit" id="login-button" />
            </>
          }
          handleClose={toggleLoginPopup}
        />
      )}
      <div id="button-container">
        <button onClick={toggleLoginPopup}>Log In</button>
        <Link to="/customer-search">
          <button>Customer Search</button>
        </Link>
        <button>Create New Customer</button>
        <button>Open New Account</button>
        <button>New Transaction</button>
        <button>Transfer</button>
      </div>
    </div>
  );
};

export default MainMenu;
