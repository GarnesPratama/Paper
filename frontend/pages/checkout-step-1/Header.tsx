import React from "react";

export default function Header() {
  return (
    <div>
      <div className="container">
        <ul className="progressbar">
          <li className="active"></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
      <h3 className="title mt-5">Input Data Conference</h3>
      <p className="detail">
        Silahkan isi form dibawah ini untuk melanjutkan metode pembayaran
      </p>
    </div>
  );
}
