import React from "react";
import { useEffect, useState } from "react";
import Axios from "axios";
import { getMenuPrice } from "../../services/pricing";
import List from "./list";
import Link from "next/link";
interface menuPricing {
  category: string;
  price: number;
  id: string;
  list: [];
}

export default function pricing(props: menuPricing) {
  const { category, price, id, list } = props;
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
          {list.map((item) => {
            return <List list={item} />;
          })}
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
