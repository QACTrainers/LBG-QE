import React from "react";
import { useParams } from "react-router-dom";
import AccountInputs from "../components/AccountInputs";
import "./css/shared.css";
import "./css/input-pages.css";

const AccountMaintenance = () => {
  const { id } = useParams();

  console.log(id);
  return (
    <div className="content-container">
      <h2>Account Maintenance</h2>
      {<AccountInputs createNew={false} accountId={id} />}
    </div>
  );
};

export default AccountMaintenance;
