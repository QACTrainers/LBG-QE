import React from "react";

const TransferContent = ({ id, balance }) => {
  return (
    <div id="transfer-container">
      <h2>Transfers</h2>
      <div className="main-container">
        <div className="input-container">
          <span>Outgoing Account:</span>
          <br />
          <label>{id}</label>
        </div>
        <div className="input-container">
          <span>Balance:</span>
          <br />
          <label>{`£${balance}`}</label>
        </div>
        <div className="input-container">
          <span>Receiving Account:</span>
          <br />
          <input type="text" id="receiving-input" />
        </div>
        <div className="input-container">
          <span>Transfer amount:</span>
          <br />
          <input type="text" id="transfer-input" />
        </div>
        <div className="button-container">
          <button id="transfer-button">Transfer</button>
        </div>
      </div>
    </div>
  );
};

export default TransferContent;
