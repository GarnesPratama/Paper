import React from "react";
import Form from "./Form";
import Header from "./Header";

export default function index() {
  return (
    <div>
      <div className="container body mt-5">
        <Header />
        <div className="container form">
          <Form />
        </div>
      </div>
    </div>
  );
}
