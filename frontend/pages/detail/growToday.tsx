import React from "react";

export default function growToday() {
  return (
    <div>
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
    </div>
  );
}
