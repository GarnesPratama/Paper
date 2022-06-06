import React from "react";

export default function signUp() {
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
              <div class="navbar-nav mx-auto my-3 my-lg-0">
                <a class="nav-link" href="/home">
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
              <div class="d-grid">
                <a class="btn-navy" href="signin.html">
                  Sign In
                </a>
              </div>
            </div>
          </div>
        </nav>
      </section>

      <section class="login header bg-navy">
        <div class="container">
          <div class="row row-cols-md-12 row-cols-1 d-flex justify-content-center align-items-center hero">
            <div class="col-md-6">
              <div class="hero-headline text-start">
                Expand Your <br class="d-none d-md-block" />
                Knowledge & Skills
              </div>
              <p class="hero-paragraph text-start">
                Kami menyediakan berbagai acara terbaik untuk membantu{" "}
                <br class="d-none d-lg-block" />
                anda dalam meningkatkan skills di bidang teknologi
              </p>
            </div>
            <div class="col-md-6">
              <form
                action=""
                class="form-login d-flex flex-column mt-4 mt-md-0"
              >
                <div class="d-flex flex-column align-items-start">
                  <label for="first_name" class="form-label">
                    First Name
                  </label>
                  <input
                    type="text"
                    placeholder="First name here"
                    class="form-control"
                    id="first_name"
                  />
                </div>

                <div class="d-flex flex-column align-items-start">
                  <label for="last_name" class="form-label">
                    Last Name
                  </label>
                  <input
                    type="text"
                    placeholder="Last name here"
                    class="form-control"
                    id="last_name"
                  />
                </div>

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
                <div class="d-flex flex-column align-items-start">
                  <label for="role" class="form-label">
                    Role
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="role"
                    placeholder="ex: Product Designer"
                  />
                </div>
                <div class="d-grid mt-2">
                  <button class="btn-green">Sign Up</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section class="brand-partner pt-0 text-center bg-navy">
        <p>Events held by top & biggest global companies</p>
        <div class="d-flex flex-row flex-wrap justify-content-center align-items-center">
          <img src="/images/apple-111.svg" alt="semina" />
          <img src="/images/Adobe.svg" alt="semina" />
          <img src="/images/slack-21.svg" alt="semina" />
          <img src="/images/spotify-11.svg" alt="semina" />
          <img src="/images/google-2015.svg" alt="semina" />
        </div>
      </section>
    </div>
  );
}
