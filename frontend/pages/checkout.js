import React from "react";

export default function checkout() {
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
              <div class="d-grid">
                <a class="btn-navy" href="signin.html">
                  Sign In
                </a>
              </div>
            </div>
          </div>
        </nav>
      </section>

      <section class="bg-navy">
        <div class="checkout container">
          <div class="text-center checkout-title">Invest In Yourself</div>

          <div class="event-details container d-flex flex-wrap justify-content-lg-center align-items-center gap-5">
            <img
              src="/images/details-image.png"
              class="event-image"
              alt="semina"
            />
            <div class="d-flex flex-column gap-3">
              <h5>
                Start Your Design Career <br class="d-none d-md-block" />
                With Design Sprint
              </h5>

              <div class="d-flex align-items-center gap-3">
                <img src="/icons/ic-marker-white.svg" alt="" />
                <span>Gowork, Bandung</span>
              </div>
              <div class="d-flex align-items-center gap-3">
                <img src="/icons/ic-time-white.svg" alt="" />
                <span>15.00 PM WIB</span>
              </div>
              <div class="d-flex align-items-center gap-3">
                <img src="/icons/ic-calendar-white.svg" alt="" />
                <span>22 Agustus 2022</span>
              </div>
            </div>
            <div class="total-price">$2,980</div>
          </div>

          <form action="" class="container form-semina">
            <div class="personal-details">
              <div class="row row-cols-lg-8 row-cols-md-2 row-cols-1 justify-content-lg-center">
                <div class="form-title col-lg-8">
                  <span>01</span>
                  <div>Personal Details</div>
                </div>
              </div>
              <div class="row row-cols-lg-8 row-cols-md-2 row-cols-1 justify-content-center">
                <div class="mb-4 col-lg-4">
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

                <div class="mb-4 col-lg-4">
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
              </div>
              <div class="row row-cols-lg-8 row-cols-md-2 row-cols-12 justify-content-center">
                <div class="mb-4 col-lg-4">
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

                <div class="mb-4 col-lg-4">
                  <label for="exampleFormControlInput1" class="form-label">
                    Role
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="role"
                    placeholder="Product Designer"
                  />
                </div>
              </div>
            </div>

            <div class="payment-method mt-4">
              <div class="row row-cols-lg-8 row-cols-md-2 row-cols-1 justify-content-lg-center">
                <div class="form-title col-lg-8">
                  <span>02</span>
                  <div>Payment Method</div>
                </div>
              </div>
              <div class="row row-cols-lg-8 row-cols-md-2 row-cols-1 justify-content-center gy-4 gy-md-0">
                <div class="col-lg-4">
                  <label class="payment-radio h-100 d-flex justify-content-between align-items-center">
                    <div class="d-flex align-items-center gap-4">
                      <img src="/icons/ic-mastercard.svg" alt="" />
                      <div>Mastercard</div>
                    </div>
                    <input type="radio" checked="checked" name="radio" />
                    <span class="checkmark"></span>
                  </label>
                </div>
                <div class="col-lg-4">
                  <label class="payment-radio h-100 d-flex justify-content-between align-items-center">
                    <div class="d-flex align-items-center gap-4">
                      <img src="/icons/ic-sewallet.svg" alt="" />
                      <div class="d-flex flex-column gap-1">
                        Sewallet
                        <span class="balance">Balance: $50,000</span>
                      </div>
                    </div>
                    <input type="radio" name="radio" />
                    <span class="checkmark"></span>
                  </label>
                </div>
              </div>
            </div>

            <div class="d-flex flex-column align-items-center footer-payment gap-4">
              <button type="submit" class="btn-green">
                Pay Now
              </button>
              <div>
                <img src="/icons/ic-secure.svg" alt="" />
                <span>Your payment is secure and encrypted</span>
              </div>
            </div>
          </form>
        </div>
      </section>

      <footer class="footer bg-navy">
        <div class="container">
          <a href="index.html">
            <img src="/images/logo.svg" alt="semina" />
          </a>
          <div class="mt-3 d-flex flex-row flex-wrap footer-content align-items-baseline">
            <p class="paragraph">
              Semina adalah tempat di mana <br class="d-md-block d-none" /> anda
              dapat mencari event sesuai <br class="d-md-block d-none" /> dengan
              minat & terdekat.
            </p>
            <div class="d-flex flex-column footer-links">
              <div class="title-links mb-3">Features</div>
              <a href="#">Virtual</a>
              <a href="#">Pricing</a>
              <a href="#">Merchant</a>
              <a href="#">Tickets</a>
            </div>
            <div class="d-flex flex-column footer-links">
              <div class="title-links mb-3">Company</div>
              <a href="#">Jobs</a>
              <a href="#">API</a>
              <a href="#">Press</a>
              <a href="#">Sitemap</a>
            </div>
            <div class="d-flex flex-column footer-links">
              <div class="title-links mb-3">Learn</div>
              <a href="#">Guidebook</a>
              <a href="#">Inspiration</a>
              <a href="#">Community</a>
              <a href="#">Tools</a>
            </div>
          </div>
          <div class="d-flex justify-content-center paragraph all-rights">
            All Rights Reserved. Semina Angga 2022.
          </div>
        </div>
      </footer>
    </div>
  );
}
