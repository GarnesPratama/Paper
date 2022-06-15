import React from "react";
import Navbar from "../Organism/Interface/navbar/index";
import Footer from "../Organism/Interface/footer";
import Pricing from "./index/pricing";
import Stories from "./index/stories";
import { useEffect, useState } from "react";
import { menuPricing } from "../services/dataTypes";
import { getMenuPrice } from "../services/pricing";
import { useCallback } from "react";

export default function index() {
  const [price, setprice] = useState([]);
  const paymentData = useCallback(async () => {
    const data = await getMenuPrice();
    setprice(data);
  }, [getMenuPrice]);
  useEffect(() => {
    paymentData();
  }, []);
  return (
    <div>
      <header className="header bg-blank">
        <Navbar />
        <div className="hero">
          <div className="hero-headline">
            Expand Your <span className="text-gradient-blue">Knowledge</span>{" "}
            <br className="d-none d-lg-block" />
            by <span className="text-gradient-pink">Joining</span> Our Greatest
            Events
          </div>
          <p className="hero-paragraph">
            Kami menyediakan website terbaik untuk{" "}
            <br className="d-none d-lg-block" />
            anda dalam membuat seminar
          </p>
          <a href="#grow-today" className="btn-green">
            Browse Now
          </a>
        </div>
      </header>
      <section className="pricing grow-today">
        <div className="container">
          <div className="row">
            {price.map((item: menuPricing) => (
              <div className="col-lg-4">
                <div className="card mb-5 mb-lg-0">
                  <Pricing
                    key={item._id}
                    category={item.category}
                    price={item.price}
                    list={item.list}
                    id={item._id}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Stories />
      <Footer />
    </div>
  );
}
