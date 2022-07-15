import React from "react";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { useCallback } from "react";
import Sidebar from "./sidebar";
import MainOverview from "./mainOverview";

export default function namaPaper() {
  return (
    <div>
      <div className="row">
        <Sidebar />
        {/* <MainOverview /> */}
      </div>
    </div>
  );
}
