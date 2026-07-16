"use client";

import { useState } from "react";

type Product = {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  stock: number;
  featured: boolean;
  createdAt: Date;
};

export default function EditProductForm({ product }: { product: Product }) {

  const [name, setName] = useState(product.name);
  const [price, setPrice] = useState(product.price);
  const [stock, setStock] = useState(product.stock);
  const [description, setDescription] = useState(product.description);


  async function handleUpdate(){

    await fetch(`/api/products/${product.id}`,{
      method:"PUT",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify({
        name,
        price,
        stock,
        description
      })
    });

    alert("Product Updated");
  }


  return (
    <div className="space-y-4 max-w-md">

      <input
        className="border p-3 w-full"
        value={name}
        onChange={(e)=>setName(e.target.value)}
      />

      <input
        className="border p-3 w-full"
        type="number"
        value={price}
        onChange={(e)=>setPrice(Number(e.target.value))}
      />

      <input
        className="border p-3 w-full"
        type="number"
        value={stock}
        onChange={(e)=>setStock(Number(e.target.value))}
      />

      <textarea
        className="border p-3 w-full"
        value={description}
        onChange={(e)=>setDescription(e.target.value)}
      />

      <button
        onClick={handleUpdate}
        className="bg-black text-white px-6 py-3"
      >
        Save Changes
      </button>

    </div>
  );
}