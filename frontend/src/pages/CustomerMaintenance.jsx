import React,{useEffect} from "react";
import { useParams } from "react-router-dom";
import CustomerInputs from "../components/CustomerInputs";
import { useNavigate, useLocation } from "react-router-dom";
import { useState } from "react";

const CustomerMaintenance = () => {
  let navigate = useNavigate();
  const [count, setCount] = useState(0);
  const location = useLocation();
  

  useEffect(() => {
    setCount(1);
    count===1 && navigate(0);
    console.log(count);
  }, [location]);

  const { id } = useParams();
  return localStorage.getItem("loggedIn") === "true" && localStorage.admin === "true" ? (
    <div className="content-container">
      <h2>Update Customer</h2>
      {<CustomerInputs createNew={false} customerId={id} />}
    </div>
  ) : (
    navigate("/")
  );
};

export default CustomerMaintenance;
