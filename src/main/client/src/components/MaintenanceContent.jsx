import React from 'react'
import AccountInputs from "./AccountInputs"

const MaintenanceContent = ({ accountData, balance, customerId }) => {
  return (
    <div id="maintenance-container">
    <h2>Account Maintenance</h2>
    <AccountInputs createNew={false} accountData={accountData} balance={balance} existingCustomerId={customerId} />
  </div>
  )
}

export default MaintenanceContent