import Navbar from "@/components/layout/Navbar";
import HeroSection from "./HeroSection";

import leat_right from "../../../../public/images/leaf_hero_right.png";
import leat_left from "../../../../public/images/leaf_hero_left.png";
import leat_bottom from "../../../../public/images/left_hero_bottom.png";
import orange_line from "../../../../public/images/orange_line.png";
import Image from "next/image";

const Header = () => {
  return (
    <div
      className="w-full bg-no-repeat bg-left bg-contain relative max-w-[1440px] mx-auto pl-4"
      style={{
        backgroundImage:
          "url('/images/hero_image_left_side.jpeg'), url('/images/hero_image_right_side.png')",
        backgroundSize: "64% 100%, 36% 100%",
        backgroundPosition: "left, right",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Navbar />
      <HeroSection />

      <div className="absolute top-36 left-[50%]">
        <Image src={leat_bottom} alt="Leaf" />
      </div>

      <div className="absolute">
        <Image src={orange_line} alt="orange_line" />
      </div>
      <div className="hidden sm:block absolute top-0 sm:top-10 sm:left-0">
        <Image src={leat_left} className="w-10 sm:w-full" alt="Leaf" />
      </div>
      <div className="hidden md:block absolute top-36 right-0">
        <Image src={leat_right} alt="Leaf" />
      </div>

      <div className="absolute hidden md:block top-24 sm:top-[70%] left-16">
        <Image src={leat_bottom} alt="Leaf" />
      </div>
    </div>
  );
};

export default Header;
