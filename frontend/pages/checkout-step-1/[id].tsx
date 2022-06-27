import React from "react";
import Form from "./Form";

export default function index() {
  return (
    <div>
      <div className="container body mt-5">
        <div className="container">
          <ul className="progressbar">
            <li className="active"></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>
        <h3 className="title mt-5">Input Data Paper</h3>
        <p className="detail">
          Silahkan isi form dibawah ini untuk melanjutkan metode pembayaran
        </p>
        <div className="container form">
          <Form />
        </div>
      </div>
    </div>
  );
}

export async function getServerSideProps({ req }) {
  const { token } = req.cookies;
  //console.log("token =", token);
  if (!token) {
    return {
      redirect: {
        destination: "/signIn",
      },
    };
  }
  return {
    props: {
      user: {},
    },
  };
}
