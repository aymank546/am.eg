"use client";

import { useRouter } from "next/navigation";


export default function StatusButton({
  id,
  status,
}: {
  id: number;
  status: string;
}) {


  const router = useRouter();



  async function changeStatus() {


    let nextStatus = "";


    if (status === "Pending") {

      nextStatus = "Shipped";

    } else if (status === "Shipped") {

      nextStatus = "Delivered";

    } else {

      return;

    }



    await fetch(`/api/orders/${id}`, {

      method: "PATCH",

      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({
        status: nextStatus,
      }),

    });



    router.refresh();

  }





  return (

    <button

      onClick={changeStatus}

      className="rounded bg-black px-4 py-2 text-white"

    >

      {status === "Pending"
        ? "Ship Order"
        : status === "Shipped"
        ? "Mark Delivered"
        : "Completed"}

    </button>

  );

}