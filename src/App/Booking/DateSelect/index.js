import React, { useState } from "react";
import moment from "moment";

export default function DateSelect() {
  const [checkIn, setCheckIn] = useState(moment().format("YYYY-MM-DD"));
  const [checkOut, setCheckOut] = useState(moment().format("YYYY-MM-DD"));
  const [min, setMin] = useState(moment().format("YYYY-MM-DD"));
  const [max] = useState(moment().add(2, "years").format("YYYY-MM-DD"));

  function handleChangeCheckIn(e) {
    setCheckIn(e.target.value);
    setMin(e.target.value);
    setCheckOut(e.target.value);
  }
  function handleChangeCheckOut(e) {
    setCheckOut(e.target.value);
  }

  return (
    <>
      <div className="container-sm">
        <form className="mt-5">
          <div className="form-group row justify-content-center">
            <label htmlFor="start" className="col-2  col-form-label">
              Check-in Tarihi:
            </label>
            <input
              className="col-2"
              type="date"
              id="start"
              name="checkIn"
              value={checkIn}
              min={min}
              max={max}
              onChange={handleChangeCheckIn}
            />
            <div className="valid-feedback">Looks good!</div>
          </div>
          <div className="form-group row justify-content-center">
            <label htmlFor="start" className="col-2  col-form-label">
              Check-out Tarihi:
            </label>
            <input
              className="col-2"
              type="date"
              id="end"
              name="checkOut"
              value={checkOut}
              min={min}
              max={max}
              onChange={handleChangeCheckOut}
            />
          </div>
        </form>
      </div>
    </>
  );
}
