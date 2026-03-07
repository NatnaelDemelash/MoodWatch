import { Card } from "@/components/ui/card";
import { Clapperboard, Moon } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
  return (
    <header className="mx-auto max-w-2xl px-4 pt-8">
      <Card className="rounded-lg border border-neutral-200 bg-gray-50 shadow-sm">
        <div className="flex items-center justify-between px-3 py-1">
          <Link
            href="/"
            className="flex items-center gap-1.5 hover:opacity-85 transition-opacity"
          >
            <div className="flex h-6 w-6 items-center justify-center rounded-md bg-neutral-100 text-neutral-700">
              <Clapperboard className="h-3 w-3" strokeWidth={1.8} />
            </div>

            <div className="leading-tight">
              <h2 className="text-xs font-semibold text-neutral-900">
                MoodWatch
              </h2>
              <p className="text-[10px] text-neutral-500">
                Movies for every mood
              </p>
            </div>
          </Link>

          <button
            type="button"
            aria-label="Toggle theme"
            className="flex h-6 w-6 items-center justify-center rounded-md border border-neutral-200 bg-white text-neutral-600 hover:bg-neutral-50"
          >
            <Moon className="h-3 w-3" strokeWidth={1.8} />
          </button>
        </div>
      </Card>
    </header>
  );
}
