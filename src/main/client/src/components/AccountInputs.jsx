import React, { useEffect, useState } from "react";
import Error from "./Error";
import axios from "axios";

const AccountInputs = ({ createNew, accountData, existingCustomerId }) => {
  const [depositError, setDepositError] = useState(true);
  const [customerError, setCustomerError] = useState(true);
  const [extraAccountsError, setExtraAccountsError] = useState(false);
  const [typeError, setTypeError] = useState(true);
  const [branchError, setBranchError] = useState(true);
  const [submitError, setSubmitError] = useState(true);

  const [customerId, setCustomerId] = useState("");
  const [branch, setBranch] = useState("");
  const [type, setType] = useState("");
  const [deposit, setDeposit] = useState("");
  const [accountHolders, setAccountHolders] = useState();

  useEffect(() => {
    !createNew && popoulateInputValues();
  }, []);

  useEffect(() => {
    if (createNew) {
      if (depositError === false && customerError === false && extraAccountsError === false && branchError === false && typeError === false) {
        const allHolders = accountHolders[0] === "" ? [...customerId] : Array.from(new Set([...accountHolders, customerId]));
        axios
          .post("http://localhost:9002/account/create", {
            customerIds: allHolders,
            branch: branch,
            type: type,
            balance: deposit,
          })
          .then((res) => console.log(res))
          .catch(() => setSubmitError(<Error message="There was an error with your request" />));
      }
    }
    if (!createNew) {
      if (extraAccountsError === false && branchError === false && typeError === false) {
        const allHolders = accountHolders[0] === "" ? [...existingCustomerId] : Array.from(new Set([...accountHolders, existingCustomerId]));
        console.log(accountData.id, branch, allHolders, type)
        axios
          .put("http://localhost:9002/account/update", {
            id: accountData.id,
            branch: branch,
            customerIds: allHolders,
            type: type,
          })
          .then((res) => console.log(res))
          .catch(() => setSubmitError(<Error message="There was an error with your request" />));
      }
    }
  }, [customerId, branch, type, deposit, accountHolders]);

  const createAccount = () => {
    checkCustomerInput();
    checkBranchSelect();
    checkTypeSelect();
    checkDepositInput();
    checkAccountHoldersInput();

    setCustomerId(document.querySelector("#customer-input").value);
    setBranch(document.querySelector("#branch-select").value);
    setType(document.querySelector("#type-select").value);
    setDeposit(document.querySelector("#deposit-input").value);
    setAccountHolders(document.querySelector("#account-holders-input").value.split(","));
  };

  const updateAccount = () => {
    checkBranchSelect();
    checkTypeSelect();
    checkAccountHoldersInput();

    setBranch(document.querySelector("#branch-select").value);
    setType(document.querySelector("#type-select").value);
    setAccountHolders(document.querySelector("#account-holders-input").value.split(","));
  };

  const deleteAccount = () => {
    window.confirm(`Are you sure you want to delete account ${accountData.id}?`) &&
      axios
        .delete(`http://localhost:9002/account/delete/${accountData.id}`)
        .then((res) => res.status === 200 && (window.location.href = "/customer-search"))
        .catch(window.alert("Internal server error - could not delete"));
  };

  const popoulateInputValues = () => {
    let branchSelect = document.querySelector("#branch-select");
    let typeSelect = document.querySelector("#type-select");
    let accountHoldersInput = document.querySelector("#account-holders-input");

    branchSelect.value = accountData.branch ? accountData.branch.toLowerCase() : "N/A";
    typeSelect.value = accountData.type ? accountData.type.split(" - ")[0] : "N/A";
    accountHoldersInput.value = accountData.sharedWithCustomers.length > 0 ? accountData.sharedWithCustomers.map((account) => account.id) : "N/A";
  };

  const checkCustomerInput = () => {
    const input = document.querySelector("#customer-input").value;
    setCustomerError(input.length === 0 ? <Error message="Enter a customer ID" /> : false);
    !customerError &&
      axios
        .post("http://localhost:9002/customer/filter", {
          account_nr: "",
          customer_nr: input,
          surname: "",
          email: "",
          postcode: "",
        })
        .then(() => {
          setCustomerError(false);
        })
        .catch(() => setCustomerError(<Error message={`Customer ${input} does not exist`} />));
  };

  const checkBranchSelect = () => {
    const input = document.querySelector("#branch-select").value;
    setBranchError(input === "default" ? <Error message="Select a branch" /> : false);
  };

  const checkTypeSelect = () => {
    const input = document.querySelector("#type-select").value;
    setTypeError(input === "default" ? <Error message="Select an account type" /> : false);
  };

  const checkDepositInput = () => {
    const typeInput = document.querySelector("#type-select").value;
    const depositInput = document.querySelector("#deposit-input").value;
    switch (typeInput) {
      case "997":
      case "998":
        setDepositError(depositInput < 500 ? <Error message="Deposit is under minimum of £500" /> : false);
        break;
      case "999":
        setDepositError(depositInput < 1000 ? <Error message="Deposit is under minimum of £1000" /> : false);
        break;
      case "996":
        setDepositError(depositInput < 2000 ? <Error message="Deposit is under minimum of £2000" /> : false);
        break;
      default:
        setDepositError(typeInput === "default" ? <Error message="Select a branch to continue" /> : true);
        break;
    }
    (depositInput * 1000) % 10 !== 0 && setDepositError(<Error message="Too many decimal points" />);
  };

  const checkAccountHoldersInput = () => {
    const input = document.querySelector("#account-holders-input").value.split(",");
    if (input.length > 0) {
      for (const extraCustomerId of input) {
        axios
          .post("http://localhost:9002/customer/filter", {
            account_nr: "",
            customer_nr: extraCustomerId,
            surname: "",
            email: "",
            postcode: "",
          })
          .then(() => {
            setExtraAccountsError(false);
          })
          .catch(() => {
            setExtraAccountsError(<Error message={`Customer ${extraCustomerId} does not exist`} />);
          });
      }
    }
  };

  const formatCustomerInput = () => {
    const input = document.querySelector("#customer-input").value;
    document.querySelector("#customer-input").value = isNaN(input.value) && input.replace(/\D/g, "");
  };

  const formatDepositInput = () => {
    const input = document.querySelector("#deposit-input").value;
    document.querySelector("#deposit-input").value = isNaN(input.value) && input.replace(/[^0-9.]/g, "");
  };

  const formatAccountHoldersInput = () => {
    const input = document.querySelector("#account-holders-input").value;
    document.querySelector("#account-holders-input").value = isNaN(input.value) && input.replace(/[^0-9,]/g, "");
  };

  return (
    <div className="main-container">
      {!createNew && (
        <div className="input-container">
          <span>Account ID:</span>
          <br />
          <label>{accountData.id}</label>
        </div>
      )}
      <div className="input-container">
        <span>Customer ID:</span>
        <br />
        {createNew ? <input type="text" id="customer-input" onChange={formatCustomerInput} onBlur={checkCustomerInput} /> : <label>{existingCustomerId}</label>}
      </div>
      {customerError}
      <div className="input-container">
        <span>Branch:</span>
        <br />
        <select defaultValue={"default"} id="branch-select" onBlur={checkBranchSelect}>
          <option value="default" disabled />
          <option value="london">London</option>
          <option value="devon">Devon</option>
          <option value="scotland">Scotland</option>
          <option value="cornwall">Cornwall</option>
          <option value="wales">Wales</option>
          <option value="manchester">Manchester</option>
          <option value="leeds">Leeds</option>
          <option value="reading">Reading</option>
        </select>
      </div>
      {branchError}
      <div className="input-container">
        <span>Account Type:</span>
        <br />
        <select defaultValue={"default"} id="type-select" onBlur={checkTypeSelect}>
          <option value="default" disabled />
          <option value="997">997 - Classic Saver</option>
          <option value="998">998 - Platinum Credit</option>
          <option value="999">999 - Gold Saver</option>
          <option value="996">996 - Premium Saver</option>
        </select>
      </div>
      {typeError}
      {!createNew && (
        <div className="input-container">
          <span>Account Balance:</span>
          <br />
          <label>{accountData.balance}</label>
        </div>
      )}
      {createNew && (
        <div className="input-container">
          <span>Initial Deposit Amount:</span>
          <br />
          <input type="text" id="deposit-input" onChange={formatDepositInput} onBlur={checkDepositInput} />
        </div>
      )}
      {depositError}
      <div className="input-container">
        <span>Extra Account Holders:</span>
        <br />
        <input type="text" id="account-holders-input" onChange={formatAccountHoldersInput} onBlur={checkAccountHoldersInput} />
      </div>
      {extraAccountsError}
      <div className="button-container">
        {createNew ? (
          <button id="create-button" onClick={createAccount}>
            Create new account
          </button>
        ) : (
          <>
            <button id="submit-button" onClick={updateAccount}>
              Submit changes
            </button>
            <br />
            <button id="delete-button" onClick={deleteAccount}>
              Delete account
            </button>
          </>
        )}
        {submitError}
      </div>
    </div>
  );
};

export default AccountInputs;
