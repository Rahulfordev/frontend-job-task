import Image from "next/image";
import React from "react";

import food_container from "../../../../public/images/food_container.png";
import girl_with_vegetables from "../../../../public/images/girl-with-vegetables.png";
import arrow_right from "../../../../public/images/arrow_right.png";
import apple_logo from "../../../../public/images/apple_logo.png";
import google_play_store_logo from "../../../../public/images/google_play_store_logo.png";
import orange_line from "../../../../public/images/orange_line.png";
import Button from "@/components/common/button/Button";
import Caption from "@/components/common/heading/Caption";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden max-w-[1200px] mx-auto">
      {/* Left Content */}
      <div className="text-white mt-[78px] z-40 relative">
        <div>
          <Caption className="mb-4">Welcome to Fresh Harvest</Caption>

          <h1 className="text-5xl lg:text-[70px] max-w-[660px] font-medium text-primary">
            Fresh Fruits and Vegetables
          </h1>
          <p className="mt-4 text-xs max-w-[450px] sm:text-sm font-normal text-secondary font-questrial">
            At Fresh Harvest, we are passionate about providing you with the
            freshest and most flavorful fruits and vegetables.
          </p>
          <Button variant="primary" className="mt-8">
            Shop Now
          </Button>
          <div className="absolute hidden md:block left-28 bottom-52">
            <Image src={arrow_right} alt="arrow_right" />
          </div>
        </div>

        {/* Special Offer */}
        <div className="md:absolute left-28 xl:left-48 mt-6 md:mt-0 flex items-center  bg-[#EBEBEB] py-[11px] pl-[11px]  md:py-5 md:pl-5 gap-x-[1px] sm:gap-x-[3px] rounded-2xl max-w-[195px] sm:max-w-[330px]">
          <div>
            <p className="text-greenDark font-medium text-[9px] sm:text-sm">
              Special Offer
            </p>
            <h3 className="text-base whitespace-nowrap sm:text-[28px] font-medium text-primary mt-[1px] sm:mt-[3px]">
              Fresh Salad
            </h3>
            <p className="mt-[1px] sm:mt-1 font-medium text-[9px] sm:text-base text-greenDark">
              Up to{" "}
              <span className="text-2xl font-medium text-primary">70%</span>{" "}
              <span className="text-primary font-medium text-[9px] sm:text-base">
                off
              </span>
            </p>
            <div className="mt-[2px] sm:mt-[9px]">
              <button className="px-[6px] sm:px-3 text-[9px] sm:text-xs font-semibold sm:font-bold py-[3px] sm:py-[6px] bg-greenDark text-white rounded-[20px] sm:rounded-[35px]">
                <span>CODE:</span> <span className="text-yellow">FRESH25</span>
              </button>
            </div>
          </div>
          <div>
            <Image src={food_container} width={149} alt="food_container" />
          </div>
        </div>

        {/* App Download */}
        <div className="mt-52 mb-20">
          <p className="text-sm mb-3 text-secondary font-questrial">
            Download App:
          </p>
          <div className="flex items-center gap-x-4">
            <button className="text-white bg-black gap-x-1 sm:gap-x-2 flex rounded-md py-1 px-2 items-center">
              <Image src={apple_logo} alt="apple_logo" />
              <span className="text-xs text-left">
                <span className="block">Download on the</span>
                <span className="text-[16px] sm:text-base">App Store</span>
              </span>
            </button>
            <button className="text-white bg-black gap-x-1 sm:gap-x-2 flex rounded-md py-1 px-2 items-center">
              <Image
                src={google_play_store_logo}
                alt="google_play_store_logo"
              />
              <span className="text-xs text-left">
                <span className="block">Download on the</span>
                <span className="text-[16px] sm:text-base">Google Play</span>
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Girl with Vegetables Image */}
      <div className="absolute bottom-0 -right-60 md:-right-40 lg:right-14 z-10 max-w-[600px]">
        <div className="relative">
          <div className="absolute top-64 z-40">
            <Image src={orange_line} alt="orange_line" />
          </div>
        </div>
        <Image
          src={girl_with_vegetables}
          className="object-contain"
          alt="Girl with Vegetables"
        />
      </div>
    </section>
  );
};

export default HeroSection;
