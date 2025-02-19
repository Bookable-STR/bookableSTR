import { Header } from "../components/header";
import React from "react";
import Homepage_CTA from "./homepage_components/cta";

export default function Home() {
  return (
    <div className="overflow-x-hidden w-full">
      <Header />
      <Homepage_CTA />
    </div>
  );
}
