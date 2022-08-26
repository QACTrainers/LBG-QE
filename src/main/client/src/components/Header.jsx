import React from "react";
import { useNavigate } from "react-router-dom";
import homeIcon from "./img/home-icon.png";
import backIcon from "./img/back-icon.png";
import "./css/header.css";

const Header = () => {
  const navigate = useNavigate();
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
      <h1>QA Bank</h1>
      <div id="spacer" />
    </div>
  );
};

export default Header;
