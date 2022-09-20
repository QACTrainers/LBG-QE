import React,{useEffect} from "react";
import AccountInputs from "../components/AccountInputs";
import { useNavigate } from "react-router-dom";

const AccountCreation = () => {
  let navigate = useNavigate();
  
  useEffect(()=>
    sessionStorage.setItem("from-search", "false"), []
  )

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
