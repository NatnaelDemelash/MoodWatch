'use client';

import { Button } from '@/components/ui/button';
import { ArrowLeft, ArrowRight, Sparkles, Loader2 } from 'lucide-react';
import { useRouter, useSearchParams } from 'next/navigation';
import { useState } from 'react';

export default function Detail() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const mood = searchParams.get('mood');
  const [moodDescribe, setMoodDescribe] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async () => {
    setIsLoading(true);

    try {
      const res = await fetch('/api/recommend', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ mood: mood, description: moodDescribe }),
      });

      const data = await res.json();
      localStorage.setItem(
        'recommendations',
        JSON.stringify(data.recommendations),
      );
      router.push('/result');
    } catch (error) {
      console.error('Error:', error);
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <main className="mx-auto max-w-2xl px-4 py-16 sm:px-6 lg:px-8">
        {/* Back Button */}
        <button
          onClick={() => router.push('/')}
          className="group mb-8 inline-flex items-center gap-1.5 text-sm text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 transition-colors"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" />
          Back to moods
        </button>

        {/* Header */}
        <div className="text-center mb-8">
          {/* Mood pill */}
          <div className="inline-flex items-center gap-2 rounded-full border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 px-3 py-1 text-xs font-medium text-gray-600 dark:text-gray-300 shadow-sm mb-4">
            <Sparkles className="w-3 h-3" />
            Selected mood:{' '}
            <span className="text-gray-900 dark:text-white font-semibold">
              {mood}
            </span>
          </div>

          <h1 className="text-2xl font-bold text-gray-900 dark:text-white sm:text-3xl mb-2">
            Tell me how you're feeling
          </h1>

          <p className="text-sm text-gray-500 dark:text-gray-400 max-w-md mx-auto">
            The more you share, the better I can match you with the perfect
            film.
          </p>
        </div>

        {/* Textarea */}
        <div className="space-y-2 mb-6">
          <label
            htmlFor="mood-description"
            className="block text-xs font-medium text-gray-500 dark:text-gray-400"
          >
            Your thoughts
          </label>
          <textarea
            id="mood-description"
            value={moodDescribe}
            onChange={(e) => setMoodDescribe(e.target.value)}
            placeholder="Write about what's making you feel this way... (e.g., 'I just finished a big project and feel relieved but also a bit empty')"
            rows={6}
            className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-gray-500 text-sm focus:outline-none focus:ring-2 focus:ring-gray-400 dark:focus:ring-gray-500 focus:border-transparent transition-shadow resize-none"
            disabled={isLoading}
          />
          <p className="text-right text-xs text-gray-400 dark:text-gray-500">
            {moodDescribe.length} characters
          </p>
        </div>

        {/* Submit Button */}
        <div className="text-center">
          <button
            onClick={handleSubmit}
            disabled={!moodDescribe.trim() || isLoading}
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-gray-900 dark:bg-white text-white dark:text-gray-900 text-sm font-medium rounded-lg hover:bg-gray-800 dark:hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 disabled:hover:bg-gray-900 dark:disabled:hover:bg-white shadow-sm hover:shadow min-w-[140px]"
          >
            {isLoading ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                Loading...
              </>
            ) : (
              <>
                Find my films
                <ArrowRight className="w-4 h-4" />
              </>
            )}
          </button>

          {!moodDescribe.trim() && !isLoading && (
            <p className="mt-3 text-xs text-gray-400 dark:text-gray-500">
              Share a few words to get started
            </p>
          )}
        </div>

        {/* Example prompts */}
        {!moodDescribe && !isLoading && (
          <div className="mt-8 text-center">
            <p className="text-xs text-gray-400 dark:text-gray-500 mb-2">
              Try something like:
            </p>
            <div className="flex flex-wrap justify-center gap-2">
              {[
                'Need something uplifting',
                'Feeling nostalgic today',
                'Want to escape reality',
              ].map((prompt) => (
                <button
                  key={prompt}
                  onClick={() => setMoodDescribe(prompt)}
                  className="text-xs px-3 py-1.5 rounded-full border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:border-gray-300 dark:hover:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                >
                  {prompt}
                </button>
              ))}
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
