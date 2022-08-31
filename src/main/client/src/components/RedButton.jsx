import React from "react";
import "./css/red-button.css"

const RedButton = ({ content, title, onClick }) => {
  return <button title={title} onClick={onClick} className="red-button">{content}</button>;
};

export default RedButton;
