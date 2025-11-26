"use client";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState, Suspense } from "react";

function FoodContent() {
  const router = useRouter();
  const params = useSearchParams();

  const [place, setPlace] = useState("");
  const [date, setDate] = useState("");

  // Wait for router query params to load
  useEffect(() => {
    setPlace(params.get("place") || "");
    setDate(params.get("date") || "");
  }, [params]);

  const finish = (food) => {
    router.push(
      `/done?place=${encodeURIComponent(place)}&date=${encodeURIComponent(
        date
      )}&food=${encodeURIComponent(food)}`
    );
  };

  if (!place || !date) return null; // wait until query is ready

  return (
    <div className="min-h-screen flex items-center justify-center bg-pink-100 p-6">
      <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md text-center">
        <h1 className="text-3xl font-bold text-black mb-4">
          What should we eat?
        </h1>

        <div className="flex flex-col gap-4 mt-6">
          {["Pizza", "Carbonara", "Anything"].map((f) => (
            <button
              key={f}
              onClick={() => finish(f)}
              className="bg-purple-200 hover:bg-white text-black py-3 rounded-xl font-semibold"
            >
              {f}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function FoodPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen flex items-center justify-center bg-pink-100">
          <div className="text-black text-xl">Loading...</div>
        </div>
      }
    >
      <FoodContent />
    </Suspense>
  );
}
