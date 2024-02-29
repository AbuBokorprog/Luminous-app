import ProductSidebar from "@/components/productCategory/sidebar";

export const metadata = {
  title: "Product | Luminous",
  description: "This is a Cosmetics E-Commerce",
};

const ProductLayout = ({ children }) => {
  return (
    <div className="md:flex gap-5">
      <div className="1/4">
        <ProductSidebar />
      </div>
      <main className="w-full bg-dark-100 dark:bg-gray-900 dark:text-white lg:h-screen rounded-lg p-2 overflow-y-scroll">
        {children}
      </main>
    </div>
  );
};

export default ProductLayout;
