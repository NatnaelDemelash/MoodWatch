"use client";

import Navbar from "./components/Navbar";

import {
  Activity,
  BatteryLow,
  CloudRain,
  Flame,
  Orbit,
  PartyPopper,
  Rocket,
  Sparkles,
} from "lucide-react";
import { useRouter } from "next/navigation";

export default function Home() {
  const moods = [
    { icon: BatteryLow, label: "Exhausted" },
    { icon: CloudRain, label: "Sad" },
    { icon: Rocket, label: "Motivated" },
    { icon: PartyPopper, label: "Playful" },
    { icon: Activity, label: "Anxious" },
    { icon: Sparkles, label: "Excited" },
    { icon: Flame, label: "Angry" },
    { icon: Orbit, label: "Weird" },
  ];

  const router = useRouter();

  const onSelecteMood = (mood: String) => {
    router.push(`/details?mood=${mood}`);
  };

  return (
    <div className="min-h-screen bg-linear-to-b from-neutral-100 via-white to-neutral-300">
      <Navbar />

      <main className="mx-auto max-w-2xl px-4 py-10 sm:px-6 lg:px-8">
        <section className="">
          <div className="mx-auto mb-10 max-w-2xl text-center">
            <div className="mb-3 inline-flex items-center rounded-full border border-neutral-200 bg-neutral-50 px-3 py-1 text-xs font-medium text-neutral-500">
              Mood-based movie picker
            </div>

            <h1 className="text-3xl  tracking-tight text-neutral-900 sm:text-4xl">
              Find a film that matches your mood
            </h1>

            <p className="mt-3 text-sm leading-6 text-neutral-500 sm:text-base">
              Pick how you feel right now and get a movie recommendation that
              fits your vibe.
            </p>
          </div>

          <div className="grid grid-cols-3 gap-2.5">
            {moods.map((mood) => {
              const Icon = mood.icon;

              return (
                <button
                  key={mood.label}
                  className="group flex flex-col items-center justify-center rounded-xl border border-neutral-200 bg-white px-2 py-3 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-neutral-300 hover:shadow-md"
                  onClick={() => onSelecteMood(mood.label)}
                >
                  <div className="mb-1.5 flex h-11 w-11 items-center justify-center rounded-full bg-neutral-100">
                    <Icon className="h-4 w-4" strokeWidth={2} />
                  </div>
                  <span className="text-xs font-medium text-neutral-600">
                    {mood.label}
                  </span>
                </button>
              );
            })}
          </div>
        </section>
      </main>
    </div>
  );
}
