"use client";


import { useState } from "react";
import { useRouter } from "next/navigation";


export default function EditProductForm({
  product,
}:{
  product:any;
}) {


  const router = useRouter();



  const [name,setName] = useState(product.name);
  const [description,setDescription] = useState(product.description);
  const [price,setPrice] = useState(product.price);
  const [category,setCategory] = useState(product.category);
  const [stock,setStock] = useState(product.stock);
  const [image,setImage] = useState(product.image);



  async function updateProduct(){


    await fetch(`/api/products/${product.id}`,{

      method:"PUT",

      headers:{
        "Content-Type":"application/json",
      },


      body:JSON.stringify({

        name,
        description,
        price,
        category,
        stock,
        image,

      }),

    });



    router.push("/dashboard/products");

    router.refresh();


  }




  return (

    <div className="space-y-4">


      <input
        className="w-full rounded border p-3"
        value={name}
        onChange={(e)=>setName(e.target.value)}
        placeholder="Name"
      />



      <textarea
        className="w-full rounded border p-3"
        value={description}
        onChange={(e)=>setDescription(e.target.value)}
        placeholder="Description"
      />



      <input
        className="w-full rounded border p-3"
        value={price}
        onChange={(e)=>setPrice(Number(e.target.value))}
        placeholder="Price"
      />



      <input
        className="w-full rounded border p-3"
        value={category}
        onChange={(e)=>setCategory(e.target.value)}
        placeholder="Category"
      />



      <input
        className="w-full rounded border p-3"
        value={stock}
        onChange={(e)=>setStock(Number(e.target.value))}
        placeholder="Stock"
      />



      <input
        className="w-full rounded border p-3"
        value={image}
        onChange={(e)=>setImage(e.target.value)}
        placeholder="Image URL"
      />



      <button
        onClick={updateProduct}
        className="rounded bg-black px-8 py-3 text-white"
      >
        Update Product
      </button>


    </div>

  );

}