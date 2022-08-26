import React from "react";

const AccountInputs = ({ createNew }) => {
  const createAccount = () => {
    console.log("Submit changes");
  };
  const submitChanges = () => {
    console.log("Submit changes");
  };
  const deleteAccount = () => {
    console.log("Delete Account");
  };

  return (
    <div className="main-container">
      <div className="input-container">
        <span>Customer Number:</span>
        <br />
        <input type="text" id="c-number-input" />
      </div>
      <div className="input-container">
        <span>Customer Surname:</span>
        <br />
        <input type="text" id="c-surname-input" />
      </div>
      <div className="input-container">
        <span>Customer First Name:</span>
        <br />
        <input type="text" id="c-firstname-input" />
      </div>
      <div className="input-container">
        <span>Title:</span>
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
      {!createNew && (
        <div className="input-container">
          <span>Account Balance:</span>
          <br />
          <input type="text" id="c-firstname-input" />
        </div>
      )}
      <div className="input-container">
        <span>Deposit Amount:</span>
        <br />
        <input type="text" id="deposit-input" />
      </div>
      <div className="input-container">
        <span>Extra Account Holders:</span>
        <br />
        <input type="text" id="deposit-input" />
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
              Delete customer
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default AccountInputs;
