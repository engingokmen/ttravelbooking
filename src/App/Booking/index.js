import React, { useState } from "react";
import Date from "./DateSelect";
import Room from "./RoomSelect";
import Payment from "./Payment";
// import { useNavigate } from "@reach/router";

export default function Booking() {
  const [page, setPage] = useState(0);

  function handleBackButton(e) {
    console.log(e);
    if (page !== 0) {
      // navigate(`/invoices/${newInvoice.id}`);
      setPage(page - 1);
    }
  }

  function handleForwardButton() {
    if (page !== 2) {
      setPage(page + 1);
    }
  }

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="btn-group btn-group-lg" role="group" aria-label="...">
          <button type="button" className="btn btn-link">
            Tarih
          </button>
          <button type="button" className="btn btn-link">
            Oda
          </button>
          <button type="button" className="btn btn-link">
            Ödeme
          </button>
        </div>
      </div>
      {page === 0 ? <Date /> : page === 1 ? <Room /> : <Payment />}
      <div className="row justify-content-center mt-5">
        <div className="col-1">
          <button
            onClick={handleBackButton}
            type="button"
            className="btn btn-secondary"
          >
            Geri
          </button>
        </div>
        <div className="col-1 text-right">
          <button
            onClick={handleForwardButton}
            type="button"
            className="btn btn-primary"
          >
            İleri
          </button>
        </div>
      </div>
    </div>
  );
}
