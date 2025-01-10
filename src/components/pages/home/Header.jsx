import Navbar from "@/components/layout/Navbar";
import HeroSection from "./HeroSection";

const Header = () => {
  return (
    <div className="relative w-full max-w-[1440px] h-[845px] flex mx-auto">
      <div
        className="bg-[url('/images/hero_image_left_side.jpeg')] bg-left bg-no-repeat bg-cover"
        style={{ flex: "0 0 65%" }}
      ></div>

      <div
        className="bg-[url('/images/hero_image_right_side.png')] bg-right bg-no-repeat bg-cover"
        style={{ flex: "0 0 35%" }}
      ></div>

      <div className="absolute inset-0 z-10">
        <Navbar />
        <HeroSection />
      </div>
    </div>
  );
};

export default Header;
