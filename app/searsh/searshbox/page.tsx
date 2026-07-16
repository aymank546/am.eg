"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";


export default function SearchBox(){

 const [q,setQ]=useState("");

 const router=useRouter();


 function search(){

   router.push(`/search?q=${q}`);

 }


 return (

  <div className="mb-8 flex gap-3">

   <input
    className="w-full rounded border p-3"
    placeholder="Search products..."
    value={q}
    onChange={(e)=>setQ(e.target.value)}
   />


   <button
    onClick={search}
    className="rounded bg-black px-6 text-white"
   >
    Search
   </button>


  </div>

 );

}