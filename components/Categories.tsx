import Link from "next/link";

const categories = [
  {
    name: "T-Shirts",
    icon: "👕",
    href: "/shop?category=tshirts",
  },
  {
    name: "Shoes",
    icon: "👟",
    href: "/shop?category=shoes",
  },
  {
    name: "Shorts",
    icon: "🩳",
    href: "/shop?category=shorts",
  },
  {
    name: "Hoodies",
    icon: "🧥",
    href: "/shop?category=hoodies",
  },
  {
    name: "Socks",
    icon: "🧦",
    href: "/shop?category=socks",
  },
  {
    name: "Pants",
    icon: "👖",
    href: "/shop?category=pants",
  },
];

export default function Categories() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20">

      <div className="mb-12 text-center">

        <h2 className="text-4xl font-bold">
          Shop By Category
        </h2>

        <p className="mt-3 text-gray-500">
          Find everything you need for your lifestyle.
        </p>

      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

        {categories.map((category) => (

          <Link
            key={category.name}
            href={category.href}
            className="group rounded-2xl border bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl"
          >

            <div className="text-6xl">
              {category.icon}
            </div>

            <h3 className="mt-6 text-2xl font-bold">
              {category.name}
            </h3>

            <p className="mt-2 text-gray-500">
              Explore our {category.name.toLowerCase()} collection.
            </p>

          </Link>

        ))}

      </div>

    </section>
  );
}