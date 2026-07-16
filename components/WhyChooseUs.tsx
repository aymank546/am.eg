export default function WhyChooseUs() {
  return (
    <section className="bg-black py-20 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="mb-12 text-center text-4xl font-bold">
          Why Choose AM Store
        </h2>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="text-center">
            <h3 className="text-2xl font-bold">Premium Quality</h3>
          </div>

          <div className="text-center">
            <h3 className="text-2xl font-bold">Fast Shipping</h3>
          </div>

          <div className="text-center">
            <h3 className="text-2xl font-bold">Cash On Delivery</h3>
          </div>

          <div className="text-center">
            <h3 className="text-2xl font-bold">Easy Returns</h3>
          </div>
        </div>
      </div>
    </section>
  );
}