import React from "react";
import { Link } from "@reach/router";

export default function Booking(props) {
  return (
    <div className="container">
      <div className="btn-group btn-group-lg" role="group" aria-label="...">
        <Link className="nav-link" to="date">
          Tarih
        </Link>
        <Link className="nav-link" to="room">
          Oda
        </Link>
        <Link className="nav-link" to="payment">
          Ödeme
        </Link>
      </div>
      {props.children}
    </div>
  );
}
