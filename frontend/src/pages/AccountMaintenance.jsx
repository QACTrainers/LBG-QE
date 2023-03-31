import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import MaintenanceContent from "../components/MaintenanceContent";
import TransactionContent from "../components/TransactionContent";
import TransferContent from "../components/TransferContent";
import { useNavigate, useLocation } from "react-router-dom";

const AccountMaintenance = () => {
  let navigate = useNavigate();
  const [count, setCount] = useState(0);
  const location = useLocation();

  const [activeContent, setActiveContent] = useState("maintenance");
  const { id } = useParams();

  useEffect(() => {
    setCount(1);
    count===1 && navigate(0);
  }, [location]);


  const account = JSON.parse(sessionStorage.getItem(`account-${id}`));
  const accountData = account.accountData;
  const customerId = account.customerId;

  const [balance, setBalance] = useState(accountData.balance);

  const changeActiveContent = () => {
    const radios = document.querySelectorAll("input[type=radio]");
    for (const radio of radios) {
      radio.checked && setActiveContent(radio.value);
    }
  };

  return localStorage.getItem("loggedIn") === "true" && localStorage.admin === "true" ? (
    <div className="content-container">
      <div className="radio-container">
        <input type="radio" name="content-radio" value="maintenance" id="maintenance-tab" className="account-radio" onChange={changeActiveContent} defaultChecked />
        <label htmlFor="maintenance-tab" className="radio-label">
          Maintenance
        </label>
        <input type="radio" name="content-radio" value="transaction" id="transaction-tab" className="account-radio" onChange={changeActiveContent} />
        <label htmlFor="transaction-tab" className="radio-label">
          Transaction
        </label>
        <input type="radio" name="content-radio" value="transfer" id="transfer-tab" className="account-radio" onChange={changeActiveContent} />
        <label htmlFor="transfer-tab" className="radio-label">
          Transfer
        </label>
      </div>
      {activeContent === "maintenance" && <MaintenanceContent accountData={accountData} balance={balance} customerId={customerId} />}
      {activeContent === "transaction" && <TransactionContent id={accountData.id} balance={balance} setBalance={setBalance} />}
      {activeContent === "transfer" && <TransferContent id={accountData.id} balance={balance} />}
    </div>
  ) : (
    navigate("/")
  );
};

export default AccountMaintenance;
