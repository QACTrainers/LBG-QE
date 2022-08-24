import React from "react";
import "./css/shared.css"
const CustomerMaintenance = () => {
  return (
    <div className="main-container">
      <h1>Customer Search</h1>
      <input type="text" list="search-options"/>
      <datalist id="search-options">
        <option>Account ID</option>
        <option>Customer ID</option>
        <option>Surname</option>
        <option>Email</option>
        <option>Postcode</option>
      </datalist>
      <h1></h1>
      <div id=""></div>
    </div>
  );
};

export default CustomerMaintenance;
