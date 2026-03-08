'use client';

export default function Result() {
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

              <p className="text-gray-600 text-sm mt-2 leading-relaxed">
                {rec.reason}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
