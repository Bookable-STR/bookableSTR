"use client"
import React from "react";
import { Header } from "../../components/about/header";
import { Access } from "../../components/access";
import { Vision } from "../../components/vision";
import Homepage_CTA from "../homepage_components/cta";
import { Maximize } from "../../components/about/maximize";

const page = () => {
  return (
    <div>
      <Header />
      <div className="bg-text-dark">
        <Vision />
      </div>
      <Maximize />
      <Access />
      <Homepage_CTA />
    </div>
  );
};

export default page;
