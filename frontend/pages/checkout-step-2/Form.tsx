import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";

interface id {
  id: string;
}

export default function Form(props: id) {
  const { id } = props;
  const [logo, setlogo] = useState("");
  const [ttd, setttd] = useState("");
  const { query, isReady } = useRouter();
  useEffect(() => {
    if (isReady) {
      console.log("router tersedia", query.id);
    } else {
      console.log("router tidak tersedia");
    }
  });
  const router = useRouter();
  const onNext = async (e) => {
    e.preventDefault();
    const data = {
      logo,
      ttd,
    };
    localStorage.setItem("checkout-form-2", JSON.stringify(data));
    router.push(`/checkout-step-3`);
  };
  return (
    <div>
      <form action="" className="form-checkout">
        <div className="form-group">
          <label>Logo Paper</label>
          <input
            type="file"
            className="form-control-file"
            id="exampleFormControlFile1"
            onChange={(e) => setlogo(e.target.value)}
          />
          <small>jpg/jpeg/png</small>
        </div>
        <div className="form-group mt-4">
          <label>Tanda Tangan Ketua Pelaksana</label>
          <input
            type="file"
            className="form-control-file"
            id="exampleFormControlFile1"
            onChange={(e) => setttd(e.target.value)}
          />
          <small>jpg/jpeg/png</small>
        </div>

        <center>
          <div className="form-group row mt-5">
            <div className="col-sm-12">
              <a
                href="/1checkout.html"
                type="submit"
                id="progress-next"
                className="btn rounded-pill"
              >
                Prev
              </a>
              <a
                href="/3checkout.html"
                type="button"
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
