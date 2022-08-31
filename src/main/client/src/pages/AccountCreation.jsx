import React from "react";
import AccountInputs from "../components/AccountInputs";

const AccountCreation = () => {
  return (
    <div className="content-container">
      <h2>Open a New Account</h2>
      {<AccountInputs createNew={true} />}
    </div>
  );
};

export default AccountCreation;
