import React from "react";
import { Link } from "react-router-dom";
import img from "./img/home-icon.png";
import "./css/header.css";

const Header = () => {
  return (
    <div id="header-container">
      <Link to="/">
        <img src={img} id="home-button-img" width="75px" alt="Home" />
      </Link>
      <h1>QA Bank</h1>
      <div id="spacer" />
    </div>
  );
};

export default Header;
