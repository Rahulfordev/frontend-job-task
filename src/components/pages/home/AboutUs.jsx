import React from "react";
import about_us from "../../../../public/images/about_us.png";
import lettuce from "../../../../public/images/lettuce.png";
import logo_small from "../../../../public/images/logo_small.png";
import orange_line from "../../../../public/images/orange_line.png";
import Image from "next/image";
import Caption from "@/components/common/heading/Caption";
import Title from "@/components/common/heading/Title";
import Description from "@/components/common/heading/Description";
import leat_bottom from "../../../../public/images/left_hero_bottom.png";

const AboutUs = () => {
  return (
    <div className="my-[80px] px-4 lg:px-0">
      <section className="relative max-w-[1200px] mx-auto  justify-between flex flex-col lg:flex-row items-center">
        {/* Left Section */}
        <div className="relative text-center lg:text-left">
          <Image src={about_us} alt="Man holding vegetable box" />

          <div className="absolute top-28 right-14">
            <Image src={leat_bottom} alt="Leaf" />
          </div>
          <div className="absolute bottom-28 sm:bottom-48  rotate-90 right-8 sm:right-16">
            <Image
              src={orange_line}
              className="w-[25px] sm:w-[50px]"
              alt="orange_line"
            />
          </div>
          <div className="absolute bottom-32 sm:bottom-52 right-20 sm:right-36 px-3 py-2 bg-white shadow-md rounded-[3px]">
            <Image
              src={logo_small}
              className="w-[104px] md:w-[180px]"
              alt="logo_small"
            />
          </div>
          <div className="absolute w-[82px] sm:w-[150px] h-[105px] sm:h-[192px] bottom-0 right-14 sm:right-[100px] bg-white shadow-md rounded-[10px]">
            <div className="m-[2px] sm:m-[6px] rounded-[8px] bg-grayBackground flex items-center justify-center">
              <Image
                src={lettuce}
                alt="Lettuce"
                className="rounded-md w-[50px] sm:w-[100px]"
              />
            </div>
            <div className="mx-[3px] sm:mx-[6px]">
              <p className="text-[5px] sm:text-[9px] text-center font-medium">
                Mushroom
              </p>
              <p className="text-[5px] sm:text-[9px] text-center text-secondary">
                $2.3/kg
              </p>
              <button className="mt-[6px] text-center w-full font-normal text-[5px] sm:text-[9px] text-primary py-[3px] sm:py-[6px] rounded-[4px] border border-grayMedium">
                Add to cart
              </button>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="">
          <Caption className="mb-4">About us</Caption>
          <Title className="mb-4 lg:whitespace-nowrap">
            About Fresh Harvest
          </Title>
          <Description className="mb-4">
            Welcome to Fresh Harvest, your premier destination for high-quality
            and fresh produce. We are passionate about providing you with the
            finest fruits, vegetables, and salad ingredients to nourish your
            body and delight your taste buds. With a commitment to excellence,
            sustainability, and customer satisfaction, Fresh Harvest is here to
            revolutionize your grocery shopping experience.
          </Description>

          <button className="px-8 py-4 text-sm text-orange border border-orange rounded-lg sm:text-lg font-medium">
            Read More
          </button>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
