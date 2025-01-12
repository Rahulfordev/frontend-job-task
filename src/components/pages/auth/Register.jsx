"use client";
import Modal from "@/components/common/modal/Modal";
import React, { useState } from "react";
import { toast } from "react-toastify";
import { registerUser } from "@/api/services/userService";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import facebook_icon from "../../../../public/images/facebook_icon.png";
import google_icon from "../../../../public/images/google_icon.png";
import Link from "next/link";
import Button from "@/components/common/button/Button";
import Image from "next/image";

const Register = ({ toggleRegisterModal, setIsRegisterModalOpen }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [registerForm, setRegisterForm] = useState({
    fullName: "",
    email: "",
    password: "",
  });

  const handlePasswordToggle = () => {
    setShowPassword(!showPassword);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setRegisterForm({ ...registerForm, [name]: value });
  };

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    const response = await registerUser(registerForm);

    if (!response.success) {
      toast.error(response.message, { autoClose: 2000 });
      return;
    }

    toast.success(response.message, { autoClose: 2000 });
    setIsRegisterModalOpen(false);

    setRegisterForm({ email: "", password: "" });
  };
  return (
    <Modal onClose={toggleRegisterModal} title="Register">
      <form className="font-rubik" onSubmit={handleLoginSubmit}>
        <div className="mb-4">
          <label
            htmlFor="fullName"
            className="block text-lg font-questrial text-primary mb-2"
          >
            Email
          </label>
          <input
            id="fullName"
            type="fullName"
            name="fullName"
            value={registerForm.fullName}
            onChange={handleInputChange}
            required
            className="w-full px-4 py-2 border border-grayMedium rounded focus:outline-none focus:ring-2 focus:ring-orange-500"
            placeholder="Enter your name"
          />
        </div>
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
            value={registerForm.email}
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
              value={registerForm.password}
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

        <Button variant="primary" type="submit" className="w-full">
          Register
        </Button>
      </form>

      <div className="flex items-center my-6">
        <hr className="flex-1 border-gray-300" />
        <span className="px-2 text-sm font-semibold text-secondary font-rubik">
          Or Sign Up with
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
        Already have an account?
        <Link href="/sign-in" className="text-orange">
          Log In
        </Link>
      </p>
    </Modal>
  );
};

export default Register;
