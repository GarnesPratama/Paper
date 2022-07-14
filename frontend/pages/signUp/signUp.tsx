import React from "react";

export default function signUp() {
  return (
    <div>
      <section className="bg-navy">
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

      <section className="login header bg-navy">
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
              <form
                action=""
                className="form-login d-flex flex-column mt-4 mt-md-0"
              >
                <div className="d-flex flex-column align-items-start">
                  <label className="form-label">First Name</label>
                  <input
                    type="text"
                    placeholder="First name here"
                    className="form-control"
                    id="first_name"
                  />
                </div>

                <div className="d-flex flex-column align-items-start">
                  <label className="form-label">Last Name</label>
                  <input
                    type="text"
                    placeholder="Last name here"
                    className="form-control"
                    id="last_name"
                  />
                </div>

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
                <div className="d-flex flex-column align-items-start">
                  <label className="form-label">Role</label>
                  <input
                    type="text"
                    className="form-control"
                    id="role"
                    placeholder="ex: Product Designer"
                  />
                </div>
                <div className="d-grid mt-2">
                  <button className="btn-green">Sign Up</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section className="brand-partner pt-0 text-center bg-navy">
        <p>Events held by top & biggest global companies</p>
        <div className="d-flex flex-row flex-wrap justify-content-center align-items-center">
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
