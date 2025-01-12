"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { CiMenuFries } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";
import { MdOutlineShoppingCart } from "react-icons/md";
import logo from "../../../public/images/logo.png";
import Button from "../common/button/Button";

import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";

const Navbar = () => {
  const pathname = usePathname();
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

  const toggleLoginModal = () => {
    setIsLoginModalOpen(!isLoginModalOpen);
  };

  const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(false);

  const toggleRegisterModal = () => {
    setIsRegisterModalOpen(!isRegisterModalOpen);
  };

  return (
    <div className={`font-questrial w-full  transition-all duration-300`}>
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
              <FaHeart
                className={`${pathname === "/" ? "text-white" : "text-accent"}`}
              />
              <span
                className={`${
                  pathname === "/" ? "text-white" : "text-primary"
                }`}
              >
                Favorites
              </span>
            </Button>
            <Button className="flex items-center gap-x-2">
              <div className="relative">
                <MdOutlineShoppingCart
                  className={`text-lg ${
                    pathname === "/" ? "text-white" : "text-accent"
                  }`}
                />
                <span
                  className={`absolute border-[2px] -top-[11px] -right-[9px] text-xs font-normal text-[#FFEFEB] rounded-full h-5 w-5 bg-[#EE4536] flex items-center justify-center leading-none ${
                    pathname === "/" ? "border-accent" : "border-[#EDEDED]"
                  }`}
                >
                  3
                </span>
              </div>
              <span
                className={`${
                  pathname === "/" ? "text-white" : "text-primary"
                }`}
              >
                Cart
              </span>
            </Button>
            <button
              onClick={toggleLoginModal}
              className={`${
                pathname === "/"
                  ? "text-white border-white"
                  : "text-primary border-primary"
              } font-rubik text-sm font-semibold px-6 py-3 border  rounded`}
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

      {/* Login Modal */}
      {isLoginModalOpen && (
        <Login
          toggleLoginModal={toggleLoginModal}
          setIsLoginModalOpen={setIsLoginModalOpen}
        />
      )}

      {/* Register Modal */}
      {isRegisterModalOpen && (
        <Register
          toggleRegisterModal={toggleRegisterModal}
          setIsRegisterModalOpen={setIsRegisterModalOpen}
        />
      )}
    </div>
  );
};

export default Navbar;
