import Groq from 'groq-sdk';

export async function POST(request: Request) {
  const { mood, description } = await request.json();

  const client = new Groq({
    apiKey: process.env.GROQ_API_KEY || '',
  });

  const completion = await client.chat.completions.create({
    model: 'llama-3.3-70b-versatile',
    messages: [
      {
        role: 'system',
        content: `You are a movie recommendation assistant.You will recommend movies based on the user's mood and description. 
        Always respond with a JSON array of exactly 5 movies in this format:
        [
          { "title": "Movie Title", "year": "1994", "reason": "Why this fits the mood" },
          ...
        ]
        Return only the JSON array, nothing else.`,
      },
      {
        role: 'user',
        content: `The user's mood is ${mood}. The user describes their feelings as: ${description}. Please recommend 5 movies that fit the user's mood and description. Provide the movie title and a brief description for each recommendation.`,
      },
    ],
  });

  const content = completion.choices[0].message.content ?? '[]';
  const jsonMatch = content.match(/\[[\s\S]*\]/);
  const parsed = JSON.parse(jsonMatch ? jsonMatch[0] : '[]');

  const getMoviePoster = async (title: string) => {
    const searchRes = await fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${process.env.TMDB_API_KEY}&query=${encodeURIComponent(title)}`,
    );
    const searchData = await searchRes.json();
    const movie = searchData.results[0];
    return movie ? `https://image.tmdb.org/t/p/w500${movie.poster_path}` : null;
  };

  for (const rec of parsed) {
    rec.poster = await getMoviePoster(rec.title);
  }

  console.log('Final recommendations:', parsed);

  return Response.json({
    recommendations: parsed,
  });
}
