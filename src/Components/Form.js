import React, { useState } from "react";
import Complete from "./Complete";

function Form() {
  const [input, setInput] = useState({
    cardholderName: "",
    cardNumber: "",
    cardMonth: "",
    cardYear: "",
    cardCvc: "",
  });

  const [click, setClick] = useState(true);
  const [namechange, setNamechange] = useState(true);
  const [numberchange, setNumberchange] = useState(true);
  const [monthchange, setMonthchange] = useState(true);
  const [yearchange, setYearchange] = useState(true);
  const [cvcchange, setCvcchange] = useState(true);
  

  function handleChange(event) {
    const { name, value } = event.target;
    setInput((prevValue) => {
      return { ...prevValue, [name]: value };
    });
  }

  function handleClick(event) {
    setClick(false);

    event.preventDefault();
  }

  function nameChange() {
    setNamechange(false);
  }
  function numberChange() {
    setNumberchange(false);
  }
  function monthChange() {
    setMonthchange(false);
  }
  function yearChange() {
    setYearchange(false);
  }
  function cvcChange() {
    setCvcchange(false);
  }
 

  return (
    <div>
      {click === true ? (
        <form className="Form">
          <label for="fname">"CARDHOLDER NAME"</label>
          <div>
            <input
              id="fname"
              onChange={handleChange}
              onClick={nameChange}
              type="text"
              placeholder="e.g. Jane Appleseed"
              name="cardholderName"
              value={input.cardholderName}
            />
          </div>
          <label for="number">CARD NUMBER</label>
          <div>
            <input
              id="number"
              onChange={handleChange}
              onClick={numberChange}
              type="number"
              placeholder="e.g. 1234 5678 9123 0000"
              name="cardNumber"
              value={input.cardNumber}
            />
          </div>
          <label>EXP. DATE (MM/YY) CVC</label>
          <div>
            <input
              className="monthInput"
              id="month"
              onChange={handleChange}
              onClick={monthChange}
              type="number"
              placeholder="MM"
              name="cardMonth"
              value={input.cardMonth}
            />
            <input
              className="yearInput"
              id="number"
              onChange={handleChange}
              onClick={yearChange}
              type="number"
              placeholder="YY"
              name="cardYear"
              width="48"
              height="11"
              value={input.cardYear}
            />

            <input
              className="cvcInput"
              id="cvc"
              onChange={handleChange}
              onClick={cvcChange}
              type="number"
              max="3"
              placeholder="e.g. 123"
              name="cardCvc"
              value={input.cardCvc}
            />
          </div>
          <button onClick={handleClick}>Confirm</button>
        </form>
      ) : (
        <Complete />
      )}

      <div className="parent">
        <p className="defaultCardName" onchange={nameChange}>
          {namechange === true ? "JANE APPLESEED" : input.cardholderName}
        </p>
        <p className="defaultCardDate" OnChange={nameChange}>
          {monthchange === true ? "00/00" : input.cardMonth + "/" + input.cardYear}
        </p>
        <p className="defaultCardNumber">
          {numberchange === true ? "0000 0000 0000 0000" : input.cardNumber}
        </p>
        <p className="defaultCardCvc">
          {cvcchange === true ? "000" : input.cardCvc}
        </p>
      </div>
    </div>
  );
}

export default Form;
