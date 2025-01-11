import Image from "next/image";
import hero_image_left_side from "../../../../public/images/hero_image_left_side.jpeg";
import prattern_top_right from "../../../../public/images/prattern_top_right.png";
import prattern_bottom_left from "../../../../public/images/prattern_bottom_left.png";
import fruit_bundle from "../../../../public/images/fruit_bundle.png";
import left_hero_bottom from "../../../../public/images/left_hero_bottom.png";
import leaf_hero_right from "../../../../public/images/leaf_hero_right.png";
import bottom_left_leaves from "../../../../public/images/bottom_left_leaves.png";
import orange_line from "../../../../public/images/orange_line.png";
import Caption from "@/components/common/heading/Caption";

export default function SeasonalFruitBundle() {
  return (
    <div className="relative lg:h-[640px] max-w-[1440px] mx-auto">
      {/* Gray Background */}
      <div className="absolute inset-0">
        <Image
          src={hero_image_left_side}
          alt="Gray Background"
          layout="fill"
          objectFit="cover"
          priority
        />
      </div>

      {/* Top Right Background Image */}
      <div className="absolute top-0 right-0">
        <Image src={prattern_top_right} alt="Top Right Decoration" />
      </div>

      {/* Bottom Left Background Image */}
      <div className="absolute bottom-0 left-0">
        <Image src={prattern_bottom_left} alt="Bottom Left Decoration" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-[1200px] px-4 py-24 lg:py-0 lg:px-0 lg:pl-[120px] lg:h-full flex items-center lg:items-start flex-col justify-center">
        <div className="flex lg:block items-center justify-center flex-col text-left mb-7">
          <Caption className="mb-2">Special Offer</Caption>
          <h3 className="mt-2 text-center lg:text-left text-5xl md:text-[80px] font-medium text-primary">
            Seasonal Fruit Bundle
          </h3>
          <h4 className="mt-2 text-[32px] sm:text-5xl text-center lg:text-left font-medium text-primary">
            Discount up to <span className="text-orange">80% OFF</span>
          </h4>
        </div>

        <div className="flex gap-x-4 md:gap-x-5 mb-7">
          {["03 Days", "18 Hour", "54 Min", "21 Second"].map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center px-4 sm:px-6 pb-2 pt-7 bg-white rounded-lg"
            >
              <p className="text-[28px] sm:text-[40px] font-normal text-primary">
                {item.split(" ")[0]}
              </p>
              <span className="text-xs sm:text-lg font-questrial text-secondary">
                {item.split(" ")[1]}
              </span>
            </div>
          ))}
        </div>

        {/* Promo Code */}
        <div className="flex pb-10 lg:pb-0">
          <p className="px-7 py-3 rounded-full text-2xl sm:text-[32px] font-semibold text-white bg-green-700 ">
            CODE: <span className="text-yellow">FRUIT28</span>
          </p>
        </div>
      </div>

      {/* Fruits Image */}
      <div className="hidden lg:block absolute top-44 right-12">
        <Image src={fruit_bundle} alt="Seasonal Fruits" className="" />
      </div>

      {/* orange_line */}
      <div className="hidden lg:block absolute top-32 right-64">
        <Image src={orange_line} className="rotate-90" alt="orange_line" />
      </div>

      {/* Leaves */}
      <div className="absolute top-14 right-0 lg:right-[450px]">
        <Image src={left_hero_bottom} alt="Left Leaf" />
      </div>
      <div className="absolute bottom-0 right-0">
        <Image src={leaf_hero_right} alt="Right Leaf" />
      </div>
      <div className="absolute bottom-0 left-0">
        <Image src={bottom_left_leaves} alt="Bottom Leaf" />
      </div>
    </div>
  );
}
