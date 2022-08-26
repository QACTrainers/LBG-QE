import React, { useState } from "react";
import CustomerInputs from "../components/CustomerInputs";
import "./css/shared.css";
import "./css/customer-maintenance.css";

const CustomerMaintenance = () => {
  return (
    <div className="maintenance-container">
      <h2>Update Customer</h2>
      <CustomerInputs />
    </div>
  );
};

export default CustomerMaintenance;
