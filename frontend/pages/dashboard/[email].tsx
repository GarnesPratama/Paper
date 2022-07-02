import React from "react";
import Sidebar from "./sidebar";
import { useRouter } from "next/router";
import MainOverview from "./mainOverview";

export default function overview() {
  return (
    <div>
      <section className="overview overflow-auto">
        <nav className="sb-topnav navbar navbar-expand navbar-dark bg-blue">
          {/*Navbar Brand*/}
          <a className="navbar-brand ps-3" href="index.html">
            Start Bootstrap
          </a>
          {/* Sidebar Toggle */}
          <button
            className="btn btn-link btn-sm order-1 order-lg-0 me-4 me-lg-0"
            id="sidebarToggle"
          >
            <i className="fas fa-bars"></i>
          </button>

          <ul className="navbar-nav ms-auto me-3 me-lg-4 ms-auto">
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                id="navbarDropdown"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <i className="fas fa-user fa-fw"></i>
              </a>
              <ul
                className="dropdown-menu dropdown-menu-end"
                aria-labelledby="navbarDropdown"
              >
                <li>
                  <a className="dropdown-item" href="#!">
                    Settings
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#!">
                    Activity Log
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <a className="dropdown-item" href="#!">
                    Logout
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </nav>
        <div id="layoutSidenav">
          <Sidebar />
          <div id="layoutSidenav_content">
            <main>
              <div className="container-fluid ">
                {/* <!-- Overview --> */}
                <MainOverview />
              </div>
            </main>
            <footer className="py-4 bg-light mt-auto">
              <div className="container-fluid px-4">
                <div className="d-flex align-items-center justify-content-between small">
                  <div className="text-muted">
                    Copyright &copy; Your Website 2022
                  </div>
                  <div>
                    <a href="#">Privacy Policy</a>
                    &middot;
                    <a href="#">Terms &amp; Conditions</a>
                  </div>
                </div>
              </div>
            </footer>
          </div>
        </div>
      </section>
    </div>
  );
}
