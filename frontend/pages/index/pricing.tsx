import React from "react";
import { useEffect, useState } from "react";
import Axios from "axios";
import Link from "next/link";
const url = "http://localhost:4000/payment/";
interface menuPricing {
  category: string;
  price: number;
  list: string;
  id: string;
}

export default function pricing(props: menuPricing) {
  const { category, price, list, id } = props;
  return (
    <Link href={`/checkout/${id}`}>
      <div>
        <div className="card-body">
          <h5 className="card-title text-muted text-uppercase text-center">
            {category}
          </h5>
          <h6 className="card-price text-center">
            Rp.{price}.000
            <span className="period">/Bulan</span>
          </h6>
          <hr />
          <ul className="fa-ul">
            <div>
              <li>
                <span className="fa-li">
                  <i className="fas fa-check"></i>
                </span>
                {list}
              </li>
            </div>
          </ul>
          <div className="d-grid">
            <a href="#" className="btn  text-uppercase">
              Pilih Paket
            </a>
          </div>
        </div>
      </div>
    </Link>
  );
}
