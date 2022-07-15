import React from "react";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import NumberFormat from "react-number-format";
import axios from "axios";
import { toast } from "react-toastify";

export default function form() {
  const router = useRouter();
  const [form1, setform1] = useState({
    fullName: "",
    shortName: "",
    email: "",
    location: "",
    leader: "",
  });
  const [form2, setform2] = useState({
    nameBank: "",
    bukti: "",
    pengirim: "",
    rekening: "",
  });
  const [form3, setform3] = useState({
    category: "",
    price: "",
  });

  const [form4, setform4] = useState({
    email: "",
  });
  const url = "http://localhost:4000/api/v1/event/post";

  useEffect(() => {
    const data1 = localStorage.getItem("checkout-form-1");
    const data2 = localStorage.getItem("checkout-form-2");
    const data3 = localStorage.getItem("paket");
    const data4 = localStorage.getItem("email");
    const form_1 = JSON.parse(data1);
    const form_2 = JSON.parse(data2);
    const form_3 = JSON.parse(data3);
    const form_4 = JSON.parse(data4);
    setform1(form_1);
    setform2(form_2);
    setform3(form_3);
    setform4(form_4);
  }, []);
  var min = 1;
  var max = 100;
  var random = min + Math.random() * (max - min);
  const token = Math.round(random);
  const normal = Math.round(form3.price / 1.11);
  const tax = Math.round((normal * 11) / 100);
  const price = normal + tax + token;

  const onSubmit = async (e) => {
    const qs = require("qs");
    const data = qs.stringify({
      fullName: form1.fullName,
      shortName: form1.shortName,
      email: form4.email,
      leader: form1.leader,
      loocation: form1.location,
      nameBank: form2.nameBank,
      rekening: form2.rekening,
      pengirim: form2.pengirim,
      category: form3.category,
      price: price,
    });

    if (!data) {
      toast.error("Lengkapi data");
    } else {
      const resp = await axios.post(url, data);
      console.log("data", resp);
      //router.push("/completed");
      localStorage.removeItem("checkout-form-1");
      localStorage.removeItem("checkout-form-2");
      localStorage.removeItem("checkout-form-3");
      localStorage.removeItem("paket");
      localStorage.removeItem("email");
    }
  };

  return (
    <div>
      <div className="container form">
        <section className="checkout">
          <div className="container-fluid">
            <hr />
            <div className="purchase pt-md-50 pt-30">
              <h2 className="fw-bold text-xl color-palette-1 mb-20">
                Paper Details
              </h2>
              <p className="text-lg color-palette-1 mb-20">
                Nama Paper
                <span className="purchase-details">{form1.fullName}</span>
              </p>
              <p className="text-lg color-palette-1 mb-20">
                Singkatan Nama Paper
                <span className="purchase-details">{form1.shortName}</span>
              </p>
              <p className="text-lg color-palette-1 mb-20">
                Email
                <span className="purchase-details">{form4.email}</span>
              </p>
              <p className="text-lg color-palette-1 mb-20">
                Nama Ketua
                <span className="purchase-details color-palette-1">
                  {form1.leader}
                </span>
              </p>
            </div>
            <hr />
            <div className="purchase pt-md-50 pt-30">
              <h2 className="fw-bold text-xl color-palette-1 mb-20">
                Purchase Details
              </h2>
              <p className="text-lg color-palette-1 mb-20">
                Category
                <span className="purchase-details">{form3.category}</span>
              </p>
              <p className="text-lg color-palette-1 mb-20">
                Price{" "}
                <span className="purchase-details">
                  <NumberFormat
                    thousandSeparator="."
                    prefix={"Rp."}
                    value={normal}
                    displayType="text"
                    decimalSeparator=","
                  />
                </span>
              </p>
              <p className="text-lg color-palette-1 mb-20">
                Tax (11%){" "}
                <span className="purchase-details">
                  {" "}
                  <NumberFormat
                    thousandSeparator="."
                    prefix={"Rp."}
                    value={tax}
                    displayType="text"
                    decimalSeparator=","
                  />
                </span>
              </p>
              <p className="text-lg color-palette-1 mb-20">
                Total (include tax)
                <span className="purchase-details color-palette-4">
                  <NumberFormat
                    thousandSeparator="."
                    prefix={"Rp."}
                    value={price}
                    displayType="text"
                    decimalSeparator=","
                  />
                </span>
              </p>
            </div>
            <div className="payment pt-md-50 pb-md-50 pt-10 pb-10">
              <h2 className="fw-bold text-xl color-palette-1 mb-20">
                Payment Informations
              </h2>
              <p className="text-lg color-palette-1 mb-20">
                Tujuan Bank{" "}
                <span className="payment-details">{form2.nameBank}</span>
              </p>
              <p className="text-lg color-palette-1 mb-20">
                Nomor Rekening
                <span className="payment-details">{form2.rekening}</span>
              </p>
              <p className="text-lg color-palette-1 mb-20">
                Nama Pengirim Bank
                <span className="payment-details">{form2.pengirim}</span>
              </p>
            </div>
          </div>
        </section>
        <center>
          <div className="form-group row mt-5">
            <div className="col-sm-12">
              <a type="" className="btn rounded-pill" onClick={onSubmit}>
                Checkout
              </a>
            </div>
          </div>
        </center>
      </div>
    </div>
  );
}
