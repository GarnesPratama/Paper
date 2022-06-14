import React from "react";
import Menu from "./menu";
import Auth from "./auth";

export default function index() {
  return (
    <div>
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
              <Menu title="Home" href="/" active />
              <Menu title="Home" href="/detail" />
              <Menu title="Home" href="/game" />
              <Menu title="Home" href="/" />
            </div>
            <div className="d-grid">
              <Auth />
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
