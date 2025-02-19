import { Quicksand, Nunito } from "next/font/google";
import "./globals.css";
import { ReactNode } from "react";
import React from "react";
import Footer from "../components/footer";

const quicksand = Quicksand({
  variable: "--font-quick-sand",
  subsets: ["latin"],
});

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
});

export const metadata = {
  title: "BookableSTR",
  description:
    "BookableSTR builds high-converting, user-friendly websites that showcase your properties, drive direct bookings, and give you full control with no third-party fees.",
};

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body className={`${quicksand.variable} ${nunito.variable} antialiased`}>
        {children}
        <Footer />
      </body>
    </html>
  );
}
