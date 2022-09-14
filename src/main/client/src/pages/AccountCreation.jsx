import React from "react";
import AccountInputs from "../components/AccountInputs";

const AccountCreation = () => {
  return localStorage.getItem("loggedIn") === "true" && localStorage.admin === "true" ? (
    <div className="content-container">
      <h2>Open a New Account</h2>
      {<AccountInputs createNew={true} />}
    </div>
  ) : (
    (window.location.href = "/")
  );
};

export default AccountCreation;
