import React from "react";
import { Router } from "@reach/router";
import Home from "./Home";
import Booking from "./Booking";

import Navigation from "./Navigation";

export default function Routing() {
  const NotFound = () => (
    <div className="container">
      <h3>Aradığınız sayfayı bulamadık.</h3>
    </div>
  );
  return (
    <>
      <Navigation />
      <Router>
        <Home path="/" />
        <Booking path="booking">
          {/* <DateSelect path="date" />
          <RoomSelect path="room" />
          <Payment path="payment" /> */}
        </Booking>
        <NotFound default />
      </Router>
    </>
  );
}
