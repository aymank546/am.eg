import ProductCard from "./ProductCard";

type ProductsProps = {
  products?: any[];
};

export default function Products({ products = [] }: ProductsProps) {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20">

      <div className="mb-12 text-center">

        <p className="text-sm font-semibold uppercase tracking-[6px] text-gray-500">
          AM.eg
        </p>

        <h2 className="mt-3 text-5xl font-extrabold">
          Featured Products
        </h2>

        <p className="mt-4 text-lg text-gray-500">
          Discover our latest premium sportswear collection.
        </p>

      </div>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">

        {products.length > 0 ? (
          products.map((product: any) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))
        ) : (
          <p className="col-span-full text-center text-gray-500">
            No products found
          </p>
        )}

      </div>

    </section>
  );
}