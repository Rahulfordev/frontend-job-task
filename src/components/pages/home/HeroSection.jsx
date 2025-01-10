import { Questrial } from "next/font/google";
import Image from "next/image";
import React from "react";
import leat_right from "../../../../public/images/leaf_hero_right.png";
import leat_left from "../../../../public/images/leaf_hero_left.png";
import leat_bottom from "../../../../public/images/left_hero_bottom.png";
import food_container from "../../../../public/images/food_container.png";
import girl_with_vegetables from "../../../../public/images/girl-with-vegetables.png";
import arrow_right from "../../../../public/images/arrow_right.png";
import orange_line from "../../../../public/images/orange_line.png";
import apple_logo from "../../../../public/images/apple_logo.png";
import google_play_store_logo from "../../../../public/images/google_play_store_logo.png";

const questrial = Questrial({
  subsets: ["latin"],
  weight: "400",
});

const HeroSection = () => {
  return (
    <section className="relative lg:pl-[120px]">
      {/* Left Content */}
      <div className="text-white pt-20 relative">
        <div className="relative">
          <p className="mb-4 text-xl font-medium text-accent px-3 py-1 bg-[#749B3F1A] rounded-lg w-fit">
            Welcome to Fresh Harvest
          </p>
          <h1 className="text-5xl md:text-[70px] max-w-[660px] font-medium text-primary">
            Fresh Fruits and Vegetables
          </h1>
          <p
            className={`mt-4 text-xs max-w-[450px] sm:text-sm font-normal text-secondary ${questrial.className}`}
          >
            At Fresh Harvest, we are passionate about providing you with the
            freshest and most flavorful fruits and vegetables.
          </p>
          <button className="px-8 py-4 mt-8 rounded-lg bg-orange text-white bg-orange-500 font-semibold text-lg ">
            Shop Now
          </button>
          <div className="absolute left-28 -bottom-16">
            <Image src={arrow_right} alt="arrow_right" />
          </div>
        </div>
        {/* Special Offer */}
        <div className="absolute left-48 flex items-center  bg-[#EBEBEB] py-[11px] pl-[11px]  md:py-5 md:pl-5 gap-x-[1px] sm:gap-x-[3px] rounded-2xl max-w-[195px] sm:max-w-[330px]">
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
        <div className="mt-56">
          <p className={`text-sm mb-3 text-secondary ${questrial.className}`}>
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

      <div className="absolute right-16 top-0 ">
        <div className="absolute inset-0 left-7 top-5">
          <Image src={leat_bottom} alt="Leaf" />
        </div>
        <div className="relative">
          <Image
            src={orange_line}
            className="absolute top-[330px] left-10"
            alt="orange_line"
          />
          <Image src={girl_with_vegetables} alt="Girl with Vegetables" />
        </div>
      </div>

      {/* Decorative Leaves */}
      <div className="absolute -top-5 left-0">
        <Image src={leat_left} alt="Leaf" />
      </div>
      <div className="absolute top-14 right-0">
        <Image src={leat_right} alt="Leaf" />
      </div>

      <div className="absolute bottom-32 left-16">
        <Image src={leat_bottom} alt="Leaf" />
      </div>
    </section>
  );
};

export default HeroSection;
