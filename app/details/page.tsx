"use client";

import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";

export default function Detail() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const mood = searchParams.get("mood");

  return (
    <section className="bg-gray-100 min-h-screen flex items-center">
      <div className="max-w-3xl w-full mx-auto px-6 flex flex-col space-y-6">
        <Button
          variant="ghost"
          className="self-start flex items-center gap-2 cursor-pointer"
          onClick={() => router.push("/")}
        >
          <ArrowLeft className="size-4" />
          Back to Select Mood
        </Button>

        <div className="text-center space-y-2">
          <p className="text-sm text-gray-500">
            Selected mood:{" "}
            <span className="font-medium text-gray-700">{mood}</span>
          </p>

          <h2 className="text-2xl font-semibold text-gray-800">
            Tell Me About How You Feel
          </h2>
        </div>

        <textarea
          placeholder="Write about what’s making you feel this way..."
          className="w-full h-44 p-4 rounded-xl border-2 border-gray-300 bg-gray-100
          focus:outline-none focus:ring-2 focus:ring-black/10
          shadow-sm resize-none text-sm leading-relaxed"
        />

        <Button className="w-1/2 mx-auto bg-[#333] hover:bg-[#222] cursor-pointer">
          Find My Films <ArrowRight />
        </Button>
      </div>
    </section>
  );
}
