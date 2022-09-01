import React, { useEffect } from "react";

const AccountInputs = ({ createNew, accountData, customerId }) => {
  useEffect(() => {
    !createNew && popoulateInputValues();
  }, []);

  console.log(accountData);

  const createAccount = () => {
    console.log("Submit changes");
  };
  const submitChanges = () => {
    console.log("Submit changes");
  };
  const deleteAccount = () => {
    console.log("Delete Account");
  };

  const popoulateInputValues = () => {
    let branchSelect = document.querySelector("#branch-select");
    let typeSelect = document.querySelector("#type-select");
    let accountHoldersInput = document.querySelector("#account-holders-input");

    branchSelect.value = accountData.branch ? accountData.branch.toLowerCase() : "N/A";
    typeSelect.value = accountData.type ? accountData.type.split(" - ")[0] : "N/A";
    accountHoldersInput.value = accountData.sharedWithCustomers.length > 0 ? accountData.sharedWithCustomers.map((account) => account.id) : "N/A";
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
        {createNew ? <input type="text" id="c-number-input" /> : <label>{customerId}</label>}
      </div>
      <div className="input-container">
        <span>Branch:</span>
        <br />
        <select defaultValue={"default"} id="branch-select">
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
      <div className="input-container">
        <span>Account Type:</span>
        <br />
        <select defaultValue={"default"} id="type-select">
          <option value="default" disabled />
          <option value="997">997 - Classic Saver</option>
          <option value="998">998 - Platinum Credit</option>
          <option value="999">999 - Gold Saver</option>
          <option value="996">996 - Premium Saver</option>
        </select>
      </div>
      <div className="input-container">
        <span>Account Balance:</span>
        <br />
        {createNew ? <input type="text" id="balance-input" /> : <label>{accountData.balance}</label>}
      </div>
      <div className="input-container">
        <span>Deposit Amount:</span>
        <br />
        <input type="text" id="deposit-input" />
      </div>
      <div className="input-container">
        <span>Extra Account Holders:</span>
        <br />
        <input type="text" id="account-holders-input" />
      </div>
      <div className="button-container">
        {createNew ? (
          <button id="create-button" onClick={createAccount}>
            Create new account
          </button>
        ) : (
          <>
            <button id="submit-button" onClick={submitChanges}>
              Submit changes
            </button>
            <br />
            <button id="delete-button" onClick={deleteAccount}>
              Delete account
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default AccountInputs;
