import Link from "next/link";

export default function Hero() {
  return (
    <section className="bg-black text-white">
      <div className="mx-auto flex min-h-[85vh] max-w-7xl items-center px-6">
        <div className="max-w-2xl">
          <p className="mb-3 text-lg uppercase tracking-[8px] text-gray-400">
            AM.eg
          </p>

          <h1 className="mb-6 text-6xl font-extrabold leading-tight">
            BUILT TO
            <br />
            PERFORM
          </h1>

          <p className="mb-10 text-xl text-gray-300">
            Premium Sportswear For Everyday Athletes.
          </p>

          <div className="flex gap-4">
            <Link
              href="/shop"
              className="rounded-lg bg-white px-8 py-4 font-bold text-black transition hover:scale-105"
            >
              Shop Now
            </Link>

            <Link
              href="/shop"
              className="rounded-lg border border-red-500 px-8 py-4 font-bold text-red-500 transition hover:bg-red-500 hover:text-white"
            >
              🔥 Special Offers
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}