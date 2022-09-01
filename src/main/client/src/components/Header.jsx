import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "./img/logo.png"
import homeIcon from "./img/home-icon.png";
import backIcon from "./img/back-icon.png";
import "./css/header.css";

const Header = () => {
  const navigate = useNavigate();

  const [loggedIn, setLoggedIn] = useState(false);
  const [username, setUsername] = useState(null);

  useEffect(() => {
    setLoggedIn(localStorage.getItem("loggedIn"));
    loggedIn === "true" && setUsername(localStorage.getItem("username"));
  }, [loggedIn]);
  return (
    <div id="header-container">
      <div id="nav-button-container">
        <button onClick={() => navigate("/")} className="nav-button">
          <img src={homeIcon} id="home-button-img" width="50px" alt="Home" />
        </button>
        <button onClick={() => navigate(-1)} className="nav-button">
          <img src={backIcon} id="back-button-img" width="50px" alt="Back" />
        </button>
      </div>
      {/* <h1>QA Bank</h1> */}
      <img src={logo} alt="QA Bank" width="150px" height="150px"/>
      <div id="logged-in-container">
        <h3>{loggedIn === "true" ? `Logged in as ${username}` : `Not logged in`}</h3>
      </div>
    </div>
  );
};

export default Header;
