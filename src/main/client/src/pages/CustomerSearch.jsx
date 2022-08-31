import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Error from "../components/Error";
import RedButton from "../components/RedButton";
import "./css/shared.css";
import "./css/customer-search.css";
const axios = require("axios");

const CustomerMaintenance = () => {
  const [inputBox, setInputBox] = useState(<></>);
  const [table, setTable] = useState(<></>);
  const [searchError, setSearchError] = useState(<></>);
  const [searchButton, setSearchButton] = useState(<></>);

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
    setTable(
      data.length > 0 ? (
        <div id="table-container">
          <table>
            <thead>
              <tr>
                <th className="first-cell">ID</th>
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
                <th>Edit</th>
              </tr>
            </thead>
            <tbody>
              {data.map((customer) => (
                <tr key={customer.id}>
                  <td className="first-cell">{customer.id ? customer.id : "❌"}</td>
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
                          <div key={customer.id + "-" + account.id}>
                            <Link to={`/account-maintenance/${account.id}`}>
                              <button value="edit" id="edit-account-button">
                                {`Manage account ${account.id}`}
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
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <></>
      )
    );
  };

  const searchAll = () => {
    axios.get("http://localhost:9002/customer/findAll").then((res) => populateTable(res.data));
  };

  const submitSearch = () => {
    if (document.querySelector("#search-by").value !== "default") {
      const inputBox = document.querySelector(".search-input");
      const inputValue = inputBox.value.length > 0 ? inputBox.value : setSearchError(<Error message="Enter a value to search" />);
      const searchParams = inputBox.getAttribute("id").split("-")[0];
      console.log(inputBox.getAttribute("id"));
      axios
        .post("http://localhost:9002/customer/filter", {
          account_nr: searchParams === "account" ? inputValue : "",
          customer_nr: searchParams === "customer" ? inputValue : "",
          surname: searchParams === "surname" ? inputValue : "",
          email: searchParams === "email" ? inputValue : "",
          postcode: searchParams === "postcode" ? inputValue : "",
        })
        .then((res) => {
          populateTable(res.data);
          setSearchError(<></>);
        })
        .catch((err) => {
          console.log(err.response.status);
          setSearchError(
            err.status === 404 ? (
              <Error message="404 - Customer not found" />
            ) : err.response.status === 500 ? (
              <Error message="500 - Bad request" />
            ) : (
              <Error message="404 - Error not found :(" />
            )
          );
        });
    }
  };

  const getTextBox = (input) => {
    switch (input) {
      case "account":
        return ["account", "Enter account number..."];
      case "customer":
        return ["customer", "Enter customer number..."];
      case "surname":
        return ["surname", "Enter customer surname..."];
      case "email":
        return ["email", "Enter customer email..."];
      case "postcode":
        return ["postcode", "Enter customer postcode..."];
      default:
        return [];
    }
  };

  const handleSubmitChange = () => {
    let input = document.querySelector("#search-by").value;
    switch (input) {
      case "account":
        setInputBox(<input type="text" className="search-input" id="account-input" placeholder="Enter account number..." onChange={checkAccountInput} />);
        break;
      case "customer":
        setInputBox(<input type="text" className="search-input" id="customer-input" placeholder="Enter customer number..." onChange={checkCustomerInput} />);
        break;
      case "surname":
        setInputBox(<input type="text" className="search-input" id="surname-input" placeholder="Enter customer surname..." />);
        break;
      case "email":
        setInputBox(<input type="text" className="search-input" id="email-input" placeholder="Enter customer email..." />);
        break;
      case "postcode":
        setInputBox(<input type="text" className="search-input" id="postcode-input" placeholder="Enter customer postcode..." />);
        break;
      default:
        setInputBox(<></>);
        break;
    }
    setSearchButton(<button onClick={submitSearch}>Search</button>);
  };

  const checkAccountInput = () => {
    const input = document.querySelector("#account-input").value;
    document.querySelector("#account-input").value = isNaN(input.value) && input.replace(/\D/g, "");
  };

  const checkCustomerInput = () => {
    const input = document.querySelector("#customer-input").value;
    document.querySelector("#customer-input").value = isNaN(input.value) && input.replace(/\D/g, "");
  };

  return (
    <div className="main-container">
      <h2>Customer Search</h2>
      <RedButton content="Search all customers" title="WARNING: This is hardware intensive" onClick={searchAll} />
      <select defaultValue="default" id="search-by" onChange={handleSubmitChange}>
        <option value="default" disabled>
          Search by...
        </option>
        <option value="account">Account Number</option>
        <option value="customer">Customer Number</option>
        <option value="surname">Surname</option>
        <option value="email">Email</option>
        <option value="postcode">Postcode</option>
      </select>
      {inputBox}
      {searchButton}
      {searchError}
      {table}
    </div>
  );
};

export default CustomerMaintenance;
