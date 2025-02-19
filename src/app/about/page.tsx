import React from "react";
import { Header } from "../../components/about/header";
import { Access } from "../../components/access";
import Footer from "../../components/footer";
import { Vision } from "../../components/vision";
import Homepage_CTA from "../homepage_components/cta";

const page = () => {
  return (
    <div>
      <Header />
      <div className="bg-text-dark">
        <Vision />
      </div>
      <Access />
      <Homepage_CTA />
    </div>
  );
};

export default page;
