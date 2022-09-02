import axios from "axios";
import { set } from "mongoose";
import React, { useState } from "react";
import Error from "./Error";

const TransactionContent = ({ id, balance, setBalance }) => {
  const [transactionType, setTransactionType] = useState("withdraw");
  const [transactionError, setTransactionError] = useState(<></>);

  const changeTransactionInputs = () => {
    setTransactionType(document.querySelector("#transaction-select").value);
  };

  const withdrawMoney = () => {
    const amount = document.querySelector("#withdraw-input").value;
    setTransactionError(amount > balance ? <Error message="Your funds are too low." /> : (amount * 1000) % 10 !== 0 ? <Error message="Too many decimal points" /> : false);
    !transactionError &&
      axios
        .post("http://localhost:9002/account/transact", { accountId: id, transactionAmount: -parseInt(amount) })
        .then((res) => setBalance(res))
        .catch(() => setTransactionError(<Error message="There was an issue processing this transaction" />));
  };

  const depositMoney = () => {
    const amount = document.querySelector("#deposit-input").value;
    setTransactionError(
      parseFloat(amount) + balance > 99999.99 ? (
        <Error message="This transaction takes you over your limit." />
      ) : (amount * 1000) % 10 !== 0 ? (
        <Error message="Too many decimal points" />
      ) : (
        false
      )
    );
    !transactionError &&
      axios
        .post("http://localhost:9002/account/transact", { accountId: id, transactionAmount: parseInt(amount) })
        .then((res) => setBalance(res))
        .catch(() => setTransactionError(<Error message="There was an issue processing this transaction" />));
  };

  const checkWithdrawInput = () => {
    const input = document.querySelector("#withdraw-input").value;
    document.querySelector("#withdraw-input").value = isNaN(input.value) && input.replace(/[^0-9.]/g, "");
  };

  const checkDepositInput = () => {
    const input = document.querySelector("#deposit-input").value;
    document.querySelector("#deposit-input").value = isNaN(input.value) && input.replace(/[^0-9.]/g, "");
  };

  return (
    <div id="transaction-container">
      <h2>Transactions</h2>
      <select defaultValue="withdraw" id="transaction-select" onChange={changeTransactionInputs}>
        <option value="withdraw">Withdraw</option>
        <option value="deposit">Deposit</option>
      </select>
      <div className="main-container">
        <div className="input-container">
          <span>Account ID:</span>
          <br />
          <label>{id}</label>
        </div>
        <div className="input-container">
          <span>Balance:</span>
          <br />
          <label>{`£${balance}`}</label>
        </div>
        {transactionType === "withdraw" && (
          <div className="input-container">
            <span>Withdrawal amount:</span>
            <br />
            <input type="text" id="withdraw-input" onChange={checkWithdrawInput} />
          </div>
        )}
        {transactionType === "deposit" && (
          <div className="input-container">
            <span>Deposit amount:</span>
            <br />
            <input type="text" id="deposit-input" onChange={checkDepositInput} />
          </div>
        )}
        {transactionType === "withdraw" && (
          <div className="button-container">
            <button id="withdraw-button" onClick={withdrawMoney}>
              Withdraw
            </button>
          </div>
        )}
        {transactionType === "deposit" && (
          <div className="button-container">
            <button id="deposit-button" onClick={depositMoney}>
              Deposit
            </button>
          </div>
        )}
        {transactionError}
      </div>
    </div>
  );
};

export default TransactionContent;
