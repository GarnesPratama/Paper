import React from "react";
import Sidebar from "../../Molecule/Profile/sidebar";
import MainTransactionDetail from "../../Organism/Profile/mainTransactionDetail";

export default function transactionDetail() {
  return (
    <div>
      <section class="transactions-detail overflow-auto">
        <Sidebar />
        <MainTransactionDetail />
      </section>
    </div>
  );
}
