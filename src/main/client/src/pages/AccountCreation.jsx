import React from "react";
import AccountInputs from "../components/AccountInputs";
import { useNavigate } from "react-router-dom";
  

const AccountCreation = () => {
  let navigate = useNavigate();

  return localStorage.getItem("loggedIn") === "true" && localStorage.admin === "true" ? (
    <div className="content-container">
      <h2>Open a New Account</h2>
      {<AccountInputs createNew={true} />}
    </div>
  ) : (
    // (window.location.href = "/")
    navigate("/")
  );
};

export default AccountCreation;
