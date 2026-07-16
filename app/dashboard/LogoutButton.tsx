"use client";


import { useRouter } from "next/navigation";


export default function LogoutButton(){


  const router = useRouter();



  function logout(){


    document.cookie =
    "admin=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/";


    router.push("/login");


  }



  return (

    <button

      onClick={logout}

      className="rounded bg-red-600 px-4 py-2 text-white"

    >

      Logout

    </button>

  );

}