"use client"
import { Header } from "../components/header";
import React from "react";
import Homepage_CTA from "./homepage_components/cta";
import { Features } from "../components/features";
import { Vision } from "../components/vision";
import { Access } from "../components/access";
import Reviews from "./homepage_components/reviews";
import Faq from "./homepage_components/faq";
import { NextSeo } from "next-seo";

export default function Home() {
  return (
    <div className="overflow-x-hidden w-full">
      <NextSeo title="bookablestr" description="direct booking website, property rentals, vacation rental websites, bookablestr" />
      <Header />
      <Features />
      <Vision />
      <Access />
      <Faq />
      <Reviews />
      <Homepage_CTA />
    </div>
  );
}
