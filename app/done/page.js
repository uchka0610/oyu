// app/done/page.js
"use client";

import { Suspense } from "react";
import { useSearchParams } from "next/navigation";

function DoneContent() {
  const params = useSearchParams();
  const date = params.get("date");
  const place = params.get("place");
  const food = params.get("food");

  return (
    <div className="min-h-screen flex items-center justify-center bg-pink-100 p-6">
      <div className="bg-white p-8 rounded-2xl shadow-xl text-center w-full max-w-md">
        <img
          src="/heart.webp"
          alt="Heart"
          className="mx-auto mb-4 w-32 h-32 object-contain"
        />
        <h1 className="text-3xl font-bold text-black mb-4">Perfect!</h1>
        <p className="text-black text-lg mt-2">
          📅 <b>Date:</b> {date}
        </p>
        <p className="text-black text-lg mt-2">
          📍 <b>Place:</b> {place}
        </p>
        <p className="text-black text-lg mt-2">
          🍽️ <b>Food:</b> {food}
        </p>
        <p className="mt-6 text-black text-xl font-semibold">
          Can't wait to go with you!
        </p>
      </div>
    </div>
  );
}

export default function DonePage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen flex items-center justify-center bg-pink-100">
          <div className="text-black text-xl">Loading...</div>
        </div>
      }
    >
      <DoneContent />
    </Suspense>
  );
}
