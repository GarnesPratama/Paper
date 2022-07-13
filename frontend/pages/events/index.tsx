import React from "react";
import Sidebar from "../../Molecule/footer";
import MenuEvent from "./menuEvent";

export default function index() {
  return (
    <div>
      <section className="overview overflow-auto">
        <Sidebar />
        <MenuEvent />
      </section>
    </div>
  );
}
