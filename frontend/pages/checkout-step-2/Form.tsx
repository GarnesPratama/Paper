import React, { useState } from "react";
import { useRouter } from "next/router";
import { toast } from "react-toastify";
import ListBank from "./listBank";

export default function Form() {
  const [nameBank, setNameBank] = useState("");
  const [rekening, setrekening] = useState("");
  const [pengirim, setpengirim] = useState("");

  const router = useRouter();
  const onNext = async (e) => {
    e.preventDefault();
    const data = {
      nameBank,
      rekening,
      pengirim,
    };
    if (!nameBank || !rekening || !pengirim) {
      ("Menyusul");
      router.push("/checkout-step-3");
    } else {
      localStorage.setItem("checkout-form-2", JSON.stringify(data));
      router.push("/checkout-step-3");
      //console.log("data ", data);
    }
  };
  return (
    <div>
      <form action="" className="form-checkout">
        <div className="form-row">
          <ListBank />
          <div className="form-group col-md-6">
            <div className="form-group">
              <label>Asal Bank</label>
              <input
                type="text"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="BNI"
                onChange={(e) => setNameBank(e.target.value)}
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
