import { getCategories } from "@/api/services/categoryService";
import { getProductById, getProducts } from "@/api/services/productService";
import Navbar from "@/components/layout/Navbar";
import ProductDetails from "@/components/pages/detail-product/ProductDetails";
import RelatedProducts from "@/components/pages/detail-product/RelatedProducts";
import React from "react";

async function Page({ params }) {
  const { slug } = params;
  const product = await getProductById(slug);
  const products = await getProducts();
  const category = await getCategories();

  const relatedProducts = products?.data?.filter(
    (item) => item.categoryId === product?.data?.categoryId
  );

  const findCategory = category?.data?.filter(
    (item) => item.id === product?.data?.categoryId
  );

  return (
    <div>
      <Navbar />
      <ProductDetails findCategory={findCategory} product={product} />
      <RelatedProducts products={relatedProducts} />
    </div>
  );
}

export default Page;
