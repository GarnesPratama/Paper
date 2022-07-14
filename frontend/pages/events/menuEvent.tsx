import React from "react";

export default function menuEvent() {
  return (
    <div>
      <main className="main-wrapper">
        <div className="ps-lg-0">
          <h2 className="text-4xl fw-bold color-palette-1 mb-30">Event</h2>
          <div className="latest-transaction">
            <p className="text-lg fw-medium color-palette-1 mb-14">
              Pembuatan Event
            </p>
            <div className="main-content main-content-table overflow-auto">
              <form
                action=""
                className="form-login d-flex flex-column mt-4 mt-md-0 p-30"
              >
                <div className="d-flex flex-column align-items-start">
                  <label className="form-label">Nama Seminar</label>
                  <input
                    type="Text"
                    className="form-control"
                    id="email_address"
                    placeholder="semina@bwa.com"
                  />
                </div>

                <div className="d-flex flex-column align-items-start">
                  <label className="form-label">Logo</label>
                  <input
                    type="file"
                    className="form-control"
                    id="password"
                    placeholder="Type your password"
                  />
                </div>
                <div className="d-flex flex-column align-items-start">
                  <label className="form-label">Alamat</label>
                  <input
                    type="text"
                    className="form-control"
                    id="password"
                    placeholder="Type your password"
                  />
                </div>
                <div className="d-flex flex-column align-items-start">
                  <label className="form-label">Alamat Email</label>
                  <input
                    type="text"
                    className="form-control"
                    id="password"
                    placeholder="Type your password"
                  />
                </div>
                <div className="d-flex flex-column align-items-start">
                  <label className="form-label">Tanda Tangan</label>
                  <input
                    type="file"
                    className="form-control"
                    id="password"
                    placeholder="Type your password"
                  />
                </div>
                <div className="d-flex flex-column align-items-start">
                  <label className="form-label">Bukti Pembayaran</label>
                  <input
                    type="file"
                    className="form-control"
                    id="password"
                    placeholder="Type your password"
                  />
                </div>
                <div className="d-flex flex-column align-items-start">
                  <label className="form-label">Nama Singkatan Seminar</label>
                  <input
                    type="text"
                    className="form-control"
                    id="password"
                    placeholder="Type your password"
                  />
                </div>
                <div className="d-flex flex-column align-items-start">
                  <label className="form-label">Tanggal Seminar</label>
                  <input
                    type="date"
                    className="form-control"
                    id="password"
                    placeholder="Type your password"
                  />
                </div>
                <div className="d-flex flex-column align-items-start">
                  <label className="form-label">Nama Ketua Panitia</label>
                  <input
                    type="text"
                    className="form-control"
                    id="password"
                    placeholder="Type your password"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
