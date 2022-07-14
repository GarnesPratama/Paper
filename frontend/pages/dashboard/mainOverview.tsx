import React, { useEffect, useState } from "react";
import { menuOverview } from "../../services/dataTypes";
import { getMenuOverview } from "../../services/overview";
import NumberFormat from "react-number-format";
import { useRouter } from "next/router";
import Cookies from "js-cookie";
import { useCallback } from "react";
import jwtDecode from "jwt-decode";
import Link from "next/link";

export default function mainEditProfile() {
  const [data, setData] = useState([]);

  const getOverview = useCallback(async (email) => {
    const resp = await getMenuOverview(email);
    setData(resp);
    console.log("data :", resp);
  }, []);
  const { query, isReady } = useRouter();
  useEffect(() => {
    if (isReady) {
      console.log("router tersedia", query.email);
      getOverview(query.email);
    } else {
      console.log("router tidak tersedia");
    }
  });
  return (
    <div className="col-12 col-xl-9 dashboard">
      <div className="container">
        <div className="nav">
          <div className="d-flex justify-content-between align-items-center w-100 mb-3 mb-md-0">
            <div className="d-flex justify-content-start align-items-center">
              <a
                data-bs-toggle="offcanvas"
                data-bs-target="#demo"
                className="hamburger"
              >
                <img
                  src="/assets/img/global/burger.svg"
                  className="mb-2 me-3"
                  alt=""
                />
              </a>
              <h2 className="nav-title">Overview</h2>
            </div>
            <button className="btn-notif d-block d-md-none">
              <img src="/assets/img/global/bell.svg" alt="" />
            </button>
          </div>
        </div>
        <div className="main-content main-content-table overflow-auto document-card ">
          <div className="document-item">
            <table className="table table-borderless">
              <thead>
                <tr className="color-palette-1 ">
                  <th className="text-start" scope="col">
                    Event
                  </th>
                  <th scope="col">Ketua</th>
                  <th scope="col">Paket</th>
                  <th scope="col">Status</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                {data.map((item: menuOverview) => {
                  return (
                    <tr className="align-middle">
                      <th scope="row">
                        <div className="game-title-header document-item">
                          <p className="game-title fw-medium text-start color-palette-1 m-0">
                            {item.singkatan}
                          </p>
                        </div>
                      </th>
                      <td>
                        <p className="fw-medium color-palette-1 m-0">
                          {item.ketua}
                        </p>
                      </td>
                      <td>
                        <p className="fw-medium text-start color-palette-1 m-0">
                          {item.category}
                        </p>
                      </td>
                      <td>
                        <div>
                          <span className="float-start icon-status success"></span>
                          <p className="fw-medium text-start color-palette-1 m-0 position-relative">
                            Berhasil
                          </p>
                        </div>
                      </td>
                      <td>
                        <Link href={`/event/${item.singkatan}`}>
                          <a href="">
                            <button className="bg btn btn-success">
                              <i className="bi bi-pencil"></i>
                            </button>
                          </a>
                        </Link>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
