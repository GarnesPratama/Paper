import React from "react";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { getMenuEvent } from "../../services/event";
import Axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Autosave, useAutosave } from "react-autosave";

interface User {
  namaPaper: string;
  alamat: string;
}
export default function form() {
  const router = useRouter();
  const [event, setEvent] = useState({
    alamat: "",
    email: "",
    ketua: "",
    lokasi: "",
    namaPaper: "",
    singkatan: "",
    asalbank: "",
    bukti: "",
    pengirim: "",
    rekening: "",
    category: "",
    price: "",
  });
  const getEvent = async (singkatan) => {
    const resp = await getMenuEvent(singkatan);
    console.log("data :", resp);
    setEvent(resp);
  };
  const { query, isReady } = useRouter();
  useEffect(() => {
    if (isReady) {
      console.log("router tersedia", query.singkatan);
      getEvent(query.singkatan);
    } else {
      console.log("router tidak tersedia");
    }
  }, [isReady]);
  const submit = async () => {
    const url = `http://localhost:4000/api/v1/event/${event.singkatan}`;
    const data = await new FormData();
    data.append("namaPaper", event.namaPaper);
    data.append("alamat", event.alamat);
    data.append("lokasi", event.lokasi);
    data.append("ketua", event.ketua);
    const resp = await Axios.put(url, data);
    console.log("resp", resp);
  };
  const onSave = async () => {
    const url = `http://localhost:4000/api/v1/event/${event.singkatan}`;
    const data = await new FormData();
    data.append("namaPaper", event.namaPaper);
    data.append("alamat", event.alamat);
    data.append("lokasi", event.lokasi);
    data.append("ketua", event.ketua);
    const resp = await Axios.put(url, data);

    console.log("resp", resp);
  };
  useAutosave({ data: event, onSave: onSave });
  return (
    <div>
      <form action="" className="form-checkout document-item">
        <div className="form-row">
          <div className="form-group col-md-6">
            <label>Conference Name</label>
            <input
              type="text"
              disabled
              className="form-control"
              id="exampleFormControlInput1"
              value={event.namaPaper}
              placeholder="Seminar Nasional Ilmu Komputer"
              onChange={(e) =>
                setEvent({ ...event, namaPaper: e.target.value })
              }
            />
          </div>
        </div>

        <div className="form-group">
          <label>Lokasi</label>
          <input
            type="text"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="Online Via Zoom"
            value={event.lokasi}
            onChange={(e) => setEvent({ ...event, lokasi: e.target.value })}
          />
        </div>
        <div className="form-group">
          <label>Nama Ketua / Penanggungjawab</label>
          <input
            type="text"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="Online Via Zoom"
            value={event.ketua}
            onChange={(e) => setEvent({ ...event, ketua: e.target.value })}
          />
        </div>

        <center>
          <div className="form-group row mt-4">
            <div className="col-sm-12">
              <a type="button" className="btn rounded-pill" onClick={submit}>
                Update
              </a>
            </div>
          </div>
        </center>
      </form>
    </div>
  );
}
