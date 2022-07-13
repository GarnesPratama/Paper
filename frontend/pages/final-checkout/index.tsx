import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import NumberFormat from "react-number-format";
import axios from "axios";
import { toast } from "react-toastify";

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

  const [form3, setform3] = useState({
    asalbank: "",
    bukti: "",
    pengirim: "",
    rekening: "",
  });
  const [bukti, setbukti] = useState("");
  const [checkout, setcheckout] = useState({
    category: "",
    price: "",
  });
  const [email, setemail] = useState({
    email: "",
  });
  const url = "http://localhost:4000/api/v1/event/post";

  useEffect(() => {
    const data1 = localStorage.getItem("checkout-form-1");
    const data3 = localStorage.getItem("checkout-form-3");
    const checkout = localStorage.getItem("paket");
    const email = localStorage.getItem("email");
    const form_1 = JSON.parse(data1);
    const form_3 = JSON.parse(data3);
    const Checkout = JSON.parse(checkout);
    const Email = JSON.parse(email);
    setemail(Email);
    setform1(form_1);
    setform3(form_3);
    setcheckout(Checkout);
  }, []);

  const onSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append("namaPaper", form1.namaPaper);
    data.append("singkatan", form1.singkatan);
    data.append("email", email.email);
    data.append("ketua", form1.ketua);
    data.append("asalbank", form3.asalbank);
    data.append("rekening", form3.rekening);
    data.append("bukti", form3.bukti);
    data.append("pengirim", form3.pengirim);
    data.append("category", checkout.category);
    data.append("price", checkout.price);
    data.append("bukti", bukti);

    console.log("bukti", bukti);
    if (!bukti) {
      toast.error("Lengkapi data");
    } else {
      const resp = await axios.post(url, data);
      console.log("data", resp);
      router.push("/completed");
      localStorage.removeItem("checkout-form-1");
      localStorage.removeItem("checkout-form-2");
      localStorage.removeItem("checkout-form-3");
      localStorage.removeItem("paket");
      localStorage.removeItem("email");
    }
  };

  return (
    <div>
      <div className="container body mt-5">
        <div className="container">
          <ul className="progressbar">
            <li className="fulled"></li>
            <li className="fulled"></li>
            <li className="fulled"></li>
            <li className="active"></li>
          </ul>
        </div>
        <h3 className="title mt-5">Input Pembayaran</h3>
        <p className="detail">Isi Pembayaran Agar Dapat di Proses</p>
        <div className="container form">
          <form action="" className="form-checkout">
            <div className="form-group">
              <label>Bukti Pembayaran</label>
              <input
                type="file"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="BNI"
                onChange={(e) => setbukti(e.target.files[0])}
              />
            </div>
            <center>
              <div className="form-group row mt-5">
                <div className="col-sm-12">
                  <a type="" className="btn rounded-pill" onClick={onSubmit}>
                    Checkout
                  </a>
                </div>
              </div>
            </center>
          </form>
        </div>
      </div>
    </div>
  );
}


