import React from "react";
import Sidebar from "../../Molecule/footer";
import MainEditProfile from "../../Organism/Profile/mainEditProfile";

export default function editProfile() {
  return (
    <div>
      <section className="edit-profile overflow-auto">
        <Sidebar />
        <MainEditProfile />
      </section>
    </div>
  );
}
