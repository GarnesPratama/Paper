import React from "react";
import Navbar from "../../Organism/Interface/navbar";

const SignIn = () => {
  return (
    <div>
      <section className="bg-navy">
        <Navbar />
      </section>

      <section className="login header bg-navy">
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
                />
              </div>

              <div className="d-flex flex-column align-items-start">
                <label className="form-label">Password (6 characters)</label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  placeholder="Type your password"
                />
              </div>
              <div className="d-grid mt-2 gap-4">
                <button className="btn-green">Sign In</button>
                <a href="checkout-authenticated.html" className="btn-green">
                  Sign In
                </a>
                <a href="signup.html" className="btn-navy">
                  Create New Account
                </a>
              </div>
            </form>
          </div>
        </div>
      </section>

      <section className="brand-partner pt-0 text-center bg-navy">
        <p>Events held by top & biggest global companies</p>
        <div className="d-flex flex-row flex-wrap justify-content-center align-items-center">
          <img src="assets/images/apple-111.svg" alt="semina" />
          <img src="assets/images/Adobe.svg" alt="semina" />
          <img src="assets/images/slack-21.svg" alt="semina" />
          <img src="assets/images/spotify-11.svg" alt="semina" />
          <img src="assets/images/google-2015.svg" alt="semina" />
        </div>
      </section>
    </div>
  );
};

export default SignIn;
