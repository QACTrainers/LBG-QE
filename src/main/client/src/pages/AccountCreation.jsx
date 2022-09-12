import React from "react";
import AccountInputs from "../components/AccountInputs";

const AccountCreation = () => {
  return localStorage.getItem("loggedIn") && localStorage.admin ? (
    <div className="content-container">
      <h2>Open a New Account</h2>
      {<AccountInputs createNew={true} />}
    </div>
  ) : (
    (window.location.href = "/")
  );
};

export default AccountCreation;
