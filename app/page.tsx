import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Categories from "@/components/Categories";
import Products from "@/components/Products";
import WhyChooseUs from "@/components/WhyChooseUs";
import Footer from "@/components/Footer";
import { prisma } from "@/lib/prisma";

export default async function Home() {
  const products = await prisma.product.findMany({
    orderBy: {
      createdAt: "desc",
    },
    take: 8,
  });

  return (
    <main className="min-h-screen bg-gray-100">
      <Navbar />

      <Hero />

      <Categories />

      <Products products={products} />

      <WhyChooseUs />

      <Footer />
    </main>
  );
}