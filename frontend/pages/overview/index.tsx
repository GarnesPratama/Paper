import React from "react";
import Sidebar from "../../Molecule/footer";
import MainOverview from "../../Organism/Profile/mainOverview";

export default function overview() {
  return (
    <div>
      <section className="overview overflow-auto">
        <Sidebar />
        <MainOverview />
      </section>
    </div>
  );
}
