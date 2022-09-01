import React from "react";

const TransferContent = ({ id, balance }) => {
  const transferMoney = () => {
    const receivingAccountInput = document.querySelector("#receiving-input").value;
    const transferInput = document.querySelector("#transferInput-input").value;
  };

  const checkReceivingInput = () => {
    const input = document.querySelector("#receiving-input").value;
    document.querySelector("#receiving-input").value = isNaN(input.value) && input.replace(/[^0-9.]/g, "");
  };

  const checkTransferInput = () => {
    const input = document.querySelector("#transfer-input").value;
    document.querySelector("#transfer-input").value = isNaN(input.value) && input.replace(/\D/g, "");
  };

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
          <input type="text" id="receiving-input" onChange={checkReceivingInput} />
        </div>
        <div className="input-container">
          <span>Transfer amount:</span>
          <br />
          <input type="text" id="transfer-input" onChange={checkTransferInput} />
        </div>
        <div className="button-container">
          <button id="transfer-button" onClick={transferMoney}>
            Transfer
          </button>
        </div>
      </div>
    </div>
  );
};

export default TransferContent;
