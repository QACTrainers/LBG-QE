import React from "react";

const RedButton = ({ content, title, onClick }) => {
  return (
    <button title={title} onClick={onClick} className="red-button bottom-button">
      {content}
    </button>
  );
};

export default RedButton;
