import React from "react";
import { Header } from "../../components/contact-us/header";
import { ContactForm } from "../../components/contact-us/form";
import { NextSeo } from "next-seo";

const page = () => {
  return (
    <div>
      <NextSeo title="contact bookablestr" description="direct booking website, property rentals, vacation rental websites, bookablestr" />
      <Header />
      <ContactForm />
    </div>
  );
};

export default page;
