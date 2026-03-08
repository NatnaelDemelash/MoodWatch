import { Clapperboard } from 'lucide-react';
import Link from 'next/link';

export default function Navbar() {
  return (
    <header className="mx-auto max-w-2xl px-4 pt-8">
      <div className="bg-white/80 backdrop-blur-sm rounded-xl border border-gray-200 shadow-sm px-4 py-2">
        <Link
          href="/"
          className="flex items-center gap-2 text-gray-700 hover:text-gray-900 transition-colors"
        >
          <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-gray-100">
            <Clapperboard className="h-4 w-4" strokeWidth={1.8} />
          </div>
          <span className="text-sm font-medium">MoodWatch</span>
        </Link>
      </div>
    </header>
  );
}
