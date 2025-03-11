"use client"
import React from "react";
import { Header } from "../../components/about/header";
import { Access } from "../../components/access";
import { Vision } from "../../components/vision";
import Homepage_CTA from "../homepage_components/cta";
import { Maximize } from "../../components/about/maximize";
import { NextSeo } from "next-seo";

const page = () => {
  return (
    <div>
      <NextSeo title="about bookablestr" description="direct booking website, property rentals, vacation rental websites, bookablestr" />
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
