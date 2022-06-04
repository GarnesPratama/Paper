import React from "react";

export default function detail() {
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

      <div class="preview-image bg-navy text-center">
        <img src="/images/details-image.png" class="img-content" alt="semina" />
      </div>

      <div class="details-content container">
        <div class="d-flex flex-wrap justify-content-lg-center gap">
          <div class="d-flex flex-column description">
            <div class="headline">
              Start Your Design Career With Design Sprint
            </div>
            <div class="event-details">
              <h6>Event Details</h6>
              <p class="details-paragraph">
                Most realtors and investors are using Social Media (Facebook and
                Google)
                <b>ineffectively because</b> they don't know what they're doing
                or to start. They spend hours and hours trying different things
                and getting nowhere. This makes them feel like giving up on
                marketing altogether.
              </p>
              <p class="details-paragraph">
                We are a group of professionals who have decided to help people
                making travel experiences <b>whenever they want</b> and wherever
                they are. Our virtual tours have as their topic the beauties of
                the ancient world, such as Ancient Egypt or Ancient Rome, Art
                and History.
              </p>
            </div>
            <div class="keypoints">
              <div class="d-flex align-items-start gap-3">
                <img src="/icons/ic-check.svg" alt="semina" />
                <span>
                  Hours trying different things and getting nowhere makes them
                  feel like giving up on marketing altogether.
                </span>
              </div>

              <div class="d-flex align-items-start gap-3">
                <img src="/icons/ic-check.svg" alt="semina" />
                <span>
                  Hours trying different things and getting nowhere makes them
                  feel like giving up on marketing altogether.
                </span>
              </div>

              <div class="d-flex align-items-start gap-3">
                <img src="/icons/ic-check.svg" alt="semina" />
                <span>
                  Hours trying different things and getting nowhere makes them
                  feel like giving up on marketing altogether.
                </span>
              </div>
            </div>
            <div class="map-location">
              <h6>Event Location</h6>
              <div class="map-placeholder">
                <div class="maps">
                  <img src="/images/maps.png" alt="" />
                  <div
                    class="absolute d-flex justify-content-center align-items-center"
                    id="hoverMe"
                  >
                    <a href="#" class="btn-navy" id="btn-maps">
                      View in Google Maps
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="d-flex flex-column card-event">
            <h6>Your Speaker</h6>
            <div class="d-flex align-items-center gap-3 mt-3">
              <img src="/images/avatar.png" alt="semina" width="60" />
              <div>
                <div class="speaker-name">Shayna Putri</div>
                <span class="occupation">Designer</span>
              </div>
            </div>
            <hr />

            <h6>Get Ticket</h6>
            <div class="price my-3">
              $2,980<span>/person</span>
            </div>
            <div class="d-flex gap-3 align-items-center card-details">
              <img src="/icons/ic-marker.svg" alt="semina" /> Gowork, Bandung
            </div>
            <div class="d-flex gap-3 align-items-center card-details">
              <img src="/icons/ic-time.svg" alt="semina" /> 15.00 PM WIB
            </div>
            <div class="d-flex gap-3 align-items-center card-details">
              <img src="/icons/ic-calendar.svg" alt="semina" /> 22 Agustus 2022
            </div>
            <a href="checkout.html" class="btn-green">
              Join Now
            </a>
          </div>
        </div>
      </div>

      <section class="grow-today">
        <div class="container">
          <div class="sub-title mb-1">
            <span class="text-gradient-pink">Next One</span>
          </div>
          <div class="title">Similiar Events</div>
          <div class="mt-5 row gap">
            <div class="col-lg-3 col-md-6 col-12">
              <div class="card-grow h-100">
                <span class="badge-pricing">$229</span>
                <img src="/images/card-1.png" alt="semina" />
                <div class="card-content">
                  <div class="card-title">
                    Learn Jira for Sprint Design Venture
                  </div>
                  <div class="card-subtitle">Product Design</div>
                  <div class="description">Bandung, 22 Jan 2022</div>
                  <a href="details.html" class="stretched-link"></a>
                </div>
              </div>
            </div>

            <div class="col-lg-3 col-md-6 col-12">
              <div class="card-grow h-100">
                <span class="badge-pricing">FREE</span>
                <img src="/images/card-2.png" alt="semina" />
                <div class="card-content">
                  <div class="card-title">Team Management for Long Term</div>
                  <div class="card-subtitle">Product Design</div>
                  <div class="description">Jakarta, 11 Aug 2022</div>
                  <a href="details.html" class="stretched-link"></a>
                </div>
              </div>
            </div>

            <div class="col-lg-3 col-md-6 col-12">
              <div class="card-grow h-100">
                <span class="badge-pricing">$80</span>
                <img src="/images/card-3.png" alt="semina" />
                <div class="card-content">
                  <div class="card-title">
                    Set Marketing Target For SaaS Bii
                  </div>
                  <div class="card-subtitle">Product Design</div>
                  <div class="description">Bandung, 22 Jan 2022</div>
                  <a href="details.html" class="stretched-link"></a>
                </div>
              </div>
            </div>

            <div class="col-lg-3 col-md-6 col-12">
              <div class="card-grow h-100">
                <span class="badge-pricing">$90</span>
                <img src="/images/card-4.png" alt="semina" />
                <div class="card-content">
                  <div class="card-title">
                    Google Adsense from Zero to Big Bucks
                  </div>
                  <div class="card-subtitle">Product Design</div>
                  <div class="description">Jakarta, 11 Aug 2022</div>
                  <a href="details.html" class="stretched-link"></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="stories">
        <div class="d-flex flex-row justify-content-center align-items-center container">
          <img
            src="/images/story.png"
            alt="semina"
            class="d-none d-lg-block"
            width="515"
          />
          <div class="d-flex flex-column">
            <div>
              <div class="sub-title">
                <span class="text-gradient-pink">Story</span>
              </div>
              <div class="title">
                One Great Event. <br class="d-none d-lg-block" />
                For The Better World.
              </div>
            </div>
            <p class="paragraph">
              Baca kisah bagaimana Shayna berhasil membangun{" "}
              <br class="d-none d-lg-block" />
              sebuah Startup yang membantu warga untuk{" "}
              <br class="d-none d-lg-block" />
              mendapatkan bantuan selama pandemic.
            </p>
            <a href="#" class="btn-navy">
              Read
            </a>
          </div>
        </div>
      </section>

      <section class="statistics container">
        <div class="d-flex flex-row flex-wrap justify-content-center align-items-center gap-5">
          <div class="d-flex flex-column align-items-center gap-1">
            <div class="title">190K+</div>
            <p>Events Created</p>
          </div>
          <div class="vr"></div>
          <div class="d-flex flex-column align-items-center gap-1">
            <div class="title">3M</div>
            <p>People Joined</p>
          </div>
          <div class="vr d-none d-md-block"></div>
          <div class="d-flex flex-column align-items-center gap-1">
            <div class="title">5K+</div>
            <p>Success Startup</p>
          </div>
          <div class="vr"></div>
          <div class="d-flex flex-column align-items-center gap-1">
            <div class="title">113K+</div>
            <p>Top Speakers</p>
          </div>
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
