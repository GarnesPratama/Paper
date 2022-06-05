import React from "react";
import Sidebar from "../../Molecule/Profile/sidebar";
import MainOverview from "../../Organism/Profile/mainOverview";

export default function overview() {
  return (
    <div>
      <section class="overview overflow-auto">
        <Sidebar />
        <MainOverview />
      </section>
    </div>
  );
}
