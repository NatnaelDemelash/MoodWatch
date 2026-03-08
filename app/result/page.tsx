'use client';

import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function Result() {
  const route = useRouter();
  const [recommendations, setRecommendations] = useState([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('recommendations') || '[]');
    setRecommendations(data);
  }, []);

  return (
    <section className="min-h-screen bg-gray-100 flex items-center justify-center py-12">
      <div className="max-w-3xl w-full px-6">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-semibold text-gray-800">
            🎬 Your Movie Recommendations
          </h2>
          <p className="text-gray-500 mt-2">
            Based on your mood and description, here are some movies you might
            enjoy.
          </p>
        </div>

        {recommendations.length !== 0 && (
          <div className="flex justify-end mb-6">
            <Button
              onClick={() => route.push('/')}
              className="text-xs px-4 py-2 cursor-pointer flex items-center gap-2"
            >
              <ArrowLeft size={16} />
              Select Another Mood
            </Button>
          </div>
        )}

        <div className="space-y-5">
          {recommendations.length === 0 && (
            <div className="bg-white p-6 rounded-xl shadow-sm text-center text-gray-500">
              No recommendations yet.
            </div>
          )}

          {recommendations.map((rec: any, index: number) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200 flex gap-5 p-4"
            >
              {/* Poster */}
              <img
                src={rec.poster}
                alt={rec.title}
                className="w-24 h-36 object-cover rounded-md flex-shrink-0"
              />

              {/* Content */}
              <div className="flex flex-col justify-center">
                <h3 className="text-lg font-semibold text-gray-800">
                  {rec.title}{' '}
                  <span className="text-gray-400 font-normal">
                    ({rec.year})
                  </span>
                </h3>

                <p className="text-gray-600 text-sm mt-2 leading-relaxed">
                  {rec.reason}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
