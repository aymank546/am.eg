"use client";

import { useState } from "react";

export default function LoginPage() {

  const [password, setPassword] = useState("");

  async function login() {

    const res = await fetch("/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        password,
      }),
    });

    if (res.ok) {

      localStorage.setItem("admin", "true");

      window.location.href = "/dashboard";

    } else {

      alert("كلمة السر غلط");

    }

  }

  return (

    <main className="flex min-h-screen items-center justify-center bg-gray-100">

      <div className="rounded-xl bg-white p-8 shadow">

        <h1 className="mb-5 text-3xl font-bold">
          Admin Login
        </h1>

        <input
          type="password"
          className="mb-4 border p-3"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          onClick={login}
          className="bg-black px-6 py-3 text-white"
        >
          دخول
        </button>

      </div>

    </main>

  );

}