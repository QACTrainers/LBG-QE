import React from "react";
import CustomerInputs from "../components/CustomerInputs";
import { useNavigate } from "react-router-dom";

const CustomerCreation = () => {
  let navigate = useNavigate();

  return localStorage.getItem("loggedIn") === "true" && localStorage.admin === "true" ? (
    <div className="content-container">
      <h2>Create a New Customer</h2>
      {<CustomerInputs createNew={true} />}
    </div>
  ) : (
    // (window.location.href = "/")
    navigate("/")
  );
};

export default CustomerCreation;
