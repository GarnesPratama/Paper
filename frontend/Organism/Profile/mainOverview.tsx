import React, { useEffect, useState } from "react";
import { menuOverview } from "../../services/dataTypes";
import { getMenuOverview } from "../../services/overview";
import NumberFormat from "react-number-format";
import { useRouter } from "next/router";
import Cookies from "js-cookie";
import jwtDecode from "jwt-decode";

export default function mainEditProfile() {
  const [data, setData] = useState([]);
  const { query, isReady } = useRouter();
  const getOverview = async () => {
    const response = await getMenuOverview();
    setData(response);
  };
  useEffect(() => {
    if (isReady) {
      console.log("router tersedia", query.id);
      //Checkout(query.id);
    } else {
      console.log("router tidak tersedia");
    }
  });

  return (
    <div>
      <main className="main-wrapper">
        <div className="ps-lg-0">
          <h2 className="text-4xl fw-bold color-palette-1 mb-30">Overview</h2>

          <div className="latest-transaction">
            <p className="text-lg fw-medium color-palette-1 mb-14">
              Transactions
            </p>
            <div className="main-content main-content-table overflow-auto">
              <table className="table table-borderless">
                <thead>
                  <tr className="color-palette-1">
                    <th className="text-start" scope="col">
                      Event
                    </th>
                    <th scope="col">Ketua</th>
                    <th scope="col">Harga</th>
                    <th scope="col">Status</th>
                    <th scope="col">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {data.map((item: menuOverview) => {
                    return (
                      <tr className="align-middle">
                        <th scope="row">
                          <div className="game-title-header">
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
                            <NumberFormat
                              thousandSeparator="."
                              prefix={"Rp."}
                              value={item.price}
                              displayType="text"
                              decimalSeparator=","
                            />
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
                          <button className="bg">
                            <i className="bi bi-pencil"></i>
                          </button>
                          <button className="bg">
                            <i className="bi bi-pencil"></i>
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
