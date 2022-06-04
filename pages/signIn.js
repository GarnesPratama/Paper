import React from "react";

const SignIn = () => {
  return (
    <div>
      <section class="bg-navy">
        <nav class="container navbar navbar-expand-lg navbar-dark">
          <div class="container-fluid">
            <a class="navbar-brand" href="index.html">
              <img src="/images/logo.svg" alt="semina" />
            </a>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavAltMarkup"
              aria-controls="navbarNavAltMarkup"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div class="navbar-nav ms-auto my-3 my-lg-0">
                <a class="nav-link" href="index.html">
                  Home
                </a>
                <a class="nav-link" href="#">
                  Browse
                </a>
                <a class="nav-link" href="#">
                  Stories
                </a>
                <a class="nav-link" href="#">
                  About
                </a>
              </div>
            </div>
          </div>
        </nav>
      </section>

      <section class="login header bg-navy">
        <div class="container">
          <div class="d-flex flex-column align-items-center hero gap-5">
            <div>
              <div class="hero-headline text-start">Sign In</div>
            </div>
            <form
              action=""
              class="form-login d-flex flex-column mt-4 mt-md-0 p-30"
            >
              <div class="d-flex flex-column align-items-start">
                <label for="email_address" class="form-label">
                  Email
                </label>
                <input
                  type="email"
                  class="form-control"
                  id="email_address"
                  placeholder="semina@bwa.com"
                />
              </div>

              <div class="d-flex flex-column align-items-start">
                <label for="password" class="form-label">
                  Password (6 characters)
                </label>
                <input
                  type="password"
                  class="form-control"
                  id="password"
                  placeholder="Type your password"
                />
              </div>
              <div class="d-grid mt-2 gap-4">
                <button class="btn-green">Sign In</button>
                <a href="checkout-authenticated.html" class="btn-green">
                  Sign In
                </a>
                <a href="signup.html" class="btn-navy">
                  Create New Account
                </a>
              </div>
            </form>
          </div>
        </div>
      </section>

      <section class="brand-partner pt-0 text-center bg-navy">
        <p>Events held by top & biggest global companies</p>
        <div class="d-flex flex-row flex-wrap justify-content-center align-items-center">
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