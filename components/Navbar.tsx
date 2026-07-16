import Link from "next/link";


export default function Navbar(){

  return (

    <nav className="border-b bg-white">


      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">



        <Link
          href="/"
          className="text-4xl font-black tracking-widest"
        >
          AM
        </Link>





        <div className="hidden gap-8 md:flex">


          <Link href="/">
            Home
          </Link>



          <Link href="/shop">
            Shop
          </Link>




          <Link 
            href="/offers"
            className="text-red-500 font-bold"
          >
            🔥 Special Offers
          </Link>




          <Link href="/categories">
            Categories
          </Link>



        </div>







        <div className="flex items-center gap-5">



          <Link
            href="/search"
            className="text-2xl"
          >
            🔍
          </Link>




          <Link
            href="/cart"
            className="text-2xl"
          >
            🛒
          </Link>




          <Link
            href="/dashboard"
            className="hidden rounded bg-black px-5 py-2 text-white md:block"
          >
            Dashboard
          </Link>




        </div>



      </div>


    </nav>

  );

}