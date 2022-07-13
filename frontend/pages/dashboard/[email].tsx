import React from "react";
import Sidebar from "./sidebar";
import A from "./a";
import { useRouter } from "next/router";
import MainOverview from "./mainOverview";

export default function overview() {
  return (
    <div>
      <div className="screen-cover d-none d-xl-none"></div>

      <div className="row">
        <Sidebar />
        <MainOverview />
      </div>
    </div>
  );
}
