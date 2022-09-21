import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import AccountInputs from "../components/AccountInputs";

const AccountCreation = () => {
  const navigate = useNavigate();
  const { id } = useParams() ? useParams() : false;
  return localStorage.getItem("loggedIn") === "true" && localStorage.admin === "true" ? (
    <div className="content-container">
      <h2>Open a New Account</h2>
      {<AccountInputs createNew={true} existingCustomerId={id} />}
    </div>
  ) : (
    navigate("/")
  );
};

export default AccountCreation;
