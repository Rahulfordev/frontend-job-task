import React from "react";
import Image from "next/image";
import logo from "../../../public/images/logo.png";
import apple_logo from "../../../public/images/apple_logo.png";
import google_play_store_logo from "../../../public/images/google_play_store_logo.png";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import { FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
import { CgMail } from "react-icons/cg";

import Link from "next/link";

const Footer = () => {
  return (
    <footer className="py-8 bg-grayBackground">
      <div className="max-w-[1200px] mx-auto px-4 lg:px-0">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4 lg:grid-cols-6 ">
          <div className="col-span-2 :col-span-3">
            <Image
              src={logo}
              alt={"LogoWhite"}
              className="mb-8 max-w-[300px]"
            />
          </div>
          <div className="">
            <h3 className="text-lg font-medium text-primary mb-3">
              Quick Links 1
            </h3>
            <ul className="text-secondary font-questrial text-sm gap-y-2 flex flex-col">
              <li>
                <Link href="/" className="hover:underline">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/shop" className="hover:underline">
                  Shop
                </Link>
              </li>
              <li>
                <Link href="/about-us" className="hover:underline">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:underline">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/blog/detail" className="hover:underline">
                  Detail Blog
                </Link>
              </li>
            </ul>
          </div>
          <div className="">
            <h3 className="text-lg font-medium text-primary mb-3">
              Quick Links 2
            </h3>
            <ul className="text-secondary font-questrial text-sm gap-y-2 flex flex-col">
              <li>
                <Link href="/favorites" className="hover:underline">
                  Favorites
                </Link>
              </li>
              <li>
                <Link href="/cart" className="hover:underline">
                  Cart
                </Link>
              </li>
              <li>
                <Link href="/sign-in" className="hover:underline">
                  Sign In
                </Link>
              </li>
              <li>
                <Link href="/register" className="hover:underline">
                  Register
                </Link>
              </li>
            </ul>
          </div>
          <div className="">
            <h3 className="text-lg font-medium text-primary mb-3">
              Contact Us
            </h3>
            <ul className="text-secondary font-questrial text-sm gap-y-2 flex flex-col">
              <li className="flex items-center gap-x-1">
                <FaPhoneAlt className="text-primary w-5 h-5" />
                <span>1234 5678 90</span>
              </li>
              <li className="flex items-center gap-x-1">
                <CgMail className="text-primary w-5 h-5" />
                <Link
                  href="mailto:Freshharvests@gmail.com"
                  className="hover:underline"
                >
                  Freshharvests@gmail.com
                </Link>
              </li>
              <li className="flex items-center gap-x-1">
                <FaMapMarkerAlt className="text-primary w-5 h-5" />
                <span>Tanjung Sari Street, Pontianak, Indonesia</span>
              </li>
            </ul>
          </div>

          <div className="col-span-2 :col-span-3">
            <div className="">
              <p className={`text-xs mb-3 text-primary font-medium`}>
                Download App:
              </p>
              <div className="flex items-center gap-x-4">
                <button className="text-white bg-black gap-x-2 flex rounded-md py-1 px-2 items-center">
                  <Image src={apple_logo} alt="apple_logo" />
                  <span className="text-xs text-left">
                    <span className="block">Download on the</span>
                    <span className="text-base">App Store</span>
                  </span>
                </button>
                <button className="text-white bg-black gap-x-2 flex rounded-md py-1 px-2 items-center">
                  <Image
                    src={google_play_store_logo}
                    alt="google_play_store_logo"
                  />
                  <span className="text-xs text-left">
                    <span className="block">Download on the</span>
                    <span className="text-base">App Store</span>
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="pt-10">
          <hr className="border-t border-gray-300 mb-4" />
          <div className="flex flex-col sm:flex-row items-center justify-between gap-y-3 sm:gap-y-0 sm:mb-2">
            <p className="text-primary font-medium text-xs text-center">
              © Copyright 2024, All Rights Reserved by Banana Studio
            </p>
            <div className="flex items-center gap-x-2">
              <Link
                href="https://facebook.com"
                className="w-7 h-7 rounded-full bg-black flex items-center justify-center transition"
              >
                <FaFacebookF size={16} className="text-white" />
              </Link>
              <Link
                href="https://twitter.com"
                className="w-7 h-7 rounded-full bg-black flex items-center justify-center transition"
              >
                <FaTwitter size={16} className="text-white" />
              </Link>
              <Link
                href="https://instagram.com"
                className="w-7 h-7 rounded-full bg-black flex items-center justify-center transition"
              >
                <FaInstagram size={16} className="text-white" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
