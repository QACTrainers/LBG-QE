import React from "react";
import CustomerInputs from "../components/CustomerInputs";
import "./css/shared.css";
import "./css/input-pages.css";

const CustomerCreation = () => {
  return localStorage.getItem("loggedIn") && localStorage.admin ? (
    <div className="content-container">
      <h2>Create a New Customer</h2>
      {<CustomerInputs createNew={true} />}
    </div>
  ) : (
    (window.location.href = "/")
  );
};

export default CustomerCreation;
