import React from "react";
import Navbar from "../Organism/Interface/navbar/index";
import Footer from "../Organism/Interface/footer";
import Card from "../Molecule/Interface/card";
import { useEffect } from "react";
import Axios from "axios";
const url = "http://localhost:4000/post";

export default function index() {
  useEffect(() => {
    Axios.get(url).then((result) => {
      console.log("data api", result.data);
    });
  }, []);

  return (
    <div>
      <header className="header bg-navy">
        <Navbar />
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
      </header>

      <section className="grow-today">
        <div className="container">
          <div className="sub-title mb-1" id="grow-today">
            <span className="text-gradient-pink">Grow Today</span>
          </div>
          <div className="title">Featured Events</div>
          <div className="mt-5 row gap">
            <div className="col-lg-3 col-md-6 col-12">
              <Card
                pricing={200}
                title="Learn Jira for Sprint Design Venture"
                subtitle="Product Design"
                description="Bandung, 22 Jan 2022"
                href="/a"
              />
            </div>
            <div className="col-lg-3 col-md-6 col-12">
              <Card
                pricing={200}
                title="Learn Jira for Sprint Design Venture"
                subtitle="Product Design"
                description="Bandung, 22 Jan 2022"
                href="/a"
              />
            </div>
            <div className="col-lg-3 col-md-6 col-12">
              <Card
                pricing={200}
                title="Learn Jira for Sprint Design Venture"
                subtitle="Product Design"
                description="Bandung, 22 Jan 2022"
                href="/a"
              />
            </div>
            <div className="col-lg-3 col-md-6 col-12">
              <Card
                pricing={200}
                title="Learn Jira for Sprint Design Venture"
                subtitle="Product Design"
                description="Bandung, 22 Jan 2022"
                href="/a"
              />
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
