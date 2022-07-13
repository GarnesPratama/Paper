import React from "react";
import Form from "./Form";
import Header from "./Header";

export default function index() {
  return (
    <div>
      <div className="container body mt-5">
        <Header />
        <div className="container form">
          <Form id="" />
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
