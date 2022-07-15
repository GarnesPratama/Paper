import React from "react";

export default function listBank() {
  return (
    <div>
      <div className="form-group col-md-6 bank-setting">
        <center>
          <div className="keterangan">
            <p>
              Pilihan Bank dan Nomer <br />
              Rekening yang tersedia <br />
              (Anda Bisa Langsung Melanjutkan Apabila Ingin Membayar Nanti)
            </p>
          </div>
          <div className="bank-bni mt-5">
            <img src="images/BNI-LOGO.png" width="180" alt="" />
            <p className="bank mt-3">
              1790683427 <br />
              (a.n Putra Mahabarata)
            </p>
          </div>
          <div className="bank-bca mt-5 mb-5">
            <img src="images/BCA-LOGO.jpg" width="180" alt="" />
            <p className="bank mt-3">
              09536256493 <br />
              (a.n Putri Mahabarata)
            </p>
          </div>
        </center>
      </div>
    </div>
  );
}
