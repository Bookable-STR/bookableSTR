"use client";
import Image from "next/image";
import React from "react";
import logo from "../images/logo.png";
import { DarkButton } from "./ui/darkButton";
import { Menu } from "lucide-react";
import { useState } from "react";
import { X } from "lucide-react";

export const Nav = () => {
  const [nav, showNav] = useState(false);

  const handleNav = () => {
    showNav((prev) => !prev);
  };
  return (
    <div className="py-6">
      <nav className="border-2 border-text rounded-full flex items-center py-3 md:px-6 px-2 justify-between">
        <div>
          <Image
            src={logo}
            alt="logo"
            width={100}
            height={100}
            className="w-full "
          />
        </div>
        <div className="md:flex hidden justify-between w-[70%]  items-center">
          <ul className="flex gap-10">
            <li>About Us</li>
            <li>Services</li>
            <li>Blog</li>
            <li>Contact Us</li>
          </ul>
          <div>
            <DarkButton text="Book a Consultation" />
          </div>
        </div>

        <div onClick={handleNav} className="cursor-pointer">
          <Menu />
        </div>
        {nav && (
          <div className="h-screen px-3 pt-10 fixed inset-0 w-[70%] bg-text-dark text-text">
            <div
              className="absolute top-4 right-4 cursor-pointer"
              onClick={handleNav}
            >
              {" "}
              <X />
            </div>

            <div>
              <Image src={logo} alt="logo" height={100} className="w-[70%] " />
            </div>

            <ul className="space-y-8  pl-2 pt-4">
              <li>About Us</li>
              <li>Services</li>
              <li>Blog</li>
              <li>Contact Us</li>
            </ul>
            <div className="mt-10">
              <DarkButton text="Book a Consultation" />
            </div>
          </div>
        )}
      </nav>
    </div>
  );
};
