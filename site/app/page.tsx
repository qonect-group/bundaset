"use client";
import React from "react";
import Playlist from "@components/sections/homepage/Playlist";
import Table from "@components/ui/Table";
export default function Page() {
  return (
    <div className="max-w-7xl mx-auto">
      <Playlist />
      <Table />
    </div>
  );
}
