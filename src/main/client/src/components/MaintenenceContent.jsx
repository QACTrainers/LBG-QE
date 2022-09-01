import React from 'react'
import AccountInputs from "./AccountInputs"

const MaintenenceContent = ({ accountData, customerId }) => {
  return (
    <div id="maintenance-container">
    <h2>Account Maintenance</h2>
    <AccountInputs createNew={false} accountData={accountData} customerId={customerId} />
  </div>
  )
}

export default MaintenenceContent