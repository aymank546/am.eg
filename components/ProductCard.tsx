import Link from "next/link";
import Image from "next/image";

type Props = {
  product: {
    id: number;
    name: string;
    description: string;
    price: number;
    image: string;
  };
};

export default function ProductCard({ product }: Props) {
  return (
    <div className="group overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">

      {/* Image */}
      <div className="relative h-80 overflow-hidden bg-gray-100">

        {product.image ? (
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover transition duration-500 group-hover:scale-110"
          />
        ) : (
          <div className="flex h-full items-center justify-center text-gray-400">
            No Image
          </div>
        )}

        {/* Badge */}
        <span className="absolute left-4 top-4 rounded-full bg-black px-4 py-1 text-xs font-bold text-white">
          NEW
        </span>

      </div>

      {/* Content */}
      <div className="p-6">

        <h3 className="truncate text-2xl font-bold">
          {product.name}
        </h3>

        <p className="mt-3 line-clamp-2 text-gray-500">
          {product.description}
        </p>

        <div className="mt-6 flex items-center justify-between">

          <span className="text-3xl font-extrabold">
            {product.price} EGP
          </span>

          <Link
            href={`/product/${product.id}`}
            className="rounded-lg bg-black px-5 py-3 font-semibold text-white transition hover:bg-zinc-800"
          >
            View
          </Link>

        </div>

      </div>

    </div>
  );
}