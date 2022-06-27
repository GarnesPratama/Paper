import React from "react";
import MenuFooter from "./menuFooter";
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
  const logOut = () => {
    Cookies.remove("token");
    router.push("/");
  };

  return (
    <div>
      <section className="overview overflow-auto">
        <section className="sidebar">
          <div className="content pt-50 pb-30 ps-30">
            <div className="user text-center pb-50 pe-30">
              <img
                src={user.picture}
                width="90"
                height="90"
                className="img-fluid mb-20"
                style={{ borderRadius: 100 }}
              />
              <h2 className="fw-bold text-xl color-palette-1 m-0">
                {user.name}
              </h2>
              <p className="color-palette-1 m-0">{user.email}</p>
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
                  <a
                    href=""
                    className="text-lg text-decoration-none ms-3"
                    onClick={logOut}
                  >
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
