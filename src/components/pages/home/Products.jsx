"use client";
import Caption from "@/components/common/heading/Caption";
import leat_bottom from "../../../../public/images/left_hero_bottom.png";
import Image from "next/image";
import { useEffect, useState } from "react";
import Title from "@/components/common/heading/Title";
import Description from "@/components/common/heading/Description";

export default function Products({ products, categories }) {
  const [categoriesData, setCategoriesData] = useState([]);
  const [productsData, setProductsData] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState(products?.data);
  const [activeCategory, setActiveCategory] = useState("All");

  useEffect(() => {
    const categoryList = categories?.data || [];
    const productList = products?.data || [];

    setCategoriesData([{ id: "All", categoryName: "All" }, ...categoryList]);
    setProductsData(productList);
    setFilteredProducts(productList);
  }, [categories, products]);

  // Filter Products by Category
  const handleCategoryClick = (categoryId) => {
    setActiveCategory(categoryId);
    if (categoryId === "All") {
      setFilteredProducts(productsData);
    } else {
      setFilteredProducts(
        productsData.filter((product) => product.categoryId === categoryId)
      );
    }
  };

  return (
    <div className="text-white px-4 lg:pt-[130px] lg:mb-[80px] relative">
      <div className="max-w-[1200px] mx-auto">
        <div className="flex items-center justify-center flex-col">
          <Caption className="mb-3 sm:mb-4">Our Products</Caption>
          <Title className="mb-3">Our Fresh Products</Title>
          <Description className="mb-4 text-center">
            We pride ourselves on offering a wide variety of fresh and flavorful
            fruits, vegetables, and salad ingredients.
          </Description>
        </div>
        {/* Category Filter */}
        <div className="flex justify-center gap-x-3 md:gap-x-5 mb-6 sm:mb-8">
          {categoriesData.map((category) => (
            <button
              key={category.id}
              className={`px-4 sm:px-6 py-2 sm:py-3 rounded-lg text-xs sm:text-lg font-normal font-rubik ${
                activeCategory === category.id
                  ? "bg-accent text-white"
                  : "border border-grayMedium text-[#A6A6A6]"
              }`}
              onClick={() => handleCategoryClick(category.id)}
            >
              {category.categoryName}
            </button>
          ))}
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6 font-rubik">
          {filteredProducts?.map((product) => (
            <div
              key={product.id}
              className="bg-white px-[6px] sm:px-3 pb-2 sm:pb-[20px] pt-[6px] sm:pt-[10px] border border-red-700 text-black rounded-[20px] shadow-lg overflow-hidden"
            >
              <div className="bg-grayBackground rounded-2xl w-[149px] sm:w-[258px] h-[119px] sm:h-[206px] flex items-center justify-center overflow-hidden">
                {product.images[0] && (
                  <img
                    src={product.images[0]}
                    alt={product.productName}
                    className="object-cover w-full h-full"
                  />
                )}
              </div>

              <div className="text-center">
                <h3 className="font-medium text-xs sm:text-lg text-primary mt-3 mb-2">
                  {product.productName}
                </h3>
                <p className="text-grayDark font-questrial text-xs sm:text-lg mb-3">
                  ${product.price}/kg
                </p>
                <button className="w-full py-[6px] sm:py-3 border border-grayMedium text-xs sm:text-lg font-normal text-primary rounded-lg hover:bg-orange hover:text-white transition duration-300">
                  Add to cart
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* See All Products Button */}
        <div className="text-center mt-6 sm:mt-8">
          <button className="px-8 py-3 text-orange text-sm sm:text-lg border border-orange rounded-lg">
            See All Products
          </button>
        </div>
      </div>
      <div className="absolute top-36 left-24">
        <Image src={leat_bottom} alt="Leaf" />
      </div>
      <div className="absolute top-28 right-24">
        <Image src={leat_bottom} alt="Leaf" />
      </div>
    </div>
  );
}
