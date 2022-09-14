import React from "react";
import CustomerInputs from "../components/CustomerInputs";

const CustomerCreation = () => {
  return localStorage.getItem("loggedIn") === "true" && localStorage.admin === "true" ? (
    <div className="content-container">
      <h2>Create a New Customer</h2>
      {<CustomerInputs createNew={true} />}
    </div>
  ) : (
    (window.location.href = "/")
  );
};

export default CustomerCreation;
