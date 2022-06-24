import React from "react";

export default function mainEditProfile() {
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
                    <th scope="col">Kapasitas</th>
                    <th scope="col">Harga</th>
                    <th scope="col">Status</th>
                    <th scope="col">Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="align-middle">
                    <th scope="row">
                      <div className="game-title-header">
                        <p className="game-title fw-medium text-start color-palette-1 m-0">
                          ICMSE UNNES
                        </p>
                      </div>
                    </th>
                    <td>
                      <p className="fw-medium color-palette-1 m-0">200 ORANG</p>
                    </td>
                    <td>
                      <p className="fw-medium text-start color-palette-1 m-0">
                        Rp 290.000
                      </p>
                    </td>
                    <td>
                      <div>
                        <span className="float-start icon-status pending"></span>
                        <p className="fw-medium text-start color-palette-1 m-0 position-relative">
                          Pending
                        </p>
                      </div>
                    </td>
                  </tr>
                  <tr className="align-middle">
                    <th scope="row">
                      <div className="game-title-header">
                        <p className="game-title fw-medium text-start color-palette-1 m-0">
                          SNIK
                        </p>
                      </div>
                    </th>
                    <td>
                      <p className="fw-medium color-palette-1 m-0">100 ORANG</p>
                    </td>
                    <td>
                      <p className="fw-medium text-start color-palette-1 m-0">
                        Rp 190.000
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
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
