export default function CustomersPage() {
  return (
    <div>
      <div className="mb-8">
        <h1 className="text-4xl font-bold">
          Customers
        </h1>

        <p className="mt-2 text-gray-500">
          Manage your customers
        </p>
      </div>

      <div className="overflow-hidden rounded-xl bg-white shadow">

        <table className="w-full">

          <thead className="bg-zinc-100">
            <tr>
              <th className="p-4 text-left">Name</th>
              <th className="p-4 text-left">Phone</th>
              <th className="p-4 text-left">Orders</th>
              <th className="p-4 text-left">Total Spent</th>
              <th className="p-4 text-left">Action</th>
            </tr>
          </thead>

          <tbody>

            <tr className="border-t">
              <td className="p-4">Ahmed Mohamed</td>
              <td className="p-4">01012345678</td>
              <td className="p-4">4</td>
              <td className="p-4">2,250 EGP</td>

              <td className="p-4">
                <button className="rounded bg-black px-4 py-2 text-white">
                  View
                </button>
              </td>
            </tr>

            <tr className="border-t">
              <td className="p-4">Omar Ali</td>
              <td className="p-4">01198765432</td>
              <td className="p-4">2</td>
              <td className="p-4">1,150 EGP</td>

              <td className="p-4">
                <button className="rounded bg-black px-4 py-2 text-white">
                  View
                </button>
              </td>
            </tr>

            <tr className="border-t">
              <td className="p-4">Youssef Hassan</td>
              <td className="p-4">01255555555</td>
              <td className="p-4">1</td>
              <td className="p-4">499 EGP</td>

              <td className="p-4">
                <button className="rounded bg-black px-4 py-2 text-white">
                  View
                </button>
              </td>
            </tr>

          </tbody>

        </table>

      </div>
    </div>
  );
}