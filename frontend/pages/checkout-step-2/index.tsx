import React from "react";
import Form from "./Form";

export default function index() {
  return (
    <div>
      <div className="container body mt-5">
        <div className="container">
          <ul className="progressbar">
            <li className="fulled"></li>
            <li className="active"></li>
            <li></li>
            <li></li>
          </ul>
        </div>
        <h3 className="title mt-5">Pembayaran</h3>
        <p className="detail">Silahkan pilih metode pembayaran dibawah ini</p>
        <div className="container form">
          <Form />
        </div>
      </div>
    </div>
  );
}
