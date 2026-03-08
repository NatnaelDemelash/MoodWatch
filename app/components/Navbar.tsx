import { Clapperboard } from 'lucide-react';
import Link from 'next/link';

export default function Navbar() {
  return (
    <header className="mx-auto max-w-2xl px-4 pt-8">
      <div className="flex items-center justify-between">
        <Link
          href="/"
          className="flex items-center gap-2 text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white transition-colors"
        >
          <Clapperboard className="h-4 w-4" strokeWidth={1.5} />
          <span className="text-sm font-medium">MoodWatch</span>
        </Link>

        <button
          type="button"
          aria-label="Toggle theme"
          className="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 transition-colors"
        >
          <svg
            className="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
            />
          </svg>
        </button>
      </div>
    </header>
  );
}
