import Anthropic from '@anthropic-ai/sdk';
import Groq from 'groq-sdk';

export async function POST(request: Request) {
  const { mood, description } = await request.json();

  // const client = new Anthropic();
  const client = new Groq({
    apiKey: process.env.GROQ_API_KEY || '',
  });

  // const message = await client.messages.create({
  //   model: 'claude-sonnet-4-20250514',
  //   max_tokens: 1024,
  //   system:
  //     "You are a movie recommendation assistant. You will recommend movies based on the user's mood and description.",
  //   messages: [
  //     {
  //       role: 'user',
  //       content: `The user's mood is ${mood}. The user describes their feelings as: ${description}. Please recommend 5 movies that fit the user's mood and description. Provide the movie title and a brief description for each recommendation.`,
  //     },
  //   ],
  // });

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

  const parsed = JSON.parse(completion.choices[0].message.content ?? '[]');
  console.log('Parsed Recommendations:', parsed);

  return Response.json({
    recommendations: parsed,
  });
}
