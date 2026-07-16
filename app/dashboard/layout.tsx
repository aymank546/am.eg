"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect } from "react";


export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {


  const router = useRouter();


  useEffect(() => {

    const admin = localStorage.getItem("admin");

    if(!admin){
      router.push("/login");
    }

  }, [router]);



  return (

    <div className="flex min-h-screen bg-gray-100">


      {/* Sidebar */}

      <aside className="w-64 bg-black p-6 text-white">


        <h1 className="mb-10 text-3xl font-bold">
          AM Dashboard
        </h1>



        <nav className="space-y-4">


          <Link
            href="/dashboard"
            className="block"
          >
            Dashboard
          </Link>



          <Link
            href="/dashboard/products"
            className="block"
          >
            Products
          </Link>



          <Link
            href="/dashboard/products/add"
            className="block"
          >
            Add Product
          </Link>



          <Link
            href="/dashboard/orders"
            className="block"
          >
            Orders
          </Link>



        </nav>


      </aside>





      {/* Content */}

      <main className="flex-1 p-8">

        {children}

      </main>



    </div>

  );

}