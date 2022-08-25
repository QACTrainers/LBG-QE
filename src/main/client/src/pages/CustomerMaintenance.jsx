import React from "react";
import { useState } from "react";
import "./css/shared.css";

const CustomerMaintenance = () => {
  const [inputBox, setInputBox] = useState(<></>);

  const getTextBox = (input) => {
    switch (input) {
      case "aid":
        return ["account-id-input", "Enter account number..."];
      case "cid":
        return ["customer-id", "Enter customer number..."];
      case "sname":
        return ["surname", "Enter customer surname..."];
      case "email":
        return ["email", "Enter customer email..."];
      case "pcode":
        return ["postcode", "Enter customer postcode..."];
      default:
        return [];
    }
  };

  const handleSubmitChange = () => {
    let input = document.querySelector("#search-by").value;
    let inputData = getTextBox(input);
    setInputBox(
      <input
        type="text"
        id={inputData[0] + "-input"}
        placeholder={inputData[1]}
      />
    );
  };
  return (
    <div className="main-container">
      <h1>Customer Search</h1>
      <select id="search-by" onChange={handleSubmitChange}>
        <option disabled>Search by...</option>
        <option value="aid">Account Number</option>
        <option value="cid">Customer Number</option>
        <option value="sname">Surname</option>
        <option value="email">Email</option>
        <option value="pcode">Postcode</option>
      </select>
      {inputBox}
      <div id="">
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>Surname</th>
              <th>Forename</th>
              <th>DoB</th>
              <th>Sex</th>
              <th>Type</th>
              <th>Address 1</th>
              <th>Address 2</th>
              <th>City</th>
              <th>Postcode</th>
              <th>Phone no</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Mr</td>
              <td>Ayling</td>
              <td>Thomas</td>
              <td>06/06/01</td>
              <td>M</td>
              <td>Premium ;)</td>
              <td>308 Negra Arroyo Lane</td>
              <td>N/A</td>
              <td>Luton</td>
              <td>SW19 8JN</td>
              <td>077070070770</td>
              <td>nonya-business@gmail.com</td>
              <td><button value="edit" id="edit-button">Edit user</button></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CustomerMaintenance;
