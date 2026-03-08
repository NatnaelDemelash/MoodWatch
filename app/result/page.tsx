'use client';

import { Button } from '@/components/ui/button';
import { ArrowLeft, Route } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function Result() {
  const route = useRouter();
  const recommendations = JSON.parse(
    localStorage.getItem('recommendations') || '[]',
  );

  return (
    <section className="min-h-screen bg-gray-100 flex items-center justify-center py-12">
      <div className="max-w-2xl w-full px-6">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-semibold text-gray-800">
            Your Movie Recommendations
          </h2>
          <p className="text-gray-500 mt-2">
            Based on your mood and description, here are some movies you might
            enjoy.
          </p>
        </div>

        {recommendations.length !== 0 && (
          <div className="flex justify-end">
            <Button
              onClick={() => route.push('/')}
              className="mb-6 text-xs px-4 py-2 cursor-pointer"
              size="xs"
            >
              <ArrowLeft /> Select Another Mood
            </Button>
          </div>
        )}
        <div className="space-y-4">
          {recommendations.length === 0 && (
            <div className="bg-white p-6 rounded-xl shadow-sm text-center text-gray-500">
              No recommendations yet.
            </div>
          )}

          {recommendations.map((rec: any, index: number) => (
            <div
              key={index}
              className="bg-white p-5 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200"
            >
              <h3 className="text-lg font-semibold text-gray-800">
                {rec.title} <span className="text-gray-400">({rec.year})</span>
              </h3>

              <p className="text-gray-500 text-xs mt-2 leading-relaxed">
                {rec.reason}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
