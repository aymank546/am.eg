"use client";

import { useState } from "react";


export default function AddProduct() {


  const [name,setName] = useState("");
  const [description,setDescription] = useState("");
  const [price,setPrice] = useState("");
  const [category,setCategory] = useState("");
  const [stock,setStock] = useState("");

  const [image,setImage] = useState("");

  const [images,setImages] = useState<string[]>([]);

  const [video,setVideo] = useState("");



  async function uploadFile(file:File,type:"image"|"video"){


    const formData = new FormData();

    formData.append("file",file);



    const res = await fetch("/api/upload",{

      method:"POST",

      body:formData

    });



    const data = await res.json();



    if(type==="image"){

      if(!image){

        setImage(data.url);

      }else{

        setImages(prev=>[
          ...prev,
          data.url
        ]);

      }

    }



    if(type==="video"){

      setVideo(data.url);

    }


  }




  async function addProduct(){


    const res = await fetch("/api/products",{

      method:"POST",

      headers:{
        "Content-Type":"application/json"
      },


      body:JSON.stringify({

        name,

        description,

        price,

        category,

        stock,

        image,

        video,

        images,

      })

    });



    if(res.ok){


      alert("Product Added");


      setName("");

      setDescription("");

      setPrice("");

      setCategory("");

      setStock("");

      setImage("");

      setImages([]);

      setVideo("");


    }


  }





  return (

    <div className="p-8">


      <h1 className="mb-6 text-3xl font-bold">
        Add Product
      </h1>



      <div className="max-w-md space-y-4">



        <input
          className="w-full border p-3"
          placeholder="Product Name"
          value={name}
          onChange={e=>setName(e.target.value)}
        />



        <textarea
          className="w-full border p-3"
          placeholder="Description"
          value={description}
          onChange={e=>setDescription(e.target.value)}
        />



        <input
          className="w-full border p-3"
          placeholder="Price"
          type="number"
          value={price}
          onChange={e=>setPrice(e.target.value)}
        />



        <input
          className="w-full border p-3"
          placeholder="Category"
          value={category}
          onChange={e=>setCategory(e.target.value)}
        />



        <input
          className="w-full border p-3"
          placeholder="Stock"
          type="number"
          value={stock}
          onChange={e=>setStock(e.target.value)}
        />



        <p className="font-bold">
          Main Image
        </p>


        <input
          type="file"
          className="w-full border p-3"
          onChange={e=>{

            const file=e.target.files?.[0];

            if(file){

              uploadFile(file,"image");

            }

          }}
        />



        <p className="font-bold">
          More Images
        </p>


        <input
          type="file"
          multiple
          className="w-full border p-3"
          onChange={e=>{

            const files=e.target.files;

            if(files){

              Array.from(files).forEach(file=>{

                uploadFile(file,"image");

              });

            }

          }}
        />



        <p className="font-bold">
          Product Video
        </p>


        <input
          type="file"
          accept="video/*"
          className="w-full border p-3"
          onChange={e=>{

            const file=e.target.files?.[0];

            if(file){

              uploadFile(file,"video");

            }

          }}
        />



        {image && (

          <img
            src={image}
            className="h-32 w-32 object-cover"
          />

        )}



        <button

          onClick={addProduct}

          className="bg-black px-6 py-3 text-white"

        >

          Add Product

        </button>


      </div>


    </div>

  );

}