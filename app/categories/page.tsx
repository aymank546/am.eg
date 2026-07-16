import Link from "next/link";


const categories = [

  {
    name: "هودي",
    image: "🧥",
  },

  {
    name: "تيشيرت",
    image: "👕",
  },

  {
    name: "شورت",
    image: "🩳",
  },

  {
    name: "ترينج",
    image: "🥋",
  },

  {
    name: "بنطلون",
    image: "👖",
  },

  {
    name: "اكسسوارات",
    image: "🧢",
  },

];



export default function CategoriesPage(){


  return (

    <main className="min-h-screen bg-gray-100 p-8">


      <div className="mx-auto max-w-7xl">


        <h1 className="mb-10 text-5xl font-bold">
          التصنيفات
        </h1>



        <div className="grid gap-6 md:grid-cols-3">


          {categories.map((category)=>(


            <Link

              key={category.name}

              href={`/shop?category=${category.name}`}

              className="rounded-2xl bg-white p-10 text-center shadow transition hover:scale-105"

            >


              <div className="text-6xl">
                {category.image}
              </div>


              <h2 className="mt-5 text-2xl font-bold">
                {category.name}
              </h2>


            </Link>


          ))}


        </div>


      </div>


    </main>

  );

}