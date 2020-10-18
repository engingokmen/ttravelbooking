import React, { useState } from "react";
import Cards from "react-credit-cards";
import NumberFormat from "react-number-format";

export default function Payment({ handleBackButton, handleForwardButton }) {
  const [cvc, setCvc] = useState("");
  const [expiry, setExpiry] = useState("");
  const [focus, setFocus] = useState("");
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

  function handleInputFocus(e) {
    setFocus(e.target.name);
  }

  return (
    <div className="mt-5" id="PaymentForm">
      <Cards
        cvc={cvc}
        expiry={expiry}
        focused={focus}
        name={name}
        number={number}
      />
      <form className="mt-2">
        <div className="form-group row justify-content-center">
          <div className="col-3 justify-content-center">
            <div className="row justify-content-center">
              <input
                className="mt-1"
                value={name}
                type="text"
                name="name"
                placeholder="Ad Soyad"
                onChange={(e) => setName(e.target.value)}
                onFocus={handleInputFocus}
              />
              <NumberFormat
                className="mt-1"
                name="number"
                value={number}
                format="#### #### #### ####"
                onChange={(e) => setNumber(e.target.value)}
                onFocus={handleInputFocus}
                placeholder="Kart Numarası"
              />
              <NumberFormat
                className="mt-1"
                name="cvc"
                value={cvc}
                format="###"
                onChange={(e) => setCvc(e.target.value)}
                onFocus={handleInputFocus}
                placeholder="CVC"
              />
              <NumberFormat
                className="mt-1"
                value={expiry}
                format="##/##"
                placeholder="MM/YY"
                mask={["M", "M", "Y", "Y"]}
                onChange={(e) => setExpiry(e.target.value)}
                onFocus={handleInputFocus}
              />
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
