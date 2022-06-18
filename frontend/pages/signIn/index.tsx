import React, { useState } from "react";
import Navbar from "../../Organism/Interface/navbar";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Axios from "axios";
import { useRouter } from "next/router";
import Link from "next/link";
import cookie from "js-cookie";

const SignIn = () => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const router = useRouter();
  const config = {
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
  };
  const url = "http://localhost:4000/api/v1/auth/signin";
  const onSubmit = async (e) => {
    e.preventDefault();
    const qs = require("qs");
    const data = qs.stringify({
      email,
      password,
    });
    if (!email || !password) {
      toast.error("email / password wajib diisi");
    } else {
      const resp = await Axios.post(url, data, config);
      if (resp.status > 300) {
        toast.error("data tidak valid");
        console.log("error", resp);
      } else if (resp.status < 300) {
        toast.success("login berhasil");
        const { token } = resp.data.data;
        const tokenBase64 = btoa(token);
        console.log("token ", token);
        //console.log("token ", tokenBase64);
        cookie.set("token", tokenBase64);
        //console.log("succes", resp);
        router.push("/");
      }
    }
  };
  return (
    <div>
      <section className="login header bg">
        <div className="container">
          <div className="d-flex flex-column align-items-center hero gap-5">
            <div>
              <div className="hero-headline text-start">Sign In</div>
            </div>
            <form
              action=""
              className="form-login d-flex flex-column mt-4 mt-md-0 p-30"
            >
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
              <div className="d-grid mt-2 gap-4">
                <button className="btn-green" onClick={onSubmit}>
                  Sign In
                </button>
                <Link href="/signUp">
                  <a href="signup.html" className="btn-navy">
                    Create New Account
                  </a>
                </Link>
              </div>
            </form>
            <ToastContainer />
          </div>
        </div>
      </section>
    </div>
  );
};

export default SignIn;
