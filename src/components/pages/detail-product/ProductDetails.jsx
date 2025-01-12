"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { useRef, useState } from "react";
import Title from "@/components/common/heading/Title";
import Caption from "@/components/common/heading/Caption";
import { FaStar, FaHeart } from "react-icons/fa";
import { AiOutlineShoppingCart } from "react-icons/ai";

export default function ProductDetails({ findCategory, product }) {
  const { data } = product;
  const paginationRef = useRef(null);

  const [quantity, setQuantity] = useState(1);

  const [activeTab, setActiveTab] = useState("description");

  const incrementQuantity = () => setQuantity((prev) => prev + 1);
  const decrementQuantity = () =>
    setQuantity((prev) => (prev > 1 ? prev - 1 : prev));

  return (
    <div className="text-white flex justify-center items-center px-4 py-8">
      <div className="max-w-[1200px] mx-auto w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Image Section */}
          <div>
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
              spaceBetween={20}
              slidesPerView={1}
              loop={true}
            >
              {data.images.map((image, index) => (
                <SwiperSlide key={index}>
                  <div className="border rounded-xl overflow-hidden">
                    <img
                      src={image}
                      alt={`Slide ${index + 1}`}
                      width={566}
                      height={566}
                      className="w-full h-auto object-cover"
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            <div
              ref={paginationRef}
              className="swiper-pagination mt-6 flex justify-center w-full"
            />
          </div>

          <div>
            {findCategory?.map((category) => (
              <Caption key={category.id} className="mb-2">
                {category.categoryName}
              </Caption>
            ))}
            <Title>{data.productName}</Title>
            <div className="flex items-center gap-x-1 text-yellow my-2 sm:my-4">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <p className="text-lg font-medium text-primary">
                5.0 <span className="text-sm">{"(1 review)"}</span>
              </p>
            </div>
            <div className="text-2xl text-orange sm:text-[32px] font-semibold">
              ${data.price}/kg
            </div>
            <p className="text-secondary text-sm sm:text-lg font-questrial mt-2 mb-8 sm:mb-16">
              {data.description}
            </p>

            {/* Quantity Section */}
            <div className="flex items-center space-x-4 mb-6">
              <label
                htmlFor="quantity"
                className="text-lg font-medium text-primary"
              >
                Quantity
              </label>
              <div className="flex items-center border border-gray-600 rounded-md">
                <button
                  className="px-3 py-2 text-gray-400"
                  onClick={decrementQuantity}
                >
                  -
                </button>
                <input
                  id="quantity"
                  type="number"
                  value={quantity}
                  readOnly
                  className="w-12 text-center bg-white outline-none text-primary border-none focus:ring-0"
                />
                <button
                  className="px-3 py-2 text-gray-400"
                  onClick={incrementQuantity}
                >
                  +
                </button>
              </div>
              <span className="text-gray-400">/kg</span>
            </div>

            <div className="flex flex-wrap gap-4">
              <button className="bg-grayBackground text-secondary flex items-center gap-x-2 justify-center w-full sm:w-auto text-lg font-semibold py-4 px-6 rounded-lg">
                <FaHeart className="text-grayMedium" /> Save as favorite
              </button>
              <button className="bg-orange text-white flex items-center border border-orange gap-x-2 justify-center w-full sm:w-auto text-lg font-semibold py-4 px-6 rounded-lg hover:bg-white hover:text-orange hover:border hover:border-grayMedium transition duration-300">
                <AiOutlineShoppingCart className="text-white" /> Add to cart
              </button>
            </div>
          </div>
        </div>

        {/* Description and Reviews Section */}
        <div className="mt-6">
          <div className="flex items-center gap-x-4 mb-5">
            <button
              className={`${
                activeTab === "description"
                  ? "bg-accent border-b-2 text-white"
                  : "text-[#A6A6A6] border border-grayMedium"
              } font-normal text-lg rounded-lg py-3 px-6`}
              onClick={() => setActiveTab("description")}
            >
              Description
            </button>
            <button
              className={`${
                activeTab === "reviews"
                  ? "bg-accent border-b-2 text-white"
                  : "text-[#A6A6A6] border border-grayMedium"
              } font-normal text-lg rounded-lg py-3 px-6`}
              onClick={() => setActiveTab("reviews")}
            >
              Reviews (1)
            </button>
          </div>

          {/* Content for Active Tab */}
          {activeTab === "description" ? (
            <div className="text-secondary bg-grayBackground p-5 sm:px-10 sm:py-8 rounded-3xl text-sm sm:text-lg font-questrial">
              <p className="mb-2">
                Our coconuts are sustainably grown, ensuring the best quality
                and taste. Each coconut is handpicked and carefully prepared,
                offering you the freshest product possible. Rich in healthy
                fats, electrolytes, and essential nutrients, coconuts provide
                both hydration and nourishment. Whether you’re using the water,
                flesh, or milk, our coconuts bring versatility to your kitchen
                while supporting healthy living.
              </p>
              <p>
                Perfect for smoothies, desserts, curries, and more — let the
                natural sweetness of the coconut elevate your recipes. Enjoy the
                tropical goodness in its purest form, directly from nature.
              </p>
            </div>
          ) : (
            <div className="text-secondary bg-grayBackground p-5 sm:px-10 sm:py-8 rounded-3xl text-sm sm:text-lg font-questrial">
              <p className="text-center">
                This is a placeholder for reviews. Add your reviews here!
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
