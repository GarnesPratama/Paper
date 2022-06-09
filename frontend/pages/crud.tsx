import React from "react";
import Axios from "axios";
import { useState } from "react";

const Crud = () => {
  const url = "http://localhost:4000/post";
  const [name, setname] = useState("");

  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  const data = JSON.stringify({
    name,
  });

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const resp = await Axios.post(url, data, config);
      console.log(resp.data);
    } catch (err) {
      alert(err);
    }
  };
  return (
    <div>
      <main>
        <form onSubmit={onSubmit}>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input
              className="form-control"
              value={name}
              onChange={(e) => setname(e.target.value)}
              aria-describedby="emailHelp"
            />
            <div id="emailHelp" className="form-text">
              We'll never share your email with anyone else.
            </div>
          </div>
          <button className="btn btn-primary">Submit</button>
        </form>
      </main>
    </div>
  );
};

export default Crud;
