import React from "react";
import { useParams } from "react-router-dom";
import CustomerInputs from "../components/CustomerInputs";

const CustomerMaintenance = () => {
  const { id } = useParams();
  <div className="content-container">
    <h2>Update Customer</h2>
    {<CustomerInputs createNew={false} customerId={id} />}
  </div>;
};

export default CustomerMaintenance;
