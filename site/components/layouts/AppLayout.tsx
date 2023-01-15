import Footer from "@components/Footer";
import React from "react";

export default function AppLayout({ children }: any) {
  return (
    <div>
      {children}
      <Footer />
    </div>
  );
}
