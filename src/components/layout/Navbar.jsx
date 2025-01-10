"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Questrial, Rubik } from "next/font/google";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { CiMenuFries } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";
import { MdOutlineShoppingCart } from "react-icons/md";

const questrial = Questrial({
  subsets: ["latin"],
  weight: "400",
});

const rubik = Rubik({
  subsets: ["latin"],
});

import logo from "../../../public/images/logo.png";
import Button from "../common/button/Button";

const Navbar = () => {
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);
  const pathname = usePathname();

  return (
    <div
      className={`${questrial.className} font-sans w-full  transition-all duration-300`}
    >
      {/* fixed top-0 left-0 z-50 */}
      {/* Navigation */}
      <div className="">
        <nav
          className={`flex items-center justify-between px-4 lg:px-[120px] py-5 max-w-[1440px] mx-auto`}
        >
          {/* Logo */}
          <Link href={"/"}>
            <Image src={logo} alt="Fresh Harvest Logo" width={200} />
          </Link>

          {/* Desktop Navigation */}
          <ul className="hidden lg:flex items-center gap-x-[40px] text-sm text-grayDark">
            {["Home", "Shop", "About Us", "Blog"].map((item, index) => {
              const path =
                item === "Home"
                  ? "/"
                  : `/${item.toLowerCase().replace(/\s+/g, "-")}`;
              const isActive = pathname === path;

              return (
                <li key={index} className="relative">
                  <Link
                    href={path}
                    className={`${
                      isActive ? "before:w-full" : "before:w-0"
                    } hover:before:w-full before:bg-accent before:h-[2px] before:transition-all before:duration-300 before:absolute relative before:rounded-full before:bottom-[-2px] transition-all duration-300 before:left-0 cursor-pointer capitalize`}
                  >
                    {item}
                  </Link>
                </li>
              );
            })}
          </ul>

          <div className="hidden lg:flex items-center gap-x-4">
            <Button className="flex items-center gap-x-2">
              <FaHeart className="text-white" />
              <span className="text-white">Favorites</span>
            </Button>
            <Button className="flex items-center gap-x-2">
              <div className="relative">
                <MdOutlineShoppingCart className="text-white text-lg" />
                <span className="absolute border-[2px] border-accent -top-[11px] -right-[9px] text-xs font-normal text-[#FFEFEB] rounded-full h-5 w-5 bg-[#EE4536] flex items-center justify-center leading-none">
                  3
                </span>
              </div>
              <span className="text-white">Cart</span>
            </Button>
            <button
              className={`${rubik.className}  font-sans text-sm font-semibold px-6 py-3 border border-white text-white rounded`}
            >
              Sign in
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="lg:hidden flex items-center space-x-4">
            <div className="relative">
              <MdOutlineShoppingCart className="text-white text-2xl" />
              <span className="absolute border-[2px] border-accent -top-[7px] -right-[7px] text-xs font-normal text-[#FFEFEB] rounded-full h-4 w-4 bg-[#EE4536] flex items-center justify-center leading-none">
                3
              </span>
            </div>
            <div className="gap-[10px] lg:hidden flex relative">
              <CiMenuFries
                className={`text-[28px] text-grayDark cursor-pointer`}
                onClick={() => setMobileSidebarOpen(!mobileSidebarOpen)}
              />
            </div>
          </div>
        </nav>

        {/* Mobile Sidebar */}
        <aside
          className={`${
            mobileSidebarOpen
              ? "translate-x-0 opacity-100 z-20"
              : "-translate-x-full opacity-0 z-[-1]"
          } lg:hidden bg-white shadow-md p-4 text-center absolute right-0 w-full rounded-md transition-all duration-300`}
        >
          <ul className="items-center gap-[20px] text-[1rem] text-black flex flex-col">
            {["Home", "About Us", "Shop", "Blog"].map((item, index) => {
              const path =
                item === "Home"
                  ? "/"
                  : `/${item.toLowerCase().replace(/\s+/g, "-")}`;
              const isActive = pathname === path;

              return (
                <li key={index} className="relative">
                  <Link
                    href={path}
                    className={`${
                      isActive ? "before:w-full" : "before:w-0"
                    } hover:before:w-full before:bg-accent before:h-[2px] before:transition-all before:duration-300 before:absolute relative before:rounded-full before:bottom-[-2px] transition-all duration-300 before:left-0 cursor-pointer capitalize`}
                  >
                    {item}
                  </Link>
                </li>
              );
            })}
          </ul>
        </aside>
      </div>
    </div>
  );
};

export default Navbar;
