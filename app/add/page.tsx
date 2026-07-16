"use client";

import { useState } from "react";

export default function AddProductPage() {
  const [loading, setLoading] = useState(false);

  async function addProduct() {
    setLoading(true);

    const res = await fetch("/api/products", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: "AM Oversized T-Shirt",
        description: "Premium Cotton Oversized T-Shirt",
        price: 499,
        image: "/products/tshirt.jpg",
        category: "T-Shirts",
        stock: 15,
        featured: true,
      }),
    });

    const data = await res.json();

    console.log(data);

    alert("Product Added Successfully ✅");

    setLoading(false);
  }

  return (
    <div className="flex min-h-screen items-center justify-center">

      <button
        onClick={addProduct}
        disabled={loading}
        className="rounded-xl bg-black px-8 py-4 text-xl text-white"
      >
        {loading ? "Adding..." : "Add Product"}
      </button>

    </div>
  );
}