import React from "react";
import { Routes, Route } from "react-router-dom";
import MainMenu from "./pages/MainMenu";
import CustomerMaintenance from "./pages/CustomerMaintenance";
import AccountMaintenance from "./pages/AccountMaintenance";
import Transactions from "./pages/Transactions";

const Main = () => {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<MainMenu />} />
        <Route exact path="/customer-maintenance" element={<CustomerMaintenance />} />
        <Route exact path="/account-maintenance" element={<AccountMaintenance />} />
        <Route exact path="/transactions" element={<Transactions />} />
      </Routes>
    </div>
  );
};

export default Main;
