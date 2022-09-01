import React, { useState, useEffect } from "react";
import Error from "./Error";
import axios from "axios";

const CustomerInputs = ({ createNew, customerId }) => {
  const [DoBError, setDoBError] = useState(<></>);
  const [PostcodeError, setPostcodeError] = useState(<></>);
  const [PhoneError, setPhoneError] = useState(<></>);
  const [EmailError, setEmailError] = useState(<></>);
  const [Success, setSuccess] = useState(<></>);
  const [Error, setError] = useState(<></>);
  
  const customerData = JSON.parse(sessionStorage.getItem(`customer-${customerId}`));

  useEffect(() => {
    !createNew && popoulateInputValues();
  }, []);

  useEffect(() => {
    !createNew && popoulateInputValues();
  }, []);

  const submitChanges = () => {
    let customerUpdate = {
      "id": customerData.id,
      "title": document.getElementById("title-select").value,
      "surname": document.getElementById("sname-input").value,
      "firstName": document.getElementById("fname-input").value,
      "dateOfBirth": document.getElementById("dob-input").value,
      "gender": document.getElementById("m-radio").value,
      "customerType": document.getElementById("cons-radio").value,
      "address1": document.getElementById("address-1-input").value,
      "address2": document.getElementById("address-2-input").value,
      "cityTown":document.getElementById("city-input").value,
      "postcode":document.getElementById("pcode-input").value,
      "phoneNo":document.getElementById("phone-input").value,
      "email":document.getElementById("email-input").value,
  }
      axios
      .put("http://localhost:9002/customer/update", customerUpdate)
      .then((res) => {
        console.log(res);
        setSuccess(<h2>account succesfully updated</h2>)
        // window.location.reload();
      })
      .catch((err) => setError(<Error message= "account creation failed, ensure inputs are correct or contact system administrator"/>));
      console.log("updated customer");
  };

  const deleteCustomer = () => {
    axios
      .delete(`http://localhost:9002/customer/delete/${customerData.id}`)
      .then((res) => {
        console.log(res);
        setSuccess(<h2>customer succesfully deleted</h2>)
        window.location.href = "/customer-search"
      })
      .catch((err) => setError(<Error message= "cannot delete customer; acounts still exist under customer name."/>));
    console.log("Delete customer");
  };

  

  const createCustomer = () => {
    let customer = {
      "title": document.getElementById("title-select").value,
      "surname": document.getElementById("sname-input").value,
      "firstName": document.getElementById("fname-input").value,
      "dateOfBirth": document.getElementById("dob-input").value,
      "gender": document.getElementById("m-radio").value,
      "customerType": document.getElementById("cons-radio").value,
      "address1": document.getElementById("address-1-input").value,
      "address2": document.getElementById("address-2-input").value,
      "cityTown":document.getElementById("city-input").value,
      "postcode":document.getElementById("pcode-input").value,
      "phoneNo":document.getElementById("phone-input").value,
      "email":document.getElementById("email-input").value,
      "motherMaidenName":document.getElementById("mmn-input").value,
      "placeOfBirth":document.getElementById("pob-input").value
  }
  axios
      .post("http://localhost:9002/customer/create", customer)
      .then((res) => {
        console.log(res);
        setSuccess(<h2>account succesfully created</h2>)
      })
      .catch((err) => setError(<Error message= "account creation failed, ensure inputs are correct or contact system administrator"/>));
    console.log("Create customer");
  };
  
  const validateDoB = () => {
    const getAge = (dateString) => {
      var ageInMilliseconds = new Date() - new Date(dateString);
      return Math.floor(ageInMilliseconds / 1000 / 60 / 60 / 24 / 365);
    };

    const input = document.querySelector("#dob-input").value;

    setDoBError(
      !new RegExp(/^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$/).test(input) ? (
        <Error message="Invalid Date of Birth format (YYYY/MM/DD)" />
      ) : getAge(input) < 18 ? (
        <Error message="Customer is too young" />
      ) : getAge(input) > 65 ? (
        <Error message="Customer is too old" />
      ) : (
        <></>
      )
    );
  };

  const validatePostcode = () => {
    let input = document.querySelector("#postcode-input").value;
    setPostcodeError(
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
    const input = document.querySelector("#phone-input").value;
    setPhoneError(
      !new RegExp(
        /^(((\+44\s?\d{4}|\(?0\d{4}\)?)\s?\d{3}\s?\d{3})|((\+44\s?\d{3}|\(?0\d{3}\)?)\s?\d{3}\s?\d{4})|((\+44\s?\d{2}|\(?0\d{2}\)?)\s?\d{4}\s?\d{4}))(\s?(\d{4}|\d{3}))?$/
      ).test(input) ? (
        <Error message="Invalid phone number" />
      ) : (
        <></>
      )
    );
  };

  const checkPhone = () => {
    const input = document.querySelector("#phone-input").value;
    document.querySelector("#phone-input").value = isNaN(input.value) && input.replace(/\D/g, "");
  }

  const popoulateInputValues = () => {
    let titleSelect = document.querySelector("#title-select");
    let snameInput = document.querySelector("#sname-input");
    let fnameInput = document.querySelector("#fname-input");
    let dobInput = document.querySelector("#dob-input");
    let mRadio = document.querySelector("#m-radio");
    let fRadio = document.querySelector("#f-radio");
    let oRadio = document.querySelector("#o-radio");
    let consRadio = document.querySelector("#cons-radio");
    let corpRadio = document.querySelector("#corp-radio");
    let address1Input = document.querySelector("#address-1-input");
    let address2Input = document.querySelector("#address-2-input");
    let cityInput = document.querySelector("#city-input");
    let postcodeInput = document.querySelector("#postcode-input");
    let phoneInput = document.querySelector("#phone-input");
    let emailInput = document.querySelector("#email-input");

    titleSelect.value = customerData.title ? customerData.title.toLowerCase() : "N/A";
    snameInput.value = customerData.surname ? customerData.surname : "N/A";
    fnameInput.value = customerData.firstName ? customerData.firstName : "N/A";
    dobInput.value = customerData.dateOfBirth ? customerData.dateOfBirth : "N/A";
    customerData.gender === "M" && (mRadio.checked = true);
    customerData.gender === "F" && (fRadio.checked = true);
    customerData.gender === "X" && (oRadio.checked = true);
    customerData.customerType === "Consumer" && (consRadio.checked = true);
    customerData.customerType === "Corporate" && (corpRadio.checked = true);
    address1Input.value = customerData.address1 ? customerData.address1 : "N/A";
    address2Input.value = customerData.address2 ? customerData.address2 : "N/A";
    cityInput.value = customerData.cityTown ? customerData.cityTown : "N/A";
    postcodeInput.value = customerData.postcode ? customerData.postcode : "N/A";
    phoneInput.value = customerData.phoneNo ? customerData.phoneNo : "N/A";
    emailInput.value = customerData.email ? customerData.email : "N/A";
  };

  return (
    <div className="main-container">
      {!createNew && (
        <div className="input-container">
          <span>ID:</span>
          <br />
          <label>{customerData.id}</label>
        </div>
      )}
      <div className="input-container">
        <span>Title:</span>
        <br />
        <select defaultValue={"default"} id="title-select">
          <option value="default" disabled />
          <option value="mr">Mr</option>
          <option value="mrs">Mrs</option>
          <option value="ms">Ms</option>
          <option value="dr">Dr</option>
          <option value="lady">Lady</option>
          <option value="prof">Prof</option>
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
        <input type="text" onBlur={validateDoB} id="dob-input" />
      </div>
      <div className="input-container">
        <span>Sex:</span>
        <br />
        <div>
          <input type="radio" name="gender" value="m" id="m-radio" className="first-radio" />
          <label htmlFor="m">Male</label>
          <input type="radio" name="gender" value="f" id="f-radio" />
          <label htmlFor="f">Female</label>
          <input type="radio" name="gender" value="o" id="o-radio" />
          <label htmlFor="o">Other</label>
        </div>
      </div>
      <div className="input-container">
        <span>Type:</span>
        <br />
        <div>
          <input type="radio" name="c-type" value="cons" id="cons-radio" className="first-radio" />
          <label htmlFor="c-type">Consumer</label>
          <input type="radio" name="c-type" value="corp" id="corp-radio" />
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
        <input type="text" id="city-input" />
      </div>
      <div className="input-container">
        <span>Postcode:</span>
        <br />
        <input type="text" id="postcode-input" onBlur={validatePostcode} />
      </div>
      <div className="input-container">
        <span>Phone No:</span>
        <br />
        <input type="tel" id="phone-input" onBlur={validatePhone} onChange={checkPhone}/>
      </div>
      <div className="input-container">
        <span>Email:</span>
        <br />
        <input type="email" id="email-input" onBlur={validateEmail} />
      </div>
      {createNew && (
        <div>
          <div className="input-container">
            <span>Mother's Maiden Name:</span>
            <br />
            <input type="text" id="mmn-input" />
          </div>
          <div className="input-container">
            <span>Place of Birth:</span>
            <br />
            <input type="text" id="pob-input" />
          </div>
        </div>
      )}
      <div className="button-container">
        {createNew ? (
          <button id="create-button" onClick={createCustomer}>
            Create new customer
          </button>
        ) : (
          <>
            <button id="submit-button" onClick={submitChanges}>
              Submit changes
            </button>
            <br />
            <button id="delete-button" onClick={deleteCustomer}>
              Delete customer
            </button>
          </>
        )}
      </div>
      {DoBError}
      {PostcodeError}
      {PhoneError}
      {EmailError}
      {Success}
      {Error}
    </div>
  );
};

export default CustomerInputs;
