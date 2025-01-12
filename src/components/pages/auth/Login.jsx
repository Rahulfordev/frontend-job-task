"use client";
import Modal from "@/components/common/modal/Modal";
import React, { useState } from "react";
import { toast } from "react-toastify";
import { loginUser } from "@/api/services/userService";
import Cookies from "js-cookie";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import facebook_icon from "../../../../public/images/facebook_icon.png";
import google_icon from "../../../../public/images/google_icon.png";
import Link from "next/link";
import Button from "@/components/common/button/Button";
import Image from "next/image";

const Login = ({ toggleLoginModal, setIsLoginModalOpen }) => {
  const [rememberMe, setRememberMe] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [loginForm, setLoginForm] = useState({ email: "", password: "" });

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
  );
};

export default Login;
