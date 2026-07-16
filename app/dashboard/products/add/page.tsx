"use client";

import { useState } from "react";


export default function AddProduct() {


  const [name,setName] = useState("");
  const [description,setDescription] = useState("");
  const [price,setPrice] = useState("");
  const [oldPrice,setOldPrice] = useState("");
  const [category,setCategory] = useState("");
  const [stock,setStock] = useState("");


  const [image,setImage] = useState("");
  const [images,setImages] = useState<string[]>([]);
  const [video,setVideo] = useState("");


  const [colors,setColors] = useState<string[]>([]);


  const [onSale,setOnSale] = useState(false);
  const [featured,setFeatured] = useState(false);





  async function uploadFile(
    file:File,
    type:"image"|"video"
  ){


    const formData = new FormData();

    formData.append("file",file);



    const res = await fetch("/api/upload",{

      method:"POST",

      body:formData

    });



    const data = await res.json();



    if(type==="image"){


      setImages(prev=>[
        ...prev,
        data.url
      ]);



      if(!image){

        setImage(data.url);

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

        oldPrice,

        category,

        stock,


        image,

        images,

        video,


        colors,


        onSale,

        featured


      })

    });




    if(res.ok){


      alert("Product Added");



      setName("");

      setDescription("");

      setPrice("");

      setOldPrice("");

      setCategory("");

      setStock("");

      setImage("");

      setImages([]);

      setVideo("");

      setColors([]);

      setOnSale(false);

      setFeatured(false);


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
          placeholder="Old Price"
          type="number"
          value={oldPrice}
          onChange={e=>setOldPrice(e.target.value)}
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
          Product Images
        </p>


        <input
          type="file"
          multiple
          accept="image/*"
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




        <div className="flex flex-wrap gap-3">

          {images.map((img,index)=>(

            <img

              key={index}

              src={img}

              className="h-24 w-24 object-cover"

            />

          ))}


        </div>







        <p className="font-bold">
          Colors
        </p>




        <div className="flex flex-wrap gap-3">


          {
          [
            "Black",
            "White",
            "Red",
            "Blue",
            "Green"
          ].map(color=>(


            <label
              key={color}
              className="flex items-center gap-2 border rounded p-2"
            >


              <input

                type="checkbox"

                checked={colors.includes(color)}

                onChange={e=>{


                  if(e.target.checked){


                    setColors([

                      ...colors,

                      color

                    ]);


                  }else{


                    setColors(

                      colors.filter(
                        c=>c!==color
                      )

                    );


                  }


                }}

              />


              {color}


            </label>


          ))

          }


        </div>






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







        <label className="flex gap-2">

          <input

            type="checkbox"

            checked={onSale}

            onChange={e=>setOnSale(e.target.checked)}

          />

          Special Offer

        </label>





        <label className="flex gap-2">

          <input

            type="checkbox"

            checked={featured}

            onChange={e=>setFeatured(e.target.checked)}

          />

          Featured

        </label>






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