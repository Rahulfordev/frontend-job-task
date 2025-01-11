"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { CiMenuFries } from "react-icons/ci";
import { FaEye, FaEyeSlash, FaHeart } from "react-icons/fa";
import { MdOutlineShoppingCart } from "react-icons/md";
import logo from "../../../public/images/logo.png";
import facebook_icon from "../../../public/images/facebook_icon.png";
import google_icon from "../../../public/images/google_icon.png";
import Button from "../common/button/Button";
import Modal from "../common/modal/Modal";
import { toast } from "react-toastify";
import { loginUser } from "@/api/services/userService";
import Cookies from "js-cookie";

const Navbar = () => {
  const pathname = usePathname();
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [loginForm, setLoginForm] = useState({ email: "", password: "" });
  const [rememberMe, setRememberMe] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const toggleLoginModal = () => {
    setIsLoginModalOpen(!isLoginModalOpen);
    setLoginForm({ email: "", password: "" });
  };

  const handlePasswordToggle = () => {
    setShowPassword(!showPassword);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setLoginForm({ ...loginForm, [name]: value });
  };

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    const response = await loginUser(loginForm);
    
    if (!response.success) {
      toast.error(response.message, { autoClose: 2000 });
      return;
    }

    toast.success(response.message, { autoClose: 2000 });
    setIsLoginModalOpen(false);
    const { token } = response.data;
    setLoginForm({ email: "", password: "" });
    if (rememberMe) {
      Cookies.set("token", token, { expires: 30 });
    } else {
      Cookies.set("token", token);
    }
  };

  return (
    <div className={`font-questrial w-full  transition-all duration-300`}>
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
              onClick={toggleLoginModal}
              className={`font-rubik text-sm font-semibold px-6 py-3 border border-white text-white rounded`}
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
        <Modal onClose={toggleLoginModal} title="Login">
          <form className="font-rubik" onSubmit={handleLoginSubmit}>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-lg font-questrial text-primary mb-2"
              >
                Email
              </label>
              <input
                id="email"
                type="email"
                name="email"
                value={loginForm.email}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-2 border border-grayMedium rounded focus:outline-none focus:ring-2 focus:ring-orange-500"
                placeholder="Enter your email"
              />
            </div>

            <div className="mb-6">
              <label
                htmlFor="password"
                className="block text-lg font-questrial text-primary mb-2"
              >
                Password
              </label>
              <div className="relative">
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={loginForm.password}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-2 border border-grayMedium rounded focus:outline-none focus:ring-2 focus:ring-orange-500"
                  placeholder="Enter your password"
                />
                <button
                  type="button"
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
                  onClick={handlePasswordToggle}
                >
                  {showPassword ? (
                    <FaEyeSlash className="text-xl" />
                  ) : (
                    <FaEye className="text-xl" />
                  )}
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between mb-6">
              <label className="flex items-center text-xs font-medium font-rubik text-secondary">
                <input
                  type={"checkbox"}
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className="appearance-none w-5 h-5 border-2 border-orange-500 rounded-md cursor-pointer checked:bg-orange-500 checked:border-orange-500 checked:text-white flex items-center justify-center"
                />
                Remember me
              </label>
              <Link
                href="/forgot-password"
                className="text-sm font-semibold font-rubik text-secondary underline"
              >
                Forgot Password
              </Link>
            </div>

            <Button variant="primary" type="submit" className="w-full">
              Login
            </Button>
          </form>

          <div className="flex items-center my-6">
            <hr className="flex-1 border-gray-300" />
            <span className="px-2 text-sm font-semibold text-secondary font-rubik">
              Or Sign in with
            </span>
            <hr className="flex-1 border-gray-300" />
          </div>

          {/* Social Login Buttons */}
          <div className="flex items-center space-x-4 mb-6">
            <button className="flex items-center w-full gap-x-2 px-4 py-2 border border-grayMedium rounded-lg text-lg font-semibold font-rubik">
              <Image src={google_icon} alt="google_icon" />
              Google
            </button>
            <button className="flex items-center w-full gap-x-2 px-4 py-2 border border-grayMedium rounded-lg text-lg font-semibold font-rubik">
              <Image src={facebook_icon} alt="facebook_icon" />
              Facebook
            </button>
          </div>

          <p className="text-sm font-semibold font-rubik text-center text-primary">
            Don’t have an account?{" "}
            <Link href="/register" className="text-orange">
              Sign up
            </Link>
          </p>
        </Modal>
      )}
    </div>
  );
};

export default Navbar;
