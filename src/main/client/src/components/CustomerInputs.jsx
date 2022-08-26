import React, { useState } from "react";
import Error from "./Error";

const CustomerInputs = () => {
  const [DoBError, setDoBError] = useState(<></>);
  const [PcodeError, setPcodeError] = useState(<></>);
  const [PhoneError, setPhoneError] = useState(<></>);
  const [EmailError, setEmailError] = useState(<></>);

  const submitChanges = () => {
    console.log("Submit changes");
  };

  const deleteCustomer = () => {
    console.log("Delete customer");
  };

  const validateDate = () => {
    const getAge = (dateString) => {
      var ageInMilliseconds = new Date() - new Date(dateString);
      return Math.floor(ageInMilliseconds / 1000 / 60 / 60 / 24 / 365); // convert to years
    };

    const input = document.querySelector("#dob-input").value;

    setDoBError(
      !new RegExp(
        /^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[13-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/
      ).test(input) ? (
        <Error message="Invalid Date of Birth format" />
      ) : getAge(input) < 18 ? (
        <Error message="Customer is too young" />
      ) : getAge(input) > 65 ? (
        <Error message="Customer is too old" />
      ) : (
        <></>
      )
    );
  };

  const validatePcode = () => {
    let input = document.querySelector("#pcode-input").value;
    setPcodeError(
      !new RegExp(
        /([Gg][Ii][Rr] 0[Aa]{2})|((([A-Za-z][0-9]{1,2})|(([A-Za-z][A-Ha-hJ-Yj-y][0-9]{1,2})|(([A-Za-z][0-9][A-Za-z])|([A-Za-z][A-Ha-hJ-Yj-y][0-9][A-Za-z]?))))\s?[0-9][A-Za-z]{2})/
      ).test(input) ? (
        <Error message="Invalid postcode format" />
      ) : (
        <></>
      )
    );
  };

  const validateEmail = () => {
    let input = document.querySelector("#email-input").value;
    setEmailError(
      !new RegExp(
        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,253}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,253}[a-zA-Z0-9])?)*$/
      ).test(input) ? (
        <Error message="Invalid email" />
      ) : (
        <></>
      )
    );
  };

  const validatePhone = () => {
    let input = document.querySelector("#phone-input").value;
    setPhoneError(
      !new RegExp(
        /^(((\+44\s?\d{4}|\(?0\d{4}\)?)\s?\d{3}\s?\d{3})|((\+44\s?\d{3}|\(?0\d{3}\)?)\s?\d{3}\s?\d{4})|((\+44\s?\d{2}|\(?0\d{2}\)?)\s?\d{4}\s?\d{4}))(\s?\#(\d{4}|\d{3}))?$/
      ).test(input) ? (
        <Error message="Invalid phone number" />
      ) : (
        <></>
      )
    );
  };

  return (
    <div className="main-container">
      <div className="input-container">
        <span>ID:</span>
        <br />
        <label>1</label>
      </div>
      <div className="input-container">
        <span>Title:</span>
        <br />
        <select id="title-select">
          <option value="mr">Mr</option>
          <option value="mrs">Mrs</option>
          <option value="ms">Ms</option>
          <option value="dr">Dr</option>
          <option value="lady">Lady</option>
          <option value="Prof">Prof</option>
          <option value="sir">Sir</option>
        </select>
      </div>
      <div className="input-container">
        <span>Surname:</span>
        <br />
        <input type="text" id="sname-input" />
      </div>
      <div className="input-container">
        <span>Forename:</span>
        <br />
        <input type="text" id="fname-input" />
      </div>
      <div className="input-container">
        <span>DoB:</span>
        <br />
        <input type="text" onBlur={validateDate} id="dob-input" />
      </div>
      <div className="input-container">
        <span>Sex:</span>
        <br />
        <div>
          <input type="radio" name="gender" value="m" className="first-radio" />
          <label htmlFor="m">Male</label>
          <input type="radio" name="gender" value="f" />
          <label htmlFor="f">Female</label>
          <input type="radio" name="gender" value="o" />
          <label htmlFor="o">Other</label>
        </div>
      </div>
      <div className="input-container">
        <span>Type:</span>
        <br />
        <div>
          <input
            type="radio"
            name="c-type"
            value="cons"
            className="first-radio"
          />
          <label htmlFor="c-type">Consumer</label>
          <input type="radio" name="c-type" value="corp" />
          <label htmlFor="c-type">Corporate</label>
        </div>
      </div>
      <div className="input-container">
        <span>Address 1:</span>
        <br />
        <input type="text" id="address-1-input" />
      </div>
      <div className="input-container">
        <span>Address 2:</span>
        <br />
        <input type="text" id="address-2-input" />
      </div>
      <div className="input-container">
        <span>City:</span>
        <br />
        <input type="text" id="address-2-input" />
      </div>
      <div className="input-container">
        <span>Postcode:</span>
        <br />
        <input type="text" id="pcode-input" onBlur={validatePcode} />
      </div>
      <div className="input-container">
        <span>Phone No:</span>
        <br />
        <input type="tel" id="phone-input" onBlur={validatePhone} />
      </div>
      <div className="input-container">
        <span>Email:</span>
        <br />
        <input type="email" id="email-input" onBlur={validateEmail} />
      </div>
      <div className="button-container">
        <button id="submit-button" onClick={submitChanges}>
          Submit changes
        </button>{" "}
        <br />
        <button id="delete-button" onClick={deleteCustomer}>
          Delete customer
        </button>
      </div>
      {DoBError}
      {PcodeError}
      {PhoneError}
      {EmailError}
    </div>
  );
};

export default CustomerInputs;
