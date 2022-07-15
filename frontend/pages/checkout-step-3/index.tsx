import React, { useEffect, useState } from "react";
import Form from "./form";


export default function index() {
  return (
    <div>
      <div className="container body mt-5">
        <div className="container">
          <ul className="progressbar">
            <li className="fulled"></li>
            <li className="fulled"></li>
            <li className="fulled"></li>
            <li className="active"></li>
          </ul>
        </div>
        <h3 className="title mt-5">Review Checkout</h3>
        <p className="detail">Berikut merupakan rincian pemesanan paper</p>
        <Form />
      </div>
    </div>
  );
}
