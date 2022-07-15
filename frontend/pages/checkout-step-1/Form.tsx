import React, { useCallback, useEffect, useState } from "react";
import { useRouter } from "next/router";
import { getMenuCheckout } from "../../services/pricing";
import { toast } from "react-toastify";
import Cookies from "js-cookie";
import jwtDecode from "jwt-decode";
import Input from "../../Organism/Form/Input";
interface id {
  id: string;
}

export default function Form(props: id) {
  const { id } = props;
  const [fullName, setFullName] = useState("");
  const [shortName, setShortName] = useState("");
  const [location, setLocation] = useState("");
  const [leader, setLeader] = useState("");
  const [checkout, setcheckout] = useState({
    category: "",
    price: "",
  });
  const [email, setemail] = useState({
    email: "",
  });
  const router = useRouter();
  const { query, isReady } = useRouter();
  const Checkout = useCallback(async (id) => {
    const data = await getMenuCheckout(id);
    setcheckout(data);
  }, []);
  const token = Cookies.get("token");
  const jwtToken = atob(token);
  const payload = jwtDecode(jwtToken);
  useEffect(() => {
    setemail(payload);
  }, []);
  useEffect(() => {
    if (isReady) {
      //console.log("router tersedia", query.id);
      Checkout(query.id);
    } else {
      //console.log("router tidak tersedia");
    }
  });
  const onNext = async (e) => {
    e.preventDefault();
    console.log("email", email);
    const data = {
      fullName,
      shortName,
      location,
      leader,
    };
    if (!fullName || !shortName || !location || !leader) {
      toast.error("Lengkapi data dengan baik dan benar");
    } else {
      localStorage.setItem("checkout-form-1", JSON.stringify(data));
      localStorage.setItem("paket", JSON.stringify(checkout));
      localStorage.setItem("email", JSON.stringify(email));
      router.push("/checkout-step-2");
    }
  };
  return (
    <div>
      <form action="" className="form-checkout">
        <div className="form-row">
          <div className="form-group col-md-6">
            <label>Conference Name</label>
            <Input
              type="text"
              placeholder="Masukkan nama Conference"
              className="form-control"
              onChange={(e) => setFullName(e.target.value)}
            />
          </div>
          <div className="form-group col-md-6">
            <label>Conference (Short Name)</label>
            <Input
              type="text"
              className="form-control"
              placeholder="SNIK"
              onChange={(e) => setShortName(e.target.value)}
            />
          </div>
        </div>

        <div className="form-group">
          <label>Email</label>
          <Input
            type="email"
            className="form-control"
            placeholder={email.email}
            disabled
          />
        </div>

        <div className="form-group">
          <label>Lokasi</label>
          <Input
            type="text"
            placeholder="Online Via Zoom"
            className="form-control"
            onChange={(e) => setLocation(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Nama Ketua / Penanggungjawab</label>
          <Input
            type="text"
            className="form-control"
            placeholder="Online Via Zoom"
            onChange={(e) => setLeader(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Paket Yang Dipilih</label>
          <input
            type="text"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder={checkout.category}
            disabled
          />
        </div>
        <div className="form-group">
          <label>Harga</label>
          <input
            type="text"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder={checkout.price}
            disabled
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
