"use client";
import Image from "next/image";
import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../images/logo.png";
import { DarkButton } from "./ui/darkButton";
import { Menu, X } from "lucide-react";

export const Nav = () => {
  const [nav, showNav] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);

  const handleNav = () => {
    showNav((prev) => !prev);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (navRef.current && !navRef.current.contains(event.target as Node)) {
      showNav(false);
    }
  };

  useEffect(() => {
    if (nav) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [nav]);

  return (
    <div className="py-6 text-2xl relative">
      <nav className="border-2 border-text rounded-full flex items-center py-3 md:px-6 lg:pr-[16px] px-2 justify-between">
        <Image
          src={logo}
          alt="logo"
          width={999}
          height={999}
          className="w-[158px] lg:w-[246px] flex-shrink-0"
        />

        <div className="md:flex hidden justify-between gap-20 items-center">
          <ul className="flex gap-10">
            <li>About Us</li>
            <li>Services</li>
            <li>Blog</li>
            <li>Contact Us</li>
          </ul>
          <DarkButton text="Book a Consultation" />
        </div>

        {/* Mobile Menu Button */}
        <div onClick={handleNav} className="cursor-pointer md:hidden block pr-[10px]">
          <Menu />
        </div>
      </nav>

      {/* Background Overlay */}
      <AnimatePresence>
        {nav && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black cursor-pointer bg-opacity-10 backdrop-blur-sm z-10"
            />
            {/* Animated Mobile Nav */}
            <motion.div
              ref={navRef}
              initial={{ x: "-100%", opacity: 0 }}
              animate={{ x: "0%", opacity: 1 }}
              exit={{ x: "-100%", opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="h-screen pt-[52px] fixed inset-0 w-[75%] max-w-[270px] bg-text-dark text-text z-20"
            >
              {/* <div
                className="absolute top-4 right-4 cursor-pointer"
                onClick={handleNav}
              >
                <X />
              </div> */}

              <Image src={logo} alt="logo" height={80} width={226} />

              <ul className="space-y-[48px] pl-2 mx-3 pt-[40px]">
                <li>About Us</li>
                <li>Services</li>
                <li>Blog</li>
                <li>Contact Us</li>
              </ul>
              <div className="mt-20 mx-3">
                <DarkButton text="Get Bookable" classname="text-xl p-3" />
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};
