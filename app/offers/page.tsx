import { prisma } from "@/lib/prisma";
import Navbar from "@/components/Navbar";
import ProductCard from "@/components/ProductCard";
import Footer from "@/components/Footer";

export default async function OffersPage() {
  const products = await prisma.product.findMany({
    where: {
      onSale: true,
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  return (
    <main className="min-h-screen bg-gray-100">
      <Navbar />

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="mb-12 text-center">
          <p className="text-sm font-semibold uppercase tracking-[6px] text-red-500">
            AM.eg
          </p>

          <h1 className="mt-3 text-5xl font-extrabold">
            🔥 Special Offers
          </h1>

          <p className="mt-4 text-lg text-gray-500">
            Discover the best deals from AM.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {products.length > 0 ? (
            products.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
              />
            ))
          ) : (
            <p className="col-span-full text-center text-gray-500">
              No offers available.
            </p>
          )}
        </div>
      </section>

      <Footer />
    </main>
  );
}