import React from "react";
import MenuFooter from "./menuFooter";

export default function sidebar() {
  return (
    <div>
      <section className="overview overflow-auto">
        <section className="sidebar">
          <div className="content pt-50 pb-30 ps-30">
            <div className="user text-center pb-50 pe-30">
              <img
                src="../assets/img/avatar-1.png"
                width="90"
                height="90"
                className="img-fluid mb-20"
              />
              <h2 className="fw-bold text-xl color-palette-1 m-0">
                Shayna Anne
              </h2>
              <p className="color-palette-1 m-0">shayna@anne.com</p>
            </div>
            <div className="menus">
              <div className="item active mb-30">
                <img
                  src="images/icons8-dashboard-layout-48 (1).png"
                  alt=""
                  srcSet=""
                  width="25"
                  height="25"
                />

                <p className="item-title m-0">
                  <a href="" className="text-lg text-decoration-none ms-3">
                    Overview
                  </a>
                </p>
              </div>

              <div className="item mb-3">
                <img
                  src="images/bag-shopping-solid.svg"
                  width="25"
                  height="25"
                />
                <p className="item-title m-0">
                  <a
                    className="text-lg text-decoration-none ms-3"
                    data-bs-toggle="collapse"
                    href="#multiCollapseExample1"
                    role="button"
                    aria-expanded="false"
                    aria-controls="multiCollapseExample1"
                  >
                    Transactions
                  </a>
                </p>
              </div>
              <div className="row">
                <div className="col-11">
                  <div
                    className="collapse multi-collapse mb-3"
                    id="multiCollapseExample1"
                  >
                    <div className="card card-body">
                      <li>a</li>
                      <li>a</li>
                      <li>a</li>
                      <li>a</li>
                    </div>
                  </div>
                </div>
              </div>

              <div className="item mb-3 mt-3">
                <img
                  src="images/calendar-days-solid.svg"
                  width="25"
                  height="25"
                />
                <p className="item-title m-0">
                  <a
                    className="text-lg text-decoration-none ms-3"
                    data-bs-toggle="collapse"
                    href="#multiCollapseExample2"
                    role="button"
                    aria-expanded="false"
                    aria-controls="multiCollapseExample2"
                  >
                    Event
                  </a>
                </p>
              </div>
              <div className="row">
                <div className="col-11">
                  <div
                    className="collapse multi-collapse mb-3"
                    id="multiCollapseExample2"
                  >
                    <div className="card card-body">
                      <li>a</li>
                      <li>a</li>
                      <li>a</li>
                      <li>a</li>
                    </div>
                  </div>
                </div>
              </div>

              <div className="item mb-30 mt-3">
                <img
                  src="images/gears-solid.svg"
                  width="25"
                  height="25"
                  alt=""
                  srcSet=""
                />

                <p className="item-title m-0">
                  <a href="" className="text-lg text-decoration-none ms-3">
                    Setting
                  </a>
                </p>
              </div>

              <div className="item mb-30">
                <img
                  src="images/right-from-bracket-solid.svg"
                  alt=""
                  width="25"
                  height="25"
                />
                <p className="item-title m-0">
                  <a href="" className="text-lg text-decoration-none ms-3">
                    Log Out
                  </a>
                </p>
              </div>
            </div>
          </div>
        </section>
      </section>
    </div>
  );
}
