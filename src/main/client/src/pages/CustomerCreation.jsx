import React from "react";
import CustomerInputs from "../components/CustomerInputs";
import "./css/shared.css";
import "./css/customer-maintenance.css";

const CustomerCreation = () => {
  return (
    <div className="maintenance-container">
      <h2>Create a New Customer</h2>
      {<CustomerInputs createNew={true} />}
    </div>
  );
};

export default CustomerCreation;
