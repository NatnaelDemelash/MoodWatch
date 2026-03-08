'use client';

import { Button } from '@/components/ui/button';
import { ArrowLeft, Film, Star, Clock, Sparkles } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

import profile from '../../public/profilev1.png';

export default function Result() {
  const router = useRouter();
  const [recommendations, setRecommendations] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading for smoother transition
    setTimeout(() => {
      const data = JSON.parse(localStorage.getItem('recommendations') || '[]');
      setRecommendations(data);
      setIsLoading(false);
    }, 500);
  }, []);

  // Loading skeleton
  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="h-10 w-64 bg-gray-200 dark:bg-gray-700 rounded-lg animate-pulse mx-auto mb-4"></div>
            <div className="h-6 w-96 bg-gray-200 dark:bg-gray-700 rounded-lg animate-pulse mx-auto"></div>
          </div>
          <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {[...Array(4)].map((_, i) => (
              <div
                key={i}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden"
              >
                <div className="aspect-[2/3] bg-gray-200 dark:bg-gray-700 animate-pulse"></div>
                <div className="p-4 space-y-2">
                  <div className="h-5 bg-gray-200 dark:bg-gray-700 rounded animate-pulse w-3/4"></div>
                  <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded animate-pulse"></div>
                  <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded animate-pulse w-5/6"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header with updated icon */}
        <div className="text-center mb-12 relative">
          <div className="absolute inset-0 flex items-center justify-center -z-10 opacity-5">
            <Sparkles className="w-64 h-64 text-gray-900 dark:text-white" />
          </div>

          {/* Mood pill */}
          <div className="inline-flex items-center gap-2 rounded-full border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 px-3 py-1 text-xs font-medium text-gray-600 dark:text-gray-300 shadow-sm mb-4">
            <Sparkles className="w-3 h-3" />
            Your personalized recommendations
          </div>

          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-3">
            Movies picked just for you
          </h1>
          <p className="text-sm text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Based on your mood and description, here are some films that might
            resonate with how you're feeling right now.
          </p>
        </div>

        {/* Back Button */}
        {recommendations.length > 0 && (
          <div className="flex justify-end mb-8">
            <button
              onClick={() => router.push('/')}
              className="group inline-flex items-center gap-1.5 text-sm text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 transition-colors"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" />
              Select Another Mood
            </button>
          </div>
        )}

        {/* Empty State */}
        {recommendations.length === 0 && (
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-xl p-10 text-center max-w-md mx-auto">
            <div className="w-20 h-20 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center mx-auto mb-5">
              <Film className="w-10 h-10 text-gray-500 dark:text-gray-400" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
              No Recommendations Yet
            </h3>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
              Start by selecting your mood and preferences to get personalized
              movie suggestions.
            </p>
            <Button
              onClick={() => router.push('/')}
              className="px-6 py-2 bg-gray-800 hover:bg-gray-900 dark:bg-gray-700 dark:hover:bg-gray-600 text-white rounded-lg transition-all duration-300 text-sm"
            >
              Get Started
            </Button>
          </div>
        )}

        {/* Movie Grid */}
        {recommendations.length > 0 && (
          <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mb-16">
            {recommendations.map((rec, index) => (
              <div
                key={index}
                className="group bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden hover:-translate-y-1"
              >
                {/* Poster with proper aspect ratio */}
                <div className="relative overflow-hidden aspect-[2/3]">
                  <img
                    src={
                      rec.poster ||
                      'https://via.placeholder.com/300x450?text=No+Poster'
                    }
                    alt={rec.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src =
                        'https://via.placeholder.com/300x450?text=No+Poster';
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                  {/* Year badge */}
                  <div className="absolute top-2 right-2 bg-black/70 backdrop-blur-sm text-white px-2 py-1 rounded-md text-xs font-medium">
                    {rec.year || 'N/A'}
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-3">
                  <h3 className="font-semibold text-sm text-gray-800 dark:text-white mb-1 line-clamp-1">
                    {rec.title}
                  </h3>

                  {/* Rating if available */}
                  {rec.rating && (
                    <div className="flex items-center gap-1 mb-1.5">
                      <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                      <span className="text-xs font-medium text-gray-600 dark:text-gray-300">
                        {rec.rating}/10
                      </span>
                    </div>
                  )}

                  {/* Reason/Description */}
                  <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed line-clamp-2 mb-1.5">
                    {rec.reason || 'No description available.'}
                  </p>

                  {/* Additional metadata if available */}
                  {rec.duration && (
                    <div className="flex items-center gap-1 text-gray-400 dark:text-gray-500">
                      <Clock className="w-3 h-3" />
                      <span className="text-xs">{rec.duration}</span>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Footer - Matching the one from home page */}
        <footer className="mt-16 flex flex-col items-center justify-center gap-3 border-t border-gray-200 dark:border-gray-700 pt-8">
          {/* Avatar */}
          <div className="relative group">
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-gray-400 to-gray-600 blur-xl opacity-40 group-hover:opacity-60 transition-opacity duration-300"></div>
            <img
              src={profile.src}
              alt="Natnael"
              className="relative w-16 h-16 rounded-full border-2 border-white dark:border-gray-700 shadow-lg group-hover:shadow-xl group-hover:scale-105 transition-all duration-300 object-cover"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src = `https://ui-avatars.com/api/?name=Natnael&background=4B5563&color=fff&size=64`;
              }}
            />
          </div>
          {/* Text content */}
          <div className="text-center">
            <p className="text-xs text-gray-500 dark:text-gray-400">
              Developed by{' '}
              <span className="font-medium text-gray-700 dark:text-gray-300">
                Natnael
              </span>{' '}
              with Next.js, Groq, and The Movie Database API
            </p>
          </div>

          {/* Social links */}
          <div className="flex items-center gap-2 mt-1">
            <a
              href="https://github.com/NatnaelDemelash"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-gray-600 dark:text-gray-500 dark:hover:text-gray-300 transition-colors"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path
                  fillRule="evenodd"
                  d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                  clipRule="evenodd"
                />
              </svg>
            </a>

            <a
              href="https://www.linkedin.com/in/natnaeldemelash/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-gray-600 dark:text-gray-500 dark:hover:text-gray-300 transition-colors"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
          </div>
        </footer>
      </div>
    </div>
  );
}
