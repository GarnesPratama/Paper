import React from "react";
import Navbar from "../../Organism/Interface/navbar";
import Footer from "../../Organism/Interface/footer";

export default function detail() {
  return (
    <div>
      <section className="bg-navy">
        <Navbar />
      </section>

      <div className="preview-image bg-navy text-center">
        <img
          src="/images/details-image.png"
          className="img-content"
          alt="semina"
        />
      </div>

      <div className="details-content container">
        <div className="d-flex flex-wrap justify-content-lg-center gap">
          <div className="d-flex flex-column description">
            <div className="headline">
              Start Your Design Career With Design Sprint
            </div>
            <div className="event-details">
              <h6>Event Details</h6>
              <p className="details-paragraph">
                Most realtors and investors are using Social Media (Facebook and
                Google)
                <b>ineffectively because</b> they don't know what they're doing
                or to start. They spend hours and hours trying different things
                and getting nowhere. This makes them feel like giving up on
                marketing altogether.
              </p>
              <p className="details-paragraph">
                We are a group of professionals who have decided to help people
                making travel experiences <b>whenever they want</b> and wherever
                they are. Our virtual tours have as their topic the beauties of
                the ancient world, such as Ancient Egypt or Ancient Rome, Art
                and History.
              </p>
            </div>
            <div className="keypoints">
              <div className="d-flex align-items-start gap-3">
                <img src="/icons/ic-check.svg" alt="semina" />
                <span>
                  Hours trying different things and getting nowhere makes them
                  feel like giving up on marketing altogether.
                </span>
              </div>

              <div className="d-flex align-items-start gap-3">
                <img src="/icons/ic-check.svg" alt="semina" />
                <span>
                  Hours trying different things and getting nowhere makes them
                  feel like giving up on marketing altogether.
                </span>
              </div>

              <div className="d-flex align-items-start gap-3">
                <img src="/icons/ic-check.svg" alt="semina" />
                <span>
                  Hours trying different things and getting nowhere makes them
                  feel like giving up on marketing altogether.
                </span>
              </div>
            </div>
            <div className="map-location">
              <h6>Event Location</h6>
              <div className="map-placeholder">
                <div className="maps">
                  <img src="/images/maps.png" alt="" />
                  <div
                    className="absolute d-flex justify-content-center align-items-center"
                    id="hoverMe"
                  >
                    <a href="#" className="btn-navy" id="btn-maps">
                      View in Google Maps
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="d-flex flex-column card-event">
            <h6>Your Speaker</h6>
            <div className="d-flex align-items-center gap-3 mt-3">
              <img src="/images/avatar.png" alt="semina" width="60" />
              <div>
                <div className="speaker-name">Shayna Putri</div>
                <span className="occupation">Designer</span>
              </div>
            </div>
            <hr />

            <h6>Get Ticket</h6>
            <div className="price my-3">
              $2,980<span>/person</span>
            </div>
            <div className="d-flex gap-3 align-items-center card-details">
              <img src="/icons/ic-marker.svg" alt="semina" /> Gowork, Bandung
            </div>
            <div className="d-flex gap-3 align-items-center card-details">
              <img src="/icons/ic-time.svg" alt="semina" /> 15.00 PM WIB
            </div>
            <div className="d-flex gap-3 align-items-center card-details">
              <img src="/icons/ic-calendar.svg" alt="semina" /> 22 Agustus 2022
            </div>
            <a href="checkout.html" className="btn-green">
              Join Now
            </a>
          </div>
        </div>
      </div>

      <section className="grow-today">
        <div className="container">
          <div className="sub-title mb-1">
            <span className="text-gradient-pink">Next One</span>
          </div>
          <div className="title">Similiar Events</div>
          <div className="mt-5 row gap">
            <div className="col-lg-3 col-md-6 col-12">
              <div className="card-grow h-100">
                <span className="badge-pricing">$229</span>
                <img src="/images/card-1.png" alt="semina" />
                <div className="card-content">
                  <div className="card-title">
                    Learn Jira for Sprint Design Venture
                  </div>
                  <div className="card-subtitle">Product Design</div>
                  <div className="description">Bandung, 22 Jan 2022</div>
                  <a href="details.html" className="stretched-link"></a>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 col-12">
              <div className="card-grow h-100">
                <span className="badge-pricing">FREE</span>
                <img src="/images/card-2.png" alt="semina" />
                <div className="card-content">
                  <div className="card-title">
                    Team Management for Long Term
                  </div>
                  <div className="card-subtitle">Product Design</div>
                  <div className="description">Jakarta, 11 Aug 2022</div>
                  <a href="details.html" className="stretched-link"></a>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 col-12">
              <div className="card-grow h-100">
                <span className="badge-pricing">$80</span>
                <img src="/images/card-3.png" alt="semina" />
                <div className="card-content">
                  <div className="card-title">
                    Set Marketing Target For SaaS Bii
                  </div>
                  <div className="card-subtitle">Product Design</div>
                  <div className="description">Bandung, 22 Jan 2022</div>
                  <a href="details.html" className="stretched-link"></a>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 col-12">
              <div className="card-grow h-100">
                <span className="badge-pricing">$90</span>
                <img src="/images/card-4.png" alt="semina" />
                <div className="card-content">
                  <div className="card-title">
                    Google Adsense from Zero to Big Bucks
                  </div>
                  <div className="card-subtitle">Product Design</div>
                  <div className="description">Jakarta, 11 Aug 2022</div>
                  <a href="details.html" className="stretched-link"></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="stories">
        <div className="d-flex flex-row justify-content-center align-items-center container">
          <img
            src="/images/story.png"
            alt="semina"
            className="d-none d-lg-block"
            width="515"
          />
          <div className="d-flex flex-column">
            <div>
              <div className="sub-title">
                <span className="text-gradient-pink">Story</span>
              </div>
              <div className="title">
                One Great Event. <br className="d-none d-lg-block" />
                For The Better World.
              </div>
            </div>
            <p className="paragraph">
              Baca kisah bagaimana Shayna berhasil membangun{" "}
              <br className="d-none d-lg-block" />
              sebuah Startup yang membantu warga untuk{" "}
              <br className="d-none d-lg-block" />
              mendapatkan bantuan selama pandemic.
            </p>
            <a href="#" className="btn-navy">
              Read
            </a>
          </div>
        </div>
      </section>

      <section className="statistics container">
        <div className="d-flex flex-row flex-wrap justify-content-center align-items-center gap-5">
          <div className="d-flex flex-column align-items-center gap-1">
            <div className="title">190K+</div>
            <p>Events Created</p>
          </div>
          <div className="vr"></div>
          <div className="d-flex flex-column align-items-center gap-1">
            <div className="title">3M</div>
            <p>People Joined</p>
          </div>
          <div className="vr d-none d-md-block"></div>
          <div className="d-flex flex-column align-items-center gap-1">
            <div className="title">5K+</div>
            <p>Success Startup</p>
          </div>
          <div className="vr"></div>
          <div className="d-flex flex-column align-items-center gap-1">
            <div className="title">113K+</div>
            <p>Top Speakers</p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
