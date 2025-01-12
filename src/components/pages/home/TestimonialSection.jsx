"use client";
import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import Image from "next/image";
import customerImage from "../../../../public/images/customers_one.png";
import orange_line from "../../../../public/images/orange_line.png";
import Title from "@/components/common/heading/Title";
import Caption from "@/components/common/heading/Caption";
import Description from "@/components/common/heading/Description";
import leat_bottom from "../../../../public/images/left_hero_bottom.png";

export default function TestimonialSection() {
  const paginationRef = useRef(null);

  return (
    <div className="text-white px-4 py-16 lg:mb-[80px] relative">
      <div className="max-w-[1200px] mx-auto">
        <div className="flex items-center justify-center flex-col pb-5 lg:pb-12">
          <Caption className="mb-3 sm:mb-4">Testimonial</Caption>
          <Title className="mb-3 text-center lg:text-left">
            What Our Customers Say
          </Title>
          <Description className="mb-4 text-center">
            Don't just take our word for it—here's what some of our customers
            have to say about their experience with Fresh Harvest:
          </Description>
        </div>
        <Swiper
          modules={[Pagination]}
          pagination={{
            clickable: true,
            el: paginationRef.current,
          }}
          onSwiper={(swiper) => {
            if (paginationRef.current) {
              swiper.params.pagination.el = paginationRef.current;
              swiper.pagination.init();
              swiper.pagination.update();
            }
          }}
          spaceBetween={50}
          slidesPerView={1}
          loop={true}
        >
          <SwiperSlide>
            <div className="flex flex-col lg:flex-row items-center gap-8 justify-center relative">
              <div className="flex-shrink-0 relative">
                <Image src={customerImage} alt="Customer" />
                <Image
                  src={orange_line}
                  className="absolute  rotate-90 top-0 left-64 lg:left-64"
                  alt="orange_line"
                />
              </div>

              <div className="bg-grayBackground text-black p-6 rounded-3xl max-w-[630px]">
                <p className="text-lg font-questrial text-secondary">
                  "I absolutely love Fresh Harvest! The quality of their produce
                  is outstanding. It's always fresh, flavorful, and delicious.
                  The convenience of ordering online and having it delivered to
                  my doorstep saves me so much time. Fresh Harvest has become my
                  go-to for all my fruit and vegetable needs."
                </p>
                <p className="mt-7 font-lg text-primary font-medium">
                  Jane Doe -{" "}
                  <span className="font-questrial ">Professional Chef</span>
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col lg:flex-row items-center gap-8 justify-center relative">
              <div className="flex-shrink-0 relative">
                <Image src={customerImage} alt="Customer" />
                <Image
                  src={orange_line}
                  className="absolute  rotate-90 top-0 left-64 lg:left-64"
                  alt="orange_line"
                />
              </div>
              <div className="bg-grayBackground text-black p-6 rounded-3xl max-w-[630px]">
                <p className="text-lg font-questrial text-secondary">
                  "I absolutely love Fresh Harvest! The quality of their produce
                  is outstanding. It's always fresh, flavorful, and delicious.
                  The convenience of ordering online and having it delivered to
                  my doorstep saves me so much time. Fresh Harvest has become my
                  go-to for all my fruit and vegetable needs."
                </p>
                <p className="mt-7 font-lg text-primary font-medium">
                  Jane Doe -{" "}
                  <span className="font-questrial ">Professional Chef</span>
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col lg:flex-row items-center gap-8 justify-center relative">
              <div className="flex-shrink-0 relative">
                <Image src={customerImage} alt="Customer" />
                <Image
                  src={orange_line}
                  className="absolute  rotate-90 top-0 left-64 lg:left-64"
                  alt="orange_line"
                />
              </div>
              <div className="bg-grayBackground text-black p-6 rounded-3xl max-w-[630px]">
                <p className="text-lg font-questrial text-secondary">
                  "I absolutely love Fresh Harvest! The quality of their produce
                  is outstanding. It's always fresh, flavorful, and delicious.
                  The convenience of ordering online and having it delivered to
                  my doorstep saves me so much time. Fresh Harvest has become my
                  go-to for all my fruit and vegetable needs."
                </p>
                <p className="mt-7 font-lg text-primary font-medium">
                  Jane Doe -{" "}
                  <span className="font-questrial ">Professional Chef</span>
                </p>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>

        <div
          ref={paginationRef}
          className="swiper-pagination mt-6 flex mx-auto justify-center w-[100vw]"
        />
      </div>
      <div className="absolute top-12 lg:top-36 left-6 lg:left-36">
        <Image src={leat_bottom} className="rotate-90" alt="Leaf" />
      </div>
      <div className="absolute top-8 lg:top-44  right-0 lg:right-24">
        <Image src={leat_bottom} alt="Leaf" />
      </div>
    </div>
  );
}
