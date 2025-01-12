import Link from "next/link";
import React from "react";

const ProductCard = ({ product }) => {
  return (
    <Link
      href={`/detail-products/${product.id}`}
      className="bg-white px-[6px] sm:px-3 pb-2 sm:pb-[20px] pt-[6px] sm:pt-[10px] text-black rounded-[20px] shadow-md overflow-hidden"
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
    </Link>
  );
};

export default ProductCard;
