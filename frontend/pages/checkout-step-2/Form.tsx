import React, { useState } from "react";
import { useRouter } from "next/router";
import { toast } from "react-toastify";

export default function Form() {
  const [bukti, setbukti] = useState("");
  const [asalbank, setasalbank] = useState("");
  const [rekening, setrekening] = useState("");
  const [pengirim, setpengirim] = useState("");
  const router = useRouter();
  const onNext = async (e) => {
    e.preventDefault();
    const data = {
      asalbank,
      rekening,
      pengirim,
    };
    if (!asalbank || !rekening || !pengirim) {
      toast.error("Lengkapi data dengan benar");
    } else {
      localStorage.setItem("checkout-form-3", JSON.stringify(data));
      router.push("/checkout-step-3");
    }
    //console.log("data ", data);
  };;;
  return (
    <div>
      <form action="" className="form-checkout">
        <div className="form-row">
          <div className="form-group col-md-6 bank-setting">
            <center>
              <div className="keterangan">
                <p>
                  Pilihan Bank dan Nomer <br />
                  Rekening yang tersedia
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
          <div className="form-group col-md-6">
            <div className="form-group">
              <label>Asal Bank</label>
              <input
                type="text"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="BNI"
                onChange={(e) => setasalbank(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>Nomor Rekening</label>
              <input
                type="number"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="8742963xxx"
                onChange={(e) => setrekening(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>Nama Pengirim</label>
              <input
                type="text"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="Sukardi"
                onChange={(e) => setpengirim(e.target.value)}
              />
            </div>
          </div>
        </div>
        <center>
          <div className="form-group row mt-5">
            <div className="col-sm-12">
              <a
                href="/2checkout.html"
                type="submit"
                id="progress-next"
                className="btn rounded-pill"
              >
                Prev
              </a>
              <a
                href="/4checkout.html"
                type=""
                id="progress-next"
                className="btn rounded-pill"
                onClick={onNext}
              >
                Next
              </a>
            </div>
          </div>
        </center>
      </form>
    </div>
  );
}
