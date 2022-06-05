import React from "react";
import Sidebar from "../../Molecule/Profile/sidebar";
import MainEditProfile from "../../Organism/Profile/mainEditProfile";

export default function editProfile() {
  return (
    <div>
      <section class="edit-profile overflow-auto">
        <Sidebar />
        <MainEditProfile />
      </section>
    </div>
  );
}
