import React from "react";
import { useParams } from "react-router-dom";
import CustomerInputs from "../components/CustomerInputs";
import { useNavigate } from "react-router-dom";

const CustomerMaintenance = () => {
  let navigate = useNavigate();

  const { id } = useParams();
  return localStorage.getItem("loggedIn") === "true" && localStorage.admin === "true" ? (
    <div className="content-container">
      <h2>Update Customer</h2>
      {<CustomerInputs createNew={false} customerId={id} />}
    </div>
  ) : (
    // (window.location.href = "/")
    navigate("/")
  );
};

export default CustomerMaintenance;
