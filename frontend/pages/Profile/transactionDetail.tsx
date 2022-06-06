import React from "react";
import Sidebar from "../../Molecule/footer";
import MainTransactionDetail from "../../Organism/Profile/mainTransactionDetail";

export default function transactionDetail() {
  return (
    <div>
      <section className="transactions-detail overflow-auto">
        <Sidebar />
        <MainTransactionDetail />
      </section>
    </div>
  );
}
