import { Quicksand, Nunito } from "next/font/google";
import "./globals.css";
import { ReactNode } from "react";
import React from "react";
import Footer from "../components/footer";
import Head from "next/head";

const quicksand = Quicksand({
  variable: "--font-quick-sand",
  subsets: ["latin"],
});

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
});

export const metadata = {
  title: "BookableSTR - Direct Booking Websites",
  description:
    "BookableSTR builds high-converting, user-friendly websites that showcase your properties, drive direct bookings, and give you full control with no third-party fees.",
  keywords:
    "direct booking website, property rentals, vacation rental websites, BookableSTR",
  openGraph: {
    title: "BookableSTR - Direct Booking Websites",
    description:
      "BookableSTR helps property owners build stunning websites for direct bookings without third-party fees.",
    url: "https://bookablestr.com",
    type: "website",
  },
};

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <Head>
        <meta name="robots" content="index, follow" />
        <meta name="keywords" content={metadata.keywords} />
        <meta property="og:title" content={metadata.openGraph.title} />
        <meta
          property="og:description"
          content={metadata.openGraph.description}
        />
        <meta property="og:url" content={metadata.openGraph.url} />
        <meta property="og:type" content="website" />
        {/* <meta property="og:image" content={metadata.openGraph.images[0].url} /> */}
        {/* <meta
          property="og:image:alt"
          content={metadata.openGraph.images[0].alt}
        /> */}
        <meta name="twitter:card" content="summary_large_image" />
        {/* <meta name="twitter:title" content={metadata.twitter.title} />
        <meta name="twitter:description" content={metadata.twitter.description} />
        <meta name="twitter:image" content={metadata.twitter.images[0]} /> */}
      </Head>
      <body className={`${quicksand.variable} ${nunito.variable} antialiased`}>
        {children}
        <Footer />
      </body>
    </html>
  );
}
