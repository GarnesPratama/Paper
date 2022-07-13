import React, { useEffect, useState } from "react";
import Form from "./form";

export default function mainEditProfile() {
  const [data, setData] = useState([]);

  return (
    <div className="col-12 col-xl-9 dashboard">
      <div className="container">
        <div className="nav">
          <div className="d-flex justify-content-between align-items-center w-100 mb-3 mb-md-0">
            <div className="d-flex justify-content-start align-items-center">
              <button id="toggle-navbar">
                <img
                  src="/assets/img/global/burger.svg"
                  className="mb-2"
                  alt=""
                />
              </button>
              <h2 className="nav-title">Overview</h2>
            </div>
            <button className="btn-notif d-block d-md-none">
              <img src="/assets/img/global/bell.svg" alt="" />
            </button>
          </div>
        </div>
        <Form />
      </div>
    </div>
  );
}
