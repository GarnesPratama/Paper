import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import NumberFormat from "react-number-format";
import axios from "axios";

export default function index() {
  const router = useRouter();
  const [form1, setform1] = useState({
    namaPaper: "",
    singkatan: "",
    email: "",
    waktu: "",
    alamat: "",
    lokasi: "",
    ketua: "",
  });
  const [form2, setform2] = useState({
    logo: "",
    ttd: "",
  });
  const [form3, setform3] = useState({
    asalbank: "",
    bukti: "",
    pengirim: "",
    rekening: "",
  });
  const [form4, setform4] = useState({
    category: "",
    price: "",
  });
  const url = "http://localhost:4000/api/v1/event/post";

  useEffect(() => {
    const data1 = localStorage.getItem("checkout-form-1");
    const data2 = localStorage.getItem("checkout-form-2");
    const data3 = localStorage.getItem("checkout-form-3");
    const data4 = localStorage.getItem("paket");
    const form_1 = JSON.parse(data1);
    const form_2 = JSON.parse(data2);
    const form_3 = JSON.parse(data3);
    const form_4 = JSON.parse(data4);
    setform1(form_1);
    setform2(form_2);
    setform3(form_3);
    setform4(form_4);
  }, []);
  const onSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append("namaPaper", form1.namaPaper);
    data.append("singkatan", form1.singkatan);
    data.append("email", form1.email);
    data.append("waktu", form1.waktu);
    data.append("alamat", form1.alamat);
    data.append("lokasi", form1.lokasi);
    data.append("ketua", form1.ketua);
    data.append("namaPaper", form1.namaPaper);
    data.append("asalbank", form3.asalbank);
    data.append("rekening", form3.rekening);
    data.append("bukti", form3.bukti);
    data.append("pengirim", form3.pengirim);
    if (!data) {
      console.log("error");
    } else {
      const resp = await axios.post(url, data);
      console.log("data :", resp);
    }
    //router.push("/completed");
  };

  return (
    <div>
      <div className="container body mt-5">
        <div className="container">
          <ul className="progressbar">
            <li className="fulled"></li>
            <li className="fulled"></li>
            <li className="active"></li>
          </ul>
        </div>
        <h3 className="title mt-5">Review Checkout</h3>
        <p className="detail">Berikut merupakan rincian pemesanan paper</p>
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
                  <span className="purchase-details">{form1.namaPaper}</span>
                </p>
                <p className="text-lg color-palette-1 mb-20">
                  Singkatan Nama Paper
                  <span className="purchase-details">{form1.singkatan}</span>
                </p>
                <p className="text-lg color-palette-1 mb-20">
                  Email<span className="purchase-details">{form1.email}</span>
                </p>
                <p className="text-lg color-palette-1 mb-20">
                  Waktu Penyelenggaraan
                  <span className="purchase-details">{form1.waktu}</span>
                </p>
                <p className="text-lg color-palette-1 mb-20">
                  Alamat
                  <span className="purchase-details color-palette-1">
                    {form1.alamat}
                  </span>
                </p>
                <p className="text-lg color-palette-1 mb-20">
                  Lokasi
                  <span className="purchase-details color-palette-1">
                    {form1.lokasi}
                  </span>
                </p>
                <p className="text-lg color-palette-1 mb-20">
                  Nama Ketua
                  <span className="purchase-details color-palette-1">
                    {form1.ketua}
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
                  <span className="purchase-details">{form4.category}</span>
                </p>
                <p className="text-lg color-palette-1 mb-20">
                  Price{" "}
                  <span className="purchase-details">
                    <NumberFormat
                      thousandSeparator="."
                      prefix={"Rp."}
                      value={form4.price}
                      displayType="text"
                      decimalSeparator=","
                    />
                  </span>
                </p>
                <p className="text-lg color-palette-1 mb-20">
                  Tax (10%) <span className="purchase-details">Rp 5000</span>
                </p>
                <p className="text-lg color-palette-1 mb-20">
                  Total
                  <span className="purchase-details color-palette-4">
                    Rp 55.000
                  </span>
                </p>
              </div>
              <div className="payment pt-md-50 pb-md-50 pt-10 pb-10">
                <h2 className="fw-bold text-xl color-palette-1 mb-20">
                  Payment Informations
                </h2>
                <p className="text-lg color-palette-1 mb-20">
                  Tujuan Bank{" "}
                  <span className="payment-details">{form3.asalbank}</span>
                </p>
                <p className="text-lg color-palette-1 mb-20">
                  Nomor Rekening
                  <span className="payment-details">{form3.rekening}</span>
                </p>
                <p className="text-lg color-palette-1 mb-20">
                  Nama Pengirim Bank
                  <span className="payment-details">{form3.pengirim}</span>
                </p>
              </div>
              <label className="checkbox-label text-lg color-palette-1">
                I have transferred the money
                <input type="checkbox" />
                <span className="checkmark"></span>
              </label>
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
    </div>
  );
}
