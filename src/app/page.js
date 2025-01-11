import { getCategories } from "@/api/services/categoryService";
import { getProducts } from "@/api/services/productService";
import AboutUs from "@/components/pages/home/AboutUs";
import Header from "@/components/pages/home/Header";
import Products from "@/components/pages/home/Products";
import SeasonalFruitBundle from "@/components/pages/home/SeasonalFruitBundle";

async function Home() {
  const products = await getProducts();
  const categories = await getCategories();

  return (
    <div>
      <Header />
      <Products products={products} categories={categories} />
      <AboutUs />
      <SeasonalFruitBundle />
    </div>
  );
}

export default Home;
