import React from 'react'
import "./css/error.css"

const Error = ({message}) => {
  return (
    <p className="error-message">{message}</p>
  )
}

export default Error