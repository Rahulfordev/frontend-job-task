"use client";
import customer_one from "../../../../public/images/customers_one.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";

export default function TestimonialSection() {
  return (
    <div className=" text-white py-12 px-6 lg:px-20">
      <div className="max-w-5xl mx-auto text-center">
        <p className="text-green-500 text-sm uppercase font-semibold">
          Testimonial
        </p>
        <h2 className="text-3xl lg:text-4xl font-bold mt-2">
          What Our Customers Say
        </h2>
        <p className="text-gray-400 mt-4">
          Don't just take our word for it—here’s what some of our customers have
          to say about their experience with Fresh Harvest:
        </p>
      </div>

      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        loop={true}
        pagination={{
          clickable: true,
        }}
        className="mt-10"
      >
        <SwiperSlide>
          <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8">
            <div className="flex-shrink-0">
              <Image
                src={customer_one}
                alt="Customer"
                className="rounded-full w-40 h-40 lg:w-48 lg:h-48 object-cover"
              />
            </div>
            <div className="bg-white text-black p-6 rounded-lg shadow-lg flex-grow">
              <p className="text-lg">
                "I absolutely love Fresh Harvest! The quality of their produce
                is outstanding. It's always fresh, flavorful, and delicious. The
                convenience of ordering online and having it delivered to my
                doorstep saves me so much time. Fresh Harvest has become my
                go-to for all my fruit and vegetable needs."
              </p>
              <p className="mt-4 font-bold">Jane Doe - Professional Chef</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8">
            <div className="flex-shrink-0">
              <Image
                src={customer_one}
                alt="Customer"
                className="rounded-full w-40 h-40 lg:w-48 lg:h-48 object-cover"
              />
            </div>
            <div className="bg-white text-black p-6 rounded-lg shadow-lg flex-grow">
              <p className="text-lg">
                "I absolutely love Fresh Harvest! The quality of their produce
                is outstanding. It's always fresh, flavorful, and delicious. The
                convenience of ordering online and having it delivered to my
                doorstep saves me so much time. Fresh Harvest has become my
                go-to for all my fruit and vegetable needs."
              </p>
              <p className="mt-4 font-bold">Jane Doe - Professional Chef</p>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8">
            <div className="flex-shrink-0">
              <Image
                src={customer_one}
                alt="Customer"
                className="rounded-full w-40 h-40 lg:w-48 lg:h-48 object-cover"
              />
            </div>
            <div className="bg-white text-black p-6 rounded-lg shadow-lg flex-grow">
              <p className="text-lg">
                "I absolutely love Fresh Harvest! The quality of their produce
                is outstanding. It's always fresh, flavorful, and delicious. The
                convenience of ordering online and having it delivered to my
                doorstep saves me so much time. Fresh Harvest has become my
                go-to for all my fruit and vegetable needs."
              </p>
              <p className="mt-4 font-bold">Jane Doe - Professional Chef</p>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8">
            <div className="flex-shrink-0">
              <Image
                src={customer_one}
                alt="Customer"
                className="rounded-full w-40 h-40 lg:w-48 lg:h-48 object-cover"
              />
            </div>
            <div className="bg-white text-black p-6 rounded-lg shadow-lg flex-grow">
              <p className="text-lg">
                "I absolutely love Fresh Harvest! The quality of their produce
                is outstanding. It's always fresh, flavorful, and delicious. The
                convenience of ordering online and having it delivered to my
                doorstep saves me so much time. Fresh Harvest has become my
                go-to for all my fruit and vegetable needs."
              </p>
              <p className="mt-4 font-bold">Jane Doe - Professional Chef</p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
