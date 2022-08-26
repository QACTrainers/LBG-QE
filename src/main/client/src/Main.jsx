import React from "react";
import { Routes, Route } from "react-router-dom";
import MainMenu from "./pages/MainMenu";
import CustomerSearch from "./pages/CustomerSearch"
import CustomerMaintenance from "./pages/CustomerMaintenance";
import AccountMaintenance from "./pages/AccountMaintenance";
import Transactions from "./pages/Transactions";
import CustomerCreation from "./pages/CustomerCreation";

const Main = () => {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<MainMenu />} />
        <Route exact path="/customer-search" element={<CustomerSearch />} />
        <Route exact path="/customer-maintenance/:id" element={<CustomerMaintenance />} />
        <Route exact path="/create-customer" element={<CustomerCreation />} />
        <Route exact path="/account-maintenance" element={<AccountMaintenance />} />
        <Route exact path="/transactions" element={<Transactions />} />
      </Routes>
    </div>
  );
};

export default Main;
