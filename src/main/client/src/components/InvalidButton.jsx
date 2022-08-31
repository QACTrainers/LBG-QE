import React from "react";

const InvalidButton = ({content, err}) => {
  return (
    <button className="invalid-button" title={err}>
      {content}
    </button>
  );
};

export default InvalidButton;
