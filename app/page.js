"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Page() {
  const router = useRouter();
  const [date, setDate] = useState("");

  const handleNext = () => {
    if (!date) return alert("Please choose a date!");
    router.push(`/place?date=${encodeURIComponent(date)}`);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-pink-100 p-6">
      <div className="bg-white p-8 rounded-2xl shadow-xl text-center w-full max-w-md">
        <h1 className="text-3xl font-bold text-black mb-4">
          Will you go on a date with me?
        </h1>

        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="w-full p-3 border rounded-xl mt-4 text-black"
        />

        <div className="flex gap-6 justify-center mt-6">
          <button
            onClick={handleNext}
            className="bg-pink-500 hover:bg-pink-600 text-white px-6 py-3 rounded-xl font-semibold"
          >
            Yes
          </button>

          <button
            onClick={() => alert("No is not allowed 😤")}
            className="bg-gray-300 hover:bg-gray-400 text-black px-6 py-3 rounded-xl font-semibold"
          >
            No
          </button>
        </div>
      </div>
    </div>
  );
}
