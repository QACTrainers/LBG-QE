import React from "react";
import { Routes, Route } from "react-router-dom";
import MainMenu from "./pages/MainMenu";
import CustomerSearch from "./pages/CustomerSearch";
import CustomerMaintenance from "./pages/CustomerMaintenance";
import AccountMaintenance from "./pages/AccountMaintenance";
import CustomerCreation from "./pages/CustomerCreation";
import AccountCreation from "./pages/AccountCreation";

const Main = () => {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<MainMenu />} />
        <Route exact path="/customer-search" element={<CustomerSearch />} />
        <Route exact path="/customer-maintenance/:id" element={<CustomerMaintenance />} />
        <Route exact path="/create-customer" element={<CustomerCreation />} />
        <Route exact path="/account-maintenance/:id" element={<AccountMaintenance />} />
        <Route exact path="/create-account/:id" element={<AccountCreation />} />
        <Route exact path="/create-account/" element={<AccountCreation />} />
      </Routes>
    </div>
  );
};

export default Main;
