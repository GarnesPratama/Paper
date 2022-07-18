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
    email: "",
    leader: "",
    location: "",
    fullName: "",
    shortName: "",
    nameBank: "",
    rekening: "",
    pengirim: "",
    category: "",
    price: "",
  });
  const getEvent = async (shortName) => {
    const resp = await getMenuEvent(shortName);
    console.log("data :", resp);
    setEvent(resp.event);
  };
  const { query, isReady } = useRouter();
  useEffect(() => {
    if (isReady) {
      console.log("router tersedia", query.shortName);
      getEvent(query.shortName);
    } else {
      console.log("router tidak tersedia");
    }
  }, [isReady]);
  const submit = async () => {
    const url = `http://localhost:4000/api/v1/event/${event.shortName}`;
    const qs = require("qs");
    const data = qs.stringify({
      fullName: event.fullName,
      shortName: event.shortName,
      email: event.email,
      leader: event.leader,
      location: event.location,
      nameBank: event.nameBank,
      rekening: event.rekening,
      pengirim: event.pengirim,
      category: event.category,
      price: event.price,
    });
    const resp = await Axios.put(url, data);
    console.log("resp", resp);
  };
  const onSave = async () => {
    const url = `http://localhost:4000/api/v1/event/${event.shortName}`;
    const qs = require("qs");
    const data = qs.stringify({
      fullName: event.fullName,
      shortName: event.shortName,
      email: event.email,
      leader: event.leader,
      location: event.location,
      nameBank: event.nameBank,
      rekening: event.rekening,
      pengirim: event.pengirim,
      category: event.category,
      price: event.price,
    });
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
              value={event.fullName}
              placeholder="Seminar Nasional Ilmu Komputer"
              onChange={(e) => setEvent({ ...event, fullName: e.target.value })}
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
            value={event.location}
            onChange={(e) => setEvent({ ...event, location: e.target.value })}
          />
        </div>
        <div className="form-group">
          <label>Nama Ketua / Penanggungjawab</label>
          <input
            type="text"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="Online Via Zoom"
            value={event.leader}
            onChange={(e) => setEvent({ ...event, leader: e.target.value })}
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
