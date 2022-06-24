import React, { useCallback, useEffect, useState } from "react";
import { useRouter } from "next/router";
import { getMenuCheckout } from "../../services/pricing";

interface id {
  id: string;
}

export default function Form(props: id) {
  const { id } = props;
  const [namaPaper, setnamaPaper] = useState("");
  const [singkatan, setsingkatan] = useState("");
  const [email, setemail] = useState("");
  const [waktu, setWaktu] = useState("");
  const [alamat, setalamat] = useState("");
  const [lokasi, setlokasi] = useState("");
  const [ketua, setketua] = useState("");
  const [checkout, setcheckout] = useState({
    category: "",
    price: "",
  });
  const router = useRouter();
  const { query, isReady } = useRouter();
  const Checkout = useCallback(async (id) => {
    const data = await getMenuCheckout(id);
    setcheckout(data);
  }, []);
  useEffect(() => {
    if (isReady) {
      console.log("router tersedia", query.id);
      Checkout(query.id);
    } else {
      console.log("router tidak tersedia");
    }
  });
  const onNext = async (e) => {
    e.preventDefault();
    console.log("email", email);
    const data = {
      namaPaper,
      singkatan,
      email,
      waktu,
      alamat,
      lokasi,
      ketua,
    };
    localStorage.setItem("checkout-form-1", JSON.stringify(data));
    localStorage.setItem("paket", JSON.stringify(checkout));
    router.push("/checkout-step-2");
  };
  return (
    <div>
      <form action="" className="form-checkout">
        <div className="form-row">
          <h1>Paket yang dipilih : {checkout.category}</h1>
          <h1>Harga : {checkout.price}</h1>
          <div className="form-group col-md-6">
            <label>Nama Paper</label>
            <input
              type="text"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="Seminar Nasional Ilmu Komputer"
              onChange={(e) => setnamaPaper(e.target.value)}
            />
          </div>
          <div className="form-group col-md-6">
            <label>Singkatan Nama Paper</label>
            <input
              type="text"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="SNIK"
              onChange={(e) => setsingkatan(e.target.value)}
            />
          </div>
        </div>

        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="snik@gmail.com"
            onChange={(e) => setemail(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label>Waktu Penyelenggaraan</label>
          <input
            type="date"
            className="form-control"
            id="exampleFormControlInput1"
            onChange={(e) => setWaktu(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label>Alamat</label>
          <input
            type="text"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="Jl.Kenangan No.59"
            onChange={(e) => setalamat(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Lokasi</label>
          <input
            type="text"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="Online Via Zoom"
            onChange={(e) => setlokasi(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Nama Ketua</label>
          <input
            type="text"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="Online Via Zoom"
            onChange={(e) => setketua(e.target.value)}
          />
        </div>

        <center>
          <div className="form-group row mt-4">
            <div className="col-sm-12">
              <a type="submit" id="progress-next" className="btn rounded-pill">
                Cancel
              </a>
              <a type="button" onClick={onNext} className="btn rounded-pill">
                Next
              </a>
            </div>
          </div>
        </center>
      </form>
    </div>
  );
}
