import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./css/shared.css";
import "./css/customer-search.css";
const axios = require("axios");

const CustomerMaintenance = () => {
  const [inputBox, setInputBox] = useState(<></>);
  const [tableBody, setTableBody] = useState(<tr></tr>);

  useEffect(() => {
    axios.get("http://localhost:9002/customer/findAll").then((res) => populateTable(res.data));
  }, []);

  const storeCustomerData = (customer) => {
    sessionStorage.setItem(`customer-${customer.id}`, JSON.stringify(customer));
  };
  const storeAccountData = (account, customerId) => {
    sessionStorage.setItem(`account-${account.id}`, JSON.stringify({ accountData: account, customerId: customerId }));
  };

  const populateTable = (data) => {
    sessionStorage.clear();
    for (let customer of data) {
      storeCustomerData(customer);
      for (let account of customer.accounts) {
        storeAccountData(account, customer.id);
      }
    }
    setTableBody(
      data.map((customer) => (
        <tr key={customer.id}>
          <td>{customer.id ? customer.id : "❌"}</td>
          <td>{customer.title ? customer.title : "❌"}</td>
          <td>{customer.surname ? customer.surname : "❌"}</td>
          <td>{customer.firstName ? customer.firstName : "❌"}</td>
          <td>{customer.dateOfBirth ? customer.dateOfBirth : "❌"}</td>
          <td>{customer.gender ? customer.gender : "❌"}</td>
          <td>{customer.customerType ? customer.customerType : "❌"}</td>
          <td>{customer.address1 ? customer.address1 : "❌"}</td>
          <td>{customer.address2 ? customer.address2 : "❌"}</td>
          <td>{customer.cityTown ? customer.cityTown : "❌"}</td>
          <td>{customer.postcode ? customer.postcode : "❌"}</td>
          <td>{customer.phoneNo ? customer.phoneNo : "❌"}</td>
          <td>{customer.email ? customer.email : "❌"}</td>
          <td>
            {customer.accounts.length > 0 ? (
              <>
                {customer.accounts.map((account) => (
                  <div>
                    <Link to={`/account-maintenance/${account.id}`}>
                      <button value="edit" id="edit-account-button" key={customer.id + "-" + account.id}>
                        {`Edit account ${account.id}`}
                      </button>
                    </Link>
                  </div>
                ))}
              </>
            ) : (
              "❌"
            )}
          </td>
          <td>
            <Link to={`/customer-maintenance/${customer.id}`}>
              <button value="edit" id="edit-button">
                Edit customer
              </button>
            </Link>
          </td>
        </tr>
      ))
    );
  };

  const getTextBox = (input) => {
    switch (input) {
      case "aid":
        return ["account", "Enter account number..."];
      case "cid":
        return ["customer", "Enter customer number..."];
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

  const submitSearch = () => {
    const inputBox = document.querySelector(".search-input")
    const inputValue = inputBox.value;
    const searchParams = inputBox.getAttribute("id").split("-")[0]
    console.log(inputValue)
    console.log(searchParams)
    // axios.get("http://localhost:9002/customer/search")
  }

  const handleSubmitChange = () => {
    let input = document.querySelector("#search-by").value;
    let inputData = getTextBox(input);
    setInputBox(<input type="text" className="search-input" id={inputData[0] + "-input"} placeholder={inputData[1]} />);

  };

  return (
    <div className="main-container">
      <h2>Customer Search</h2>
      <select defaultValue="default" id="search-by" onChange={handleSubmitChange}>
        <option value="default" disabled>
          Search by...
        </option>
        <option value="aid">Account Number</option>
        <option value="cid">Customer Number</option>
        <option value="sname">Surname</option>
        <option value="email">Email</option>
        <option value="pcode">Postcode</option>
      </select>
      {inputBox}
      <button onClick = {submitSearch}>Search</button>
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
              <th>Accounts</th>
            </tr>
          </thead>
          <tbody>{tableBody}</tbody>
        </table>
      </div>
    </div>
  );
};

export default CustomerMaintenance;
