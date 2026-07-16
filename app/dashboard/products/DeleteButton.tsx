"use client";

export default function DeleteButton({ id }: { id: number }) {


  async function removeProduct() {

    const confirmDelete = confirm(
      "Delete this product?"
    );

    if (!confirmDelete) return;


    const res = await fetch(`/api/products/${id}`, {
      method: "DELETE",
    });


    const data = await res.json();

    console.log("DELETE RESPONSE:", data);


    if (res.ok) {

      alert("Deleted Successfully");

      window.location.reload();

    } else {

      alert("Delete Failed");

    }

  }


  return (

    <button
      onClick={removeProduct}
      className="bg-red-600 text-white px-4 py-2"
    >
      Delete
    </button>

  );
}