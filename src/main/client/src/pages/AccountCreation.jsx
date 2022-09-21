import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import AccountInputs from "../components/AccountInputs";
import { useNavigate } from "react-router-dom";

const AccountCreation = () => {
  let navigate = useNavigate();
  const { id } = useParams() ? useParams() : false;
  
  useEffect(()=>
    sessionStorage.setItem("from-search", "false"), []
  )
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
