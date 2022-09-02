import React, { useState, useEffect } from "react";
import Error from "./Error";
import axios from "axios";
import Popup from "../components/Popup";
import { hasSelectionSupport } from "@testing-library/user-event/dist/utils";

const CustomerInputs = ({ createNew, customerId }) => {

  const [customerDeleted, setCustomerDeleted] = useState(false);
  const [customerCreated, setCustomerCreated] = useState(false);
  const [customerUpdated, setCustomerUpdated] = useState(false);

  const [popupContent, setPopUpContent] = useState(<></>);

  const [notNullFields, setNotNullFields] = useState(false);
  const [titleError, setTitleError] = useState(true);
  const [surnameError, setSurnameError] = useState(true);
  const [firstNameError, setFirstNameError] = useState(true);
  const [doBError, setDoBError] = useState(false);
  
  // const [genderError, setGenderError] = useState(true);
  const [customerTypeError, setCustomerTypeError] = useState(true);
  const [address1Error, setAddress1Error] = useState(true);
  // const [address2Error, setAddress2Error] = useState(false);
  const [cityTownError, setCityTownError] = useState(true);
  const [postcodeError, setPostcodeError] = useState(true);
  const [phoneError, setPhoneError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  // const [placeOfBirthError, setPlaceOfBirthError] = useState(true);
  // const [motherMaidenNameError, setMotherMaidenNameError] = useState(true);
  const [customerSuccess, setCustomerSuccess] = useState(false);
  const [customerError, setCustomerError] = useState(false);
  const customerData = JSON.parse(sessionStorage.getItem(`customer-${customerId}`));

  useEffect(() => {
    !createNew && popoulateInputValues();
  }, []);

  useEffect(() => {
    console.log(titleError === false && surnameError === false && firstNameError === false && doBError === false && 
      customerTypeError === false && address1Error === false && cityTownError === false && postcodeError === false && phoneError === false &&
      emailError === false);
    if (createNew) {
      if (titleError === false && surnameError === false && firstNameError === false && doBError === false && 
        customerTypeError === false && address1Error === false && cityTownError === false && postcodeError === false && phoneError === false &&
        emailError === false) {
          const customerType = document.getElementById("cons-radio").checked ? "Consumer" : "Corporate";
          const customerGender = !document.getElementById("m-radio").checked ? !document.getElementById("f-radio").checked ? "X" : "F" : "M";
        let customer = {
          "title": notNullFields.title,
          "surname": notNullFields.surname,
          "firstName": notNullFields.firstName,
          "dateOfBirth": document.getElementById("dob-input").value,
          "gender": customerGender,
          "customerType": customerType,
          "address1": notNullFields.address1,
          "address2": document.getElementById("address-2-input").value,
          "cityTown": notNullFields.cityTown,
          "postcode": notNullFields.postcode,
          "phoneNo": document.getElementById("phone-input").value,
          "email": document.getElementById("email-input").value,
          "motherMaidenName": document.getElementById("mmn-input").value,
          "placeOfBirth": document.getElementById("pob-input").value
        }
        axios
          .post("http://localhost:9002/customer/create", customer)
          .then((res) => {
            console.log(res);
            setCustomerCreated(true);
            setPopUpContent(<><h2>Customer succesfully created</h2></>)
          })
          .catch((err) => setCustomerError(<Error message="account creation failed, ensure inputs are correct or contact system administrator" />));
        console.log("Create customer");
      }
    }
    if (!createNew) {
      if (titleError === false && surnameError === false && firstNameError === false && doBError === false && 
        customerTypeError === false && address1Error === false && cityTownError === false && postcodeError === false && phoneError === false &&
        emailError === false) {
          const customerType = document.getElementById("cons-radio").checked ? "Consumer" : "Corporate";
          const customerGender = !document.getElementById("m-radio").checked ? !document.getElementById("f-radio").checked ? "X" : "F" : "M";
        let customerUpdate = {
          "id": customerData.id,
          "title": notNullFields.title,
          "surname": notNullFields.surname,
          "firstName": notNullFields.firstName,
          "dateOfBirth": document.getElementById("dob-input").value,
          "gender": customerGender,
          "customerType": customerType,
          "address1": notNullFields.address1,
          "address2": document.getElementById("address-2-input").value,
          "cityTown": notNullFields.cityTown,
          "postcode": notNullFields.postcode,
          "phoneNo": document.getElementById("phone-input").value,
          "email": document.getElementById("email-input").value,
        }
        axios
          .put("http://localhost:9002/customer/update", customerUpdate)
          .then((res) => {
            console.log(res);
            setCustomerUpdated(true);
            setPopUpContent(<><h2>Customer succesfully updated</h2></>)
            setCustomerError("");
            // window.location.reload();
          })
          .catch((err) => setCustomerError(<Error message="account update failed, ensure inputs are correct or contact system administrator" />));
        console.log("updated customer");
      }
    }
  }, [notNullFields]);

  const submitChanges = () => {
    validateUserValues();

  };

  const deleteCustomer = () => {
    axios
      .delete(`http://localhost:9002/customer/delete/${customerData.id}`)
      .then((res) => {
        console.log(res);
        setCustomerDeleted(true);
        setPopUpContent(<><h2>Customer succesfully deleted</h2></>)
      })
      .catch((err) => setCustomerError(<Error message="cannot delete customer; acounts still exist under customer name." />));
    console.log("Delete customer");
  };


  const createCustomer = () => {
    validateUserValues()
  };

  const validateUserValues = () => {

    checkTitle();
    checkSurname();
    checkFirstName();
    checkCustomerType();
    checkAddress1();
    checkCityTown();
    checkPostcode();
    checkDoB();

    setNotNullFields({
      title: document.getElementById("title-select").value,
      surname: document.getElementById("sname-input").value,
      firstName: document.getElementById("fname-input").value,
      customerType: document.getElementById("cons-radio").value,
      address1: document.getElementById("address-1-input").value,
      cityTown: document.getElementById("city-input").value,
      postcode: document.getElementById("postcode-input").value,
    })
  }

  const checkTitle = () => setTitleError(document.getElementById("title-select").value === "default" ? <Error message="Title cannot be blank" /> : false)
  const checkSurname = () => setSurnameError(!document.getElementById("sname-input").value ? <Error message="Surname cannot be blank" /> : false)
  const checkFirstName = () => setFirstNameError(!document.getElementById("fname-input").value ? <Error message="First Name cannot be blank" /> : false)
  const checkCustomerType = () => setCustomerTypeError(!document.getElementById("cons-radio").checked && !document.getElementById("corp-radio").checked ? <Error message="Customer Type cannot be blank" /> : false) 
  const checkAddress1 = () => setAddress1Error(!document.getElementById("address-1-input").value ? <Error message="Address 1 cannot be blank" /> : false)
  const checkCityTown = () => setCityTownError(!document.getElementById("city-input").value ? <Error message="City/Town cannot be blank" /> : false)

  const checkDoB = () => {
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
        false
      )
    );
  };

  const checkPostcode = () => {
    let input = document.querySelector("#postcode-input").value;
    setPostcodeError(
      !new RegExp(
        /([Gg][Ii][Rr] 0[Aa]{2})|((([A-Za-z][0-9]{1,2})|(([A-Za-z][A-Ha-hJ-Yj-y][0-9]{1,2})|(([A-Za-z][0-9][A-Za-z])|([A-Za-z][A-Ha-hJ-Yj-y][0-9][A-Za-z]?))))\s?[0-9][A-Za-z]{2})/
      ).test(input) ? (
        <Error message="Invalid postcode format" />
      ) : (
        false
      )
    );
  };

  const checkEmail = () => {
    let input = document.querySelector("#email-input").value;
    setEmailError(
      !new RegExp(
        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,253}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,253}[a-zA-Z0-9])?)*$/
      ).test(input) ? (
        <Error message="Invalid email" />
      ) : (
        false
      )
    );
  };

  const checkPhone = () => {
    const input = document.querySelector("#phone-input").value;
    setPhoneError(
      !new RegExp(
        /^(((\+44\s?\d{4}|\(?0\d{4}\)?)\s?\d{3}\s?\d{3})|((\+44\s?\d{3}|\(?0\d{3}\)?)\s?\d{3}\s?\d{4})|((\+44\s?\d{2}|\(?0\d{2}\)?)\s?\d{4}\s?\d{4}))(\s?(\d{4}|\d{3}))?$/
      ).test(input) ? (
        <Error message="Invalid phone number" />
      ) : (
        false
      )
    );
  };

  const checkPhoneFormat = () => {
    const input = document.querySelector("#phone-input").value;
    document.querySelector("#phone-input").value = isNaN(input.value) && input.replace(/\D/g, "");
  };

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

    titleSelect.value = customerData.title ? customerData.title.toLowerCase() : "";
    snameInput.value = customerData.surname ? customerData.surname : "";
    fnameInput.value = customerData.firstName ? customerData.firstName : "";
    dobInput.value = customerData.dateOfBirth ? customerData.dateOfBirth : "";
    customerData.gender === "M" && (mRadio.checked = true);
    customerData.gender === "F" && (fRadio.checked = true);
    customerData.gender === "X" && (oRadio.checked = true);
    customerData.customerType === "Consumer" && (consRadio.checked = true);
    customerData.customerType === "Corporate" && (corpRadio.checked = true);
    address1Input.value = customerData.address1 ? customerData.address1 : "";
    address2Input.value = customerData.address2 ? customerData.address2 : "";
    cityInput.value = customerData.cityTown ? customerData.cityTown : "";
    postcodeInput.value = customerData.postcode ? customerData.postcode : "";
    phoneInput.value = customerData.phoneNo ? customerData.phoneNo : "";
    emailInput.value = customerData.email ? customerData.email : "";
  };

  const closePopUp = () =>{
    if(customerCreated){
      setCustomerCreated(false);
      window.location.href="/create-account"
    }
    setCustomerDeleted(false);
    setCustomerUpdated(false);
    window.location.href="/customer-search";
  }

  return (
    <div className="main-container">
      {(customerCreated || customerDeleted || customerUpdated) && <Popup handleClose={closePopUp} content={popupContent}/>}
      {!createNew && (
        <div className="input-container">
          <span>Customer ID:</span>
          <br />
          <label>{customerData.id}</label>
        </div>
      )}
      <div className="input-container">
        <span>Title:</span>
        <br />
        <select defaultValue={"default"} id="title-select" onBlur={checkTitle}>
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
        <input type="text" id="sname-input" onBlur={checkSurname} />
      </div>
      <div className="input-container">
        <span>Forename:</span>
        <br />
        <input type="text" id="fname-input" onBlur={checkFirstName} />
      </div>
      <div className="input-container">
        <span>DoB:</span>
        <br />
        <input type="text" onBlur={checkDoB} id="dob-input" />
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
          <input type="radio" name="c-type" value="cons" id="cons-radio" className="first-radio" onBlur={checkCustomerType} />
          <label htmlFor="c-type">Consumer</label>
          <input type="radio" name="c-type" value="corp" id="corp-radio" onBlur={checkCustomerType} />
          <label htmlFor="c-type">Corporate</label>
        </div>
      </div>
      <div className="input-container">
        <span>Address 1:</span>
        <br />
        <input type="text" id="address-1-input" onBlur={checkAddress1} />
      </div>
      <div className="input-container">
        <span>Address 2:</span>
        <br />
        <input type="text" id="address-2-input" />
      </div>
      <div className="input-container">
        <span>City:</span>
        <br />
        <input type="text" id="city-input" onBlur={checkCityTown} />
      </div>
      <div className="input-container">
        <span>Postcode:</span>
        <br />
        <input type="text" id="postcode-input" onBlur={checkPostcode} />
      </div>
      <div className="input-container">
        <span>Phone No:</span>
        <br />
        <input type="tel" id="phone-input" onBlur={checkPhone} onChange={checkPhoneFormat} />
      </div>
      <div className="input-container">
        <span>Email:</span>
        <br />
        <input type="email" id="email-input" onBlur={checkEmail} />
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
      {doBError}
      {postcodeError}
      {phoneError}
      {emailError}
      {customerError}
      {customerSuccess}
      {titleError}
      {surnameError}
      {firstNameError}
      {/* {genderError} */}
      {customerTypeError}
      {address1Error}
      {/* {address2Error} */}
      {cityTownError}
      {/* {placeOfBirthError}
      {motherMaidenNameError} */}
    </div>
    
  );

};


export default CustomerInputs;
