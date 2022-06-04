import React from "react";

export default function home() {
  return (
    <div>
      <header className="header bg-navy">
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
                <a
                  className="nav-link active"
                  aria-current="page"
                  href="index.html"
                >
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

        <div className="hero">
          <div className="hero-headline">
            Expand Your <span className="text-gradient-blue">Knowledge</span>{" "}
            <br className="d-none d-lg-block" />
            by <span className="text-gradient-pink">Joining</span> Our Greatest
            Events
          </div>
          <p className="hero-paragraph">
            Kami menyediakan website terbaik untuk{" "}
            <br className="d-none d-lg-block" />
            anda dalam membuat seminar
          </p>
          <a href="#grow-today" className="btn-green">
            Browse Now
          </a>
        </div>

        <div className="d-flex flex-row flex-nowrap justify-content-center align-items-center gap-5 header-image">
          <img src="/images/1.png" alt="semina" className="img-1" />
          <img src="/images/2.png" alt="semina" className="img-2" />
          <img src="/images/1.png" alt="semina" className="img-1" />
        </div>
      </header>

      <section className="brand-partner text-center">
        <p>Events held by top & biggest global companies</p>
        <div className="d-flex flex-row flex-wrap justify-content-center align-items-center">
          <img src="/images/apple-111.svg" alt="semina" />
          <img src="/images/Adobe.svg" alt="semina" />
          <img src="/images/slack-21.svg" alt="semina" />
          <img src="/images/spotify-11.svg" alt="semina" />
          <img src="/images/google-2015.svg" alt="semina" />
        </div>
      </section>

      <section className="grow-today">
        <div className="container">
          <div className="sub-title mb-1" id="grow-today">
            <span className="text-gradient-pink">Grow Today</span>
          </div>
          <div className="title">Featured Events</div>
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

      <footer className="footer bg-navy">
        <div className="container">
          <a href="index.html">
            <img src="/images/logo.svg" alt="semina" />
          </a>
          <div className="mt-3 d-flex flex-row flex-wrap footer-content align-items-baseline">
            <p className="paragraph">
              Semina adalah tempat di mana <br className="d-md-block d-none" />{" "}
              anda dapat mencari event sesuai{" "}
              <br className="d-md-block d-none" /> dengan minat & terdekat.
            </p>
            <div className="d-flex flex-column footer-links">
              <div className="title-links mb-3">Features</div>
              <a href="#">Virtual</a>
              <a href="#">Pricing</a>
              <a href="#">Merchant</a>
              <a href="#">Tickets</a>
            </div>
            <div className="d-flex flex-column footer-links">
              <div className="title-links mb-3">Company</div>
              <a href="#">Jobs</a>
              <a href="#">API</a>
              <a href="#">Press</a>
              <a href="#">Sitemap</a>
            </div>
            <div className="d-flex flex-column footer-links">
              <div className="title-links mb-3">Learn</div>
              <a href="#">Guidebook</a>
              <a href="#">Inspiration</a>
              <a href="#">Community</a>
              <a href="#">Tools</a>
            </div>
          </div>
          <div className="d-flex justify-content-center paragraph all-rights">
            All Rights Reserved. Semina Angga 2022.
          </div>
        </div>
      </footer>
    </div>
  );
}
