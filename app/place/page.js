"use client";
import { useRouter, useSearchParams } from "next/navigation";

export default function PlacePage() {
  const router = useRouter();
  const params = useSearchParams();
  const date = params.get("date");

  const next = (place) => {
    router.push(
      `/food?place=${encodeURIComponent(place)}&date=${encodeURIComponent(
        date
      )}`
    );
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-pink-100 p-6">
      <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md text-center">
        <h1 className="text-3xl font-bold text-black mb-4">
          Where should we go?
        </h1>

        <div className="flex flex-col gap-4 mt-6">
          {["Restaurant", "Cat cafe", "Cafe"].map((p) => (
            <button
              key={p}
              onClick={() => next(p)}
              className="bg-purple-200 hover:bg-white text-black py-3 rounded-xl font-semibold"
            >
              {p}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
