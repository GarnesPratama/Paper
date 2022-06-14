import React, { useState } from "react";
import Axios from "axios";
import { useRouter } from "next/router";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function signUp() {
  const router = useRouter();
  const qs = require("qs");
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [role, setrole] = useState("");
  const config = {
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
  };
  const data = qs.stringify({
    name: name,
    email: email,
    password: password,
    role: role,
  });
  const url = "http://localhost:4000/api/v1/auth/signUp";

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const resp = await Axios.post(url, data, config);
      console.log(resp);
      toast.success("Pembuatan Akun Berhasil");
    } catch {
      console.log("error");
      toast.error("error");
    }
  };

  return (
    <div>
      <section className="bg">
        <nav className="container navbar navbar-expand-lg navbar-dark">
          <div className="container-fluid">
            <a className="navbar-brand" href="index.html">
              <img src="/images/logo.svg" alt="semina" />
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavAltMarkup"
              aria-controls="navbarNavAltMarkup"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div className="navbar-nav mx-auto my-3 my-lg-0">
                <a className="nav-link" href="/home">
                  Home
                </a>
                <a className="nav-link" href="#">
                  Browse
                </a>
                <a className="nav-link" href="#">
                  Stories
                </a>
                <a className="nav-link" href="#">
                  About
                </a>
              </div>
              <div className="d-grid">
                <a className="btn-navy" href="signin.html">
                  Sign In
                </a>
              </div>
            </div>
          </div>
        </nav>
      </section>

      <section className="login header bg">
        <div className="container">
          <div className="row row-cols-md-12 row-cols-1 d-flex justify-content-center align-items-center hero">
            <div className="col-md-6">
              <div className="hero-headline text-start">
                Expand Your <br className="d-none d-md-block" />
                Knowledge & Skills
              </div>
              <p className="hero-paragraph text-start">
                Kami menyediakan berbagai acara terbaik untuk membantu{" "}
                <br className="d-none d-lg-block" />
                anda dalam meningkatkan skills di bidang teknologi
              </p>
            </div>
            <div className="col-md-6">
              <ToastContainer />
              <form
                action=""
                className="form-login d-flex flex-column mt-4 mt-md-0"
              >
                <div className="d-flex flex-column align-items-start">
                  <label className="form-label">Nama</label>
                  <input
                    type="text"
                    placeholder="First name here"
                    className="form-control"
                    id="first_name"
                    value={name}
                    onChange={(e) => setname(e.target.value)}
                  />
                </div>
                <div className="d-flex flex-column align-items-start">
                  <label className="form-label">Email</label>
                  <input
                    type="email"
                    className="form-control"
                    id="email_address"
                    placeholder="semina@bwa.com"
                    value={email}
                    onChange={(e) => setemail(e.target.value)}
                  />
                </div>

                <div className="d-flex flex-column align-items-start">
                  <label className="form-label">Password (6 characters)</label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    placeholder="Type your password"
                    value={password}
                    onChange={(e) => setpassword(e.target.value)}
                  />
                </div>
                <div className="d-flex flex-column align-items-start">
                  <label className="form-label">Role</label>
                  <input
                    type="text"
                    className="form-control"
                    id="role"
                    placeholder="ex: Product Designer"
                    value={role}
                    onChange={(e) => setrole(e.target.value)}
                  />
                </div>
                <div className="d-grid mt-2">
                  <button className="btn-green" onClick={onSubmit}>
                    Sign Up
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
