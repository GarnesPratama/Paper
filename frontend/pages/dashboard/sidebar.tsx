import React from "react";
import Cookies from "js-cookie";
import JWT_decode from "jwt-decode";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

export default function sidebar() {
  const router = useRouter();
  const [user, setuser] = useState({
    email: "",
    name: "",
    picture: "",
  });

  useEffect(() => {
    const token = Cookies.get("token");
    const JWT_token = atob(token);
    const payload = JWT_decode(JWT_token);
    console.log("data : ", payload);
    const user = payload;
    setuser(user);
  }, []);

  return (
    <div id="layoutSidenav_nav">
      <nav
        className="sb-sidenav accordion sb-sidenav-dark"
        id="sidenavAccordion"
      >
        <div className="sb-sidenav-menu">
          <div className="nav">
            <div className="text-center">
              <img
                src={user.picture}
                alt=""
                className="rounded-circle mt-3 mb-3"
                width="120"
              />
            </div>
            <h5 className="ms-3 mt-3 mb-3">
              <strong>{user.name}</strong>
            </h5>
            <a className="nav-link" href="index.html">
              <div className="sb-nav-link-icon">
                <i className="fas fa-tachometer-alt"></i>
              </div>
              Overview
            </a>

            <a className="nav-link" href="#">
              <div className="sb-nav-link-icon">
                <i className="fas fa-tachometer-alt"></i>
              </div>
              Transaction
            </a>
            <a className="nav-link" href="#">
              <div className="sb-nav-link-icon">
                <i className="fas fa-tachometer-alt"></i>
              </div>
              Event
            </a>
            <a
              className="nav-link collapsed"
              href="#"
              data-bs-toggle="collapse"
              data-bs-target="#collapseLayouts"
              aria-expanded="false"
              aria-controls="collapseLayouts"
            >
              <div className="sb-nav-link-icon">
                <i className="fas fa-columns"></i>
              </div>
              Setting
              <div className="sb-sidenav-collapse-arrow">
                <i className="fas fa-angle-down"></i>
              </div>
            </a>
            <div
              className="collapse"
              id="collapseLayouts"
              aria-labelledby="headingOne"
              data-bs-parent="#sidenavAccordion"
            >
              <nav className="sb-sidenav-menu-nested nav">
                <a className="nav-link" href="identitySetting.html">
                  Conference Identity
                </a>
                <a className="nav-link" href="timelineSetting.html">
                  Conference Timeline
                </a>
                <a className="nav-link" href="layout-sidenav-light.html">
                  Conference Email
                </a>
                <a className="nav-link" href="layout-sidenav-light.html">
                  Conference Scope
                </a>
                <a className="nav-link" href="layout-sidenav-light.html">
                  Conference Pricing
                </a>
              </nav>
            </div>
            <div className="sb-sidenav-menu-heading">Interface</div>
          </div>
        </div>
        <div className="sb-sidenav-footer">
          <div className="small">Logged in as:</div>
          {user.email}
        </div>
      </nav>
    </div>
  );
}
