"use client";
import Caption from "@/components/common/heading/Caption";
import leat_bottom from "../../../../public/images/left_hero_bottom.png";
import Image from "next/image";
import { useEffect, useState } from "react";
import Title from "@/components/common/heading/Title";
import Description from "@/components/common/heading/Description";
import Link from "next/link";
import ProductCard from "@/components/common/product/ProductCard";

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
    <div className="text-white px-4 pt-20 lg:pt-[130px] lg:mb-[80px] relative max-w-[1200px] mx-auto">
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
            <ProductCard product={product} key={product.id} />
          ))}
        </div>

        {/* See All Products Button */}
        <div className="text-center mt-6 sm:mt-8">
          <button className="px-8 py-3 text-orange text-sm sm:text-lg border border-orange rounded-lg hover:bg-orange hover:text-white transition duration-300">
            See All Products
          </button>
        </div>
      </div>
      <div className="absolute top-12 sm:top-36 left-0 sm:left-24">
        <Image src={leat_bottom} alt="Leaf" />
      </div>
      <div className="absolute top-12 sm:top-28 right-0 sm:right-24">
        <Image src={leat_bottom} alt="Leaf" />
      </div>
    </div>
  );
}
