import React, {useEffect} from "react";
import CustomerInputs from "../components/CustomerInputs";
import { useNavigate } from "react-router-dom";

const CustomerCreation = () => {
  let navigate = useNavigate();

  useEffect(()=>
    sessionStorage.setItem("from-search", "false"), []
  )

  return localStorage.getItem("loggedIn") === "true" && localStorage.admin === "true" ? (
    <div className="content-container">
      <h2>Create a New Customer</h2>
      {<CustomerInputs createNew={false} />}
    </div>
  ) : (
    navigate("/")
  );
};

export default CustomerCreation;
