export default function SettingsPage() {
  return (
    <div>

      <div className="mb-8">
        <h1 className="text-4xl font-bold">
          Settings
        </h1>

        <p className="mt-2 text-gray-500">
          Manage your store settings
        </p>
      </div>

      <div className="rounded-xl bg-white p-8 shadow">

        <div className="mb-6">
          <label className="mb-2 block font-semibold">
            Store Name
          </label>

          <input
            type="text"
            defaultValue="AM Store"
            className="w-full rounded-lg border p-3"
          />
        </div>

        <div className="mb-6">
          <label className="mb-2 block font-semibold">
            Store Email
          </label>

          <input
            type="email"
            placeholder="store@email.com"
            className="w-full rounded-lg border p-3"
          />
        </div>

        <div className="mb-6">
          <label className="mb-2 block font-semibold">
            Phone Number
          </label>

          <input
            type="text"
            placeholder="01000000000"
            className="w-full rounded-lg border p-3"
          />
        </div>

        <div className="mb-6">
          <label className="mb-2 block font-semibold">
            Store Address
          </label>

          <textarea
            rows={4}
            className="w-full rounded-lg border p-3"
          />
        </div>

        <div className="mb-6">
          <label className="mb-2 block font-semibold">
            Facebook
          </label>

          <input
            type="text"
            placeholder="Facebook Link"
            className="w-full rounded-lg border p-3"
          />
        </div>

        <div className="mb-6">
          <label className="mb-2 block font-semibold">
            Instagram
          </label>

          <input
            type="text"
            placeholder="Instagram Link"
            className="w-full rounded-lg border p-3"
          />
        </div>

        <button className="w-full rounded-lg bg-black py-4 text-xl font-bold text-white hover:bg-zinc-800">
          Save Settings
        </button>

      </div>

    </div>
  );
}