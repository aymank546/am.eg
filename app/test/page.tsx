import { prisma } from "@/lib/prisma";

export default async function TestPage() {
  const products = await prisma.product.findMany();

  return (
    <div className="p-10">
      <h1 className="mb-6 text-4xl font-bold">
        Database Test
      </h1>

      <pre>{JSON.stringify(products, null, 2)}</pre>
    </div>
  );
}