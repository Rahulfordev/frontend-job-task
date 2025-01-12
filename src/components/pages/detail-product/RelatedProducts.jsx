import Caption from "@/components/common/heading/Caption";
import Title from "@/components/common/heading/Title";
import Description from "@/components/common/heading/Description";
import ProductCard from "@/components/common/product/ProductCard";

export default function RelatedProducts({ products }) {
  return (
    <div className="text-white px-4 lg:pt-[130px] lg:mb-[80px] relative">
      <div className="max-w-[1200px] mx-auto">
        <div className="flex items-center justify-center flex-col">
          <Caption className="mb-3 sm:mb-4">Our Products</Caption>
          <Title className="mb-3">Related products</Title>
          <Description className="mb-4 text-center">
            We pride ourselves on offering a wide variety of fresh and flavorful
            fruits, vegetables, and salad ingredients.
          </Description>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6 font-rubik">
          {products?.map((product) => (
            <ProductCard product={product} key={product.id} />
          ))}
        </div>
      </div>
    </div>
  );
}
