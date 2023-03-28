import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import AccountInputs from "../components/AccountInputs";

const AccountCreation = () => {
  let navigate = useNavigate();
  const { id } = useParams(); // ? useParams() : false; // DO NOT USE REACT HOOKS CONDITIONALLY

  useEffect(() => sessionStorage.setItem("from-search", "false"), []);
  return localStorage.getItem("loggedIn") === "true" && localStorage.admin === "true" ? (
    <div className="content-container">
      <h2>Open a New Account</h2>
      {<AccountInputs createNew={true} defaultCustomerId={id} />}
    </div>
  ) : (
    navigate("/")
  );
};

export default AccountCreation;
