import React from "react";
import Navbar from "../../Organism/Interface/navbar";
import Footer from "../../Organism/Interface/footer";
import PreviewImage from "./previewImage";
import DetailsContent from "./detailsContent";
import GrowToday from "./growToday";

export default function detail() {
  return (
    <div>
      <section className="bg">
        <Navbar />
      </section>
      <PreviewImage />
      <DetailsContent />
      <Footer />
    </div>
  );
}
