import React from "react";
import Head from "next/head";
import axios from "axios";
import { useState } from "react";

const Crud = () => {
  const url = "https://hariyanti-server.herokuapp.com/api/landing-page";
  const [name, setname] = useState("");
  const onSubmit = (e) => {
    e.preventDefault();
    console.log("name :", name);

    const data = new FormData();
    data.append("name", name);
    axios
      .post("https://hariyanti-server.herokuapp.com/api/landing-page", data)
      .then((res) => {
        alert("succes", res);
      })
      .catch((err) => {
        alert(err);
      });
  };
  return (
    <div>
      <Head>
        <title>tess</title>
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
          crossorigin="anonymous"
        ></link>
      </Head>
      <main>
        <form method="POST" action="crud">
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input
              type="text"
              className="form-control"
              name="name"
              onChange={(e) => setname(e.target.value)}
              aria-describedby="emailHelp"
            />
            <div id="emailHelp" className="form-text">
              We'll never share your email with anyone else.
            </div>
          </div>
          <button className="btn btn-primary" onClick={onSubmit}>
            Submit
          </button>
        </form>
      </main>
    </div>
  );
};

export default Crud;
